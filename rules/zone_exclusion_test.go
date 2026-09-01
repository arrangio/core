package rules_test

import (
	"testing"

	"arrangio-core/entity"
	"arrangio-core/geometry"
	"arrangio-core/rules"
	"arrangio-core/tags"
	"arrangio-core/zones"
)

func TestZoneExclusionRule(t *testing.T) {
	tagA := 1
	tagB := 2

	t.Run("Geometry", func(t *testing.T) {
		rule := &rules.ZoneExclusionRule{
			Target: rules.Selector{MatchAny: true},
			Zone:   rules.Selector{MatchAny: true},
		}

		tests := []RuleTestCase{
			{
				Name:     "No zones in grid -> 1.0",
				Subject:  entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				Zones:    []zones.TestZone{},
				Expected: 1.0,
			},
			{
				Name:    "Subject outside zone (separated) -> 1.0",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				Zones: []zones.TestZone{
					{ID: 10, Anchor: geometry.Point64{X: 5, Y: 0, Z: 0}, W: 3, H: 3, D: 3},
				},
				Expected: 1.0,
			},
			{
				Name:    "Subject touching zone boundary (no overlap) -> 1.0",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 2, H: 2, D: 2},
				Zones: []zones.TestZone{
					{ID: 10, Anchor: geometry.Point64{X: 2, Y: 0, Z: 0}, W: 2, H: 2, D: 2},
				},
				Expected: 1.0,
			},
			{
				Name:    "Subject overlaps zone -> 0.0",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				Zones: []zones.TestZone{
					{ID: 10, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 3, H: 3, D: 3},
				},
				Expected: 0.0,
			},
			{
				Name:    "Multiple zones: only one overlaps -> 0.0",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				Zones: []zones.TestZone{
					{ID: 10, Anchor: geometry.Point64{X: 50, Y: 50, Z: 50}, W: 3, H: 3, D: 3}, // far away
					{ID: 11, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 3, H: 3, D: 3},    // overlaps
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
				rule: &rules.ZoneExclusionRule{
					Target: rules.Selector{Mask: tags.NewMask().With(tagA)},
					Zone:   rules.Selector{MatchAny: true},
				},
				tc: RuleTestCase{
					Name:    "Subject tag mismatch -> ignore rule (score 1.0)",
					Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, Tags: []int{tagB}},
					Zones: []zones.TestZone{
						{ID: 10, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 3, H: 3, D: 3},
					},
					Expected: 1.0,
				},
			},
			{
				rule: &rules.ZoneExclusionRule{
					Target: rules.Selector{MatchAny: true},
					Zone:   rules.Selector{Mask: tags.NewMask().With(tagA)},
				},
				tc: RuleTestCase{
					Name:    "Zone tag mismatch -> ignore zone (score 1.0)",
					Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
					Zones: []zones.TestZone{
						{ID: 10, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 3, H: 3, D: 3, Tags: []int{tagB}},
					},
					Expected: 1.0,
				},
			},
			{
				rule: &rules.ZoneExclusionRule{
					Target: rules.Selector{MatchAny: true},
					Zone:   rules.Selector{Mask: tags.NewMask().With(tagA)},
				},
				tc: RuleTestCase{
					Name:    "Zone tag match -> collision detected (score 0.0)",
					Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
					Zones: []zones.TestZone{
						{ID: 10, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 3, H: 3, D: 3, Tags: []int{tagA}},
					},
					Expected: 0.0,
				},
			},
			{
				rule: &rules.ZoneExclusionRule{
					Target: rules.Selector{MatchAny: true},
					Zone:   rules.Selector{TargetID: 42},
				},
				tc: RuleTestCase{
					Name:    "Zone TargetID match -> collision detected (score 0.0)",
					Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
					Zones: []zones.TestZone{
						{ID: 42, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}, W: 3, H: 3, D: 3},
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
