package entity

import (
	"github.com/arrangio/core/geometry"
	"github.com/arrangio/core/tags"
)

// TestEntity is a "blank" for `buildTestEntity` function
type TestEntity struct {
	ID        uint64
	IsStatic  bool
	CanRotate bool
	Anchor    geometry.Point64
	Tags      []int // tags that would be assigned to this entity
	Facings   *geometry.Facings
	W, H, D   int16 // 1x1x1 by default
	Rotation  uint8
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

	def := NewEntityDef(cfg.IsStatic, cfg.CanRotate, nil, geometry.Box{W: w, H: h, D: d}, cfg.Facings)
	e := NewEntity(def, cfg.ID, mask, cfg.Anchor)
	if cfg.Rotation != 0 {
		rot := cfg.Rotation
		if rot >= 24 {
			rot = 0
		}
		e.State.Rotation = rot
		e.State.rotatedShape.SetRotation(rot)
	}
	return e
}
