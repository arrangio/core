package grid

import "github.com/arrangio/core/geometry"

// Spatial is a type constraint for objects stored in Grid.
// Any type that has an ID, a bounding box, and a query
// deduplication stamp can be spatially indexed.
type Spatial interface {
	GetID() uint64
	WorldBounds() (min, max geometry.Point64)
	GetQueryID() uint64
	SetQueryID(id uint64)
}
