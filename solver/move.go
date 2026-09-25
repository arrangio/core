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

type TeleportMove struct {
	target    *entity.Entity
	oldAnchor geometry.Point64
	newAnchor geometry.Point64
}

type RotationMove struct {
	target *entity.Entity
	oldRot uint8
	newRot uint8
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

func (m *TeleportMove) Apply(sd *ScoreDirector) float64 {
	oldMin, oldMax := m.target.BoundsAt(m.oldAnchor, m.target.GetRotation())
	newMin, newMax := m.target.BoundsAt(m.newAnchor, m.target.GetRotation())

	return sd.CalculateDelta(m.target, oldMin, oldMax, newMin, newMax, func() {
		sd.State.EntityGrid.Remove(m.target)
		m.target.State.Anchor = m.newAnchor
		sd.State.EntityGrid.Insert(m.target)
	})
}

func (m *TeleportMove) Revert(sd *ScoreDirector) {
	sd.State.EntityGrid.Remove(m.target)
	m.target.State.Anchor = m.oldAnchor
	sd.State.EntityGrid.Insert(m.target)
}

func (m *RotationMove) Apply(sd *ScoreDirector) float64 {
	oldMin, oldMax := m.target.BoundsAt(m.target.State.Anchor, m.oldRot)
	newMin, newMax := m.target.BoundsAt(m.target.State.Anchor, m.newRot)

	return sd.CalculateDelta(m.target, oldMin, oldMax, newMin, newMax, func() {
		m.target.SetRotation(m.newRot)
		sd.State.EntityGrid.Move(m.target, oldMin, oldMax, newMin, newMax)
	})
}

func (m *RotationMove) Revert(sd *ScoreDirector) {
	oldMin, oldMax := m.target.BoundsAt(m.target.State.Anchor, m.newRot)
	newMin, newMax := m.target.BoundsAt(m.target.State.Anchor, m.oldRot)

	m.target.SetRotation(m.oldRot)
	sd.State.EntityGrid.Move(m.target, oldMin, oldMax, newMin, newMax)
}
