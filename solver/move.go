package solver

import (
	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
)

type Move interface {
	Apply(sd *ScoreDirector) float64
	Revert(sd *ScoreDirector)
}

type ShiftMove struct {
	target    *entity.Entity
	oldAnchor geometry.Point64
	newAnchor geometry.Point64
}

func (m *ShiftMove) Apply(sd *ScoreDirector) float64 {
	oldMin, oldMax := m.target.BoundsAt(m.oldAnchor, m.target.GetRotation())
	newMin, newMax := m.target.BoundsAt(m.newAnchor, m.target.GetRotation())

	return sd.CalculateDelta(m.target, oldMin, oldMax, newMin, newMax, func() {
		m.target.State.Anchor = m.newAnchor
		sd.State.EntityGrid.Move(m.target, oldMin, oldMax, newMin, newMax)
	})
}

func (m *ShiftMove) Revert(sd *ScoreDirector) {
	oldMin, oldMax := m.target.BoundsAt(m.newAnchor, m.target.GetRotation())
	newMin, newMax := m.target.BoundsAt(m.oldAnchor, m.target.GetRotation())

	m.target.State.Anchor = m.oldAnchor
	sd.State.EntityGrid.Move(m.target, oldMin, oldMax, newMin, newMax)
}
