package rules_test

import (
	"testing"

	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
	"github.com/arrangio/core/rules"
	"github.com/arrangio/core/tags"
)

func TestOrientationRule(t *testing.T) {
	tagTarget := 1
	tagOther := 10

	targetSelector := rules.Selector{Mask: tags.NewMask().With(tagTarget)}

	defaultFacings := &geometry.Facings{
		"front": {X: 0, Y: 1, Z: 0},
	}

	tests := []struct {
		rule rules.Rule
		tc   RuleTestCase
	}{
		// non-matching selector
		{
			rule: &rules.OrientationRule{
				Target:       targetSelector,
				Marker:       "front",
				TargetVector: geometry.Point64{X: 0, Y: 1, Z: 0},
			},
			tc: RuleTestCase{
				Name: "Selector ignores non-matching entity -> 1.0",
				Subject: entity.TestEntity{
					ID:      1,
					Tags:    []int{tagOther},
					Facings: defaultFacings,
				},
				Expected: 1.0,
			},
		},

		// missing marker on matched entity
		{
			rule: &rules.OrientationRule{
				Target:       targetSelector,
				Marker:       "side", // no such marker
				TargetVector: geometry.Point64{X: 0, Y: 1, Z: 0},
			},
			tc: RuleTestCase{
				Name: "Missing marker -> 1.0",
				Subject: entity.TestEntity{
					ID:      1,
					Tags:    []int{tagTarget},
					Facings: defaultFacings,
				},
				Expected: 1.0,
			},
		},

		// perfect match
		{
			rule: &rules.OrientationRule{
				Target:       targetSelector,
				Marker:       "front",
				TargetVector: geometry.Point64{X: 0, Y: 1, Z: 0},
			},
			tc: RuleTestCase{
				Name: "Perfect match: front looks at +Y (cos 0° -> score 1.0)",
				Subject: entity.TestEntity{
					ID:      1,
					Tags:    []int{tagTarget},
					Facings: defaultFacings,
				},
				Expected: 1.0,
			},
		},

		// looks at perpendicular direction
		{
			rule: &rules.OrientationRule{
				Target:       targetSelector,
				Marker:       "front",
				TargetVector: geometry.Point64{X: 1, Y: 0, Z: 0},
			},
			tc: RuleTestCase{
				Name: "Looks perpendicularly: front looks at +X (cos 90° -> score 0.5)",
				Subject: entity.TestEntity{
					ID:      1,
					Tags:    []int{tagTarget},
					Facings: defaultFacings,
				},
				Expected: 0.5,
			},
		},

		// looks at opposite direction
		{
			rule: &rules.OrientationRule{
				Target:       targetSelector,
				Marker:       "front",
				TargetVector: geometry.Point64{X: 0, Y: -1, Z: 0},
			},
			tc: RuleTestCase{
				Name: "Looks at opposite direction: front looks at -Y (cos 180° -> score 0.0)",
				Subject: entity.TestEntity{
					ID:      1,
					Tags:    []int{tagTarget},
					Facings: defaultFacings,
				},
				Expected: 0.0,
			},
		},
	}

	for _, entry := range tests {
		RunRuleTest(t, entry.rule, entry.tc)
	}
}
