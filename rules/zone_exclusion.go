package rules

import (
	"arrangio-core/collision"
	"arrangio-core/entity"
)

// ZoneExclusionRule prevents objects matching `Target` from entering zones matching `Zone`.
// Returns 0.0 if subject collides with a matching zone, 1.0 otherwise.
type ZoneExclusionRule struct {
	Target Selector
	Zone   Selector
}

func (r *ZoneExclusionRule) Evaluate(subject *entity.Entity, ctx *RuleContext) float64 {
	if !r.Target.Matches(subject) {
		return 1.0
	}
	// foolproof -- if no zone grid defined, return 1.0 instead of panicking
	if ctx.ZoneGrid == nil {
		return 1.0
	}

	sMin, sMax := subject.WorldBounds()

	ctx.ZoneBuffer = ctx.ZoneGrid.QueryBuf(sMin, sMax, ctx.ZoneBuffer)

	for _, z := range ctx.ZoneBuffer {
		if !r.Zone.MatchesZone(z) {
			continue
		}
		subFp := subject.AsFootprint()
		if collision.CheckCollision(&subFp, &z.Footprint) {
			return 0.0
		}
	}
	return 1.0
}
