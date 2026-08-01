package rules

import (
	"arrangio-core/entity"
	"arrangio-core/geometry"
	"math"
)

type OrientationRule struct {
	Target       Selector
	Marker       string
	TargetVector geometry.Point64
}

func (r *OrientationRule) Evaluate(e *entity.Entity) float64 {
	if !r.Target.Matches(e) {
		return 1.0
	}

	worldFacing, ok := e.Footprint.WorldFacing(r.Marker)

	// object has no facing with such Marker
	if !ok {
		return 1.0
	}

	// we can calculate an angle between two vectors by using dot product:
	// dot_product = |a| * |b| * cos_theta
	// cos_theta = dot_product / (|a| * |b|)

	// dot product of `worldFacing` and `TargetVector` vectors
	dot := float64(worldFacing.X*r.TargetVector.X +
		worldFacing.Y*r.TargetVector.Y +
		worldFacing.Z*r.TargetVector.Z)

	// lengths of `worldFacing` and `TargetVector` vectors
	lenFacing := math.Sqrt(float64(worldFacing.X*worldFacing.X + worldFacing.Y*worldFacing.Y + worldFacing.Z*worldFacing.Z))
	lenTarget := math.Sqrt(float64(r.TargetVector.X*r.TargetVector.X + r.TargetVector.Y*r.TargetVector.Y + r.TargetVector.Z*r.TargetVector.Z))

	if lenFacing == 0 || lenTarget == 0 {
		return 1.0
	}

	// angle between vectors `worldFacing` and `TargetSelector`
	cosTheta := dot / (lenFacing * lenTarget)

	// cos(0°)   = 1.0  -> Score = 1.0 (perfect)
	// cos(90°)  = 0.0  -> Score = 0.5 (perpendicularly)
	// cos(180°) = -1.0 -> Score = 0.0 (looks at the opposite direction)
	score := (cosTheta + 1.0) / 2.0

	return score
}
