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
	qctx    *grid.QueryContext[*entity.Entity]
	zoneBuf []*zones.Zone
	fctx    rules.ForceContext
}

type ForceSolver struct {
	State      *State
	Config     ForceSolverConfig
	forces     []rules.ForceAccum
	penalties  []int64
	workers    []*solverWorker
	numWorkers int
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
			qctx:    grid.NewQueryContext[*entity.Entity](128),
			zoneBuf: make([]*zones.Zone, 0, 16),
		}
	}

	forces := make([]rules.ForceAccum, n)
	penalties := make([]int64, n)

	rng := rand.New(rand.NewSource(time.Now().UnixNano())) // #nosec G404

	return &ForceSolver{
		State:      state,
		Config:     cfg,
		forces:     forces,
		penalties:  penalties,
		workers:    workers,
		numWorkers: workersCount,
		rng:        rng,
	}
}

func (s *ForceSolver) calculateForces() {
	entities := s.State.Entities
	n := int64(len(entities))
	if n == 0 {
		return
	}

	// dynamic chunk size bounded between 64 and 2048 items per task
	chunkSize := n / int64(s.numWorkers*8)
	if chunkSize < 64 {
		chunkSize = 64
	}
	if chunkSize > 2048 {
		chunkSize = 2048
	}

	var taskIndex atomic.Int64
	var wg sync.WaitGroup

	rad := s.State.MaxRadius
	hasZones := s.State.ZoneGrid != nil
	rulesList := s.State.Rules

	for w := 0; w < s.numWorkers; w++ {
		wg.Add(1)
		go func(workerID int) {
			defer wg.Done()
			wCtx := s.workers[workerID]

			for {
				start := taskIndex.Add(chunkSize) - chunkSize
				if start >= n {
					break
				}
				end := min(start+chunkSize, n)

				for j := start; j < end; j++ {
					e := entities[j]
					subMin, subMax := e.WorldBounds()
					searchMin := geometry.Point64{X: subMin.X - rad, Y: subMin.Y - rad, Z: subMin.Z - rad}
					searchMax := geometry.Point64{X: subMax.X + rad, Y: subMax.Y + rad, Z: subMax.Z + rad}

					neighbors := s.State.EntityGrid.QueryBufWithContext(searchMin, searchMax, wCtx.qctx)

					wCtx.fctx.Neighbors = neighbors
					if hasZones {
						wCtx.zoneBuf = s.State.ZoneGrid.QueryBuf(subMin, subMax, wCtx.zoneBuf[:0])
						wCtx.fctx.Zones = wCtx.zoneBuf
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
		}(w)
	}
	wg.Wait()
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
		newMin, newMax := e.WorldBounds()

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
