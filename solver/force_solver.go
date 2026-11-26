package solver

import (
	"cmp"
	"math"
	"math/rand"
	"runtime"
	"slices"
	"sync"
	"sync/atomic"
	"time"

	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
	"github.com/arrangio/core/grid"
	"github.com/arrangio/core/rules"
	"github.com/arrangio/core/zones"
)

const (
	phaseCalcForces    = 0
	phaseWakeNeighbors = 1
	phi64              = 0x9e3779b97f4a7c15
	// objects are unevenly distributed across the grid
	// when one worker finishes earlier, than others, it has to wait for the rest of the workers
	// to take the next chunks
	// if there are less than 4 chunks, some workers will have to wait
	// if there are more than 4 chunks per worker, it will increase the load on the taskIndex atomic counter
	chunksPerWorker = 4
	// guarantees that chunk won't get out of L1 cache
	maxChunkSize = 256
)

type movedRecord struct {
	id      uint64
	wakeMin geometry.Point64
	wakeMax geometry.Point64
}

type idIdxSlot struct {
	id       uint64
	idxPlus1 uint32
}

type ForceSolverConfig struct {
	MaxIterations int
	InitialAlpha  float64
	CoolingRate   float64
	MinAlpha      float64
	MaxStep       int64
	MaxReheats    int
	JitterAmount  float64
	NumWorkers    int
	OnStep        func(StepInfo)
}

func DefaultForceSolverConfig() ForceSolverConfig {
	return ForceSolverConfig{
		MaxIterations: 100,
		InitialAlpha:  1.0,
		CoolingRate:   0.85,
		MinAlpha:      0.01,
		MaxStep:       30,
		MaxReheats:    2,
		JitterAmount:  15.0,
		NumWorkers:    0,
	}
}

type solverWorker struct {
	qctx     *grid.QueryContext[*entity.Entity]
	zoneQctx *grid.QueryContext[*zones.Zone]
	fctx     rules.ForceContext
	workCh   chan struct{}
}

type ForceSolver struct {
	State        *State
	Config       ForceSolverConfig
	entities     []*entity.Entity
	canRotate    []bool
	anchorX      []int64
	anchorY      []int64
	anchorZ      []int64
	forces       []rules.ForceAccum
	penalties    []int64
	boundsMin    []geometry.Point64
	boundsMax    []geometry.Point64
	asleep       []atomic.Bool
	idTable      []idIdxSlot
	idMask       uint64
	movedRecords []movedRecord
	hasSleeping  bool
	workerPhase  int
	workers      []*solverWorker
	numWorkers   int
	chunkSize    int64
	taskIndex    atomic.Int64
	doneWg       sync.WaitGroup
	rng          *rand.Rand
	stopCh       chan struct{}
	workerWg     sync.WaitGroup
	closed       atomic.Bool
}

var _ Solver = (*ForceSolver)(nil)

func NewForceSolver(state *State, cfg ForceSolverConfig) *ForceSolver {
	workersCount := cfg.NumWorkers
	if workersCount <= 0 {
		workersCount = runtime.NumCPU()
	}
	n := len(state.Entities)
	if workersCount > n && n > 0 {
		workersCount = n
	}
	if workersCount < 1 {
		workersCount = 1
	}

	workers := make([]*solverWorker, workersCount)
	for i := range workers {
		workers[i] = &solverWorker{
			qctx:     grid.NewQueryContext[*entity.Entity](512),
			zoneQctx: grid.NewQueryContext[*zones.Zone](128),
			workCh:   make(chan struct{}, 1),
		}
	}

	entities := make([]*entity.Entity, n)
	canRotate := make([]bool, n)
	if state.EntityGrid != nil && n > 0 {
		type sortItem struct {
			key uint64
			idx int32
		}
		items := make([]sortItem, n)
		for i, e := range state.Entities {
			minB, _ := e.WorldBounds()
			items[i] = sortItem{
				key: state.EntityGrid.MortonKey(minB.X, minB.Y),
				idx: int32(i),
			}
		}
		slices.SortFunc(items, func(a, b sortItem) int {
			return cmp.Compare(a.key, b.key)
		})
		for i, it := range items {
			entities[i] = state.Entities[it.idx]
			if len(state.canRotate) > int(it.idx) {
				canRotate[i] = state.canRotate[it.idx]
			}
		}
	} else {
		copy(entities, state.Entities)
		copy(canRotate, state.canRotate)
	}

	forces := make([]rules.ForceAccum, n)
	penalties := make([]int64, n)
	boundsMin := make([]geometry.Point64, n)
	boundsMax := make([]geometry.Point64, n)
	asleep := make([]atomic.Bool, n)
	anchorX := make([]int64, n)
	anchorY := make([]int64, n)
	anchorZ := make([]int64, n)
	for i, e := range entities {
		boundsMin[i], boundsMax[i] = e.WorldBounds()
		if e != nil && e.State != nil {
			anchorX[i] = e.State.Anchor.X
			anchorY[i] = e.State.Anchor.Y
			anchorZ[i] = e.State.Anchor.Z
		}
	}

	var idTable []idIdxSlot
	var idMask uint64
	if n > 0 {
		tableCap := 2
		for tableCap < n*2 {
			tableCap <<= 1
		}
		idTable = make([]idIdxSlot, tableCap)
		idMask = uint64(tableCap - 1)
		for i, e := range entities {
			if e == nil {
				continue
			}
			// upper bits of Fibonacci product mix carries better; & idMask wraps into [0, tableCap-1]
			pos := ((e.ID * phi64) >> 32) & idMask
			for idTable[pos].idxPlus1 != 0 {
				pos = (pos + 1) & idMask
			}
			idTable[pos] = idIdxSlot{id: e.ID, idxPlus1: uint32(i + 1)} // #nosec G115 - n fits in uint32
		}
	}

	chunkSize := int64(n) / int64(workersCount*chunksPerWorker)
	if chunkSize < 1 {
		chunkSize = 1
	}
	if chunkSize > maxChunkSize {
		chunkSize = maxChunkSize
	}

	rng := rand.New(rand.NewSource(time.Now().UnixNano())) // #nosec G404

	s := &ForceSolver{
		State:      state,
		Config:     cfg,
		entities:   entities,
		canRotate:  canRotate,
		anchorX:    anchorX,
		anchorY:    anchorY,
		anchorZ:    anchorZ,
		forces:     forces,
		penalties:  penalties,
		boundsMin:  boundsMin,
		boundsMax:  boundsMax,
		asleep:     asleep,
		idTable:    idTable,
		idMask:     idMask,
		workers:    workers,
		numWorkers: workersCount,
		chunkSize:  chunkSize,
		rng:        rng,
		stopCh:     make(chan struct{}),
	}

	s.startWorkers()
	return s
}

func (s *ForceSolver) startWorkers() {
	s.workerWg.Add(s.numWorkers)
	for _, wCtx := range s.workers {
		go s.workerLoop(wCtx)
	}
}

func (s *ForceSolver) lookupEntityIdx(id uint64) (int, bool) {
	if len(s.idTable) == 0 {
		return 0, false
	}
	pos := ((id * phi64) >> 32) & s.idMask
	for {
		slot := s.idTable[pos]
		if slot.idxPlus1 == 0 {
			return 0, false
		}
		if slot.id == id {
			return int(slot.idxPlus1 - 1), true
		}
		pos = (pos + 1) & s.idMask
	}
}

func (s *ForceSolver) workerLoop(wCtx *solverWorker) {
	defer s.workerWg.Done()

	entities := s.entities
	n := int64(len(entities))
	rad := s.State.MaxRadius
	hasZones := s.State.ZoneGrid != nil
	rulesList := s.State.Rules
	chunkSize := s.chunkSize

	for {
		select {
		case <-s.stopCh:
			return
		case <-wCtx.workCh:
			if s.workerPhase == phaseWakeNeighbors {
				moved := s.movedRecords
				m := int64(len(moved))
				wakeChunk := max(int64(1), m/int64(s.numWorkers*chunksPerWorker))
				for {
					startIdx := s.taskIndex.Add(wakeChunk) - wakeChunk
					if startIdx >= m {
						break
					}
					endIdx := min(startIdx+wakeChunk, m)
					for k := startIdx; k < endIdx; k++ {
						rec := moved[k]
						wCtx.qctx.ExcludeID = rec.id
						neighbors := s.State.EntityGrid.QueryBuf(rec.wakeMin, rec.wakeMax, wCtx.qctx)
						for _, nb := range neighbors {
							if idx, ok := s.lookupEntityIdx(nb.GetID()); ok && s.asleep[idx].Load() {
								s.asleep[idx].Store(false)
							}
						}
					}
				}
				s.doneWg.Done()
				continue
			}

			for {
				startIdx := s.taskIndex.Add(chunkSize) - chunkSize
				if startIdx >= n {
					break
				}
				endIdx := min(startIdx+chunkSize, n)

				for j := startIdx; j < endIdx; j++ {
					if s.asleep[j].Load() {
						continue
					}

					e := entities[j]
					subMin := s.boundsMin[j]
					subMax := s.boundsMax[j]
					searchMin := geometry.Point64{X: subMin.X - rad, Y: subMin.Y - rad, Z: subMin.Z - rad}
					searchMax := geometry.Point64{X: subMax.X + rad, Y: subMax.Y + rad, Z: subMax.Z + rad}

					wCtx.qctx.ExcludeID = e.ID
					neighbors := s.State.EntityGrid.QueryBuf(searchMin, searchMax, wCtx.qctx)
					wCtx.fctx.Neighbors = neighbors
					wCtx.fctx.NeighborMin = wCtx.qctx.BufferMin
					wCtx.fctx.NeighborMax = wCtx.qctx.BufferMax
					wCtx.fctx.SubjectMin = subMin
					wCtx.fctx.SubjectMax = subMax
					wCtx.fctx.HasBounds = true
					if hasZones {
						wCtx.fctx.Zones = s.State.ZoneGrid.QueryBuf(searchMin, searchMax, wCtx.zoneQctx)
					} else {
						wCtx.fctx.Zones = nil
					}

					var total rules.ForceAccum
					var rawPenalty int64
					for _, r := range rulesList {
						f := r.ComputeForce(e, &wCtx.fctx)
						rawPenalty += f.Penalty
						total.DX += f.DX
						total.DY += f.DY
						total.DZ += f.DZ
						if s.canRotate[j] && f.RotScore > total.RotScore {
							total.RotScore = f.RotScore
							total.BestRot = f.BestRot
						}
					}

					s.forces[j] = total
					s.penalties[j] = rawPenalty
				}
			}
			s.doneWg.Done()
		}
	}
}

func (s *ForceSolver) calculateForces() {
	s.workerPhase = phaseCalcForces
	s.taskIndex.Store(0)
	s.doneWg.Add(s.numWorkers)
	for _, w := range s.workers {
		w.workCh <- struct{}{}
	}
	s.doneWg.Wait()
}

func (s *ForceSolver) wakeNeighbors() {
	if len(s.movedRecords) == 0 || s.State.EntityGrid == nil {
		return
	}
	s.workerPhase = phaseWakeNeighbors
	s.taskIndex.Store(0)
	s.doneWg.Add(s.numWorkers)
	for _, w := range s.workers {
		w.workCh <- struct{}{}
	}
	s.doneWg.Wait()
}

func clampI64(v, lo, hi int64) int64 {
	return min(max(v, lo), hi)
}

func (s *ForceSolver) applyForces(alpha float64) (maxDisp int64, totalDisp int64, sysStress int64, violators int) {
	entities := s.entities
	jitterMag := s.Config.JitterAmount * alpha
	rad := s.State.MaxRadius
	s.movedRecords = s.movedRecords[:0]
	anyAsleep := false

	for i, e := range entities {
		penalty := s.penalties[i]
		sysStress += penalty
		if penalty > 0 {
			violators++
		}

		f := s.forces[i]
		origMin, origMax := s.boundsMin[i], s.boundsMax[i]
		curMin, curMax := origMin, origMax
		moved := false

		if f.RotScore > 0 && s.canRotate[i] && f.BestRot != e.GetRotation() {
			e.SetRotation(f.BestRot)
			newMin, newMax := e.WorldBounds()
			s.State.EntityGrid.Move(e, curMin, curMax, newMin, newMax)
			s.boundsMin[i] = newMin
			s.boundsMax[i] = newMax
			curMin, curMax = newMin, newMax
			moved = true
			totalDisp++
			if maxDisp < 1 {
				maxDisp = 1
			}
		}

		// apply stochastic jitter to stressed objects
		if penalty > 0 && jitterMag > 0.5 {
			f.DX += int64((s.rng.Float64() - 0.5) * 2 * jitterMag)
			f.DY += int64((s.rng.Float64() - 0.5) * 2 * jitterMag)
			f.DZ += int64((s.rng.Float64() - 0.5) * 2 * jitterMag)
		}

		if f.DX != 0 || f.DY != 0 || f.DZ != 0 {
			dx := clampI64(int64(math.Round(float64(f.DX)*alpha)), -s.Config.MaxStep, s.Config.MaxStep)
			dy := clampI64(int64(math.Round(float64(f.DY)*alpha)), -s.Config.MaxStep, s.Config.MaxStep)
			dz := clampI64(int64(math.Round(float64(f.DZ)*alpha)), -s.Config.MaxStep, s.Config.MaxStep)

			if dx != 0 || dy != 0 || dz != 0 {
				disp := rules.AbsI64(dx) + rules.AbsI64(dy) + rules.AbsI64(dz)
				totalDisp += disp
				if disp > maxDisp {
					maxDisp = disp
				}

				s.anchorX[i] += dx
				s.anchorY[i] += dy
				s.anchorZ[i] += dz
				e.State.Anchor.X = s.anchorX[i]
				e.State.Anchor.Y = s.anchorY[i]
				e.State.Anchor.Z = s.anchorZ[i]
				newMin := geometry.Point64{X: curMin.X + dx, Y: curMin.Y + dy, Z: curMin.Z + dz}
				newMax := geometry.Point64{X: curMax.X + dx, Y: curMax.Y + dy, Z: curMax.Z + dz}
				s.boundsMin[i] = newMin
				s.boundsMax[i] = newMax
				s.State.EntityGrid.Move(e, curMin, curMax, newMin, newMax)
				curMin, curMax = newMin, newMax
				moved = true
			}
		}

		if penalty == 0 && !moved {
			// fixed point: zero penalty (no jitter) and no movement, so forces stay zero until a neighbor moves
			s.asleep[i].Store(true)
			anyAsleep = true
		} else {
			s.asleep[i].Store(false)
			if moved {
				s.movedRecords = append(s.movedRecords, movedRecord{
					id: e.ID,
					wakeMin: geometry.Point64{
						X: min(origMin.X, curMin.X) - rad,
						Y: min(origMin.Y, curMin.Y) - rad,
						Z: min(origMin.Z, curMin.Z) - rad,
					},
					wakeMax: geometry.Point64{
						X: max(origMax.X, curMax.X) + rad,
						Y: max(origMax.Y, curMax.Y) + rad,
						Z: max(origMax.Z, curMax.Z) + rad,
					},
				})
			}
		}
	}
	s.hasSleeping = anyAsleep
	return maxDisp, totalDisp, sysStress, violators
}

// `writeBackAnchors` gives back object's anchor coordinates when exiting from `Solver()`
func (s *ForceSolver) writeBackAnchors() {
	for i, e := range s.entities {
		if e != nil && e.State != nil {
			e.State.Anchor.X = s.anchorX[i]
			e.State.Anchor.Y = s.anchorY[i]
			e.State.Anchor.Z = s.anchorZ[i]
		}
	}
}

func (s *ForceSolver) Solve() SolveResult {
	start := time.Now()
	if s.closed.Load() {
		return SolveResult{
			Duration: time.Since(start),
			Reason:   ReasonSolverIsClosed,
		}
	}
	alpha := s.Config.InitialAlpha
	stagnantStreak := 0
	reheats := 0
	var finalStress int64
	var finalViolators int

	if len(s.State.Entities) == 0 {
		return SolveResult{
			Iterations:     0,
			Converged:      true,
			FinalStress:    0,
			ViolatorsCount: 0,
			Duration:       time.Since(start),
			Reason:         ReasonConverged,
		}
	}

	for i, e := range s.entities {
		s.boundsMin[i], s.boundsMax[i] = e.WorldBounds()
		if e != nil && e.State != nil {
			s.anchorX[i] = e.State.Anchor.X
			s.anchorY[i] = e.State.Anchor.Y
			s.anchorZ[i] = e.State.Anchor.Z
		}
	}

	clear(s.forces)
	clear(s.penalties)
	for i := range s.asleep {
		s.asleep[i].Store(false)
	}
	s.hasSleeping = false
	s.movedRecords = s.movedRecords[:0]

	for iter := 0; iter < s.Config.MaxIterations; iter++ {
		iterStart := time.Now()

		s.calculateForces()
		maxDisp, totalDisp, sysStress, violators := s.applyForces(alpha)
		if s.hasSleeping && len(s.movedRecords) > 0 {
			s.wakeNeighbors()
		}

		finalStress = sysStress
		finalViolators = violators

		if s.Config.OnStep != nil {
			s.Config.OnStep(StepInfo{
				Iteration: iter,
				Alpha:     alpha,
				Violators: violators,
				SysStress: sysStress,
				TotalDisp: totalDisp,
				MaxDisp:   maxDisp,
				Duration:  time.Since(iterStart),
			})
		}

		if sysStress == 0 {
			s.writeBackAnchors()
			return SolveResult{
				Iterations:     iter + 1,
				Converged:      true,
				FinalStress:    0,
				ViolatorsCount: 0,
				Duration:       time.Since(start),
				Reason:         ReasonConverged,
			}
		}

		if maxDisp == 0 {
			stagnantStreak++
			stagnationLimit := 1
			if s.Config.JitterAmount*alpha > 0.5 && violators > 0 {
				stagnationLimit = 2
			}
			if stagnantStreak >= stagnationLimit {
				if reheats < s.Config.MaxReheats {
					alpha = s.Config.InitialAlpha * math.Pow(s.Config.CoolingRate, float64(reheats+1))
					stagnantStreak = 0
					reheats++
					for i := range s.asleep {
						s.asleep[i].Store(false)
					}
					s.hasSleeping = false
					continue
				}
				s.writeBackAnchors()
				return SolveResult{
					Iterations:     iter + 1,
					Converged:      false,
					FinalStress:    finalStress,
					ViolatorsCount: finalViolators,
					Duration:       time.Since(start),
					Reason:         ReasonStagnant,
				}
			}
		} else {
			stagnantStreak = 0
		}

		alpha *= s.Config.CoolingRate
		if alpha < s.Config.MinAlpha {
			alpha = s.Config.MinAlpha
		}
	}

	s.writeBackAnchors()
	return SolveResult{
		Iterations:     s.Config.MaxIterations,
		Converged:      false,
		FinalStress:    finalStress,
		ViolatorsCount: finalViolators,
		Duration:       time.Since(start),
		Reason:         ReasonMaxIterations,
	}
}

func (s *ForceSolver) Close() error {
	if !s.closed.CompareAndSwap(false, true) {
		return nil
	}
	close(s.stopCh)
	s.workerWg.Wait()
	return nil
}
