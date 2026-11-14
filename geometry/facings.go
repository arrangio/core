package geometry

// map semantic marker names to local direction vectors that show the edges of the object
// Point is a direction vector here, for example:
//
//	Point{X: 0, Y: 1, Z: 0} -> Facing forward (+Y)
type Facings map[string]Point

// apply current rotation to the direction vector if shape is rotatable
func (f *Footprint) WorldFacing(marker string) (Point64, bool) {
	rot := uint8(0)
	if rs, ok := f.Shape.(Rotatable); ok {
		rot = rs.GetRotation()
	}
	return f.WorldFacingAt(marker, rot)
}

// applies `rotation` to the direction vector stored in `Facings` map
func (f *Footprint) WorldFacingAt(marker string, rotation uint8) (Point64, bool) {
	localVec := Point{X: 0, Y: 1, Z: 0} // default fallback = front

	if f.Facings != nil {
		if vec, ok := (*f.Facings)[marker]; ok {
			localVec = vec
		} else if marker != "front" {
			return Point64{}, false
		}
	} else if marker != "front" {
		return Point64{}, false
	}

	if rotation >= 24 {
		rotation = 0
	}
	m := rotationMatrices[rotation]

	return Point64{
		X: int64(localVec.X*m[0][0] + localVec.Y*m[0][1] + localVec.Z*m[0][2]),
		Y: int64(localVec.X*m[1][0] + localVec.Y*m[1][1] + localVec.Z*m[1][2]),
		Z: int64(localVec.X*m[2][0] + localVec.Y*m[2][1] + localVec.Z*m[2][2]),
	}, true
}
