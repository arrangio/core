package rules

import (
	"math"

	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
)

type OrientationRule struct {
	Target       Selector
	Marker       string
	TargetVector geometry.Point64
}

func (r *OrientationRule) scoreFacing(worldFacing geometry.Point64) float64 {
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

	if math.IsNaN(cosTheta) {
		return 0.0
	}

	// protection from float64 inaccuracy
	if cosTheta > 1.0 {
		cosTheta = 1.0
	} else if cosTheta < -1.0 {
		cosTheta = -1.0
	}

	// cos(0°)   = 1.0  -> Score = 1.0 (perfect)
	// cos(90°)  = 0.0  -> Score = 0.5 (perpendicularly)
	// cos(180°) = -1.0 -> Score = 0.0 (looks at the opposite direction)
	return (cosTheta + 1.0) / 2.0
}

func (r *OrientationRule) Evaluate(e *entity.Entity, ctx *RuleContext) float64 {
	if !r.Target.Matches(e) {
		return 1.0
	}

	worldFacing, ok := e.WorldFacing(r.Marker)

	// object has no facing with such Marker
	if !ok {
		return 1.0
	}

	return r.scoreFacing(worldFacing)
}

func (r *OrientationRule) ComputeForce(subject *entity.Entity, forceCtx *ForceContext) ForceAccum {
	var accum ForceAccum
	if !r.Target.Matches(subject) {
		return accum
	}

	var sMin, sMax geometry.Point64
	if forceCtx != nil && forceCtx.HasBounds {
		sMin, sMax = forceCtx.SubjectMin, forceCtx.SubjectMax
	} else {
		sMin, sMax = subject.WorldBounds()
	}
	sizeX := sMax.X - sMin.X
	sizeY := sMax.Y - sMin.Y
	sizeZ := sMax.Z - sMin.Z
	extent := max(sizeX, max(sizeY, sizeZ))

	score := r.Evaluate(subject, nil)
	if score < 1.0 {
		penalty := int64((1.0 - score) * float64(extent))
		accum.Penalty = penalty

		if subject.Def == nil || !subject.Def.CanRotate {
			return accum
		}

		accum.RotScore = 1.0 - score
		bestScore := score
		bestRot := subject.GetRotation()

		// calculate `bestRot` functionally without mutating live entity state
		for rot := uint8(0); rot < 24; rot++ {
			wf, ok := subject.WorldFacingAt(r.Marker, rot)
			if !ok {
				continue
			}
			s := r.scoreFacing(wf)
			if s > bestScore {
				bestScore = s
				bestRot = rot
			}
		}
		accum.BestRot = bestRot
	}

	return accum
}
