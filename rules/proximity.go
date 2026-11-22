package rules

import (
	"math"

	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
)

// calculate attraction/distance scores to the closest object matching `Selector`
// scaled from 0.0 to 1.0

type ProximityRule struct {
	Target         Selector
	To             Selector
	MaxDist        int64 // define rule's search scope and normalization factor
	RequireClosest bool
}

func (r *ProximityRule) MaxInfluenceRadius() int64 {
	return r.MaxDist
}

func (r *ProximityRule) Evaluate(subject *entity.Entity, ctx *RuleContext) float64 {
	if r.MaxDist <= 0 {
		return 0.0
	}
	if !r.Target.Matches(subject) {
		return 1.0
	}
	anchor := subject.State.Anchor

	searchMin := geometry.Point64{
		X: anchor.X - r.MaxDist,
		Y: anchor.Y - r.MaxDist,
		Z: anchor.Z - r.MaxDist,
	}
	searchMax := geometry.Point64{
		X: anchor.X + r.MaxDist,
		Y: anchor.Y + r.MaxDist,
		Z: anchor.Z + r.MaxDist,
	}

	// all entities from `searchMin` to `searchMax`
	neighbors := ctx.EntityGrid.QueryBuf(searchMin, searchMax, ctx.EntityQCtx)

	maxDistSq := r.MaxDist * r.MaxDist
	minDistSq := maxDistSq
	found := false

	for _, neighbor := range neighbors {
		if subject.Def.ID == neighbor.Def.ID || !r.To.Matches(neighbor) {
			continue
		}

		// calculate distance between `subject` and found object
		nAnchor := neighbor.State.Anchor
		dx := anchor.X - nAnchor.X
		dy := anchor.Y - nAnchor.Y
		dz := anchor.Z - nAnchor.Z

		distSq := (dx * dx) + (dy * dy) + (dz * dz)
		// calculate distance between `subject` and the closest object with matching `Selector`
		if distSq < minDistSq {
			minDistSq = distSq
			found = true
		}
	}

	if !found {
		return 0.0
	}

	// return normalized score -- greater means closer
	return 1.0 - (float64(minDistSq) / float64(maxDistSq))
}

func (r *ProximityRule) ComputeForce(subject *entity.Entity, forceCtx *ForceContext) ForceAccum {
	var accum ForceAccum
	if !r.Target.Matches(subject) || r.MaxDist <= 0 {
		return accum
	}
	anchor := subject.State.Anchor
	minDistSq := int64(math.MaxInt64)
	var bestNeighbor *entity.Entity

	for _, neighbor := range forceCtx.Neighbors {
		if subject.Def.ID == neighbor.Def.ID || !r.To.Matches(neighbor) {
			continue
		}
		nAnchor := neighbor.State.Anchor
		dx := anchor.X - nAnchor.X
		dy := anchor.Y - nAnchor.Y
		dz := anchor.Z - nAnchor.Z
		distSq := (dx * dx) + (dy * dy) + (dz * dz)
		if distSq < minDistSq {
			minDistSq = distSq
			bestNeighbor = neighbor
		}
	}

	if bestNeighbor != nil {
		nAnchor := bestNeighbor.State.Anchor
		accum.DX = nAnchor.X - anchor.X
		accum.DY = nAnchor.Y - anchor.Y
		accum.DZ = nAnchor.Z - anchor.Z
		dist := int64(math.Round(math.Sqrt(float64(minDistSq))))
		if dist > r.MaxDist {
			accum.Penalty = r.MaxDist
		} else {
			accum.Penalty = dist
		}
	}

	return accum
}
