package grid_test

import (
	"arrangio-core/entity"
	"arrangio-core/geometry"
	"arrangio-core/grid"
	"fmt"
	"slices"
	"testing"
)

type GridConfig struct {
	ShiftBits         uint8
	MinX, MinY, MinZ  int64
	MaxX, MaxY, MaxZ  int64
	MaxObjectsPerCell int
}

func DefaultGridConfig() GridConfig {
	return GridConfig{
		ShiftBits:         3,
		MinX:              -1000,
		MinY:              -1000,
		MinZ:              -1000,
		MaxX:              1000,
		MaxY:              1000,
		MaxZ:              1000,
		MaxObjectsPerCell: 100,
	}
}

type ActionType string

const (
	Insert ActionType = "INSERT"
	Remove ActionType = "REMOVE"
	Query  ActionType = "QUERY"
)

type GridAction struct {
	Type     ActionType
	Entity   *entity.TestEntity
	EntityID uint64
	QueryMin geometry.Point64
	QueryMax geometry.Point64
	Expected []uint64
}

type GridTestCase struct {
	Name       string
	GridConfig *GridConfig
	Actions    []GridAction
}

func RunGridTest(t *testing.T, tc GridTestCase) {
	t.Helper()
	t.Run(tc.Name, func(t *testing.T) {
		cfg := DefaultGridConfig()
		if tc.GridConfig != nil {
			cfg = *tc.GridConfig
		}

		g := grid.NewGrid[*entity.Entity](
			cfg.ShiftBits,
			cfg.MinX, cfg.MinY, cfg.MinZ,
			cfg.MaxX, cfg.MaxY, cfg.MaxZ,
			cfg.MaxObjectsPerCell,
		)

		entityCache := make(map[uint64]*entity.Entity)

		for stepIdx, act := range tc.Actions {
			stepName := fmt.Sprintf("Step %d [%s]", stepIdx+1, act.Type)

			switch act.Type {
			case Insert:
				if act.Entity == nil {
					t.Fatalf("%s: nil Entity for Insert operation", stepName)
				}
				e := entity.BuildTestEntity(*act.Entity)
				entityCache[e.ID] = e
				g.Insert(e)
			case Remove:
				e, ok := entityCache[act.EntityID]
				if !ok {
					t.Fatalf("%s: entity with ID %d not found", stepName, act.EntityID)
				}
				g.Remove(e)
				delete(entityCache, act.EntityID)
			case Query:
				buf := make([]*entity.Entity, 0, 50)
				res := g.QueryBuf(act.QueryMin, act.QueryMax, buf)

				gotIDs := make([]uint64, len(res))
				for i, e := range res {
					gotIDs[i] = e.ID
				}
				slices.Sort(gotIDs)

				wantIDs := slices.Clone(act.Expected)
				slices.Sort(wantIDs)

				if !slices.Equal(gotIDs, wantIDs) {
					t.Errorf("\n[FAIL] %s in '%s'\nQuery result mismatch:\n  Got:	%v\n  Expected:  %v", stepName, tc.Name, gotIDs, wantIDs)
				}
			}
		}
	})
}
