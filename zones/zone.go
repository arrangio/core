package zones

import (
	"github.com/arrangio/core/geometry"
	"github.com/arrangio/core/tags"
)

type Zone struct {
	ID          uint64
	Name        string
	Footprint   geometry.Footprint
	Tags        tags.Mask
	LastQueryID uint64
}

func (z *Zone) GetID() uint64 {
	return z.ID
}

func (z *Zone) WorldBounds() (geometry.Point64, geometry.Point64) {
	return z.Footprint.WorldBounds()
}

func (z *Zone) GetQueryID() uint64 {
	return z.LastQueryID
}

func (z *Zone) SetQueryID(id uint64) {
	z.LastQueryID = id
}
