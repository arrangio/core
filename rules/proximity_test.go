package rules_test

import (
	"testing"

	"arrangio-core/geometry"
	"arrangio-core/rules"
	"arrangio-core/tags"
)

func TestProximityRule(t *testing.T) {
	tagTarget := 1
	tagOther := 2

	rule := &rules.ProximityRule{
		Target: rules.Selector{
			Mask: tags.NewMask().With(tagTarget),
		},
		MaxDist:        10, // MaxDistSq = 100
		RequireClosest: true,
	}

	tests := []RuleTestCase{
		{
			Name: "No neighbors in MaxDist radius -> 0.0",
			Subject: TestEntity{
				ID:     1,
				Anchor: geometry.Point64{X: 50, Y: 50, Z: 50},
				Tags:   []int{tagTarget},
			},
			Neighbors: []TestEntity{},
			Expected:  0.0,
		},
		{
			Name: "Entities have matching Anchors -> 1.0",
			Subject: TestEntity{
				ID:     1,
				Anchor: geometry.Point64{X: 50, Y: 50, Z: 50},
				Tags:   []int{tagTarget},
			},
			Neighbors: []TestEntity{
				{
					ID:     2,
					Anchor: geometry.Point64{X: 50, Y: 50, Z: 50},
					Tags:   []int{tagTarget},
				},
			},
			Expected: 1.0,
		},
		{
			Name: "Neighbor is (3, 4, 0) away -> distSq = 25 -> 1.0 - 25/100 = 0.75",
			Subject: TestEntity{
				ID:     1,
				Anchor: geometry.Point64{X: 50, Y: 50, Z: 50},
				Tags:   []int{tagTarget},
			},
			Neighbors: []TestEntity{
				{
					ID:     2,
					Anchor: geometry.Point64{X: 53, Y: 54, Z: 50}, // dx=3, dy=4 -> distSq = 25
					Tags:   []int{tagTarget},
				},
			},
			Expected: 0.75,
		},
		{
			Name: "Neighbor is out of MaxDist -> return 0.0",
			Subject: TestEntity{
				ID:     1,
				Anchor: geometry.Point64{X: 50, Y: 50, Z: 50},
				Tags:   []int{tagTarget},
			},
			Neighbors: []TestEntity{
				{
					ID:     2,
					Anchor: geometry.Point64{X: 61, Y: 50, Z: 50}, // dx = 11 -> distSq = 121 > 100
					Tags:   []int{tagTarget},
				},
			},
			Expected: 0.0,
		},
		{
			Name: "Many neighbors around (calculate distance to the closest with matching tag) -> return 1.0 - 4/100 = 0.96",
			Subject: TestEntity{
				ID:     1,
				Anchor: geometry.Point64{X: 50, Y: 50, Z: 50},
				Tags:   []int{tagTarget},
			},
			Neighbors: []TestEntity{
				{
					ID:     2,
					Anchor: geometry.Point64{X: 53, Y: 54, Z: 50}, // distSq = 25
					Tags:   []int{tagTarget},
				},
				{
					ID:     3,
					Anchor: geometry.Point64{X: 50, Y: 52, Z: 50}, // distSq = 4
					Tags:   []int{tagTarget},
				},
				{
					ID:     4,
					Anchor: geometry.Point64{X: 50, Y: 50, Z: 50}, // closest, but has another tag
					Tags:   []int{tagOther},
				},
			},
			Expected: 0.96,
		},
	}

	for _, tc := range tests {
		RunRuleTest(t, rule, tc)
	}
}
