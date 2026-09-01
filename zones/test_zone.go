package zones

import (
	"arrangio-core/geometry"
	"arrangio-core/tags"
)

// TestZone is a blank for the BuildTestZone function
type TestZone struct {
	ID      uint64
	Name    string
	Anchor  geometry.Point64
	Tags    []int // tags that would be assigned to this zone
	W, H, D int16 // 1x1x1 by default
}

// BuildTestZone builds a Zone from TestZone
func BuildTestZone(cfg TestZone) *Zone {
	mask := tags.NewMask()
	for _, tagID := range cfg.Tags {
		mask = mask.With(tagID)
	}

	w, h, d := cfg.W, cfg.H, cfg.D
	if w == 0 {
		w = 1
	}
	if h == 0 {
		h = 1
	}
	if d == 0 {
		d = 1
	}

	return &Zone{
		ID:   cfg.ID,
		Name: cfg.Name,
		Tags: mask,
		Footprint: geometry.Footprint{
			Anchor: cfg.Anchor,
			Shape:  geometry.Box{W: w, H: h, D: d},
		},
	}
}
