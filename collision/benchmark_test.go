package collision

import (
	"arrangio-core/geometry"
	"testing"
)

func BenchmarkCheckCollisionVoxel(b *testing.B) {
	// Create large voxel shape
	points := make([]geometry.Point, 0, 1000)
	for x := int16(0); x < 10; x++ {
		for y := int16(0); y < 10; y++ {
			for z := int16(0); z < 10; z++ {
				points = append(points, geometry.Point{X: x, Y: y, Z: z})
			}
		}
	}
	shape := geometry.NewVoxelShape(points)

	objA := &geometry.Footprint{
		Anchor: geometry.Point64{X: 0, Y: 0, Z: 0},
		Shape:  shape,
	}

	objB := &geometry.Footprint{
		Anchor: geometry.Point64{X: 1, Y: 1, Z: 1}, // overlaps with A, early collision
		Shape:  shape,
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		CheckCollision(objA, objB)
	}
}
