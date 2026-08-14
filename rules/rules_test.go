package rules_test

import (
	"math"
	"testing"

	"arrangio-core/entity"
	"arrangio-core/grid"
	"arrangio-core/rules"
)

// RuleTestCase describes the test case
type RuleTestCase struct {
	Name      string
	Subject   entity.TestEntity
	Neighbors []entity.TestEntity // slice of entities that would be placed to the grid
	Expected  float64
	Tolerance float64
}

func RunRuleTest(t *testing.T, rule rules.Rule, tc RuleTestCase) {
	t.Helper()
	t.Run(tc.Name, func(t *testing.T) {
		// initialize grid (shiftBits=3 -> cell size is 8)
		g := grid.NewGrid[*entity.Entity](3, -1000, -1000, -1000, 1000, 1000, 1000, 100)

		// placing neighbors
		for _, nCfg := range tc.Neighbors {
			neighbor := entity.BuildTestEntity(nCfg)
			g.Insert(neighbor)
		}

		// building subject from `TestEntity`
		subject := entity.BuildTestEntity(tc.Subject)
		g.Insert(subject)

		ctx := &rules.RuleContext{
			Grid:   g,
			Buffer: make([]*entity.Entity, 0, 50),
		}

		got := rule.Evaluate(subject, ctx)

		tol := tc.Tolerance
		if tol == 0 {
			tol = 1e-9
		}

		if math.Abs(got-tc.Expected) > tol {
			t.Errorf("\n[FAIL] %s\nEvaluate() = %f, want %f (delta: %e)", tc.Name, got, tc.Expected, tol)
		}
	})
}
