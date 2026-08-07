package entity

import (
	"arrangio-core/geometry"
	"arrangio-core/tags"
)

// TestEntity is a "blank" for `buildTestEntity` function
type TestEntity struct {
	ID      uint64
	Anchor  geometry.Point64
	Tags    []int // tags that would be assigned to this entity
	Facings *geometry.Facings
	W, H, D int16 // 1x1x1 by default
}

// BuildTestEntity builds an `Entity` from `TestEntity`
func BuildTestEntity(cfg TestEntity) *Entity {
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

	return &Entity{
		ID:   cfg.ID,
		Tags: mask,
		Footprint: geometry.Footprint{
			Anchor:  cfg.Anchor,
			Shape:   geometry.Box{W: w, H: h, D: d},
			Facings: cfg.Facings,
		},
	}
}
