package solver_test

import (
	"math/rand"
	"testing"

	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
	"github.com/arrangio/core/grid"
	"github.com/arrangio/core/rules"
	"github.com/arrangio/core/solver"
	"github.com/arrangio/core/tags"
)

func setupBenchmarkState(numObjects int, gridSize int64) (*solver.State, []geometry.Point64) {
	gridShiftBits := uint8(4)
	maxObjectsPerCell := numObjects
	if maxObjectsPerCell < 1000 {
		maxObjectsPerCell = 1000
	}
	entityGrid, err := grid.NewGrid[*entity.Entity](
		gridShiftBits,
		0, 0, 0,
		gridSize, gridSize, 100,
		maxObjectsPerCell,
	)
	if err != nil {
		panic(err)
	}

	allEntities := make([]*entity.Entity, numObjects)
	initialAnchors := make([]geometry.Point64, numObjects)
	rnd := rand.New(rand.NewSource(42))

	const (
		tagItem = 1
		tagHub  = 2
	)

	maskItem := tags.NewMask().With(tagItem)
	maskHub := tags.NewMask().With(tagHub)

	selItem := rules.Selector{Mask: maskItem}
	selHub := rules.Selector{Mask: maskHub}
	selAll := rules.Selector{MatchAny: true}

	maxX := max(1, gridSize-20)
	maxY := max(1, gridSize-20)

	for i := 0; i < numObjects; i++ {
		ax := rnd.Int63n(maxX)
		ay := rnd.Int63n(maxY)
		az := int64(0)
		pt := geometry.Point64{X: ax, Y: ay, Z: az}
		initialAnchors[i] = pt

		var w, h, d int16
		var tag int
		if i%10 == 0 {
			tag = tagHub
			w, h, d = 16, 12, 6
		} else {
			tag = tagItem
			switch i % 4 {
			case 0:
				w, h, d = 4, 4, 3
			case 1:
				w, h, d = 7, 5, 4
			case 2:
				w, h, d = 10, 8, 5
			default:
				w, h, d = 6, 6, 4
			}
		}

		e := entity.BuildTestEntity(entity.TestEntity{
			ID:     uint64(i + 1),
			Anchor: pt,
			W:      w,
			H:      h,
			D:      d,
			Tags:   []int{tag},
		})
		allEntities[i] = e
		entityGrid.Insert(e)
	}

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
			MinDistance: 3,
		},
		&rules.ProximityRule{
			Target:  selItem,
			To:      selHub,
			MaxDist: 30,
		},
		&rules.AlignmentRule{
			Target: selItem,
			Axis:   rules.AxisX,
			Radius: 20,
		},
	}

	state := solver.NewState(entityGrid, nil, allEntities, ruleSet)
	return state, initialAnchors
}

func runBenchmark(b *testing.B, numObjects int, gridSize int64) {
	state, initialAnchors := setupBenchmarkState(numObjects, gridSize)
	cfg := solver.DefaultForceSolverConfig()
	s := solver.NewForceSolver(state, cfg)

	b.ReportAllocs()
	b.ResetTimer()

	for b.Loop() {
		b.StopTimer()
		for i, e := range state.Entities {
			oldMin, oldMax := e.WorldBounds()
			e.State.Anchor = initialAnchors[i]
			newMin, newMax := e.WorldBounds()
			if oldMin != newMin || oldMax != newMax {
				state.EntityGrid.Move(e, oldMin, oldMax, newMin, newMax)
			}
		}
		b.StartTimer()

		res := s.Solve()
		b.ReportMetric(float64(res.Iterations), "iters/op")
		b.ReportMetric(float64(res.FinalStress), "stress")
	}
}

func BenchmarkForceSolver_1K(b *testing.B) {
	runBenchmark(b, 1_000, 320)
}

func BenchmarkForceSolver_10K(b *testing.B) {
	runBenchmark(b, 10_000, 1_000)
}

func BenchmarkForceSolver_100K(b *testing.B) {
	runBenchmark(b, 100_000, 3_200)
}

func BenchmarkForceSolver_1M(b *testing.B) {
	runBenchmark(b, 1_000_000, 10_000)
}

func BenchmarkForceSolver_Step_10K(b *testing.B) {
	state, _ := setupBenchmarkState(10_000, 1_000)
	cfg := solver.DefaultForceSolverConfig()
	cfg.MaxIterations = 1
	s := solver.NewForceSolver(state, cfg)

	b.ReportAllocs()
	b.ResetTimer()

	for b.Loop() {
		_ = s.Solve()
	}
}

func BenchmarkForceSolver_ZeroAllocs(b *testing.B) {
	eg, err := grid.NewGrid[*entity.Entity](3, -1000, -1000, -1000, 1000, 1000, 1000, 100)
	if err != nil {
		b.Fatal(err)
	}

	sizes := [][3]int16{
		{4, 4, 3},
		{8, 6, 4},
		{12, 8, 5},
		{6, 6, 4},
	}

	entities := make([]*entity.Entity, 20)
	for i := 0; i < 20; i++ {
		sz := sizes[i%len(sizes)]
		e := entity.BuildTestEntity(entity.TestEntity{
			ID:     uint64(i + 1),
			Anchor: geometry.Point64{X: int64(10 + i*6), Y: 50, Z: 50},
			W:      sz[0], H: sz[1], D: sz[2],
		})
		eg.Insert(e)
		entities[i] = e
	}

	ruleSet := []rules.Rule{
		&rules.NoCollisionRule{
			Target:   rules.Selector{MatchAny: true},
			Obstacle: rules.Selector{MatchAny: true},
		},
		&rules.SeparationRule{
			Target:      rules.Selector{MatchAny: true},
			Obstacle:    rules.Selector{MatchAny: true},
			MinDistance: 2,
		},
		&rules.AlignmentRule{
			Target: rules.Selector{MatchAny: true},
			Axis:   rules.AxisY,
			Radius: 25,
		},
	}

	state := solver.NewState(eg, nil, entities, ruleSet)
	cfg := solver.DefaultForceSolverConfig()
	cfg.MaxIterations = 10

	s := solver.NewForceSolver(state, cfg)

	b.ReportAllocs()
	b.ResetTimer()

	for b.Loop() {
		_ = s.Solve()
	}
}
