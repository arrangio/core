package geometry

import "math"

// VoxelShape -- specified by list of points
type VoxelShape struct {
	points    []Point  // store it for faster `ForEachPoint`
	bitset    []uint64 // for O(1) `Contains` function (1 bit = 1 voxel)
	minBounds Point
	maxBounds Point
	w         int
	h         int
	d         int
	strideY   int
	strideZ   int
}

func satInc(v int16) int16 {
	if v < math.MaxInt16 {
		return v + 1
	}
	return math.MaxInt16
}

func NewVoxelShape(points []Point) *VoxelShape {
	if len(points) == 0 {
		return &VoxelShape{}
	}

	min := points[0]
	max := points[0]

	for _, p := range points {
		if p.X < min.X {
			min.X = p.X
		}
		if p.Y < min.Y {
			min.Y = p.Y
		}
		if p.Z < min.Z {
			min.Z = p.Z
		}

		if p.X > max.X {
			max.X = p.X
		}
		if p.Y > max.Y {
			max.Y = p.Y
		}
		if p.Z > max.Z {
			max.Z = p.Z
		}
	}

	w := int(max.X) - int(min.X) + 1
	h := int(max.Y) - int(min.Y) + 1
	d := int(max.Z) - int(min.Z) + 1

	strideY := w
	strideZ := w * h
	totalBits := int64(strideZ) * int64(d)

	// (totalBits + 63) >> 6 = ceil(totalBits / 64)
	bitset := make([]uint64, (totalBits+63)>>6)

	for _, p := range points {
		// offset relative to minBounds to shift coordinates into [0, size)
		dx := int(p.X - min.X)
		dy := int(p.Y - min.Y)
		dz := int(p.Z - min.Z)

		idx := dz*strideZ + dy*strideY + dx

		// idx >> 6 -- index of a uint64-bucket in a slice
		// idx & 63 -- bit in a uint64-bucket
		bitset[idx>>6] |= 1 << (idx & 63)
	}

	// make a copy of the points slice to prevent external mutation
	pointsCopy := make([]Point, len(points))
	copy(pointsCopy, points)

	maxBounds := Point{
		X: satInc(max.X),
		Y: satInc(max.Y),
		Z: satInc(max.Z),
	}

	return &VoxelShape{
		points:    pointsCopy,
		bitset:    bitset,
		minBounds: min,
		maxBounds: maxBounds,
		w:         w,
		h:         h,
		d:         d,
		strideY:   strideY,
		strideZ:   strideZ,
	}
}

func (v *VoxelShape) Contains(lx, ly, lz int16) bool {
	dx := int(lx) - int(v.minBounds.X)
	dy := int(ly) - int(v.minBounds.Y)
	dz := int(lz) - int(v.minBounds.Z)

	if dx < 0 || dx >= v.w ||
		dy < 0 || dy >= v.h ||
		dz < 0 || dz >= v.d {
		return false
	}

	idx := dz*v.strideZ + dy*v.strideY + dx

	// (idx & 63) is a '1' bit at `idx`` position, others are '0'
	// v.bitset[idx>>6] is a uint64-bucket where sought-for voxel is located
	// v.bitset[idx>>6] & (1 << (idx & 63)) is not 0 only if v.bitset[idx>>6] has '1' bit at idx
	return (v.bitset[idx>>6] & (1 << (idx & 63))) != 0
}

func (v *VoxelShape) Bounds() (min, max Point) {
	return v.minBounds, v.maxBounds
}

func (v *VoxelShape) ForEachPoint(fn func(p Point) bool) {
	for _, p := range v.points {
		if !fn(p) {
			return
		}
	}
}
