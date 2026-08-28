package grid_test

import (
	"testing"

	"arrangio-core/entity"
	"arrangio-core/geometry"
	"arrangio-core/grid"
)

func BenchmarkGridInsert(b *testing.B) {
	g, _ := grid.NewGrid[*entity.Entity](3, -1000, -1000, -1000, 1000, 1000, 1000, 1000)
	e := entity.BuildTestEntity(entity.TestEntity{
		ID:     1,
		Anchor: geometry.Point64{X: 10, Y: 10, Z: 10},
		W:      2, H: 2, D: 2,
	})

	b.ReportAllocs()

	for b.Loop() {
		g.Insert(e)
		g.Remove(e)
	}
}

func BenchmarkGridQuery(b *testing.B) {
	g, _ := grid.NewGrid[*entity.Entity](3, -1000, -1000, -1000, 1000, 1000, 1000, 50000)
	e := entity.BuildTestEntity(entity.TestEntity{
		ID:     1,
		Anchor: geometry.Point64{X: 10, Y: 10, Z: 10},
		W:      50, H: 50, D: 50,
	})

	b.ReportAllocs()

	for b.Loop() {
		g.Insert(e)
		g.Remove(e)
	}
}

func BenchmarkGridInsert_Giant(b *testing.B) {
	g, _ := grid.NewGrid[*entity.Entity](3, -1000, -1000, -1000, 1000, 1000, 1000, 1000)
	e := entity.BuildTestEntity(entity.TestEntity{
		ID:     1,
		Anchor: geometry.Point64{X: 10, Y: 10, Z: 10},
		W:      2, H: 2, D: 2,
	})
	g.Insert(e)

	minQ := geometry.Point64{X: 0, Y: 0, Z: 0}
	maxQ := geometry.Point64{X: 50, Y: 50, Z: 50}
	buf := make([]*entity.Entity, 0, 10)

	b.ReportAllocs()

	for b.Loop() {
		buf = g.QueryBuf(minQ, maxQ, buf[:0])
	}
}

func BenchmarkGridQuery_Dense(b *testing.B) {
	g, _ := grid.NewGrid[*entity.Entity](3, -1000, -1000, -1000, 1000, 1000, 1000, 10000)

	for id := uint64(1); id <= 100; id++ {
		e := entity.BuildTestEntity(entity.TestEntity{
			ID:     id,
			Anchor: geometry.Point64{X: 10, Y: 10, Z: 10},
			W:      5, H: 5, D: 5,
		})
		g.Insert(e)
	}

	minQ := geometry.Point64{X: 0, Y: 0, Z: 0}
	maxQ := geometry.Point64{X: 30, Y: 30, Z: 30}
	buf := make([]*entity.Entity, 0, 200)

	b.ReportAllocs()

	for b.Loop() {
		buf = g.QueryBuf(minQ, maxQ, buf[:0])
	}
}


func BenchmarkGridMove(b *testing.B) {
	g, _ := grid.NewGrid[*entity.Entity](3, -1000, -1000, -1000, 1000, 1000, 1000, 10000)
	e := entity.BuildTestEntity(entity.TestEntity{
		ID:     1,
		Anchor: geometry.Point64{X: 10, Y: 10, Z: 10},
		W:      50, H: 50, D: 50,
	})
	g.Insert(e)

	b.ReportAllocs()
	b.ResetTimer()

	for b.Loop() {
		oldMin, oldMax := e.WorldBounds()
		e.State.Anchor.X++
		newMin, newMax := e.WorldBounds()
		g.Move(e, oldMin, oldMax, newMin, newMax)
	}
}
