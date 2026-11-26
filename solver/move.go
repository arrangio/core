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
	Target    *entity.Entity
	OldRot    uint8
	NewRot    uint8
	oldAnchor geometry.Point64
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
	rotMin, _ := m.Target.BoundsAt(geometry.Point64{}, m.NewRot)

	newAnchor := geometry.Point64{
		X: oldMin.X - rotMin.X,
		Y: oldMin.Y - rotMin.Y,
		Z: oldMin.Z - rotMin.Z,
	}

	newMin, newMax := m.Target.BoundsAt(newAnchor, m.NewRot)

	return sd.CalculateDelta(m.Target, oldMin, oldMax, newMin, newMax, func() {
		m.oldAnchor = m.Target.State.Anchor
		m.Target.State.Anchor = newAnchor
		m.Target.SetRotation(m.NewRot)
		sd.State.EntityGrid.Move(m.Target, oldMin, oldMax, newMin, newMax)
	})
}

func (m *RotationMove) Revert(sd *ScoreDirector) {
	oldMin, oldMax := m.Target.BoundsAt(m.Target.State.Anchor, m.NewRot)
	m.Target.State.Anchor = m.oldAnchor
	newMin, newMax := m.Target.BoundsAt(m.Target.State.Anchor, m.OldRot)

	m.Target.SetRotation(m.OldRot)
	sd.State.EntityGrid.Move(m.Target, oldMin, oldMax, newMin, newMax)
}
