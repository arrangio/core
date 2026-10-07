package rules

import (
	"github.com/arrangio/core/collision"
	"github.com/arrangio/core/entity"
)

type NoCollisionRule struct {
	Target   Selector
	Obstacle Selector
}

// check if object overlaps with objects nearby having `Obstacle` Selector
func (r *NoCollisionRule) Evaluate(subject *entity.Entity, ctx *RuleContext) float64 {
	if !r.Target.Matches(subject) {
		return 1.0
	}

	minBounds, maxBounds := subject.WorldBounds()

	ctx.EntityBuffer = ctx.EntityGrid.QueryBuf(minBounds, maxBounds, ctx.EntityBuffer)

	subFp := subject.AsFootprint()

	for _, neighbor := range ctx.EntityBuffer {
		if subject.Def.ID == neighbor.Def.ID {
			continue
		}

		if !r.Obstacle.Matches(neighbor) {
			continue
		}

		nFp := neighbor.AsFootprint()
		if collision.CheckCollision(&subFp, &nFp) {
			return 0.0
		}
	}

	return 1.0
}

func (r *NoCollisionRule) ComputeForce(subject *entity.Entity, forceCtx *ForceContext) ForceAccum {
	var accum ForceAccum
	if !r.Target.Matches(subject) {
		return accum
	}
	subMin, subMax := subject.WorldBounds()
	for _, neighbor := range forceCtx.Neighbors {
		if subject.Def.ID == neighbor.Def.ID || !r.Obstacle.Matches(neighbor) {
			continue
		}
		nMin, nMax := neighbor.WorldBounds()
		dx, dy, dz := calculateRepulsion(subMin, subMax, nMin, nMax, subject.GetID(), neighbor.GetID())
		accum.DX += dx
		accum.DY += dy
		accum.DZ += dz
		accum.Penalty += AbsI64(dx) + AbsI64(dy) + AbsI64(dz)
	}
	return accum
}
