package solver

import (
	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
	"github.com/arrangio/core/grid"
)

type ScoreDirector struct {
	State          *State
	affectedBuffer []*entity.Entity
	qctx           *grid.QueryContext[*entity.Entity]
}

func NewScoreDirector(state *State) *ScoreDirector {
	return &ScoreDirector{
		State:          state,
		affectedBuffer: make([]*entity.Entity, 0, 32),
		qctx:           grid.NewQueryContext[*entity.Entity](64),
	}
}

func (sd *ScoreDirector) CalculateTotalScore() float64 {
	totalScore := 0.0

	for _, r := range sd.State.Rules {
		for _, e := range sd.State.Entities {
			totalScore += r.Evaluate(e, sd.State.RuleCtx)
		}
	}

	return totalScore
}

func (sd *ScoreDirector) CalculateDelta(
	target *entity.Entity,
	oldMin, oldMax, newMin, newMax geometry.Point64,
	applyMove func(),
) float64 {
	affected := sd.collectAffected(target, oldMin, oldMax, newMin, newMax)
	oldScore := sd.evaluateList(affected)
	applyMove()
	newScore := sd.evaluateList(affected)

	return newScore - oldScore
}

func (sd *ScoreDirector) evaluateList(entities []*entity.Entity) float64 {
	score := 0.0
	for _, e := range entities {
		for _, r := range sd.State.Rules {
			score += r.Evaluate(e, sd.State.RuleCtx)
		}
	}
	return score
}

func (sd *ScoreDirector) collectAffected(
	target *entity.Entity,
	oldMin, oldMax, newMin, newMax geometry.Point64,
) []*entity.Entity {
	sd.affectedBuffer = sd.affectedBuffer[:0]
	if target.Def != nil && !target.Def.IsStatic {
		sd.affectedBuffer = append(sd.affectedBuffer, target)
	}

	maxRad := sd.State.MaxRadius

	oldSearchMin := geometry.Point64{X: oldMin.X - maxRad, Y: oldMin.Y - maxRad, Z: oldMin.Z - maxRad}
	oldSearchMax := geometry.Point64{X: oldMax.X + maxRad, Y: oldMax.Y + maxRad, Z: oldMax.Z + maxRad}

	buf := sd.State.EntityGrid.QueryBuf(oldSearchMin, oldSearchMax, sd.qctx)

	for _, e := range buf {
		if e.Def != nil && e.Def.IsStatic {
			continue
		}
		if e != target {
			sd.affectedBuffer = append(sd.affectedBuffer, e)
		}
	}

	newSearchMin := geometry.Point64{X: newMin.X - maxRad, Y: newMin.Y - maxRad, Z: newMin.Z - maxRad}
	newSearchMax := geometry.Point64{X: newMax.X + maxRad, Y: newMax.Y + maxRad, Z: newMax.Z + maxRad}

	buf = sd.State.EntityGrid.QueryBuf(newSearchMin, newSearchMax, sd.qctx)

	for _, e := range buf {
		if e == target || (e.Def != nil && e.Def.IsStatic) {
			continue
		}

		duplicate := false
		for _, a := range sd.affectedBuffer {
			if a == e {
				duplicate = true
				break
			}
		}
		if !duplicate {
			sd.affectedBuffer = append(sd.affectedBuffer, e)
		}
	}

	return sd.affectedBuffer
}
