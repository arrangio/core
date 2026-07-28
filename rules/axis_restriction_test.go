package rules_test

import (
	"testing"

	"arrangio-core/geometry"
	"arrangio-core/rules"
)

func TestAxisRestrictionRule(t *testing.T) {
	tests := []struct {
		rule rules.Rule
		tc   RuleTestCase
	}{
		// OpEq (==)
		{
			rule: &rules.AxisRestrictionRule{
				Axis: rules.AxisZ,
				Op:   rules.OpEq,
				Ref:  0,
			},
			tc: RuleTestCase{
				Name:     "OpEq: matched (Z == 0)",
				Subject:  TestEntity{ID: 1, Anchor: geometry.Point64{X: 10, Y: 10, Z: 0}},
				Expected: 1.0,
			},
		},
		{
			rule: &rules.AxisRestrictionRule{
				Axis: rules.AxisZ,
				Op:   rules.OpEq,
				Ref:  0,
			},
			tc: RuleTestCase{
				Name:     "OpEq: violation above Ref (Z = 1 -> diff = 1 -> score 0.5)",
				Subject:  TestEntity{ID: 1, Anchor: geometry.Point64{X: 10, Y: 10, Z: 1}},
				Expected: 0.5,
			},
		},
		{
			rule: &rules.AxisRestrictionRule{
				Axis: rules.AxisZ,
				Op:   rules.OpEq,
				Ref:  0,
			},
			tc: RuleTestCase{
				Name:     "OpEq: violation below Ref (Z = -2 -> diff = 2 -> score 1/3)",
				Subject:  TestEntity{ID: 1, Anchor: geometry.Point64{X: 10, Y: 10, Z: -2}},
				Expected: 1.0 / 3.0,
			},
		},
		// OpNot (!=)
		{
			rule: &rules.AxisRestrictionRule{
				Axis: rules.AxisX,
				Op:   rules.OpNot,
				Ref:  5,
			},
			tc: RuleTestCase{
				Name:     "OpNot: matched (X != 5)",
				Subject:  TestEntity{ID: 1, Anchor: geometry.Point64{X: 10, Y: 0, Z: 0}},
				Expected: 1.0,
			},
		},
		{
			rule: &rules.AxisRestrictionRule{
				Axis: rules.AxisX,
				Op:   rules.OpNot,
				Ref:  5,
			},
			tc: RuleTestCase{
				Name:     "OpNot: violation (X == 5 -> score = 0.5)",
				Subject:  TestEntity{ID: 1, Anchor: geometry.Point64{X: 5, Y: 0, Z: 0}},
				Expected: 0.5,
			},
		},
		// OpLt (<)
		{
			rule: &rules.AxisRestrictionRule{
				Axis: rules.AxisX,
				Op:   rules.OpLt,
				Ref:  10,
			},
			tc: RuleTestCase{
				Name:     "OpLt: matched (X = 9 < 10)",
				Subject:  TestEntity{ID: 1, Anchor: geometry.Point64{X: 9, Y: 0, Z: 0}},
				Expected: 1.0,
			},
		},
		{
			rule: &rules.AxisRestrictionRule{
				Axis: rules.AxisX,
				Op:   rules.OpLt,
				Ref:  10,
			},
			tc: RuleTestCase{
				Name:     "OpLt: violation (X = 10 -> diff = 10 - 9 = 1 -> score 0.5)",
				Subject:  TestEntity{ID: 1, Anchor: geometry.Point64{X: 10, Y: 0, Z: 0}},
				Expected: 0.5,
			},
		},
		// OpLe (<=)
		{
			rule: &rules.AxisRestrictionRule{
				Axis: rules.AxisY,
				Op:   rules.OpLe,
				Ref:  10,
			},
			tc: RuleTestCase{
				Name:     "OpLe: matched (Y = 10 <= 10)",
				Subject:  TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 10, Z: 0}},
				Expected: 1.0,
			},
		},
		{
			rule: &rules.AxisRestrictionRule{
				Axis: rules.AxisY,
				Op:   rules.OpLe,
				Ref:  10,
			},
			tc: RuleTestCase{
				Name:     "OpLe: violation (Y = 12 -> diff = 12 - 10 = 2 -> score 1/3)",
				Subject:  TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 12, Z: 0}},
				Expected: 1.0 / 3.0,
			},
		},
		// OpGt (>)
		{
			rule: &rules.AxisRestrictionRule{
				Axis: rules.AxisZ,
				Op:   rules.OpGt,
				Ref:  5,
			},
			tc: RuleTestCase{
				Name:     "OpGt: matched (Z = 6 > 5)",
				Subject:  TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 6}},
				Expected: 1.0,
			},
		},
		{
			rule: &rules.AxisRestrictionRule{
				Axis: rules.AxisZ,
				Op:   rules.OpGt,
				Ref:  5,
			},
			tc: RuleTestCase{
				Name:     "OpGt: violation (Z = 5 -> diff = 6 - 5 = 1 -> score 0.5)",
				Subject:  TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 5}},
				Expected: 0.5,
			},
		},
		// OpGe (>=)
		{
			rule: &rules.AxisRestrictionRule{
				Axis: rules.AxisY,
				Op:   rules.OpGe,
				Ref:  5,
			},
			tc: RuleTestCase{
				Name:     "OpGe: matched (Y = 5 >= 5)",
				Subject:  TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 5, Z: 0}},
				Expected: 1.0,
			},
		},
		{
			rule: &rules.AxisRestrictionRule{
				Axis: rules.AxisY,
				Op:   rules.OpGe,
				Ref:  5,
			},
			tc: RuleTestCase{
				Name:     "OpGe: violation (Y = 3 -> diff = 5 - 3 = 2 -> score 1/3)",
				Subject:  TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 3, Z: 0}},
				Expected: 1.0 / 3.0,
			},
		},
		{
			rule: &rules.AxisRestrictionRule{
				Axis: 99, // this axis does not exists
				Op:   rules.OpEq,
				Ref:  0,
			},
			tc: RuleTestCase{
				Name:     "Invalid Axis returns 0.0",
				Subject:  TestEntity{ID: 1, Anchor: geometry.Point64{X: 0, Y: 0, Z: 0}},
				Expected: 0.0,
			},
		},
	}

	for _, entry := range tests {
		RunRuleTest(t, entry.rule, entry.tc)
	}
}
