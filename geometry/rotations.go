package geometry

import "math"

// because we rotate only in 90--degree increments, the matrix cells
// only contain -1, 0, 1
type RotationMatrix [3][3]int16

// precomputed pool of all 24 valid 3D rotations
var rotationMatrices = computeRotations()

// rotates local point `p` forward into world space with matrix `m`
// standard matrix-vector multiplication
func applyForwardRotation(p Point, m RotationMatrix) Point {
	x := int32(p.X)*int32(m[0][0]) + int32(p.Y)*int32(m[0][1]) + int32(p.Z)*int32(m[0][2])
	y := int32(p.X)*int32(m[1][0]) + int32(p.Y)*int32(m[1][1]) + int32(p.Z)*int32(m[1][2])
	z := int32(p.X)*int32(m[2][0]) + int32(p.Y)*int32(m[2][1]) + int32(p.Z)*int32(m[2][2])
	return Point{
		X: int16(min(x, math.MaxInt16)),
		Y: int16(min(y, math.MaxInt16)),
		Z: int16(min(z, math.MaxInt16)),
	}
}

// calculates new bounding box for a rotated shape
func transformBounds(minPt, maxPt Point, m RotationMatrix) (Point, Point) {
	if minPt.X >= maxPt.X || minPt.Y >= maxPt.Y || minPt.Z >= maxPt.Z {
		return minPt, maxPt
	}

	p1 := applyForwardRotation(minPt, m)
	p2 := applyForwardRotation(Point{X: maxPt.X - 1, Y: maxPt.Y - 1, Z: maxPt.Z - 1}, m)

	resMin := Point{
		X: min(p1.X, p2.X),
		Y: min(p1.Y, p2.Y),
		Z: min(p1.Z, p2.Z),
	}
	resMax := Point{
		X: int16(min(int32(max(p1.X, p2.X))+1, math.MaxInt16)),
		Y: int16(min(int32(max(p1.Y, p2.Y))+1, math.MaxInt16)),
		Z: int16(min(int32(max(p1.Z, p2.Z))+1, math.MaxInt16)),
	}

	return resMin, resMax
}

// precompute 24 rotations
func computeRotations() [24]RotationMatrix {
	var matrices [24]RotationMatrix
	idx := 0

	// 6 possible permutations of X, Y and Z
	permutations := [][]int{
		{0, 1, 2}, {0, 2, 1}, {1, 0, 2},
		{1, 2, 0}, {2, 0, 1}, {2, 1, 0},
	}

	// nested loops go through all permutations in two possible directions
	// going from 1 to -1 in order to `Contains()` method of decorator to be branchless
	for _, p := range permutations {
		for _, sx := range []int16{1, -1} {
			for _, sy := range []int16{1, -1} {
				for _, sz := range []int16{1, -1} {
					var m RotationMatrix
					m[0][p[0]] = sx
					m[1][p[1]] = sy
					m[2][p[2]] = sz

					// calculate matrix determinant
					det := m[0][0]*(m[1][1]*m[2][2]-m[1][2]*m[2][1]) -
						m[0][1]*(m[1][0]*m[2][2]-m[1][2]*m[2][0]) +
						m[0][2]*(m[1][0]*m[2][1]-m[1][1]*m[2][0])

					// det == 1 ensures a valid rotation
					if det == 1 && idx < 24 {
						matrices[idx] = m
						idx++
					}
				}
			}
		}
	}
	return matrices
}
