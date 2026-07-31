package rules_test

import (
	"testing"

	"arrangio-core/geometry"
	"arrangio-core/rules"
	"arrangio-core/tags"
)

func TestClearanceRule(t *testing.T) {
	tagA := 10
	tagB := 20
	tagC := 30

	tests := []struct {
		rule rules.Rule
		tc   RuleTestCase
	}{
		{
			rule: &rules.ClearanceRule{
				Target:   rules.Selector{Mask: tags.NewMask().With(tagA)},
				Obstacle: rules.Selector{MatchAny: true},
				Padding:  geometry.Point64{X: 5, Y: 5, Z: 5},
			},
			tc: RuleTestCase{
				Name: "Subject does not match Target selector -> score 1.0",
				Subject: TestEntity{
					ID:     1,
					Anchor: geometry.Point64{X: 0, Y: 0, Z: 0},
					W:      2, H: 2, D: 2,
					Tags: []int{tagC},
				},
				Neighbors: []TestEntity{
					{
						ID:     2,
						Anchor: geometry.Point64{X: 1, Y: 0, Z: 0},
						W:      2, H: 2, D: 2,
					},
				},
				Expected: 1.0,
			},
		},
		{
			rule: &rules.ClearanceRule{
				Target:   rules.Selector{MatchAny: true},
				Obstacle: rules.Selector{MatchAny: true},
				Padding:  geometry.Point64{X: 5, Y: 5, Z: 5},
			},
			tc: RuleTestCase{
				Name: "Obstacle is outside clearance zone -> score 1.0",
				Subject: TestEntity{
					ID:     1,
					Anchor: geometry.Point64{X: 0, Y: 0, Z: 0},
					W:      2, H: 2, D: 2,
				},
				Neighbors: []TestEntity{
					{
						ID:     2,
						Anchor: geometry.Point64{X: 10, Y: 0, Z: 0},
						W:      2, H: 2, D: 2,
					},
				},
				Expected: 1.0,
			},
		},
		{
			rule: &rules.ClearanceRule{
				Target:   rules.Selector{MatchAny: true},
				Obstacle: rules.Selector{MatchAny: true},
				Padding:  geometry.Point64{X: 5, Y: 5, Z: 5},
			},
			tc: RuleTestCase{
				Name: "Obstacle touches boundary of clearance zone -> score 1.0",
				Subject: TestEntity{
					ID:     1,
					Anchor: geometry.Point64{X: 0, Y: 0, Z: 0},
					W:      2, H: 2, D: 2,
				},
				Neighbors: []TestEntity{
					{
						ID:     2,
						Anchor: geometry.Point64{X: 7, Y: 0, Z: 0},
						W:      2, H: 2, D: 2,
					},
				},
				Expected: 1.0,
			},
		},
		{
			rule: &rules.ClearanceRule{
				Target:   rules.Selector{MatchAny: true},
				Obstacle: rules.Selector{MatchAny: true},
				Padding:  geometry.Point64{X: 5, Y: 5, Z: 5},
			},
			tc: RuleTestCase{
				Name: "Obstacle protrudes into clearance zone by 2 units -> score 1/(2+1) = 0.3333...",
				Subject: TestEntity{
					ID:     1,
					Anchor: geometry.Point64{X: 0, Y: 0, Z: 0},
					W:      2, H: 2, D: 2,
				},
				Neighbors: []TestEntity{
					{
						ID:     2,
						Anchor: geometry.Point64{X: 5, Y: 0, Z: 0},
						W:      2, H: 2, D: 2,
					},
				},
				Expected: 1.0 / 3.0,
			},
		},
		{
			rule: &rules.ClearanceRule{
				Target:   rules.Selector{MatchAny: true},
				Obstacle: rules.Selector{Mask: tags.NewMask().With(tagB)},
				Padding:  geometry.Point64{X: 5, Y: 5, Z: 5},
			},
			tc: RuleTestCase{
				Name: "Ignore neighbors that do not match Obstacle selector",
				Subject: TestEntity{
					ID:     1,
					Anchor: geometry.Point64{X: 0, Y: 0, Z: 0},
					W:      2, H: 2, D: 2,
				},
				Neighbors: []TestEntity{
					{
						ID:     2,
						Anchor: geometry.Point64{X: 1, Y: 0, Z: 0},
						W:      2, H: 2, D: 2,
						Tags: []int{tagC},
					},
				},
				Expected: 1.0,
			},
		},
		{
			rule: &rules.ClearanceRule{
				Target:   rules.Selector{MatchAny: true},
				Obstacle: rules.Selector{MatchAny: true},
				Padding:  geometry.Point64{X: 5, Y: 5, Z: 5},
			},
			tc: RuleTestCase{
				Name: "Rule ignores self match",
				Subject: TestEntity{
					ID:     1,
					Anchor: geometry.Point64{X: 0, Y: 0, Z: 0},
					W:      2, H: 2, D: 2,
				},
				Neighbors: []TestEntity{
					{
						ID:     1,
						Anchor: geometry.Point64{X: 0, Y: 0, Z: 0},
						W:      2, H: 2, D: 2,
					},
				},
				Expected: 1.0,
			},
		},
	}

	for _, entry := range tests {
		RunRuleTest(t, entry.rule, entry.tc)
	}
}
