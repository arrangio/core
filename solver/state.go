package solver

import (
	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
	"github.com/arrangio/core/grid"
	"github.com/arrangio/core/rules"
	"github.com/arrangio/core/zones"
)

type State struct {
	EntityGrid *grid.Grid[*entity.Entity]
	ZoneGrid   *grid.Grid[*zones.Zone]
	Entities   []*entity.Entity
	Rules      []rules.Rule
	RuleCtx    *rules.RuleContext
	MaxRadius  int64

	canRotate []bool
}

func NewState(
	eGrid *grid.Grid[*entity.Entity],
	zGrid *grid.Grid[*zones.Zone],
	allEntities []*entity.Entity,
	ruleSet []rules.Rule,
) *State {
	var movable []*entity.Entity
	var canRotate []bool

	for _, e := range allEntities {
		if e.Def.IsStatic {
			continue
		}
		movable = append(movable, e)
		_, ok := e.Def.Shape.(geometry.Rotatable)
		canRotate = append(canRotate, ok)
	}

	maxRadius := int64(0)
	for _, r := range ruleSet {
		if rr, ok := r.(rules.RadiusRule); ok {
			rad := rr.MaxInfluenceRadius()
			if rad > maxRadius {
				maxRadius = rad
			}
		}
	}

	return &State{
		EntityGrid: eGrid,
		ZoneGrid:   zGrid,
		Entities:   movable,
		Rules:      ruleSet,
		RuleCtx: &rules.RuleContext{
			EntityGrid:   eGrid,
			ZoneGrid:     zGrid,
			EntityBuffer: make([]*entity.Entity, 0, 64),
			ZoneBuffer:   make([]*zones.Zone, 0, 16),
		},
		MaxRadius: maxRadius,
		canRotate: canRotate,
	}
}
