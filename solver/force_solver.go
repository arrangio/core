package solver

import (
	"math"
	"math/rand"
	"runtime"
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
	stagnationStreakThreshold = 2
	reheatAlphaFactor         = 0.8
	// objects are unevenly distributed accross the grid
	// when one worker finishes earlier, than others, it has to wait for the rest of the workers
	// to take the next chunks
	// if there are less than 4 chunks, some workers will have to wait
	// if there are more than 4 chunks per worker, it will increase the load on the taskIndex atomic counter
	chunksPerWorker = 4
	// guarantees that chunk won't get out of L1 cache
	maxChunkSize = 256
)

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
	State      *State
	Config     ForceSolverConfig
	forces     []rules.ForceAccum
	penalties  []int64
	workers    []*solverWorker
	numWorkers int
	chunkSize  int64
	taskIndex  atomic.Int64
	doneWg     sync.WaitGroup
	rng        *rand.Rand
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
			qctx:     grid.NewQueryContext[*entity.Entity](128),
			zoneQctx: grid.NewQueryContext[*zones.Zone](128),
			workCh:   make(chan struct{}, 1),
		}
	}

	forces := make([]rules.ForceAccum, n)
	penalties := make([]int64, n)

	chunkSize := int64(n) / int64(workersCount*chunksPerWorker)
	if chunkSize < 1 {
		chunkSize = 1
	}
	if chunkSize > maxChunkSize {
		chunkSize = maxChunkSize
	}

	rng := rand.New(rand.NewSource(time.Now().UnixNano())) // #nosec G404

	return &ForceSolver{
		State:      state,
		Config:     cfg,
		forces:     forces,
		penalties:  penalties,
		workers:    workers,
		numWorkers: workersCount,
		chunkSize:  chunkSize,
		rng:        rng,
	}
}

func (s *ForceSolver) startWorkers() func() {
	stopCh := make(chan struct{})
	for _, wCtx := range s.workers {
		go s.workerLoop(wCtx, stopCh)
	}
	return func() {
		close(stopCh)
	}
}

func (s *ForceSolver) workerLoop(wCtx *solverWorker, stopCh <-chan struct{}) {
	entities := s.State.Entities
	n := int64(len(entities))
	rad := s.State.MaxRadius
	hasZones := s.State.ZoneGrid != nil
	rulesList := s.State.Rules
	chunkSize := s.chunkSize

	for {
		select {
		case <-stopCh:
			return
		case <-wCtx.workCh:
			for {
				startIdx := s.taskIndex.Add(chunkSize) - chunkSize
				if startIdx >= n {
					break
				}
				endIdx := min(startIdx+chunkSize, n)

				for j := startIdx; j < endIdx; j++ {
					e := entities[j]
					subMin, subMax := e.WorldBounds()
					searchMin := geometry.Point64{X: subMin.X - rad, Y: subMin.Y - rad, Z: subMin.Z - rad}
					searchMax := geometry.Point64{X: subMax.X + rad, Y: subMax.Y + rad, Z: subMax.Z + rad}

					neighbors := s.State.EntityGrid.QueryBufWithContext(searchMin, searchMax, wCtx.qctx)

					wCtx.fctx.Neighbors = neighbors
					if hasZones {
						wCtx.fctx.Zones = s.State.ZoneGrid.QueryBufWithContext(searchMin, searchMax, wCtx.zoneQctx)
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
	entities := s.State.Entities
	jitterMag := s.Config.JitterAmount * alpha

	for i, e := range entities {
		penalty := s.penalties[i]
		sysStress += penalty
		if penalty > 0 {
			violators++
		}

		f := s.forces[i]

		// apply stochastic jitter to stressed objects
		if penalty > 0 && jitterMag > 0.5 {
			f.DX += int64((s.rng.Float64() - 0.5) * 2 * jitterMag)
			f.DY += int64((s.rng.Float64() - 0.5) * 2 * jitterMag)
			f.DZ += int64((s.rng.Float64() - 0.5) * 2 * jitterMag)
		}

		if f.DX == 0 && f.DY == 0 && f.DZ == 0 {
			continue
		}

		dx := clampI64(int64(math.Round(float64(f.DX)*alpha)), -s.Config.MaxStep, s.Config.MaxStep)
		dy := clampI64(int64(math.Round(float64(f.DY)*alpha)), -s.Config.MaxStep, s.Config.MaxStep)
		dz := clampI64(int64(math.Round(float64(f.DZ)*alpha)), -s.Config.MaxStep, s.Config.MaxStep)

		if dx == 0 && dy == 0 && dz == 0 {
			continue
		}

		disp := rules.AbsI64(dx) + rules.AbsI64(dy) + rules.AbsI64(dz)
		totalDisp += disp
		if disp > maxDisp {
			maxDisp = disp
		}

		oldMin, oldMax := e.WorldBounds()
		e.State.Anchor.X += dx
		e.State.Anchor.Y += dy
		e.State.Anchor.Z += dz
		newMin := geometry.Point64{X: oldMin.X + dx, Y: oldMin.Y + dy, Z: oldMin.Z + dz}
		newMax := geometry.Point64{X: oldMax.X + dx, Y: oldMax.Y + dy, Z: oldMax.Z + dz}

		s.State.EntityGrid.Move(e, oldMin, oldMax, newMin, newMax)
	}
	return maxDisp, totalDisp, sysStress, violators
}

func (s *ForceSolver) Solve() SolveResult {
	start := time.Now()
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

	stopWorkers := s.startWorkers()
	defer stopWorkers()

	for iter := 0; iter < s.Config.MaxIterations; iter++ {
		iterStart := time.Now()

		s.calculateForces()
		maxDisp, totalDisp, sysStress, violators := s.applyForces(alpha)

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
			if stagnantStreak >= stagnationStreakThreshold {
				if reheats < s.Config.MaxReheats {
					alpha = s.Config.InitialAlpha * reheatAlphaFactor
					stagnantStreak = 0
					reheats++
					continue
				}
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

	return SolveResult{
		Iterations:     s.Config.MaxIterations,
		Converged:      false,
		FinalStress:    finalStress,
		ViolatorsCount: finalViolators,
		Duration:       time.Since(start),
		Reason:         ReasonMaxIterations,
	}
}
