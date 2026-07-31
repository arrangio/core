package geometry

type Shape interface {
	Contains(lx, ly, lz int16) bool
	Bounds() (min, max Point)
	ForEachPoint(fn func(p Point))
}

// simple shape - parallelepiped
type Box struct {
	W, H, D int16
}

func (b Box) Contains(lx, ly, lz int16) bool {
	return lx >= 0 && lx < b.W && ly >= 0 && ly < b.H && lz >= 0 && lz < b.D
}

func (b Box) Bounds() (min, max Point) {
	return Point{0, 0, 0}, Point{b.W, b.H, b.D}
}

func (b Box) ForEachPoint(fn func(p Point)) {
	for x := int16(0); x < b.W; x++ {
		for y := int16(0); y < b.H; y++ {
			for z := int16(0); z < b.D; z++ {
				fn(Point{x, y, z})
			}
		}
	}
}