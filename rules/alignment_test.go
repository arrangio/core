package rules_test

import (
	"testing"

	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
	"github.com/arrangio/core/rules"
	"github.com/arrangio/core/tags"
)

func TestAlignmentRule(t *testing.T) {
	tagRack := 10
	tagOther := 20

	tests := []struct {
		rule rules.Rule
		tc   RuleTestCase
	}{
		// test basic alignment on each axis
		{
			rule: &rules.AlignmentRule{
				Target: rules.Selector{MatchAny: true},
				Axis:   rules.AxisX,
				Radius: 50,
			},
			tc: RuleTestCase{
				Name:    "Perfect alignment on X axis (X=10 for both)",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 10, Y: 0, Z: 0}},
				Neighbors: []entity.TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 10, Y: 20, Z: 5}},
				},
				Expected: 1.0,
			},
		},
		{
			rule: &rules.AlignmentRule{
				Target: rules.Selector{MatchAny: true},
				Axis:   rules.AxisY,
				Radius: 50,
			},
			tc: RuleTestCase{
				Name:    "Perfect alignment on Y axis (Y=15 for both)",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 5, Y: 15, Z: 0}},
				Neighbors: []entity.TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 30, Y: 15, Z: 10}},
				},
				Expected: 1.0,
			},
		},
		{
			rule: &rules.AlignmentRule{
				Target: rules.Selector{MatchAny: true},
				Axis:   rules.AxisZ,
				Radius: 50,
			},
			tc: RuleTestCase{
				Name:    "Perfect alignment on Z axis (Z=0 for both)",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				Neighbors: []entity.TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 12, Y: 8, Z: 0}},
				},
				Expected: 1.0,
			},
		},
		// test score being calculated correctly
		{
			rule: &rules.AlignmentRule{
				Target: rules.Selector{MatchAny: true},
				Axis:   rules.AxisX,
				Radius: 50,
			},
			tc: RuleTestCase{
				Name:    "Misalignment by 1 unit on X (diff=1 -> score 1/(1+1) = 0.5)",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 11, Y: 0, Z: 0}},
				Neighbors: []entity.TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 10, Y: 5, Z: 0}},
				},
				Expected: 0.5,
			},
		},
		{
			rule: &rules.AlignmentRule{
				Target: rules.Selector{MatchAny: true},
				Axis:   rules.AxisY,
				Radius: 50,
			},
			tc: RuleTestCase{
				Name:    "Misalignment by 3 units on Y (diff=3 -> score 1/(3+1) = 0.25)",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 10, Z: 0}},
				Neighbors: []entity.TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 0, Y: 7, Z: 0}},
				},
				Expected: 0.25,
			},
		},
		// choose the closest neighbor
		{
			rule: &rules.AlignmentRule{
				Target: rules.Selector{MatchAny: true},
				Axis:   rules.AxisX,
				Radius: 50,
			},
			tc: RuleTestCase{
				Name:    "Selects neighbor with minimum diff (diff=2 vs diff=10 -> uses minDiff=2)",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 12, Y: 0, Z: 0}},
				Neighbors: []entity.TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 2, Y: 0, Z: 0}},  // diff = 10
					{ID: 3, Anchor: geometry.Point64{X: 10, Y: 0, Z: 0}}, // diff = 2 (closest)
				},
				Expected: 1.0 / 3.0,
			},
		},
		// test how rule works with `Selector`
		{
			rule: &rules.AlignmentRule{
				Target: rules.Selector{Mask: tags.NewMask().With(tagRack)},
				Axis:   rules.AxisX,
				Radius: 50,
			},
			tc: RuleTestCase{
				Name:    "Ignore neighbor with non-matching Selector",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 10, Y: 0, Z: 0}},
				Neighbors: []entity.TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 10, Y: 0, Z: 0}, Tags: []int{tagOther}},
				},
				Expected: 1.0,
			},
		},
		{
			rule: &rules.AlignmentRule{
				Target: rules.Selector{MatchAny: true},
				Axis:   rules.AxisX,
				Radius: 50,
			},
			tc: RuleTestCase{
				Name:    "Ignore self",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 10, Y: 0, Z: 0}},
				Neighbors: []entity.TestEntity{
					{ID: 1, Anchor: geometry.Point64{X: 10, Y: 0, Z: 0}}, // same ID
				},
				Expected: 1.0,
			},
		},
		// neighbor outside of `Radius`
		{
			rule: &rules.AlignmentRule{
				Target: rules.Selector{MatchAny: true},
				Axis:   rules.AxisX,
				Radius: 10,
			},
			tc: RuleTestCase{
				Name:    "Neighbor outside search radius",
				Subject: entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				Neighbors: []entity.TestEntity{
					{ID: 2, Anchor: geometry.Point64{X: 100, Y: 100, Z: 100}},
				},
				Expected: 1.0, // no neighbors in search radius
			},
		},
		// non-valid axis
		{
			rule: &rules.AlignmentRule{
				Target: rules.Selector{MatchAny: true},
				Axis:   99, // this axis does not exists
				Radius: 50,
			},
			tc: RuleTestCase{
				Name:     "Invalid axis",
				Subject:  entity.TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				Expected: 0.0,
			},
		},
	}

	for _, entry := range tests {
		RunRuleTest(t, entry.rule, entry.tc)
	}
}
