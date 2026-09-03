package solver

import (
	"math/rand"

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

	canRotate []bool

	lastIndex    int
	lastEntity   *entity.Entity
	lastAnchor   geometry.Point64
	lastRotation uint8
	lastOldMin   geometry.Point64
	lastOldMax   geometry.Point64
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
		canRotate: canRotate,
	}
}

func (s *State) Mutate(rng *rand.Rand) {
	idx := rng.Intn(len(s.Entities))
	e := s.Entities[idx]

	s.lastIndex = idx
	s.lastEntity = e
	s.lastAnchor = e.State.Anchor
	s.lastOldMin, s.lastOldMax = e.WorldBounds()

	if s.canRotate[idx] {
		rot := e.Def.Shape.(geometry.Rotatable)
		s.lastRotation = rot.GetRotation()
	}

	// 50/50 rotate vs move when rotation is available
	// as a temporary solution
	if s.canRotate[idx] && rng.Intn(2) == 0 {
		rot := e.Def.Shape.(geometry.Rotatable)
		rot.SetRotation(uint8(rng.Intn(24))) // #nosec G115
	} else {
		bMin, bMax := s.EntityGrid.WorldBounds()
		eMin, eMax := e.Def.Shape.Bounds()
		w := int64(eMax.X - eMin.X)
		h := int64(eMax.Y - eMin.Y)
		d := int64(eMax.Z - eMin.Z)

		rangeX := bMax.X - bMin.X - w
		rangeY := bMax.Y - bMin.Y - h
		rangeZ := bMax.Z - bMin.Z - d

		if rangeX < 1 {
			rangeX = 1
		}
		if rangeY < 1 {
			rangeY = 1
		}
		if rangeZ < 1 {
			rangeZ = 1
		}

		e.State.Anchor = geometry.Point64{
			X: bMin.X + rng.Int63n(rangeX),
			Y: bMin.Y + rng.Int63n(rangeY),
			Z: bMin.Z + rng.Int63n(rangeZ),
		}
	}

	newMin, newMax := e.WorldBounds()
	s.EntityGrid.Move(e, s.lastOldMin, s.lastOldMax, newMin, newMax)
}

func (s *State) Revert() {
	e := s.lastEntity
	oldMin, oldMax := e.WorldBounds()

	if s.canRotate[s.lastIndex] {
		rot := e.Def.Shape.(geometry.Rotatable)
		rot.SetRotation(s.lastRotation)
	}

	e.State.Anchor = s.lastAnchor
	newMin, newMax := e.WorldBounds()
	s.EntityGrid.Move(e, oldMin, oldMax, newMin, newMax)
}
