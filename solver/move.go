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
	Target    *entity.Entity
	OldAnchor geometry.Point64
	NewAnchor geometry.Point64
}

type TeleportMove struct {
	Target    *entity.Entity
	OldAnchor geometry.Point64
	NewAnchor geometry.Point64
}

type RotationMove struct {
	Target *entity.Entity
	OldRot uint8
	NewRot uint8
}

func (m *ShiftMove) Apply(sd *ScoreDirector) float64 {
	oldMin, oldMax := m.Target.BoundsAt(m.OldAnchor, m.Target.GetRotation())
	newMin, newMax := m.Target.BoundsAt(m.NewAnchor, m.Target.GetRotation())

	return sd.CalculateDelta(m.Target, oldMin, oldMax, newMin, newMax, func() {
		m.Target.State.Anchor = m.NewAnchor
		sd.State.EntityGrid.Move(m.Target, oldMin, oldMax, newMin, newMax)
	})
}

func (m *ShiftMove) Revert(sd *ScoreDirector) {
	oldMin, oldMax := m.Target.BoundsAt(m.NewAnchor, m.Target.GetRotation())
	newMin, newMax := m.Target.BoundsAt(m.OldAnchor, m.Target.GetRotation())

	m.Target.State.Anchor = m.OldAnchor
	sd.State.EntityGrid.Move(m.Target, oldMin, oldMax, newMin, newMax)
}

func (m *TeleportMove) Apply(sd *ScoreDirector) float64 {
	oldMin, oldMax := m.Target.BoundsAt(m.OldAnchor, m.Target.GetRotation())
	newMin, newMax := m.Target.BoundsAt(m.NewAnchor, m.Target.GetRotation())

	return sd.CalculateDelta(m.Target, oldMin, oldMax, newMin, newMax, func() {
		sd.State.EntityGrid.Remove(m.Target)
		m.Target.State.Anchor = m.NewAnchor
		sd.State.EntityGrid.Insert(m.Target)
	})
}

func (m *TeleportMove) Revert(sd *ScoreDirector) {
	sd.State.EntityGrid.Remove(m.Target)
	m.Target.State.Anchor = m.OldAnchor
	sd.State.EntityGrid.Insert(m.Target)
}

func (m *RotationMove) Apply(sd *ScoreDirector) float64 {
	oldMin, oldMax := m.Target.BoundsAt(m.Target.State.Anchor, m.OldRot)
	newMin, newMax := m.Target.BoundsAt(m.Target.State.Anchor, m.NewRot)

	return sd.CalculateDelta(m.Target, oldMin, oldMax, newMin, newMax, func() {
		m.Target.SetRotation(m.NewRot)
		sd.State.EntityGrid.Move(m.Target, oldMin, oldMax, newMin, newMax)
	})
}

func (m *RotationMove) Revert(sd *ScoreDirector) {
	oldMin, oldMax := m.Target.BoundsAt(m.Target.State.Anchor, m.NewRot)
	newMin, newMax := m.Target.BoundsAt(m.Target.State.Anchor, m.OldRot)

	m.Target.SetRotation(m.OldRot)
	sd.State.EntityGrid.Move(m.Target, oldMin, oldMax, newMin, newMax)
}
