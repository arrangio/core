package rules

import (
	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
)

// check for padding from objects with matching `Obstacle` Selector
type ClearanceRule struct {
	Target   Selector
	Obstacle Selector // distance from
	Padding  geometry.Point64
}

func (r *ClearanceRule) MaxInfluenceRadius() int64 {
	maxPadding := r.Padding.X
	if r.Padding.Y > maxPadding {
		maxPadding = r.Padding.Y
	}
	if r.Padding.Z > maxPadding {
		maxPadding = r.Padding.Z
	}
	return maxPadding
}

func (r *ClearanceRule) Evaluate(subject *entity.Entity, ctx *RuleContext) float64 {
	if !r.Target.Matches(subject) {
		return 1.0
	}

	subMin, subMax := subject.WorldBounds()

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
		if neighbor.Def.ID == subject.Def.ID || !r.Obstacle.Matches(neighbor) {
			continue
		}

		nMin, nMax := neighbor.WorldBounds()

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


func (r *ClearanceRule) ComputeForce(subject *entity.Entity, forceCtx *ForceContext) ForceAccum {
	var accum ForceAccum
	if !r.Target.Matches(subject) {
		return accum
	}
	subMin, subMax := subject.WorldBounds()
	subMin.X -= r.Padding.X
	subMin.Y -= r.Padding.Y
	subMin.Z -= r.Padding.Z
	subMax.X += r.Padding.X
	subMax.Y += r.Padding.Y
	subMax.Z += r.Padding.Z

	for _, neighbor := range forceCtx.Neighbors {
		if subject.Def.ID == neighbor.Def.ID || !r.Obstacle.Matches(neighbor) {
			continue
		}
		nMin, nMax := neighbor.WorldBounds()
		dx, dy, dz := calculateRepulsion(subMin, subMax, nMin, nMax)
		accum.DX += dx
		accum.DY += dy
		accum.DZ += dz
	}
	return accum
}
