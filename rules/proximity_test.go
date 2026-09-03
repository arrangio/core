package rules_test

import (
	"testing"

	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
	"github.com/arrangio/core/rules"
	"github.com/arrangio/core/tags"
)

func TestProximityRule(t *testing.T) {
	tagTarget := 1
	tagOther := 2

	t.Run("Geometry", func(t *testing.T) {
		rule := &rules.ProximityRule{
			Target:         rules.Selector{MatchAny: true},
			To:             rules.Selector{MatchAny: true},
			MaxDist:        10, // MaxDistSq = 100
			RequireClosest: true,
		}

		tests := []RuleTestCase{
			{
				Name:      "No neighbors in MaxDist radius -> 0.0",
				Subject:   entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 50, Y: 50, Z: 50}},
				Neighbors: []entity.TestEntity{},
				Expected:  0.0,
			},
			{
				Name:    "Entities have matching Anchors -> 1.0",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 50, Y: 50, Z: 50}},
				Neighbors: []entity.TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 50, Y: 50, Z: 50}},
				},
				Expected: 1.0,
			},
			{
				Name:    "Neighbor is (3, 4, 0) away -> distSq = 25 -> 0.75",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 50, Y: 50, Z: 50}},
				Neighbors: []entity.TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 53, Y: 54, Z: 50}},
				},
				Expected: 0.75,
			},
			{
				Name:    "Neighbor is out of MaxDist -> return 0.0",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 50, Y: 50, Z: 50}},
				Neighbors: []entity.TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 61, Y: 50, Z: 50}}, // dx = 11 -> distSq = 121 > 100
				},
				Expected: 0.0,
			},
			{
				Name:    "Multiple neighbors -> select closest (distSq = 4) -> 0.96",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 50, Y: 50, Z: 50}},
				Neighbors: []entity.TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 53, Y: 54, Z: 50}}, // distSq = 25
					{ID: 3, Anchor: geometry.Point64{X: 50, Y: 52, Z: 50}}, // distSq = 4
				},
				Expected: 0.96,
			},
			{
				Name:    "Ignore self -> 0.0",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 50, Y: 50, Z: 50}},
				Neighbors: []entity.TestEntity{
					{ID: 1, Anchor: geometry.Point64{X: 50, Y: 50, Z: 50}},
				},
				Expected: 0.0,
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
				rule: &rules.ProximityRule{
					Target:  rules.Selector{Mask: tags.NewMask().With(tagTarget)},
					To:      rules.Selector{MatchAny: true},
					MaxDist: 10,
				},
				tc: RuleTestCase{
					Name:      "Subject tag mismatch -> ignore rule (score 1.0)",
					Subject:   entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 50, Y: 50, Z: 50}, Tags: []int{tagOther}},
					Neighbors: []entity.TestEntity{{ID: 2, Anchor: geometry.Point64{X: 50, Y: 50, Z: 50}}},
					Expected:  1.0,
				},
			},
			{
				rule: &rules.ProximityRule{
					Target:  rules.Selector{MatchAny: true},
					To:      rules.Selector{Mask: tags.NewMask().With(tagTarget)},
					MaxDist: 10,
				},
				tc: RuleTestCase{
					Name:    "To tag match -> ignore closest with wrong tag, pick matching (distSq = 25) -> 0.75",
					Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 50, Y: 50, Z: 50}},
					Neighbors: []entity.TestEntity{
						{ID: 2, Anchor: geometry.Point64{X: 50, Y: 50, Z: 50}, Tags: []int{tagOther}},  // distSq = 0, wrong tag
						{ID: 3, Anchor: geometry.Point64{X: 53, Y: 54, Z: 50}, Tags: []int{tagTarget}}, // distSq = 25, matching tag
					},
					Expected: 0.75,
				},
			},
			{
				rule: &rules.ProximityRule{
					Target:  rules.Selector{MatchAny: true},
					To:      rules.Selector{TargetID: 42},
					MaxDist: 10,
				},
				tc: RuleTestCase{
					Name:      "To matches specific TargetID -> score 1.0",
					Subject:   entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 50, Y: 50, Z: 50}},
					Neighbors: []entity.TestEntity{{ID: 42, Anchor: geometry.Point64{X: 50, Y: 50, Z: 50}}},
					Expected:  1.0,
				},
			},
		}

		for _, entry := range tests {
			RunRuleTest(t, entry.rule, entry.tc)
		}
	})
}
