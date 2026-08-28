package rules

import (
	"arrangio-core/entity"
	"arrangio-core/geometry"
)

// keep objects with matching `Selector` in cube from `Min` to `Max`
type ContainmentRule struct {
	Target Selector
	Min    geometry.Point64
	Max    geometry.Point64
}

func (r *ContainmentRule) Evaluate(subject *entity.Entity, ctx *RuleContext) float64 {
	if !r.Target.Matches(subject) {
		return 1.0
	}

	subMin, subMax := subject.WorldBounds()

	// `diff` stores a value that shows how far from the cube's bounds min and max points of the subject are
	var diff int64

	if subMin.X < r.Min.X {
		diff += (r.Min.X - subMin.X)
	}
	if subMax.X > r.Max.X {
		diff += (subMax.X - r.Max.X)
	}

	if subMin.Y < r.Min.Y {
		diff += (r.Min.Y - subMin.Y)
	}
	if subMax.Y > r.Max.Y {
		diff += (subMax.Y - r.Max.Y)
	}

	if subMin.Z < r.Min.Z {
		diff += (r.Min.Z - subMin.Z)
	}
	if subMax.Z > r.Max.Z {
		diff += (subMax.Z - r.Max.Z)
	}

	if diff <= 0 {
		return 1.0
	}

	// divide 1.0 by how much object is outside given cube
	return 1.0 / (float64(diff) + 1)
}
