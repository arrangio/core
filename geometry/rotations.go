package geometry

// because we rotate only in 90--degree increments, the matrix cells
// only contain -1, 0, 1
type RotationMatrix [3][3]int16

// precomputed pool of all 24 valid 3D rotations
var rotationMatrices = computeRotations()

// rotates local point `p` forward into world space with matrix `m`
// standard matrix-vector multiplication
func applyForwardRotation(p Point, m RotationMatrix) Point {
	return Point{
		X: p.X*m[0][0] + p.Y*m[0][1] + p.Z*m[0][2],
		Y: p.X*m[1][0] + p.Y*m[1][1] + p.Z*m[1][2],
		Z: p.X*m[2][0] + p.Y*m[2][1] + p.Z*m[2][2],
	}
}

// calculates new bounding box for a rotated shape
func transformBounds(min, max Point, m RotationMatrix) (Point, Point) {
	if min.X >= max.X || min.Y >= max.Y || min.Z >= max.Z {
		return min, max
	}

	incMax := Point{X: max.X - 1, Y: max.Y - 1, Z: max.Z - 1}

	p1 := applyForwardRotation(min, m)
	p2 := applyForwardRotation(incMax, m)

	resMin := p1
	resMax := p2

	if p1.X > p2.X {
		resMin.X, resMax.X = p2.X, p1.X
	}
	if p1.Y > p2.Y {
		resMin.Y, resMax.Y = p2.Y, p1.Y
	}
	if p1.Z > p2.Z {
		resMin.Z, resMax.Z = p2.Z, p1.Z
	}

	resMax.X++
	resMax.Y++
	resMax.Z++

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
