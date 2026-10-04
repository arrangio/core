package rules

import (
	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
	"math"
)

// Alignment rule helps to arrange objects in rows, ranks, etc...

type AlignmentRule struct {
	Target Selector
	Axis   uint8
	Radius int64 // define search radius for this rule
}

func (r *AlignmentRule) MaxInfluenceRadius() int64 {
	return r.Radius
}

func (r *AlignmentRule) Evaluate(subject *entity.Entity, ctx *RuleContext) float64 {
	if !r.Target.Matches(subject) {
		return 1.0
	}

	anchor := subject.State.Anchor

	searchMin := geometry.Point64{
		X: anchor.X - r.Radius,
		Y: anchor.Y - r.Radius,
		Z: anchor.Z - r.Radius,
	}

	searchMax := geometry.Point64{
		X: anchor.X + r.Radius,
		Y: anchor.Y + r.Radius,
		Z: anchor.Z + r.Radius,
	}

	ctx.EntityBuffer = ctx.EntityGrid.QueryBuf(searchMin, searchMax, ctx.EntityBuffer)

	var minDiff int64 = math.MaxInt64
	var found bool

	var sVal int64
	switch r.Axis {
	case AxisX:
		sVal = anchor.X
	case AxisY:
		sVal = anchor.Y
	case AxisZ:
		sVal = anchor.Z
	default:
		return 0.0
	}

	for _, neighbor := range ctx.EntityBuffer {
		// align only with objects within the `Radius` range and matching Selector
		if subject.Def.ID == neighbor.Def.ID || !r.Target.Matches(neighbor) {
			continue
		}

		var nVal int64
		switch r.Axis {
		case AxisX:
			nVal = neighbor.State.Anchor.X
		case AxisY:
			nVal = neighbor.State.Anchor.Y
		case AxisZ:
			nVal = neighbor.State.Anchor.Z
		}

		diff := sVal - nVal
		if diff < 0 {
			diff = -diff
		}

		if diff < minDiff {
			minDiff = diff
			found = true
		}
	}

	if !found {
		return 1.0
	}

	if minDiff == 0 {
		return 1.0
	}

	return 1.0 / float64(minDiff+1)
}

func (r *AlignmentRule) ComputeForce(subject *entity.Entity, forceCtx *ForceContext) ForceAccum {
	var accum ForceAccum
	if !r.Target.Matches(subject) {
		return accum
	}
	anchor := subject.State.Anchor
	var sVal int64
	switch r.Axis {
	case AxisX:
		sVal = anchor.X
	case AxisY:
		sVal = anchor.Y
	case AxisZ:
		sVal = anchor.Z
	default:
		return accum
	}

	var minDiff int64 = math.MaxInt64
	var bestDiff int64

	for _, neighbor := range forceCtx.Neighbors {
		if subject.Def.ID == neighbor.Def.ID || !r.Target.Matches(neighbor) {
			continue
		}

		nAnchor := neighbor.State.Anchor
		dx := anchor.X - nAnchor.X
		dy := anchor.Y - nAnchor.Y
		dz := anchor.Z - nAnchor.Z
		if dx < -r.Radius || dx > r.Radius || dy < -r.Radius || dy > r.Radius || dz < -r.Radius || dz > r.Radius {
			continue
		}

		var nVal int64
		switch r.Axis {
		case AxisX:
			nVal = neighbor.State.Anchor.X
		case AxisY:
			nVal = neighbor.State.Anchor.Y
		case AxisZ:
			nVal = neighbor.State.Anchor.Z
		}

		diff := nVal - sVal
		absDiff := diff
		if absDiff < 0 {
			absDiff = -absDiff
		}

		if absDiff < minDiff {
			minDiff = absDiff
			bestDiff = diff
		}
	}

	if minDiff != math.MaxInt64 && minDiff != 0 {
		switch r.Axis {
		case AxisX:
			accum.DX = bestDiff
		case AxisY:
			accum.DY = bestDiff
		case AxisZ:
			accum.DZ = bestDiff
		}
	}
	return accum
}
