package grid

import "arrangio-core/geometry"

// Spatial is an interface for objects that can be stored and queried in the Grid.
type Spatial interface {
	GetID() uint64
	GetFootprint() geometry.Footprint
	GetLastQueryID() uint64
	SetLastQueryID(id uint64)
}
