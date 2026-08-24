package grid_test

import (
	"arrangio-core/entity"
	"arrangio-core/grid"
	"testing"
)

func TestGridDynamicGrowth(t *testing.T) {
	// Initialize grid with 0 capacity for nodes
	g := grid.NewGrid[*entity.Entity](4, 0, 0, 0, 100, 100, 100, 0)

	e := entity.BuildTestEntity(entity.TestEntity{
		ID: 1,
		W:  10,
		H:  10,
		D:  10,
	})

	// Should not panic, but dynamically expand
	g.Insert(e)
}
