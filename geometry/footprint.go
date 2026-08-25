package geometry

type Footprint struct {
	Anchor  Point64
	Shape   Shape
	Facings *Facings
}

// broad check
func (f *Footprint) IsInsideBound(wx, wy, wz int64) bool {
	min, max := f.Shape.Bounds()

	return wx >= f.Anchor.X+int64(min.X) && wx < f.Anchor.X+int64(max.X) &&
		wy >= f.Anchor.Y+int64(min.Y) && wy < f.Anchor.Y+int64(max.Y) &&
		wz >= f.Anchor.Z+int64(min.Z) && wz < f.Anchor.Z+int64(max.Z)
}

func (f *Footprint) ContainsPoint(wx, wy, wz int64) bool {
	if !f.IsInsideBound(wx, wy, wz) {
		return false
	}

	// narrowed down check
	lx := int16(wx - f.Anchor.X)
	ly := int16(wy - f.Anchor.Y)
	lz := int16(wz - f.Anchor.Z)

	return f.Shape.Contains(lx, ly, lz)
}

// transform shape's relative local bounds into absolute world's space coordinates
func (f *Footprint) WorldBounds() (min, max Point64) {
	var localMin, localMax Point

	// OPTIMIZATION: Devirtualize Shape.Bounds() for known fast paths.
	// Reduces overhead of virtual method calls during frequent bounds lookups.
	switch s := f.Shape.(type) {
	case Box:
		localMin, localMax = s.Bounds()
	case *Box:
		localMin, localMax = s.Bounds()
	case *VoxelShape:
		localMin, localMax = s.Bounds()
	case *RotatedShape:
		localMin, localMax = s.Bounds()
	default:
		localMin, localMax = f.Shape.Bounds()
	}

	return Point64{
			X: f.Anchor.X + int64(localMin.X),
			Y: f.Anchor.Y + int64(localMin.Y),
			Z: f.Anchor.Z + int64(localMin.Z),
		}, Point64{
			X: f.Anchor.X + int64(localMax.X),
			Y: f.Anchor.Y + int64(localMax.Y),
			Z: f.Anchor.Z + int64(localMax.Z),
		}
}

// check if `Shape` is a `Rotatable` interface and if so, use its methods
func (f *Footprint) SetRotation(matrixIdx uint8) bool {
	if rs, ok := f.Shape.(Rotatable); ok {
		rs.SetRotation(matrixIdx)
		return true
	}
	return false
}

func (f *Footprint) GetRotation() uint8 {
	if rs, ok := f.Shape.(Rotatable); ok {
		return rs.GetRotation()
	}
	return 0
}
