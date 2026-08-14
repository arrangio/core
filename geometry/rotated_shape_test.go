package geometry

import (
	"testing"
)

// check `RotatedShape` methods
var (
	_ Shape     = (*RotatedShape)(nil)
	_ Rotatable = (*RotatedShape)(nil)
)

func TestRotatedShape_Guardrail(t *testing.T) {
	base := &Box{W: 1, H: 1, D: 1}
	rotated := NewRotatedShape(base)

	rotated.SetRotation(24) // no such rotation indexed 24
	if rotated.GetRotation() != 0 {
		t.Errorf("Expected index 24 to reset to 0, got %d", rotated.GetRotation())
	}
}

func TestRotatedShape_VolumeAndContains(t *testing.T) {
	shapes := []struct {
		name  string
		shape Shape
		count int
	}{
		{"Box 3x4x5", &Box{W: 3, H: 4, D: 5}, 60},
		{"Voxel Shape", NewVoxelShape([]Point{{0, 0, 0}, {1, 0, 0}, {0, 1, 0}, {0, 0, 1}}), 4},
	}

	for _, tc := range shapes {
		t.Run(tc.name, func(t *testing.T) {
			rotated := NewRotatedShape(tc.shape)
			for rot := uint8(0); rot < 24; rot++ {
				rotated.SetRotation(rot)

				expectedPoints := make(map[Point]bool)
				rotated.ForEachPoint(func(p Point) bool {
					expectedPoints[p] = true
					return true
				})

				min, max := rotated.Bounds()
				containsCount := 0

				for x := min.X; x < max.X; x++ {
					for y := min.Y; y < max.Y; y++ {
						for z := min.Z; z < max.Z; z++ {
							p := Point{x, y, z}
							if rotated.Contains(x, y, z) != expectedPoints[p] {
								t.Fatalf("rotation %d, Point %v: Contains mismatched", rot, p)
							}
							if rotated.Contains(x, y, z) {
								containsCount++
							}
						}
					}
				}

				if containsCount != tc.count {
					t.Fatalf("rotation %d: expected volume %d, got %d", rot, tc.count, containsCount)
				}
			}
		})
	}
}

func TestRotatedShape_NegativeContains(t *testing.T) {
	t.Run("Check points outside shape", func(t *testing.T) {
		shapes := []struct {
			name  string
			shape Shape
		}{
			{"Box 2x2x2", &Box{W: 2, H: 2, D: 2}},
			{"Voxel L-Shape", NewVoxelShape([]Point{{0, 0, 0}, {1, 0, 0}, {0, 1, 0}})},
		}

		for _, tc := range shapes {
			t.Run(tc.name, func(t *testing.T) {
				rotated := NewRotatedShape(tc.shape)

				for rot := uint8(0); rot < 24; rot++ {
					rotated.SetRotation(rot)
					min, max := rotated.Bounds()

					outside := []Point{
						{min.X - 1, min.Y, min.Z},
						{max.X + 1, min.Y, min.Z},
						{min.X, min.Y - 1, min.Z},
						{min.X, max.Y + 1, min.Z},
						{min.X, min.Y, min.Z - 1},
						{min.X, min.Y, max.Z + 1},
					}

					for _, p := range outside {
						if rotated.Contains(p.X, p.Y, p.Z) {
							t.Errorf("rotation %d: Contains(%v) returned for point outside Bounds() (%v..%v)",
								rot, p, min, max)
						}
					}
				}
			})
		}
	})

	t.Run("Internal voids of a VoxelShape", func(t *testing.T) {
		lShape := NewVoxelShape([]Point{
			{0, 0, 0},
			{1, 0, 0},
			{0, 1, 0},
		})

		rotated := NewRotatedShape(lShape)

		for rot := uint8(0); rot < 24; rot++ {
			rotated.SetRotation(rot)

			validPoints := make(map[Point]bool)
			rotated.ForEachPoint(func(p Point) bool {
				validPoints[p] = true
				return true
			})

			min, max := rotated.Bounds()

			for x := min.X; x < max.X; x++ {
				for y := min.Y; y < max.Y; y++ {
					for z := min.Z; z < max.Z; z++ {
						p := Point{x, y, z}
						if !validPoints[p] && rotated.Contains(x, y, z) {
							t.Errorf("rotation %d: Contains(%v) returned true for empty voxel inside Bounds()", rot, p)
						}
					}
				}
			}
		}
	})
}

func TestRotatedShape_BoundsTightness(t *testing.T) {
	shapes := []Shape{
		&Box{W: 2, H: 3, D: 4},
		NewVoxelShape([]Point{{0, 0, 0}, {2, 0, 0}, {0, 2, 0}}),
	}

	for _, shape := range shapes {
		rotated := NewRotatedShape(shape)

		for rot := uint8(0); rot < 24; rot++ {
			rotated.SetRotation(rot)
			min, max := rotated.Bounds()

			var hasMinX, hasMaxX, hasMinY, hasMaxY, hasMinZ, hasMaxZ bool

			rotated.ForEachPoint(func(p Point) bool {
				if p.X < min.X || p.X >= max.X ||
					p.Y < min.Y || p.Y >= max.Y ||
					p.Z < min.Z || p.Z >= max.Z {
					t.Fatalf("rotation %d: point %v is outside of reported Bounds() %v..%v", rot, p, min, max)
				}

				if p.X == min.X {
					hasMinX = true
				}
				if p.X == max.X-1 {
					hasMaxX = true
				}
				if p.Y == min.Y {
					hasMinY = true
				}
				if p.Y == max.Y-1 {
					hasMaxY = true
				}
				if p.Z == min.Z {
					hasMinZ = true
				}
				if p.Z == max.Z-1 {
					hasMaxZ = true
				}

				return true
			})

			if !hasMinX || !hasMaxX || !hasMinY || !hasMaxY || !hasMinZ || !hasMaxZ {
				t.Fatalf("rotation %d: Bounds() %v..%v is not tight for shape", rot, min, max)
			}
		}
	}
}

func TestRotatedShape_EmptyShape(t *testing.T) {
	empty := NewVoxelShape([]Point{})
	rotated := NewRotatedShape(empty)

	for rot := uint8(0); rot < 24; rot++ {
		rotated.SetRotation(rot)

		count := 0
		rotated.ForEachPoint(func(p Point) bool {
			count++
			return true
		})
		if count != 0 {
			t.Errorf("Expected 0 points for empty shape, got %d", count)
		}

		if rotated.Contains(0, 0, 0) {
			t.Errorf("Empty shape shouldn't contain any point")
		}
	}
}

// end-to-end rotation logic test
// prevents "symmetrically broken" math where both forward and inverse
// matrices are wrong in identical ways
func TestRotatedShape_SpecificRotationCheck(t *testing.T) {
	base := &Box{W: 1, H: 2, D: 3}
	rotated := NewRotatedShape(base)

	foundTargetRotation := false

	for i := uint8(0); i < 24; i++ {
		rotated.SetRotation(i)
		min, max := rotated.Bounds()

		dx := max.X - min.X
		dy := max.Y - min.Y
		dz := max.Z - min.Z

		if dx == 2 && dy == 1 && dz == 3 {
			foundTargetRotation = true
			matrix := rotationMatrices[i]

			srcPoint := Point{X: 0, Y: 1, Z: 2}

			dstPoint := applyForwardRotation(srcPoint, matrix)

			absX := dstPoint.X
			if absX < 0 {
				absX = -absX
			}
			absY := dstPoint.Y
			if absY < 0 {
				absY = -absY
			}
			absZ := dstPoint.Z
			if absZ < 0 {
				absZ = -absZ
			}

			if absX != 1 || absY != 0 || absZ != 2 {
				t.Errorf("Rotation %d: failed end-to-end. Got magnitudes %v, expected {1, 0, 2}",
					i, []int16{absX, absY, absZ})
			}

			if !rotated.Contains(dstPoint.X, dstPoint.Y, dstPoint.Z) {
				t.Errorf("Rotation %d: failed to contain expected mapped point %v", i, dstPoint)
			}
			break
		}
	}

	if !foundTargetRotation {
		t.Error("Could not find a valid 90-degree Z-axis rotation matrix in precomputed pool")
	}
}
