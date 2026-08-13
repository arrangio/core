package rules_test

import (
	"arrangio-core/entity"
	"arrangio-core/geometry"
	"arrangio-core/grid"
	"arrangio-core/rules"
	"arrangio-core/scene"
	"arrangio-core/tags"
	"math"
	"testing"
)

func TestNoCollisionZoneRule(t *testing.T) {
	subject := entity.NewEntity(
		1,
		tags.NewMask(),
		[]float64{},
		geometry.Footprint{
			Shape:  &geometry.Box{W: 10, H: 10, D: 10},
			Anchor: geometry.Point64{X: 0, Y: 0, Z: 0},
		},
	)

	zone := &scene.Zone{
		ID:   100,
		Name: "Restricted",
		Footprint: geometry.Footprint{
			Shape:  &geometry.Box{W: 5, H: 5, D: 5},
			Anchor: geometry.Point64{X: 5, Y: 5, Z: 5}, // overlaps with subject (0..10 overlaps with 5..10)
		},
	}

	entityGrid := grid.NewGrid[*entity.Entity](3, -100, -100, -100, 100, 100, 100, 10)
	zoneGrid := grid.NewGrid[*scene.Zone](3, -100, -100, -100, 100, 100, 100, 10)

	entityGrid.Insert(subject)
	zoneGrid.Insert(zone)

	env := scene.NewEnvironment(entityGrid, zoneGrid)
	ctx := &rules.RuleContext{
		Env:        env,
		Buffer:     make([]*entity.Entity, 0, 10),
		ZoneBuffer: make([]*scene.Zone, 0, 10),
	}

	rule := &rules.NoCollisionRule{
		Target: rules.Selector{MatchAny: true},
	}

	got := rule.Evaluate(subject, ctx)
	expected := 0.0 // it should collide and give 0

	if math.Abs(got-expected) > 1e-9 {
		t.Errorf("Evaluate() = %f, want %f", got, expected)
	}

	// now test static
	subject.IsStatic = true
	gotStatic := rule.Evaluate(subject, ctx)
	expectedStatic := 1.0 // static objects shouldn't be penalized

	if math.Abs(gotStatic-expectedStatic) > 1e-9 {
		t.Errorf("Evaluate() on static = %f, want %f", gotStatic, expectedStatic)
	}
}
