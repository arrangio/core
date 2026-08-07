package grid_test

import (
	"testing"

	"arrangio-core/entity"
	"arrangio-core/geometry"
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
	}

	for _, tc := range tests {
		RunGridTest(t, tc)
	}
}
