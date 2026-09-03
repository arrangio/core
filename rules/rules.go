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

type RuleContext struct {
	EntityGrid *grid.Grid[*entity.Entity]
	ZoneGrid   *grid.Grid[*zones.Zone]
	// pre-allocated buffer for `QueryBuf` method
	EntityBuffer []*entity.Entity
	ZoneBuffer   []*zones.Zone
}

type Rule interface {
	Evaluate(subject *entity.Entity, ctx *RuleContext) float64
}
