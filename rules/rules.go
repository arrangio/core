package rules

import (
	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
	"github.com/arrangio/core/grid"
	"github.com/arrangio/core/zones"
)

// axis definitions for some rules
const (
	AxisX uint8 = iota
	AxisY
	AxisZ
)

// `ForceAccum` accumulates all the forces applied to a single object
type ForceAccum struct {
	DX, DY, DZ int64
	BestRot    uint8
	RotScore   float64 // how much does object wants to be rotated
}

type ForceContext struct {
	Neighbors []*entity.Entity
	Zones     []*zones.Zone
}

type RuleContext struct {
	EntityGrid *grid.Grid[*entity.Entity]
	ZoneGrid   *grid.Grid[*zones.Zone]
	// pre-allocated buffer for `QueryBuf` method
	EntityBuffer []*entity.Entity
	ZoneBuffer   []*zones.Zone
}

type Rule interface {
	Evaluate(subject *entity.Entity, ctx *RuleContext) float64
	ComputeForce(subject *entity.Entity, forceCtx *ForceContext) ForceAccum
}

// returns the length of intersection of two segments
func calculateAxisOverlap(aMin, aMax, bMin, bMax int64) int64 {
	overlapMin := max(aMin, bMin)
	overlapMax := min(aMax, bMax)
	return max(0, overlapMax-overlapMin)
}

func calculateRepulsion(subMin, subMax, nMin, nMax geometry.Point64) (dx, dy, dz int64) {
	overlapX := calculateAxisOverlap(subMin.X, subMax.X, nMin.X, nMax.X)
	overlapY := calculateAxisOverlap(subMin.Y, subMax.Y, nMin.Y, nMax.Y)
	overlapZ := calculateAxisOverlap(subMin.Z, subMax.Z, nMin.Z, nMax.Z)

	if overlapX > 0 && overlapY > 0 && overlapZ > 0 {
		if (subMin.X+subMax.X)/2 >= (nMin.X+nMax.X)/2 {
			dx = overlapX
		} else {
			dx = -overlapX
		}
		if (subMin.Y+subMax.Y)/2 >= (nMin.Y+nMax.Y)/2 {
			dy = overlapY
		} else {
			dy = -overlapY
		}
		if (subMin.Z+subMax.Z)/2 >= (nMin.Z+nMax.Z)/2 {
			dz = overlapZ
		} else {
			dz = -overlapZ
		}
	}
	return dx, dy, dz
}
