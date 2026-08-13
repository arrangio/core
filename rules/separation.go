package rules

import (
	"arrangio-core/entity"
	"arrangio-core/geometry"
)

// keep objects with `Target` Selector at least further
// than `MinDistance` from objects with `Obstacle` Selector
type SeparationRule struct {
	Target      Selector
	Obstacle    Selector
	MinDistance int64
}

func (r *SeparationRule) Evaluate(e *entity.Entity, ctx *RuleContext) float64 {
	if !r.Target.Matches(e) {
		return 1.0
	}

	minScore := 1.0

	sMin, sMax := e.Footprint.WorldBounds()

	searchMin := geometry.Point64{
		X: sMin.X - r.MinDistance,
		Y: sMin.Y - r.MinDistance,
		Z: sMin.Z - r.MinDistance,
	}
	searchMax := geometry.Point64{
		X: sMax.X + r.MinDistance,
		Y: sMax.Y + r.MinDistance,
		Z: sMax.Z + r.MinDistance,
	}

	ctx.Buffer = ctx.Buffer[:0]
	ctx.Buffer = ctx.Env.Entities.QueryBuf(searchMin, searchMax, ctx.Buffer)

	// iterate through all objects in `searchMin` to `searchMax` range
	for _, neighbor := range ctx.Buffer {
		if neighbor.ID == e.ID || !r.Obstacle.Matches(neighbor) {
			continue
		}

		nMin, nMax := neighbor.Footprint.WorldBounds()

		distX := dist(sMin.X, sMax.X, nMin.X, nMax.X)
		distY := dist(sMin.Y, sMax.Y, nMin.Y, nMax.Y)
		distZ := dist(sMin.Z, sMax.Z, nMin.Z, nMax.Z)

		// find the largest gap along all axes
		maxDist := max(distX, max(distY, distZ))

		if maxDist < r.MinDistance {
			var score float64
			if maxDist <= 0 {
				score = 0.0
			} else {
				score = float64(maxDist) / float64(r.MinDistance)
			}

			if score < minScore {
				minScore = score
			}
		}
	}
	return minScore
}

// calculate the length of a gap between two segments
func dist(minA, maxA, minB, maxB int64) int64 {
	if maxA <= minB {
		return minB - maxA
	}
	if maxB <= minA {
		return minA - maxB
	}

	// segments overlap
	return 0
}
