package rules

import (
	"arrangio-core/collision"
	"arrangio-core/entity"
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

	for _, neighbor := range ctx.EntityBuffer {
		if subject.Def.ID == neighbor.Def.ID {
			continue
		}

		if !r.Obstacle.Matches(neighbor) {
			continue
		}

		subFp := subject.AsFootprint()
		nFp := neighbor.AsFootprint()
		if collision.CheckCollision(&subFp, &nFp) {
			return 0.0
		}
	}

	return 1.0
}
