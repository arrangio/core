package solver_test

import (
	"testing"

	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/grid"
	"github.com/arrangio/core/rules"
	"github.com/arrangio/core/solver"
	"github.com/arrangio/core/zones"
)

type TestRig struct {
	State    *solver.State
	Director *solver.ScoreDirector
	Entities []*entity.Entity
	Zones    []*zones.Zone
}

// Access entity by ID
func (r *TestRig) GetEntity(id uint64) *entity.Entity {
	for _, e := range r.Entities {
		if e.Def.ID == id {
			return e
		}
	}
	return nil
}

type SolverTestCase struct {
	Name     string
	Entities []entity.TestEntity
	Zones    []zones.TestZone
	Rules    []rules.Rule
	Run      func(t *testing.T, rig *TestRig)
}

func RunSolverTest(t *testing.T, tc SolverTestCase) {
	t.Helper()
	t.Run(tc.Name, func(t *testing.T) {
		eg, err := grid.NewGrid[*entity.Entity](3, -1000, -1000, -1000, 1000, 1000, 1000, 100)
		if err != nil {
			t.Fatal(err)
		}
		zg, err := grid.NewGrid[*zones.Zone](3, -1000, -1000, -1000, 1000, 1000, 1000, 100)
		if err != nil {
			t.Fatal(err)
		}

		entities := make([]*entity.Entity, 0, len(tc.Entities))
		for _, cfg := range tc.Entities {
			e := entity.BuildTestEntity(cfg)
			eg.Insert(e)
			entities = append(entities, e)
		}

		zList := make([]*zones.Zone, 0, len(tc.Zones))
		for _, zCfg := range tc.Zones {
			z := zones.BuildTestZone(zCfg)
			zg.Insert(z)
			zList = append(zList, z)
		}

		state := solver.NewState(eg, zg, entities, tc.Rules)
		director := solver.NewScoreDirector(state)

		rig := &TestRig{
			State:    state,
			Director: director,
			Entities: entities,
			Zones:    zList,
		}

		if tc.Run != nil {
			tc.Run(t, rig)
		}
	})
}
