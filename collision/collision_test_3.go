package collision

import (
	"arrangio-core/geometry"
	"testing"
)

func BenchmarkCheckCollisionVoxelBoxFast(b *testing.B) {
    box1 := geometry.Box{W: 20, H: 20, D: 20}
    objA := &geometry.Footprint{
		Anchor: geometry.Point64{X: 0, Y: 0, Z: 0},
		Shape:  box1,
	}

    var points []geometry.Point
    for x:=int16(0); x<20; x++ {
        for y:=int16(0); y<20; y++ {
            for z:=int16(0); z<20; z++ {
                points = append(points, geometry.Point{x, y, z})
            }
        }
    }
    voxel := geometry.NewVoxelShape(points)
    objB := &geometry.Footprint{
		Anchor: geometry.Point64{X: 19, Y: 19, Z: 19},
		Shape:  voxel,
	}

    b.ResetTimer()
	for i := 0; i < b.N; i++ {
		CheckCollision(objA, objB)
	}
}
