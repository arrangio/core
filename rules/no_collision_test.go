package rules_test

import (
	"testing"

	"arrangio-core/geometry"
	"arrangio-core/rules"
	"arrangio-core/tags"
)

func TestNoCollisionRule(t *testing.T) {
	tagObstacle := 1
	tagOther := 2

	tests := []struct {
		rule rules.Rule
		tc   RuleTestCase
	}{
		{
			rule: &rules.NoCollisionRule{
				Target: rules.Selector{MatchAny: true},
			},
			tc: RuleTestCase{
				Name:    "No collision (Separated objects)",
				Subject: TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				Neighbors: []TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 5, Y: 5, Z: 5}},
				},
				Expected: 1.0,
			},
		},
		{
			rule: &rules.NoCollisionRule{
				Target: rules.Selector{MatchAny: true},
			},
			tc: RuleTestCase{
				Name:    "No collision (objects touching boundaries)",
				Subject: TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				Neighbors: []TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 1, Y: 0, Z: 0}},
				},
				Expected: 1.0,
			},
		},
		{
			rule: &rules.NoCollisionRule{
				Target: rules.Selector{MatchAny: true},
			},
			tc: RuleTestCase{
				Name:    "Collision detected (objects overlap)",
				Subject: TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				Neighbors: []TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				},
				Expected: 0.0,
			},
		},
		{
			rule: &rules.NoCollisionRule{
				Target: rules.Selector{Mask: tags.NewMask().With(tagObstacle)},
			},
			tc: RuleTestCase{
				Name:    "Collision ignored due to Selector (Tag mismatch)",
				Subject: TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				Neighbors: []TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, Tags: []int{tagOther}},
				},
				Expected: 1.0,
			},
		},
		{
			rule: &rules.NoCollisionRule{
				Target: rules.Selector{TargetID: 42},
			},
			tc: RuleTestCase{
				Name:    "Collision with specific TargetID",
				Subject: TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				Neighbors: []TestEntity{
					{ID: 42, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				},
				Expected: 0.0,
			},
		},
		{
			rule: &rules.NoCollisionRule{
				Target: rules.Selector{MatchAny: true},
			},
			tc: RuleTestCase{
				Name:    "Ignore self collision",
				Subject: TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				Neighbors: []TestEntity{
					{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				},
				Expected: 1.0,
			},
		},
	}

	for _, entry := range tests {
		RunRuleTest(t, entry.rule, entry.tc)
	}
}
