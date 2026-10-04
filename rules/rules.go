package rules

import (
	"github.com/arrangio/core/entity"
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
}
