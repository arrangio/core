package rules

import (
	"arrangio-core/entity"
	"arrangio-core/scene"
)

// axis definitions for some rules
const (
	AxisX uint8 = iota
	AxisY
	AxisZ
)

type RuleContext struct {
	Env *scene.Environment
	// pre-allocated buffer for `QueryBug` method
	Buffer []*entity.Entity
	ZoneBuffer []*scene.Zone
}

type Rule interface {
	Evaluate(subject *entity.Entity, ctx *RuleContext) float64
}
