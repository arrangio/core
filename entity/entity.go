package entity

import (
	"arrangio-core/geometry"
	"arrangio-core/tags"
)

type Entity struct {
	ID          uint64
	IsStatic    bool
	Tags        tags.Mask
	Props       []float64
	Footprint   geometry.Footprint
	LastQueryID uint64
}

func NewEntity(id uint64, isStatic bool, tagMask tags.Mask, props []float64, footprint geometry.Footprint) *Entity {
	return &Entity{
		ID:        id,
		IsStatic:  isStatic,
		Tags:      tagMask,
		Props:     props,
		Footprint: footprint,
	}
}

func (e *Entity) HasTags(required tags.Mask) bool {
	return e.Tags.Has(required)
}

// Spatial interface implementation

func (e *Entity) GetID() uint64 {
	return e.ID
}

func (e *Entity) WorldBounds() (geometry.Point64, geometry.Point64) {
	return e.Footprint.WorldBounds()
}

func (e *Entity) GetQueryID() uint64 {
	return e.LastQueryID
}

func (e *Entity) SetQueryID(id uint64) {
	e.LastQueryID = id
}
