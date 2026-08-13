package scene

import "arrangio-core/geometry"

type Zone struct {
	ID          uint64
	Name        string
	Footprint   geometry.Footprint
	LastQueryID uint64
}

func (z *Zone) GetID() uint64 {
	return z.ID
}

func (z *Zone) GetFootprint() geometry.Footprint {
	return z.Footprint
}

func (z *Zone) GetLastQueryID() uint64 {
	return z.LastQueryID
}

func (z *Zone) SetLastQueryID(id uint64) {
	z.LastQueryID = id
}
