package entity

import (
	"arrangio-core/geometry"
	"arrangio-core/tags"
)

type Entity struct {
	ID          uint64
	Tags        tags.Mask
	Props       []float64
	Footprint   geometry.Footprint
	LastQueryID uint64
	IsStatic    bool
}

func NewEntity(id uint64, tagMask tags.Mask, props []float64, footprint geometry.Footprint) *Entity {
	return &Entity{
		ID:        id,
		Tags:      tagMask,
		Props:     props,
		Footprint: footprint,
	}
}

func (e *Entity) HasTags(required tags.Mask) bool {
	return e.Tags.Has(required)
}

func (e *Entity) GetID() uint64 {
	return e.ID
}

func (e *Entity) GetFootprint() geometry.Footprint {
	return e.Footprint
}

func (e *Entity) GetLastQueryID() uint64 {
	return e.LastQueryID
}

func (e *Entity) SetLastQueryID(id uint64) {
	e.LastQueryID = id
}
