package grid_test

import (
	"slices"
	"sync"
	"testing"

	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
	"github.com/arrangio/core/grid"
)

func TestQueryBufWithContext_Basic(t *testing.T) {
	g, err := grid.NewGrid[*entity.Entity](3, -100, -100, -100, 100, 100, 100, 50)
	if err != nil {
		t.Fatalf("failed to create grid: %v", err)
	}

	e1 := entity.BuildTestEntity(entity.TestEntity{
		ID:     1,
		Anchor: geometry.Point64{X: 10, Y: 10, Z: 10},
		W:      5, H: 5, D: 5,
	})
	e2 := entity.BuildTestEntity(entity.TestEntity{
		ID:     2,
		Anchor: geometry.Point64{X: 12, Y: 12, Z: 10}, // overlaps across multiple cells
		W:      16, H: 16, D: 5,
	})
	e3 := entity.BuildTestEntity(entity.TestEntity{
		ID:     3,
		Anchor: geometry.Point64{X: 80, Y: 80, Z: 80},
		W:      5, H: 5, D: 5,
	})

	g.Insert(e1)
	g.Insert(e2)
	g.Insert(e3)

	qctx := grid.NewQueryContext[*entity.Entity](16)

	// Query box covering e1 and e2
	searchMin := geometry.Point64{X: 0, Y: 0, Z: 0}
	searchMax := geometry.Point64{X: 30, Y: 30, Z: 30}

	res := g.QueryBufWithContext(searchMin, searchMax, qctx)
	if len(res) != 2 {
		t.Fatalf("expected 2 entities, got %d", len(res))
	}

	gotIDs := []uint64{res[0].Def.ID, res[1].Def.ID}
	slices.Sort(gotIDs)
	if gotIDs[0] != 1 || gotIDs[1] != 2 {
		t.Fatalf("unexpected IDs: %v", gotIDs)
	}

	// Compare with QueryBuf
	bufLegacy := make([]*entity.Entity, 0, 16)
	resLegacy := g.QueryBuf(searchMin, searchMax, bufLegacy)
	if len(resLegacy) != len(res) {
		t.Fatalf("QueryBufWithContext (%d) differs from QueryBuf (%d)", len(res), len(resLegacy))
	}
}

func TestQueryBufWithContext_OutOfBounds(t *testing.T) {
	g, err := grid.NewGrid[*entity.Entity](3, 0, 0, 0, 100, 100, 100, 50)
	if err != nil {
		t.Fatalf("failed to create grid: %v", err)
	}

	e1 := entity.BuildTestEntity(entity.TestEntity{
		ID:     1,
		Anchor: geometry.Point64{X: 10, Y: 10, Z: 10},
		W:      5, H: 5, D: 5,
	})
	g.Insert(e1)

	qctx := grid.NewQueryContext[*entity.Entity](16)

	// Far outside right
	res := g.QueryBufWithContext(
		geometry.Point64{X: 500, Y: 500, Z: 500},
		geometry.Point64{X: 600, Y: 600, Z: 600},
		qctx,
	)
	if len(res) != 0 {
		t.Fatalf("expected empty result for out-of-bounds query, got %d", len(res))
	}

	// Far outside left
	res = g.QueryBufWithContext(
		geometry.Point64{X: -500, Y: -500, Z: -500},
		geometry.Point64{X: -400, Y: -400, Z: -400},
		qctx,
	)
	if len(res) != 0 {
		t.Fatalf("expected empty result for negative out-of-bounds query, got %d", len(res))
	}
}

func TestQueryBufWithContext_DenseClusterOverflow(t *testing.T) {
	g, err := grid.NewGrid[*entity.Entity](3, 0, 0, 0, 200, 200, 200, 5000)
	if err != nil {
		t.Fatalf("failed to create grid: %v", err)
	}

	// Insert 100 entities in the same region (> 64 stack limit to trigger overflowMap)
	const count = 100
	for id := uint64(1); id <= count; id++ {
		e := entity.BuildTestEntity(entity.TestEntity{
			ID:     id,
			Anchor: geometry.Point64{X: 50, Y: 50, Z: 50},
			W:      10, H: 10, D: 10,
		})
		g.Insert(e)
	}

	qctx := grid.NewQueryContext[*entity.Entity](128)

	// Query around the dense cluster
	res := g.QueryBufWithContext(
		geometry.Point64{X: 40, Y: 40, Z: 40},
		geometry.Point64{X: 70, Y: 70, Z: 70},
		qctx,
	)

	if len(res) != count {
		t.Fatalf("expected %d entities from dense cluster, got %d", count, len(res))
	}

	// Verify no duplicates
	seen := make(map[uint64]bool)
	for _, e := range res {
		if seen[e.Def.ID] {
			t.Fatalf("duplicate entity ID %d returned", e.Def.ID)
		}
		seen[e.Def.ID] = true
	}

	// Second query using same context must reset and succeed
	res2 := g.QueryBufWithContext(
		geometry.Point64{X: 40, Y: 40, Z: 40},
		geometry.Point64{X: 70, Y: 70, Z: 70},
		qctx,
	)
	if len(res2) != count {
		t.Fatalf("second query after Reset failed: expected %d, got %d", count, len(res2))
	}
}

func TestQueryBufWithContext_ConcurrentReads(t *testing.T) {
	g, err := grid.NewGrid[*entity.Entity](3, 0, 0, 0, 500, 500, 500, 1000)
	if err != nil {
		t.Fatalf("failed to create grid: %v", err)
	}

	// Insert 200 entities across space
	for id := uint64(1); id <= 200; id++ {
		x := int64((id * 17) % 400)
		y := int64((id * 23) % 400)
		z := int64((id * 31) % 400)
		e := entity.BuildTestEntity(entity.TestEntity{
			ID:     id,
			Anchor: geometry.Point64{X: x, Y: y, Z: z},
			W:      10, H: 10, D: 10,
		})
		g.Insert(e)
	}

	const goroutines = 16
	const queriesPerGoroutine = 100
	var wg sync.WaitGroup
	wg.Add(goroutines)

	for w := 0; w < goroutines; w++ {
		go func(workerID int) {
			defer wg.Done()
			qctx := grid.NewQueryContext[*entity.Entity](64)

			for q := 0; q < queriesPerGoroutine; q++ {
				centerX := int64((workerID*30 + q*7) % 400)
				centerY := int64((workerID*40 + q*11) % 400)
				centerZ := int64((workerID*50 + q*13) % 400)

				searchMin := geometry.Point64{X: centerX - 25, Y: centerY - 25, Z: centerZ - 25}
				searchMax := geometry.Point64{X: centerX + 25, Y: centerY + 25, Z: centerZ + 25}

				res := g.QueryBufWithContext(searchMin, searchMax, qctx)

				// Ensure no duplicates in result
				for i := 0; i < len(res); i++ {
					for j := i + 1; j < len(res); j++ {
						if res[i].Def.ID == res[j].Def.ID {
							t.Errorf("worker %d: duplicate entity %d found", workerID, res[i].Def.ID)
						}
					}
				}
			}
		}(w)
	}

	wg.Wait()
}
