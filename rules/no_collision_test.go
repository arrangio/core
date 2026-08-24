package rules_test

import (
	"testing"

	"arrangio-core/entity"
	"arrangio-core/geometry"
	"arrangio-core/rules"
	"arrangio-core/tags"
)

func TestNoCollisionRule(t *testing.T) {
	tagObstacle := 1
	tagOther := 2

	t.Run("Geometry", func(t *testing.T) {
		rule := &rules.NoCollisionRule{
			Target:   rules.Selector{MatchAny: true},
			Obstacle: rules.Selector{MatchAny: true},
		}

		tests := []RuleTestCase{
			{
				Name:    "No collision (Separated objects)",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				Neighbors: []entity.TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 5, Y: 5, Z: 5}},
				},
				Expected: 1.0,
			},
			{
				Name:    "No collision (objects touching boundaries)",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				Neighbors: []entity.TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 1, Y: 0, Z: 0}},
				},
				Expected: 1.0,
			},
			{
				Name:    "Collision detected (objects overlap)",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				Neighbors: []entity.TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				},
				Expected: 0.0,
			},
			{
				Name:    "Ignore self collision",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				Neighbors: []entity.TestEntity{
					{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				},
				Expected: 1.0,
			},
		}

		for _, tc := range tests {
			RunRuleTest(t, rule, tc)
		}
	})

	t.Run("Selectors", func(t *testing.T) {
		tests := []struct {
			rule rules.Rule
			tc   RuleTestCase
		}{
			{
				rule: &rules.NoCollisionRule{
					Target:   rules.Selector{Mask: tags.NewMask().With(tagObstacle)},
					Obstacle: rules.Selector{MatchAny: true},
				},
				tc: RuleTestCase{
					Name:    "Subject tag mismatch -> ignore rule (score 1.0)",
					Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
					Neighbors: []entity.TestEntity{
						{ID: 2, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, Tags: []int{tagOther}},
					},
					Expected: 1.0,
				},
			},
			{
				rule: &rules.NoCollisionRule{
					Target:   rules.Selector{MatchAny: true},
					Obstacle: rules.Selector{Mask: tags.NewMask().With(tagObstacle)},
				},
				tc: RuleTestCase{
					Name:    "Obstacle tag mismatch -> ignore collision (score 1.0)",
					Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
					Neighbors: []entity.TestEntity{
						{ID: 2, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, Tags: []int{tagOther}},
					},
					Expected: 1.0,
				},
			},
			{
				rule: &rules.NoCollisionRule{
					Target:   rules.Selector{MatchAny: true},
					Obstacle: rules.Selector{TargetID: 42},
				},
				tc: RuleTestCase{
					Name:    "Obstacle TargetID match -> collision detected (score 0.0)",
					Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
					Neighbors: []entity.TestEntity{
						{ID: 42, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
					},
					Expected: 0.0,
				},
			},
		}

		for _, entry := range tests {
			RunRuleTest(t, entry.rule, entry.tc)
		}
	})
}
