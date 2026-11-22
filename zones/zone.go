package zones

import (
	"github.com/arrangio/core/geometry"
	"github.com/arrangio/core/tags"
)

type Zone struct {
	ID        uint64
	Name      string
	Footprint geometry.Footprint
	Tags      tags.Mask
}

func (z *Zone) GetID() uint64 {
	return z.ID
}

func (z *Zone) WorldBounds() (geometry.Point64, geometry.Point64) {
	return z.Footprint.WorldBounds()
}
