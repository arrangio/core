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
	Penalty    int64 // modulo of all forces applied to a single object
	BestRot    uint8
	RotScore   float64 // how much does object want to be rotated
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

func absI64(v int64) int64 {
	if v < 0 {
		return -v
	}
	return v
}

func calculateRepulsion(subMin, subMax, nMin, nMax geometry.Point64, subID, nID uint64) (dx, dy, dz int64) {
	overlapX := calculateAxisOverlap(subMin.X, subMax.X, nMin.X, nMax.X)
	overlapY := calculateAxisOverlap(subMin.Y, subMax.Y, nMin.Y, nMax.Y)
	overlapZ := calculateAxisOverlap(subMin.Z, subMax.Z, nMin.Z, nMax.Z)

	if overlapX > 0 && overlapY > 0 && overlapZ > 0 {
		subMidX, nMidX := subMin.X+subMax.X, nMin.X+nMax.X
		subMidY, nMidY := subMin.Y+subMax.Y, nMin.Y+nMax.Y
		subMidZ, nMidZ := subMin.Z+subMax.Z, nMin.Z+nMax.Z
		if subMidX > nMidX || (subMidX == nMidX && subID > nID) {
			dx = overlapX
		} else {
			dx = -overlapX
		}
		if subMidY > nMidY || (subMidY == nMidY && subID > nID) {
			dy = overlapY
		} else {
			dy = -overlapY
		}
		if subMidZ > nMidZ || (subMidZ == nMidZ && subID > nID) {
			dz = overlapZ
		} else {
			dz = -overlapZ
		}
	}
	return dx, dy, dz
}
