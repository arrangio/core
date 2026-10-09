package solver_test

import (
	"testing"

	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
	"github.com/arrangio/core/rules"
	"github.com/arrangio/core/solver"
	"github.com/arrangio/core/tags"
)

func TestForceSolver_CoincidingCenters(t *testing.T) {
	RunSolverTest(t, SolverTestCase{
		Name: "separate different sized boxes at identical position",
		Entities: []entity.TestEntity{
			{ID: 1, Anchor: geometry.Point64{X: 50, Y: 50, Z: 50}, W: 10, H: 8, D: 6},
			{ID: 2, Anchor: geometry.Point64{X: 50, Y: 50, Z: 50}, W: 16, H: 12, D: 8},
		},
		Rules: []rules.Rule{
			&rules.NoCollisionRule{
				Target:   rules.Selector{MatchAny: true},
				Obstacle: rules.Selector{MatchAny: true},
			},
			&rules.SeparationRule{
				Target:      rules.Selector{MatchAny: true},
				Obstacle:    rules.Selector{MatchAny: true},
				MinDistance: 3,
			},
		},
		Run: func(t *testing.T, rig *TestRig) {
			cfg := solver.DefaultForceSolverConfig()
			cfg.MaxIterations = 50

			s := solver.NewForceSolver(rig.State, cfg)
			res := s.Solve()

			if !res.Converged {
				t.Fatalf("expected solver to converge, got %v (final stress: %d, violators: %d)", res.Reason, res.FinalStress, res.ViolatorsCount)
			}

			e1 := rig.GetEntity(1)
			e2 := rig.GetEntity(2)
			if e1.State.Anchor == e2.State.Anchor {
				t.Fatalf("entities failed to separate: both still at %v", e1.State.Anchor)
			}
		},
	})
}

func TestForceSolver_Convergence(t *testing.T) {
	sizes := [][3]int16{
		{6, 6, 4},
		{12, 8, 5},
		{4, 4, 3},
		{10, 6, 5},
		{8, 8, 4},
	}
	entities := make([]entity.TestEntity, len(sizes))
	for i, sz := range sizes {
		entities[i] = entity.TestEntity{
			ID:     uint64(i + 1),
			Anchor: geometry.Point64{X: int64(50 + i*6), Y: 50, Z: 50},
			W:      sz[0], H: sz[1], D: sz[2],
		}
	}

	RunSolverTest(t, SolverTestCase{
		Name:     "resolve chain collision, separation, and alignment with varied box sizes",
		Entities: entities,
		Rules: []rules.Rule{
			&rules.NoCollisionRule{
				Target:   rules.Selector{MatchAny: true},
				Obstacle: rules.Selector{MatchAny: true},
			},
			&rules.SeparationRule{
				Target:      rules.Selector{MatchAny: true},
				Obstacle:    rules.Selector{MatchAny: true},
				MinDistance: 2,
			},
		},
		Run: func(t *testing.T, rig *TestRig) {
			cfg := solver.DefaultForceSolverConfig()
			cfg.MaxIterations = 100

			stepCount := 0
			cfg.OnStep = func(info solver.StepInfo) {
				stepCount++
			}

			s := solver.NewForceSolver(rig.State, cfg)
			res := s.Solve()

			if !res.Converged {
				t.Fatalf("expected convergence, got %v (final stress: %d, violators: %d)", res.Reason, res.FinalStress, res.ViolatorsCount)
			}

			if stepCount == 0 {
				t.Fatalf("expected OnStep callback to be invoked")
			}

			if res.FinalStress != 0 {
				t.Fatalf("expected final stress 0 on convergence, got %d", res.FinalStress)
			}
		},
	})
}

func TestForceSolver_RelationalScene(t *testing.T) {
	const (
		tagItem = 1
		tagHub  = 2
	)

	entities := []entity.TestEntity{
		// сentral static hub
		{ID: 1, Anchor: geometry.Point64{X: 100, Y: 100, Z: 0}, W: 16, H: 12, D: 6, IsStatic: true, Tags: []int{tagHub}},
		// items of different sizes placed initially crowded near the hub
		{ID: 2, Anchor: geometry.Point64{X: 120, Y: 98, Z: 0}, W: 4, H: 4, D: 3, Tags: []int{tagItem}},
		{ID: 3, Anchor: geometry.Point64{X: 120, Y: 102, Z: 0}, W: 8, H: 6, D: 4, Tags: []int{tagItem}},
		{ID: 4, Anchor: geometry.Point64{X: 121, Y: 108, Z: 0}, W: 6, H: 6, D: 4, Tags: []int{tagItem}},
		{ID: 5, Anchor: geometry.Point64{X: 120, Y: 114, Z: 0}, W: 10, H: 8, D: 5, Tags: []int{tagItem}},
	}

	selItem := rules.Selector{Mask: tags.NewMask().With(tagItem)}
	selHub := rules.Selector{Mask: tags.NewMask().With(tagHub)}
	selAll := rules.Selector{MatchAny: true}

	ruleSet := []rules.Rule{
		&rules.NoCollisionRule{
			Target:   selAll,
			Obstacle: selAll,
		},
		&rules.ClearanceRule{
			Target:   selItem,
			Obstacle: selHub,
			Padding:  geometry.Point64{X: 2, Y: 2, Z: 0},
		},
		&rules.SeparationRule{
			Target:      selItem,
			Obstacle:    selItem,
			MinDistance: 2,
		},
		&rules.AlignmentRule{
			Target: selItem,
			Axis:   rules.AxisX,
			Radius: 30,
		},
	}

	RunSolverTest(t, SolverTestCase{
		Name:     "resolve multi-tag layout with hub clearance and item alignment",
		Entities: entities,
		Rules:    ruleSet,
		Run: func(t *testing.T, rig *TestRig) {
			cfg := solver.DefaultForceSolverConfig()
			cfg.JitterAmount = 0
			cfg.MaxIterations = 100

			s := solver.NewForceSolver(rig.State, cfg)
			res := s.Solve()

			if !res.Converged {
				t.Fatalf("expected convergence, got %v (final stress: %d, violators: %d)", res.Reason, res.FinalStress, res.ViolatorsCount)
			}

			// verify all items are separated from the hub
			hub := rig.GetEntity(1)
			hMin, hMax := hub.WorldBounds()
			for _, id := range []uint64{2, 3, 4, 5} {
				e := rig.GetEntity(id)
				eMin, eMax := e.WorldBounds()
				overlapX := min(hMax.X+2, eMax.X) - max(hMin.X-2, eMin.X)
				overlapY := min(hMax.Y+2, eMax.Y) - max(hMin.Y-2, eMin.Y)
				overlapZ := min(hMax.Z, eMax.Z) - max(hMin.Z, eMin.Z)
				if overlapX > 0 && overlapY > 0 && overlapZ > 0 {
					t.Fatalf("entity %d violates clearance with hub", id)
				}
			}
		},
	})
}

func TestForceSolver_MaxIterations(t *testing.T) {
	RunSolverTest(t, SolverTestCase{
		Name: "terminate when MaxIterations reached",
		Entities: []entity.TestEntity{
			{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 10, H: 10, D: 10},
			{ID: 2, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 10, H: 10, D: 10},
		},
		Rules: []rules.Rule{
			&rules.NoCollisionRule{
				Target:   rules.Selector{MatchAny: true},
				Obstacle: rules.Selector{MatchAny: true},
			},
		},
		Run: func(t *testing.T, rig *TestRig) {
			cfg := solver.DefaultForceSolverConfig()
			cfg.MaxIterations = 1

			s := solver.NewForceSolver(rig.State, cfg)
			res := s.Solve()

			if res.Converged {
				t.Fatalf("expected non-convergence in 1 iteration")
			}
			if res.Reason != solver.ReasonMaxIterations {
				t.Fatalf("expected ReasonMaxIterations, got %v", res.Reason)
			}
		},
	})
}
