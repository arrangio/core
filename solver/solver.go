package solver

import (
	"time"
)

type TerminationReason int

const (
	ReasonConverged     TerminationReason = iota // solution is found
	ReasonMaxIterations                          // iteration limit exceeded
	ReasonStagnant                               // stagnated after several reheat cycles
)

type StepInfo struct {
	Iteration int
	Alpha     float64
	Violators int
	SysStress int64
	TotalDisp int64
	MaxDisp   int64
	Duration  time.Duration
}

type SolveResult struct {
	Iterations     int
	Converged      bool
	FinalStress    int64
	ViolatorsCount int
	Duration       time.Duration
	Reason         TerminationReason
}

type Solver interface {
	Solve() SolveResult
}
