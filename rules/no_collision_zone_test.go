package rules_test

import (
	"arrangio-core/entity"
	"arrangio-core/geometry"
	"arrangio-core/grid"
	"arrangio-core/rules"
	"arrangio-core/scene"
	"math"
	"testing"
)

// Extend testing framework slightly to inject zones
type RuleTestCaseWithZone struct {
	Name      string
	Subject   entity.TestEntity
	Zones     []*scene.Zone
	IsStatic  bool // marks subject as static
	Expected  float64
}

func RunRuleTestWithZone(t *testing.T, rule rules.Rule, tc RuleTestCaseWithZone) {
	t.Helper()
	t.Run(tc.Name, func(t *testing.T) {
		g := grid.NewGrid[*entity.Entity](3, -1000, -1000, -1000, 1000, 1000, 1000, 100)
		zGrid := grid.NewGrid[*scene.Zone](3, -1000, -1000, -1000, 1000, 1000, 1000, 100)

		for _, z := range tc.Zones {
			zGrid.Insert(z)
		}

		subject := entity.BuildTestEntity(tc.Subject)
		subject.IsStatic = tc.IsStatic
		g.Insert(subject)

		ctx := &rules.RuleContext{
			Env:        scene.NewEnvironment(g, zGrid),
			Buffer:     make([]*entity.Entity, 0, 50),
			ZoneBuffer: make([]*scene.Zone, 0, 50),
		}

		got := rule.Evaluate(subject, ctx)

		if math.Abs(got-tc.Expected) > 1e-9 {
			t.Errorf("\n[FAIL] %s\nEvaluate() = %f, want %f", tc.Name, got, tc.Expected)
		}
	})
}

func TestNoCollisionZoneRule(t *testing.T) {
	rule := &rules.NoCollisionRule{
		Target: rules.Selector{MatchAny: true},
	}

	tests := []RuleTestCaseWithZone{
		{
			Name: "Collides with restricted zone",
			Subject: entity.TestEntity{
				ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 10, H: 10, D: 10,
			},
			Zones: []*scene.Zone{
				{
					ID: 100, Name: "Restricted",
					Footprint: geometry.Footprint{
						Shape:  geometry.Box{W: 5, H: 5, D: 5},
						Anchor: geometry.Point64{X: 5, Y: 5, Z: 5},
					},
				},
			},
			Expected: 0.0,
		},
		{
			Name: "Does not collide with restricted zone when static",
			Subject: entity.TestEntity{
				ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 10, H: 10, D: 10,
			},
			Zones: []*scene.Zone{
				{
					ID: 100, Name: "Restricted",
					Footprint: geometry.Footprint{
						Shape:  geometry.Box{W: 5, H: 5, D: 5},
						Anchor: geometry.Point64{X: 5, Y: 5, Z: 5},
					},
				},
			},
			IsStatic: true,
			Expected: 1.0,
		},
	}

	for _, tc := range tests {
		RunRuleTestWithZone(t, rule, tc)
	}
}
