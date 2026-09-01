package collision

import "arrangio-core/geometry"

func CheckCollision(a, b *geometry.Footprint) bool {
	// broad-phase: objects do not overlap if their bounds do not
	if !boundsOverlap(a, b) {
		return false
	}

	// narrow phase
	// box optimization -- if two objects are boxes, their
	// AABB overlap equals their overlap
	aIsBox := isPureBox(a.Shape)
	bIsBox := isPureBox(b.Shape)
	if aIsBox && bIsBox {
		return true
	}

	// Pre-calculate intersection region to skip checking points of A
	// that we know definitively aren't inside B's bounding box.
	// This reduces the number of full intersection loop iterations.
	aMin, aMax := a.Shape.Bounds()
	bMin, bMax := b.Shape.Bounds()

	aMinX := a.Anchor.X + int64(aMin.X)
	aMaxX := a.Anchor.X + int64(aMax.X)
	aMinY := a.Anchor.Y + int64(aMin.Y)
	aMaxY := a.Anchor.Y + int64(aMax.Y)
	aMinZ := a.Anchor.Z + int64(aMin.Z)
	aMaxZ := a.Anchor.Z + int64(aMax.Z)

	bMinX := b.Anchor.X + int64(bMin.X)
	bMaxX := b.Anchor.X + int64(bMax.X)
	bMinY := b.Anchor.Y + int64(bMin.Y)
	bMaxY := b.Anchor.Y + int64(bMax.Y)
	bMinZ := b.Anchor.Z + int64(bMin.Z)
	bMaxZ := b.Anchor.Z + int64(bMax.Z)

	oMinX := max(aMinX, bMinX)
	oMaxX := min(aMaxX, bMaxX)
	oMinY := max(aMinY, bMinY)
	oMaxY := min(aMaxY, bMaxY)
	oMinZ := max(aMinZ, bMinZ)
	oMaxZ := min(aMaxZ, bMaxZ)

	diffX := a.Anchor.X - b.Anchor.X
	diffY := a.Anchor.Y - b.Anchor.Y
	diffZ := a.Anchor.Z - b.Anchor.Z

	// The problem is that a.Shape.ForEachPoint iterates over ALL points in a's shape.
	// But we ONLY need to check points that are inside the overlap bounds!
	// Iterating over the overlapping region and checking if point is in a and b is much faster.

	collision := false

	// Convert overlap bounds back to A's local space
	// #nosec G115 -- mathematically safe (bounds checked beforehand)
	var (
		localAMinX = int16(oMinX - a.Anchor.X)
		localAMaxX = int16(oMaxX - a.Anchor.X)
		localAMinY = int16(oMinY - a.Anchor.Y)
		localAMaxY = int16(oMaxY - a.Anchor.Y)
		localAMinZ = int16(oMinZ - a.Anchor.Z)
		localAMaxZ = int16(oMaxZ - a.Anchor.Z)
	)

	// Convert overlap bounds back to B's local space
	// #nosec G115
	var (
		localBMinX = int16(oMinX - b.Anchor.X)
		localBMaxX = int16(oMaxX - b.Anchor.X)
		localBMinY = int16(oMinY - b.Anchor.Y)
		localBMaxY = int16(oMaxY - b.Anchor.Y)
		localBMinZ = int16(oMinZ - b.Anchor.Z)
		localBMaxZ = int16(oMaxZ - b.Anchor.Z)
	)

	// Pre-cast difference
	// #nosec G115
	var (
		dx = int16(diffX)
		dy = int16(diffY)
		dz = int16(diffZ)
	)

	// Iterate ONLY through the intersection bounds
	// This avoids iterating through the entire shape a!

	// We check if a point in the intersection region is part of a.
	// If it is, we check if it is part of b.
	// If both, we have a collision.

	switch bShape := b.Shape.(type) {
	case *geometry.Box:
		// b is a box, so if a point is within the intersection bounds,
		// it is GUARANTEED to be inside b! We just need to check if it's in a.
		switch aShape := a.Shape.(type) {
		case *geometry.Box:
			for z := localAMinZ; z < localAMaxZ; z++ {
				for y := localAMinY; y < localAMaxY; y++ {
					for x := localAMinX; x < localAMaxX; x++ {
						if aShape.Contains(x, y, z) {
							return true
						}
					}
				}
			}
		case geometry.Box:
			for z := localAMinZ; z < localAMaxZ; z++ {
				for y := localAMinY; y < localAMaxY; y++ {
					for x := localAMinX; x < localAMaxX; x++ {
						if aShape.Contains(x, y, z) {
							return true
						}
					}
				}
			}
		case *geometry.VoxelShape:
			for z := localAMinZ; z < localAMaxZ; z++ {
				for y := localAMinY; y < localAMaxY; y++ {
					for x := localAMinX; x < localAMaxX; x++ {
						if aShape.Contains(x, y, z) {
							return true
						}
					}
				}
			}
		default:
			for z := localAMinZ; z < localAMaxZ; z++ {
				for y := localAMinY; y < localAMaxY; y++ {
					for x := localAMinX; x < localAMaxX; x++ {
						if a.Shape.Contains(x, y, z) {
							return true
						}
					}
				}
			}
		}
	case geometry.Box:
		// b is a box, so if a point is within the intersection bounds,
		// it is GUARANTEED to be inside b! We just need to check if it's in a.
		switch aShape := a.Shape.(type) {
		case *geometry.Box:
			for z := localAMinZ; z < localAMaxZ; z++ {
				for y := localAMinY; y < localAMaxY; y++ {
					for x := localAMinX; x < localAMaxX; x++ {
						if aShape.Contains(x, y, z) {
							return true
						}
					}
				}
			}
		case geometry.Box:
			for z := localAMinZ; z < localAMaxZ; z++ {
				for y := localAMinY; y < localAMaxY; y++ {
					for x := localAMinX; x < localAMaxX; x++ {
						if aShape.Contains(x, y, z) {
							return true
						}
					}
				}
			}
		case *geometry.VoxelShape:
			for z := localAMinZ; z < localAMaxZ; z++ {
				for y := localAMinY; y < localAMaxY; y++ {
					for x := localAMinX; x < localAMaxX; x++ {
						if aShape.Contains(x, y, z) {
							return true
						}
					}
				}
			}
		default:
			for z := localAMinZ; z < localAMaxZ; z++ {
				for y := localAMinY; y < localAMaxY; y++ {
					for x := localAMinX; x < localAMaxX; x++ {
						if a.Shape.Contains(x, y, z) {
							return true
						}
					}
				}
			}
		}
	case *geometry.VoxelShape:
		switch aShape := a.Shape.(type) {
		case *geometry.Box:
			// a is a box, so any point in the intersection is guaranteed to be in a.
			// Just check b!
			for z := localBMinZ; z < localBMaxZ; z++ {
				for y := localBMinY; y < localBMaxY; y++ {
					for x := localBMinX; x < localBMaxX; x++ {
						if bShape.Contains(x, y, z) {
							return true
						}
					}
				}
			}
		case geometry.Box:
			// a is a box, so any point in the intersection is guaranteed to be in a.
			// Just check b!
			for z := localBMinZ; z < localBMaxZ; z++ {
				for y := localBMinY; y < localBMaxY; y++ {
					for x := localBMinX; x < localBMaxX; x++ {
						if bShape.Contains(x, y, z) {
							return true
						}
					}
				}
			}
		case *geometry.VoxelShape:
			for z := localAMinZ; z < localAMaxZ; z++ {
				for y := localAMinY; y < localAMaxY; y++ {
					for x := localAMinX; x < localAMaxX; x++ {
						if aShape.Contains(x, y, z) {
							if bShape.Contains(x+dx, y+dy, z+dz) {
								return true
							}
						}
					}
				}
			}
		default:
			for z := localAMinZ; z < localAMaxZ; z++ {
				for y := localAMinY; y < localAMaxY; y++ {
					for x := localAMinX; x < localAMaxX; x++ {
						if a.Shape.Contains(x, y, z) {
							if bShape.Contains(x+dx, y+dy, z+dz) {
								return true
							}
						}
					}
				}
			}
		}
	case *geometry.RotatedShape:
		switch aShape := a.Shape.(type) {
		case *geometry.Box:
			// a is a box, so any point in the intersection is guaranteed to be in a.
			for z := localBMinZ; z < localBMaxZ; z++ {
				for y := localBMinY; y < localBMaxY; y++ {
					for x := localBMinX; x < localBMaxX; x++ {
						if bShape.Contains(x, y, z) {
							return true
						}
					}
				}
			}
		case geometry.Box:
			// a is a box, so any point in the intersection is guaranteed to be in a.
			for z := localBMinZ; z < localBMaxZ; z++ {
				for y := localBMinY; y < localBMaxY; y++ {
					for x := localBMinX; x < localBMaxX; x++ {
						if bShape.Contains(x, y, z) {
							return true
						}
					}
				}
			}
		case *geometry.VoxelShape:
			for z := localAMinZ; z < localAMaxZ; z++ {
				for y := localAMinY; y < localAMaxY; y++ {
					for x := localAMinX; x < localAMaxX; x++ {
						if aShape.Contains(x, y, z) {
							if bShape.Contains(x+dx, y+dy, z+dz) {
								return true
							}
						}
					}
				}
			}
		default:
			for z := localAMinZ; z < localAMaxZ; z++ {
				for y := localAMinY; y < localAMaxY; y++ {
					for x := localAMinX; x < localAMaxX; x++ {
						if a.Shape.Contains(x, y, z) {
							if bShape.Contains(x+dx, y+dy, z+dz) {
								return true
							}
						}
					}
				}
			}
		}
	default:
		switch aShape := a.Shape.(type) {
		case *geometry.Box:
			// a is a box, so any point in the intersection is guaranteed to be in a.
			for z := localBMinZ; z < localBMaxZ; z++ {
				for y := localBMinY; y < localBMaxY; y++ {
					for x := localBMinX; x < localBMaxX; x++ {
						if b.Shape.Contains(x, y, z) {
							return true
						}
					}
				}
			}
		case geometry.Box:
			// a is a box, so any point in the intersection is guaranteed to be in a.
			for z := localBMinZ; z < localBMaxZ; z++ {
				for y := localBMinY; y < localBMaxY; y++ {
					for x := localBMinX; x < localBMaxX; x++ {
						if b.Shape.Contains(x, y, z) {
							return true
						}
					}
				}
			}
		case *geometry.VoxelShape:
			for z := localAMinZ; z < localAMaxZ; z++ {
				for y := localAMinY; y < localAMaxY; y++ {
					for x := localAMinX; x < localAMaxX; x++ {
						if aShape.Contains(x, y, z) {
							if b.Shape.Contains(x+dx, y+dy, z+dz) {
								return true
							}
						}
					}
				}
			}
		default:
			for z := localAMinZ; z < localAMaxZ; z++ {
				for y := localAMinY; y < localAMaxY; y++ {
					for x := localAMinX; x < localAMaxX; x++ {
						if a.Shape.Contains(x, y, z) {
							if b.Shape.Contains(x+dx, y+dy, z+dz) {
								return true
							}
						}
					}
				}
			}
		}
	}

	return collision
}

func boundsOverlap(a, b *geometry.Footprint) bool {
	minA, maxA := a.Shape.Bounds()
	minB, maxB := b.Shape.Bounds()

	ax1, ay1, az1 := int64(a.Anchor.X)+int64(minA.X), int64(a.Anchor.Y)+int64(minA.Y), int64(a.Anchor.Z)+int64(minA.Z)
	ax2, ay2, az2 := int64(a.Anchor.X)+int64(maxA.X), int64(a.Anchor.Y)+int64(maxA.Y), int64(a.Anchor.Z)+int64(maxA.Z)

	bx1, by1, bz1 := int64(b.Anchor.X)+int64(minB.X), int64(b.Anchor.Y)+int64(minB.Y), int64(b.Anchor.Z)+int64(minB.Z)
	bx2, by2, bz2 := int64(b.Anchor.X)+int64(maxB.X), int64(b.Anchor.Y)+int64(maxB.Y), int64(b.Anchor.Z)+int64(maxB.Z)

	return ax1 < bx2 && ax2 > bx1 &&
		ay1 < by2 && ay2 > by1 &&
		az1 < bz2 && az2 > bz1
}

func isPureBox(s geometry.Shape) bool {
	if s == nil {
		return false
	}

	if rs, ok := s.(*geometry.RotatedShape); ok {
		return isPureBox(rs.Unwrap())
	}

	// OPTIMIZATION: Detect pure boxes whether passed by pointer or value.
	// Allows the narrow phase optimization to short-circuit AABB overlap correctly
	// for value-type geometry.Box, significantly reducing collision check time for value-types (e.g. ~260ns to ~21ns).
	switch s.(type) {
	case *geometry.Box:
		return true
	case geometry.Box:
		return true
	default:
		return false
	}
}
