package rules

import (
	"arrangio-core/entity"
	"arrangio-core/geometry"
)

// check for padding from objects with matching `Obstacle` Selector
type ClearanceRule struct {
	Target   Selector
	Obstacle Selector // distance from
	Padding  geometry.Point64
}

func (r *ClearanceRule) Evaluate(subject *entity.Entity, ctx *RuleContext) float64 {
	if !r.Target.Matches(subject) {
		return 1.0
	}

	subMin, subMax := subject.Footprint.WorldBounds()

	clearanceMin := geometry.Point64{
		X: subMin.X - r.Padding.X,
		Y: subMin.Y - r.Padding.Y,
		Z: subMin.Z - r.Padding.Z,
	}

	clearanceMax := geometry.Point64{
		X: subMax.X + r.Padding.X,
		Y: subMax.Y + r.Padding.Y,
		Z: subMax.Z + r.Padding.Z,
	}

	ctx.EntityBuffer = ctx.EntityGrid.QueryBuf(clearanceMin, clearanceMax, ctx.EntityBuffer)

	var maxPenetration int64

	for _, neighbor := range ctx.EntityBuffer {
		if neighbor.ID == subject.ID || !r.Obstacle.Matches(neighbor) {
			continue
		}

		nMin, nMax := neighbor.Footprint.WorldBounds()

		penX := calculateAxisOverlap(clearanceMin.X, clearanceMax.X, nMin.X, nMax.X)
		penY := calculateAxisOverlap(clearanceMin.Y, clearanceMax.Y, nMin.Y, nMax.Y)
		penZ := calculateAxisOverlap(clearanceMin.Z, clearanceMax.Z, nMin.Z, nMax.Z)

		// overlap in 3D occurs is if only all three axes overlap
		if penX > 0 && penY > 0 && penZ > 0 {
			minPen := min(penX, penY, penZ)
			maxPenetration = max(maxPenetration, minPen)
		}
	}

	if maxPenetration <= 0 {
		return 1.0
	}

	return 1.0 / (float64(maxPenetration) + 1.0)
}

// returns the length of intersection of two segments
func calculateAxisOverlap(aMin, aMax, bMin, bMax int64) int64 {
	// find the beginning of the overlap
	overlapMin := max(aMin, bMin)
	// find the end of the overlap
	overlapMax := min(aMax, bMax)

	// calculate the length of the overlap
	return max(0, overlapMax-overlapMin)
}
