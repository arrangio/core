package rules

import (
	"arrangio-core/collision"
	"arrangio-core/entity"
)

type NoCollisionRule struct {
	Target Selector
}

// check if object overlaps with any other object nearby or restricted zones
func (r *NoCollisionRule) Evaluate(subject *entity.Entity, ctx *RuleContext) float64 {
	// static objects shouldn't be penalized since they do not move
	if subject.IsStatic {
		return 1.0
	}

	minBounds, maxBounds := subject.Footprint.WorldBounds()

	// check entity collisions
	neighbors := ctx.Env.Entities.QueryBuf(minBounds, maxBounds, ctx.Buffer)

	for _, neighbor := range neighbors {
		if subject.ID == neighbor.ID {
			continue
		}

		if !r.Target.Matches(neighbor) {
			continue
		}

		if collision.CheckCollision(&subject.Footprint, &neighbor.Footprint) {
			return 0.0
		}
	}

	// check zone collisions (restricted zones)
	zones := ctx.Env.Zones.QueryBuf(minBounds, maxBounds, ctx.ZoneBuffer)

	for _, zone := range zones {
		if collision.CheckCollision(&subject.Footprint, &zone.Footprint) {
			return 0.0 // penalized for entering a restricted zone
		}
	}

	return 1.0
}
