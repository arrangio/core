package solver_test

import (
	"math"
	"testing"

	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
	"github.com/arrangio/core/rules"
	"github.com/arrangio/core/solver"
)

func TestMoves(t *testing.T) {
	tests := []SolverTestCase{
		{
			Name: "ShiftMove: apply and revert updates anchor and delta correctly",
			Entities: []entity.TestEntity{
				{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 2, H: 2, D: 2},
				{ID: 2, Anchor: geometry.Point64{X: 1, Y: 1, Z: 1}, W: 2, H: 2, D: 2},
			},
			Rules: []rules.Rule{
				&rules.NoCollisionRule{
					Target:   rules.Selector{MatchAny: true},
					Obstacle: rules.Selector{MatchAny: true},
				},
			},
			Run: func(t *testing.T, rig *TestRig) {
				e2 := rig.GetEntity(2)
				initialScore := rig.Director.CalculateTotalScore()

				oldAnchor := e2.State.Anchor
				newAnchor := geometry.Point64{X: 10, Y: 0, Z: 0}

				move := &solver.ShiftMove{
					Target:    e2,
					OldAnchor: oldAnchor,
					NewAnchor: newAnchor,
				}

				delta := move.Apply(rig.Director)

				if math.Abs(delta-2.0) > 1e-9 {
					t.Errorf("expected delta 2.0, got %f", delta)
				}
				if e2.State.Anchor != newAnchor {
					t.Errorf("expected anchor %v, got %v", newAnchor, e2.State.Anchor)
				}

				newTotalScore := rig.Director.CalculateTotalScore()
				if math.Abs(delta-(newTotalScore-initialScore)) > 1e-9 {
					t.Errorf("CalculateDelta = %f, but actual difference is %f", delta, newTotalScore-initialScore)
				}

				move.Revert(rig.Director)
				if e2.State.Anchor != oldAnchor {
					t.Errorf("expected anchor %v after revert, got %v", oldAnchor, e2.State.Anchor)
				}

				revertedScore := rig.Director.CalculateTotalScore()
				if math.Abs(revertedScore-initialScore) > 1e-9 {
					t.Errorf("expected reverted score %f, got %f", initialScore, revertedScore)
				}
			},
		},
		{
			Name: "TeleportMove: apply and revert correctly handles large jumps",
			Entities: []entity.TestEntity{
				{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 2, H: 2, D: 2},
				{ID: 2, Anchor: geometry.Point64{X: 1, Y: 1, Z: 1}, W: 2, H: 2, D: 2},
			},
			Rules: []rules.Rule{
				&rules.NoCollisionRule{
					Target:   rules.Selector{MatchAny: true},
					Obstacle: rules.Selector{MatchAny: true},
				},
			},
			Run: func(t *testing.T, rig *TestRig) {
				e2 := rig.GetEntity(2)
				initialScore := rig.Director.CalculateTotalScore()

				oldAnchor := e2.State.Anchor
				newAnchor := geometry.Point64{X: 100, Y: 100, Z: 100}

				move := &solver.TeleportMove{
					Target:    e2,
					OldAnchor: oldAnchor,
					NewAnchor: newAnchor,
				}

				delta := move.Apply(rig.Director)

				if math.Abs(delta-2.0) > 1e-9 {
					t.Errorf("expected delta 2.0, got %f", delta)
				}
				if e2.State.Anchor != newAnchor {
					t.Errorf("expected anchor %v, got %v", newAnchor, e2.State.Anchor)
				}

				newTotalScore := rig.Director.CalculateTotalScore()
				if math.Abs(delta-(newTotalScore-initialScore)) > 1e-9 {
					t.Errorf("CalculateDelta = %f, but actual difference is %f", delta, newTotalScore-initialScore)
				}

				move.Revert(rig.Director)
				if e2.State.Anchor != oldAnchor {
					t.Errorf("expected anchor %v after revert, got %v", oldAnchor, e2.State.Anchor)
				}

				revertedScore := rig.Director.CalculateTotalScore()
				if math.Abs(revertedScore-initialScore) > 1e-9 {
					t.Errorf("expected reverted score %f, got %f", initialScore, revertedScore)
				}
			},
		},
		{
			Name: "RotationMove: apply and revert updates state and grid correctly",
			Entities: []entity.TestEntity{
				{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 10, H: 2, D: 2, Rotation: 0},
				{ID: 2, Anchor: geometry.Point64{X: 5, Y: 0, Z: 0}, W: 2, H: 2, D: 2, Rotation: 0},
			},
			Rules: []rules.Rule{
				&rules.NoCollisionRule{
					Target:   rules.Selector{MatchAny: true},
					Obstacle: rules.Selector{MatchAny: true},
				},
			},
			Run: func(t *testing.T, rig *TestRig) {
				e1 := rig.GetEntity(1)
				initialScore := rig.Director.CalculateTotalScore()

				oldRot := e1.State.Rotation
				newRot := uint8(2)

				move := &solver.RotationMove{
					Target: e1,
					OldRot: oldRot,
					NewRot: newRot,
				}

				delta := move.Apply(rig.Director)

				if e1.State.Rotation != newRot {
					t.Errorf("expected rotation %d, got %d", newRot, e1.State.Rotation)
				}

				newTotalScore := rig.Director.CalculateTotalScore()
				if math.Abs(delta-(newTotalScore-initialScore)) > 1e-9 {
					t.Errorf("CalculateDelta = %f, but actual difference is %f", delta, newTotalScore-initialScore)
				}

				move.Revert(rig.Director)
				if e1.State.Rotation != oldRot {
					t.Errorf("expected rotation %d after revert, got %d", oldRot, e1.State.Rotation)
				}

				revertedScore := rig.Director.CalculateTotalScore()
				if math.Abs(revertedScore-initialScore) > 1e-9 {
					t.Errorf("expected reverted score %f, got %f", initialScore, revertedScore)
				}
			},
		},
	}

	for _, tc := range tests {
		RunSolverTest(t, tc)
	}
}
