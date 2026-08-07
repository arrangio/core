package rules_test

import (
	"testing"

	"arrangio-core/entity"
	"arrangio-core/geometry"
	"arrangio-core/rules"
	"arrangio-core/tags"
)

func TestContainmentRule(t *testing.T) {
	tagA := 10
	tagB := 20

	tests := []struct {
		rule rules.Rule
		tc   RuleTestCase
	}{
		// non-matching `Selector`
		{
			rule: &rules.ContainmentRule{
				Target: rules.Selector{Mask: tags.NewMask().With(tagA)},
				Min:    geometry.Point64{X: 0, Y: 0, Z: 0},
				Max:    geometry.Point64{X: 10, Y: 10, Z: 10},
			},
			tc: RuleTestCase{
				Name: "Selector ignores non-matching entity",
				Subject: entity.TestEntity{
					ID:     1,
					Anchor: geometry.Point64{X: 100, Y: 100, Z: 100},
					W:      2, H: 2, D: 2,
					Tags: []int{tagB},
				},
				Expected: 1.0,
			},
		},

		// subject inside given cube
		{
			rule: &rules.ContainmentRule{
				Target: rules.Selector{MatchAny: true},
				Min:    geometry.Point64{X: 0, Y: 0, Z: 0},
				Max:    geometry.Point64{X: 10, Y: 10, Z: 10},
			},
			tc: RuleTestCase{
				Name: "Fully inside boundaries",
				Subject: entity.TestEntity{
					ID:     1,
					Anchor: geometry.Point64{X: 2, Y: 2, Z: 2},
					W:      5,
					H:      5,
					D:      5,
				},
				Expected: 1.0,
			},
		},

		// subject "touches" the cube
		{
			rule: &rules.ContainmentRule{
				Target: rules.Selector{MatchAny: true},
				Min:    geometry.Point64{X: 0, Y: 0, Z: 0},
				Max:    geometry.Point64{X: 10, Y: 10, Z: 10},
			},
			tc: RuleTestCase{
				Name: "Touching boundary",
				Subject: entity.TestEntity{
					ID:     1,
					Anchor: geometry.Point64{X: 8, Y: 0, Z: 0},
					W:      2,
					H:      10,
					D:      10,
				},
				Expected: 1.0,
			},
		},

		// subject is outside given cube on one axis (diff = 1)
		{
			rule: &rules.ContainmentRule{
				Target: rules.Selector{MatchAny: true},
				Min:    geometry.Point64{X: 0, Y: 0, Z: 0},
				Max:    geometry.Point64{X: 10, Y: 10, Z: 10},
			},
			tc: RuleTestCase{
				Name: "Protruding on X axis by 1 (diff=1 -> score 0.5)",
				Subject: entity.TestEntity{
					ID:     1,
					Anchor: geometry.Point64{X: 9, Y: 0, Z: 0},
					W:      2, H: 2, D: 2,
				},
				Expected: 0.5,
			},
		},
		// subject is outside given cube on multiple axes
		{
			rule: &rules.ContainmentRule{
				Target: rules.Selector{MatchAny: true},
				Min:    geometry.Point64{X: 0, Y: 0, Z: 0},
				Max:    geometry.Point64{X: 10, Y: 10, Z: 10},
			},
			tc: RuleTestCase{
				Name: "Protruding on X (diff=2) and Y below min (diff=1) -> total diff=3 -> score 0.25",
				Subject: entity.TestEntity{
					ID:     1,
					Anchor: geometry.Point64{X: 10, Y: -1, Z: 0},
					W:      2,
					H:      2,
					D:      2,
				},
				Expected: 0.25,
			},
		},
	}

	for _, entry := range tests {
		RunRuleTest(t, entry.rule, entry.tc)
	}
}
