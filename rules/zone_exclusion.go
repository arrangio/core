package rules

import (
	"github.com/arrangio/core/collision"
	"github.com/arrangio/core/entity"
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

func (r *ZoneExclusionRule) ComputeForce(subject *entity.Entity, forceCtx *ForceContext) ForceAccum {
	var accum ForceAccum
	if !r.Target.Matches(subject) {
		return accum
	}

	subMin, subMax := subject.WorldBounds()

	for _, z := range forceCtx.Zones {
		if !r.Zone.MatchesZone(z) {
			continue
		}

		zMin, zMax := z.WorldBounds()
		dx, dy, dz := calculateRepulsion(subMin, subMax, zMin, zMax, subject.GetID(), z.GetID())
		accum.DX += dx
		accum.DY += dy
		accum.DZ += dz
		accum.Penalty += AbsI64(dx) + AbsI64(dy) + AbsI64(dz)
	}
	return accum
}
