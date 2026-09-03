package rules_test

import (
	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
	"github.com/arrangio/core/rules"
	"github.com/arrangio/core/tags"
	"testing"
)

func TestSeparationRule(t *testing.T) {
	tagA := 10
	tagB := 20

	selectorA := rules.Selector{Mask: tags.NewMask().With(tagA)}
	selectorB := rules.Selector{Mask: tags.NewMask().With(tagB)}

	baseRule := &rules.SeparationRule{
		Target:      selectorA,
		Obstacle:    selectorB,
		MinDistance: 5,
	}

	tests := []struct {
		rule rules.Rule
		tc   RuleTestCase
	}{
		{
			rule: baseRule,
			tc: RuleTestCase{
				Name: "Ignore object with non-matching Selector",
				Subject: entity.TestEntity{
					ID:     1,
					Anchor: geometry.Point64{X: 0, Y: 0, Z: 0},
					Tags:   []int{tagB},
				},
				Neighbors: []entity.TestEntity{
					{
						ID:     2,
						Anchor: geometry.Point64{X: 1, Y: 0, Z: 0},
						Tags:   []int{tagB},
					},
				},
				Expected: 1.0,
			},
		},

		{
			rule: baseRule,
			tc: RuleTestCase{
				Name: "No obstacles in a grid",
				Subject: entity.TestEntity{
					ID:     1,
					Anchor: geometry.Point64{X: 0, Y: 0, Z: 0},
					Tags:   []int{tagA},
				},
				Neighbors: []entity.TestEntity{},
				Expected:  1.0,
			},
		},

		{
			rule: baseRule,
			tc: RuleTestCase{
				Name: "Obstacle is exactly `MinDistance` far away",
				Subject: entity.TestEntity{
					ID:     1,
					Anchor: geometry.Point64{X: 0, Y: 0, Z: 0},
					W:      2, H: 2, D: 2,
					Tags: []int{tagA},
				},
				Neighbors: []entity.TestEntity{
					{
						ID:     2,
						Anchor: geometry.Point64{X: 7, Y: 0, Z: 0},
						W:      2, H: 2, D: 2,
						Tags: []int{tagB},
					},
				},
				Expected: 1.0,
			},
		},

		{
			rule: baseRule,
			tc: RuleTestCase{
				Name: "Obstacle is inside separation zone (dist=2, min-5) -> score 0.4",
				Subject: entity.TestEntity{
					ID:     1,
					Anchor: geometry.Point64{X: 0, Y: 0, Z: 0},
					W:      2, H: 2, D: 2,
					Tags: []int{tagA},
				},
				Neighbors: []entity.TestEntity{
					{
						ID:     2,
						Anchor: geometry.Point64{X: 4, Y: 0, Z: 0},
						W:      2, H: 2, D: 2,
						Tags: []int{tagB},
					},
				},
				Expected: 0.4,
			},
		},

		{
			rule: baseRule,
			tc: RuleTestCase{
				Name: "Obstacle overlaps or touches -> score 0.0",
				Subject: entity.TestEntity{
					ID:     1,
					Anchor: geometry.Point64{X: 0, Y: 0, Z: 0},
					W:      2, H: 2, D: 2,
					Tags: []int{tagA},
				},
				Neighbors: []entity.TestEntity{
					{
						ID:     2,
						Anchor: geometry.Point64{X: 1, Y: 0, Z: 0},
						W:      2, H: 2, D: 2,
						Tags: []int{tagB},
					},
				},
				Expected: 0.0,
			},
		},
	}

	for _, entry := range tests {
		RunRuleTest(t, entry.rule, entry.tc)
	}
}
