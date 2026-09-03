package grid_test

import (
	"testing"

	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
)

func TestGrid(t *testing.T) {
	tests := []GridTestCase{
		{
			Name: "Query an empty grid",
			Actions: []GridAction{
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 0, Y: 0, Z: 0},
					QueryMax: geometry.Point64{X: 10, Y: 10, Z: 10},
					Expected: []uint64{},
				},
			},
		},
		{
			Name: "Insert and query",
			Actions: []GridAction{
				{
					Type:   Insert,
					Entity: &entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 10, Y: 10, Z: 10}, W: 5, H: 5, D: 5},
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 8, Y: 8, Z: 8},
					QueryMax: geometry.Point64{X: 16, Y: 16, Z: 16},
					Expected: []uint64{1},
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 100, Y: 100, Z: 100},
					QueryMax: geometry.Point64{X: 120, Y: 120, Z: 120},
					Expected: []uint64{},
				},
			},
		},
		{
			Name: "Object is inside 4 grid cells",
			Actions: []GridAction{
				{
					Type:   Insert,
					Entity: &entity.TestEntity{ID: 42, Anchor: geometry.Point64{X: 6, Y: 6, Z: 0}, W: 4, H: 4, D: 1},
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 0, Y: 0, Z: 0},
					QueryMax: geometry.Point64{X: 7, Y: 7, Z: 1},
					Expected: []uint64{42},
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 8, Y: 8, Z: 0},
					QueryMax: geometry.Point64{X: 15, Y: 15, Z: 1},
					Expected: []uint64{42},
				},
			},
		},
		{
			Name: "Objects overlap in many cells",
			Actions: []GridAction{
				{
					Type:   Insert,
					Entity: &entity.TestEntity{ID: 10, Anchor: geometry.Point64{X: 1, Y: 1, Z: 1}, W: 2, H: 2, D: 2},
				},
				{
					Type:   Insert,
					Entity: &entity.TestEntity{ID: 20, Anchor: geometry.Point64{X: 3, Y: 3, Z: 3}, W: 2, H: 2, D: 2},
				},
				{
					Type:   Insert,
					Entity: &entity.TestEntity{ID: 30, Anchor: geometry.Point64{X: 5, Y: 5, Z: 5}, W: 2, H: 2, D: 2},
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 0, Y: 0, Z: 0},
					QueryMax: geometry.Point64{X: 7, Y: 7, Z: 7},
					Expected: []uint64{10, 20, 30},
				},
			},
		},
		{
			Name: "Deleting object from the middle of a linked list",
			Actions: []GridAction{
				{
					Type:   Insert,
					Entity: &entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 2, Y: 2, Z: 2}, W: 1, H: 1, D: 1},
				},
				{
					Type:   Insert,
					Entity: &entity.TestEntity{ID: 2, Anchor: geometry.Point64{X: 3, Y: 3, Z: 3}, W: 1, H: 1, D: 1},
				},
				{
					Type:   Insert,
					Entity: &entity.TestEntity{ID: 3, Anchor: geometry.Point64{X: 4, Y: 4, Z: 4}, W: 1, H: 1, D: 1},
				},
				{
					Type:     Remove,
					EntityID: 2,
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 0, Y: 0, Z: 0},
					QueryMax: geometry.Point64{X: 7, Y: 7, Z: 7},
					Expected: []uint64{1, 3},
				},
			},
		},
		{
			Name: "Full cycle of working with grid",
			Actions: []GridAction{
				{
					Type:   Insert,
					Entity: &entity.TestEntity{ID: 100, Anchor: geometry.Point64{X: 10, Y: 10, Z: 10}, W: 2, H: 2, D: 2},
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 0, Y: 0, Z: 0},
					QueryMax: geometry.Point64{X: 20, Y: 20, Z: 20},
					Expected: []uint64{100},
				},
				{
					Type:     Remove,
					EntityID: 100,
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 0, Y: 0, Z: 0},
					QueryMax: geometry.Point64{X: 20, Y: 20, Z: 20},
					Expected: []uint64{},
				},
				{
					Type:   Insert,
					Entity: &entity.TestEntity{ID: 100, Anchor: geometry.Point64{X: 10, Y: 10, Z: 10}, W: 2, H: 2, D: 2},
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 0, Y: 0, Z: 0},
					QueryMax: geometry.Point64{X: 20, Y: 20, Z: 20},
					Expected: []uint64{100},
				},
			},
		},
		{
			Name: "Working with negative coordinates",
			GridConfig: &GridConfig{
				ShiftBits:         4,
				MinX:              -500,
				MinY:              -500,
				MinZ:              -500,
				MaxX:              500,
				MaxY:              500,
				MaxZ:              500,
				MaxObjectsPerCell: 50,
			},
			Actions: []GridAction{
				{
					Type:   Insert,
					Entity: &entity.TestEntity{ID: 55, Anchor: geometry.Point64{X: -100, Y: -200, Z: -50}, W: 10, H: 10, D: 10},
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: -110, Y: -210, Z: -60},
					QueryMax: geometry.Point64{X: -80, Y: -180, Z: -30},
					Expected: []uint64{55},
				},
			},
		},
		{
			Name: "Dynamic growth on insertion limits",
			GridConfig: &GridConfig{
				MaxObjectsPerCell: 0,
			},
			Actions: []GridAction{
				{
					Type:   Insert,
					Entity: &entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 10, Y: 10, Z: 10}, W: 5, H: 5, D: 5},
				},
			},
		},
		{
			Name: "Move object partially out of old cells",
			Actions: []GridAction{
				{
					Type:   Insert,
					Entity: &entity.TestEntity{ID: 7, Anchor: geometry.Point64{X: 6, Y: 6, Z: 6}, W: 4, H: 4, D: 4},
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 0, Y: 0, Z: 0},
					QueryMax: geometry.Point64{X: 7, Y: 7, Z: 7},
					Expected: []uint64{7},
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 8, Y: 8, Z: 8},
					QueryMax: geometry.Point64{X: 15, Y: 15, Z: 15},
					Expected: []uint64{7},
				},
				{
					Type:     Move,
					EntityID: 7,
					MoveDx:   4, // Move out of cell 0, completely into cell 1
					MoveDy:   4,
					MoveDz:   4,
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 0, Y: 0, Z: 0},
					QueryMax: geometry.Point64{X: 7, Y: 7, Z: 7},
					Expected: []uint64{},
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 8, Y: 8, Z: 8},
					QueryMax: geometry.Point64{X: 15, Y: 15, Z: 15},
					Expected: []uint64{7},
				},
			},
		},
		{
			Name: "Move object completely out of old cells",
			Actions: []GridAction{
				{
					Type:   Insert,
					Entity: &entity.TestEntity{ID: 15, Anchor: geometry.Point64{X: 10, Y: 10, Z: 10}, W: 1, H: 1, D: 1},
				},
				{
					Type:     Move,
					EntityID: 15,
					MoveDx:   100, // Move far away to a completely different set of cells
					MoveDy:   0,
					MoveDz:   0,
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 8, Y: 8, Z: 8},
					QueryMax: geometry.Point64{X: 15, Y: 15, Z: 15},
					Expected: []uint64{},
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 104, Y: 8, Z: 8},
					QueryMax: geometry.Point64{X: 111, Y: 15, Z: 15},
					Expected: []uint64{15},
				},
			},
		},
		{
			Name: "Move object within the exact same cells",
			Actions: []GridAction{
				{
					Type:   Insert,
					Entity: &entity.TestEntity{ID: 99, Anchor: geometry.Point64{X: 1, Y: 1, Z: 1}, W: 2, H: 2, D: 2},
				},
				{
					Type:     Move,
					EntityID: 99,
					MoveDx:   1, // Small sub-cell movement, doesn't cross cell boundaries
					MoveDy:   1,
					MoveDz:   1,
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 0, Y: 0, Z: 0},
					QueryMax: geometry.Point64{X: 7, Y: 7, Z: 7},
					Expected: []uint64{99},
				},
			},
		},
		{
			Name: "Move object out of grid boundaries",
			GridConfig: &GridConfig{
				ShiftBits:         3,
				MinX:              0, MinY: 0, MinZ: 0,
				MaxX:              100, MaxY: 100, MaxZ: 100,
				MaxObjectsPerCell: 10,
			},
			Actions: []GridAction{
				{
					Type:   Insert,
					Entity: &entity.TestEntity{ID: 5, Anchor: geometry.Point64{X: 10, Y: 10, Z: 10}, W: 5, H: 5, D: 5},
				},
				{
					Type:     Move,
					EntityID: 5,
					MoveDx:   -50, // Move into negative coordinates (outside the configured 0..100 grid)
					MoveDy:   -50,
					MoveDz:   -50,
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 0, Y: 0, Z: 0},
					QueryMax: geometry.Point64{X: 20, Y: 20, Z: 20},
					Expected: []uint64{},
				},
				{
					Type:     Move,
					EntityID: 5,
					MoveDx:   60, // Move back into valid grid bounds
					MoveDy:   60,
					MoveDz:   60,
				},
				{
					Type:     Query,
					QueryMin: geometry.Point64{X: 20, Y: 20, Z: 20},
					QueryMax: geometry.Point64{X: 30, Y: 30, Z: 30},
					Expected: []uint64{5},
				},
			},
		},
	}

	for _, tc := range tests {
		RunGridTest(t, tc)
	}
}
