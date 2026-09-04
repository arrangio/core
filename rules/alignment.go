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
