package solver_test

import (
	"math"
	"testing"

	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
	"github.com/arrangio/core/rules"
)

func TestScoreDirector(t *testing.T) {
	tests := []SolverTestCase{
		{
			Name: "TotalScore: fully colliding entities get 0.0",
			Entities: []entity.TestEntity{
				{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 1, H: 1, D: 1},
				{ID: 2, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 1, H: 1, D: 1},
			},
			Rules: []rules.Rule{
				&rules.NoCollisionRule{
					Target:   rules.Selector{MatchAny: true},
					Obstacle: rules.Selector{MatchAny: true},
				},
			},
			Run: func(t *testing.T, rig *TestRig) {
				score := rig.Director.CalculateTotalScore()
				if score != 0.0 {
					t.Errorf("expected total score 0.0, got %f", score)
				}
			},
		},
		{
			Name: "TotalScore: multiple rules applied together",
			Entities: []entity.TestEntity{
				{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 2, H: 2, D: 2},
				{ID: 2, Anchor: geometry.Point64{X: 5, Y: 0, Z: 0}, W: 2, H: 2, D: 2}, // violates clearance
			},
			Rules: []rules.Rule{
				&rules.NoCollisionRule{
					Target:   rules.Selector{MatchAny: true},
					Obstacle: rules.Selector{MatchAny: true},
				},
				&rules.ClearanceRule{
					Target:   rules.Selector{MatchAny: true},
					Obstacle: rules.Selector{MatchAny: true},
					Padding:  geometry.Point64{X: 10, Y: 10, Z: 10},
				},
			},
			Run: func(t *testing.T, rig *TestRig) {
				score := rig.Director.CalculateTotalScore()
				if score >= 4.0 || score == 0.0 { // 2 entities * 2 rules = 4.0 max
					t.Errorf("expected score to be between 0.0 and 4.0 due to clearance penalty, got %f", score)
				}
			},
		},
		{
			Name: "Delta: resolve collision by moving entity far away",
			Entities: []entity.TestEntity{
				{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 2, H: 2, D: 2},
				{ID: 2, Anchor: geometry.Point64{X: 1, Y: 1, Z: 1}, W: 2, H: 2, D: 2}, // colliding
				{ID: 3, Anchor: geometry.Point64{X: 100, Y: 100, Z: 100}, W: 2, H: 2, D: 2},
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

				oldMin, oldMax := e2.WorldBounds()
				newAnchor := geometry.Point64{X: 10, Y: 0, Z: 0}
				newMin, newMax := e2.BoundsAt(newAnchor, 0)

				delta := rig.Director.CalculateDelta(e2, oldMin, oldMax, newMin, newMax, func() {
					e2.State.Anchor = newAnchor
					rig.State.EntityGrid.Move(e2, oldMin, oldMax, newMin, newMax)
				})

				newTotalScore := rig.Director.CalculateTotalScore()

				// e1 and e2 stop colliding (+1.0 each) -> delta should be 2.0
				if math.Abs(delta-2.0) > 1e-9 {
					t.Errorf("expected delta 2.0, got %f", delta)
				}

				if math.Abs(delta-(newTotalScore-initialScore)) > 1e-9 {
					t.Errorf("CalculateDelta = %f, but actual difference is %f", delta, newTotalScore-initialScore)
				}
			},
		},
		{
			Name: "Delta: move entity into collision",
			Entities: []entity.TestEntity{
				{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 2, H: 2, D: 2},
				{ID: 2, Anchor: geometry.Point64{X: 10, Y: 0, Z: 0}, W: 2, H: 2, D: 2},
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

				oldMin, oldMax := e2.WorldBounds()
				newAnchor := geometry.Point64{X: 0, Y: 0, Z: 0} // move inside e1
				newMin, newMax := e2.BoundsAt(newAnchor, 0)

				delta := rig.Director.CalculateDelta(e2, oldMin, oldMax, newMin, newMax, func() {
					e2.State.Anchor = newAnchor
					rig.State.EntityGrid.Move(e2, oldMin, oldMax, newMin, newMax)
				})

				newTotalScore := rig.Director.CalculateTotalScore()

				// e1 and e2 start colliding (-1.0 each) -> delta should be -2.0
				if math.Abs(delta-(-2.0)) > 1e-9 {
					t.Errorf("expected delta -2.0, got %f", delta)
				}

				if math.Abs(delta-(newTotalScore-initialScore)) > 1e-9 {
					t.Errorf("CalculateDelta = %f, but actual difference is %f", delta, newTotalScore-initialScore)
				}
			},
		},
		{
			Name: "Delta: moving entity outside max radius has no effect on distant entities",
			Entities: []entity.TestEntity{
				{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 1, H: 1, D: 1},
				{ID: 2, Anchor: geometry.Point64{X: 100, Y: 100, Z: 100}, W: 1, H: 1, D: 1},
			},
			Rules: []rules.Rule{
				&rules.SeparationRule{
					Target:      rules.Selector{MatchAny: true},
					Obstacle:    rules.Selector{MatchAny: true},
					MinDistance: 10,
				},
			},
			Run: func(t *testing.T, rig *TestRig) {
				e2 := rig.GetEntity(2)
				initialScore := rig.Director.CalculateTotalScore()

				oldMin, oldMax := e2.WorldBounds()
				newAnchor := geometry.Point64{X: 150, Y: 150, Z: 150}
				newMin, newMax := e2.BoundsAt(newAnchor, 0)

				delta := rig.Director.CalculateDelta(e2, oldMin, oldMax, newMin, newMax, func() {
					e2.State.Anchor = newAnchor
					rig.State.EntityGrid.Move(e2, oldMin, oldMax, newMin, newMax)
				})

				newTotalScore := rig.Director.CalculateTotalScore()
				if math.Abs(delta-0.0) > 1e-9 {
					t.Errorf("expected delta 0.0, got %f", delta)
				}

				if math.Abs(delta-(newTotalScore-initialScore)) > 1e-9 {
					t.Errorf("CalculateDelta = %f, but actual difference is %f", delta, newTotalScore-initialScore)
				}
			},
		},
	}

	for _, tc := range tests {
		RunSolverTest(t, tc)
	}
}
