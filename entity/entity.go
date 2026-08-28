package entity

import (
	"arrangio-core/geometry"
	"arrangio-core/tags"
)

// EntityDef holds the immutable definition of an entity
type EntityDef struct {
	ID       uint64
	IsStatic bool
	Tags     tags.Mask
	Props    []float64
	Shape    geometry.Shape
	Facings  *geometry.Facings
}

// EntityState holds the mutable state of an entity
type EntityState struct {
	Anchor      geometry.Point64
	LastQueryID uint64
}

// Entity is a lightweight wrapper that glues a shared definition with entity-specific state
type Entity struct {
	Def   *EntityDef
	State *EntityState
}

func NewEntity(id uint64, isStatic bool, tagMask tags.Mask, props []float64, shape geometry.Shape, facings *geometry.Facings, anchor geometry.Point64) *Entity {
	return &Entity{
		Def: &EntityDef{
			ID:       id,
			IsStatic: isStatic,
			Tags:     tagMask,
			Props:    props,
			Shape:    shape,
			Facings:  facings,
		},
		State: &EntityState{
			Anchor: anchor,
		},
	}
}

func (e *Entity) HasTags(required tags.Mask) bool {
	return e.Def.Tags.Has(required)
}

// AsFootprint constructs a geometry.Footprint on the fly
func (e *Entity) AsFootprint() geometry.Footprint {
	return geometry.Footprint{
		Anchor:  e.State.Anchor,
		Shape:   e.Def.Shape,
		Facings: e.Def.Facings,
	}
}

// WorldFacing delegates to Footprint.WorldFacing by constructing a temporary Footprint
func (e *Entity) WorldFacing(marker string) (geometry.Point64, bool) {
	fp := e.AsFootprint()
	return fp.WorldFacing(marker)
}

// Spatial interface implementation

func (e *Entity) GetID() uint64 {
	return e.Def.ID
}

func (e *Entity) WorldBounds() (geometry.Point64, geometry.Point64) {
	var localMin, localMax geometry.Point

	// OPTIMIZATION: Devirtualize Shape.Bounds() for known fast paths.
	switch s := e.Def.Shape.(type) {
	case geometry.Box:
		localMin, localMax = s.Bounds()
	case *geometry.Box:
		localMin, localMax = s.Bounds()
	case *geometry.VoxelShape:
		localMin, localMax = s.Bounds()
	case *geometry.RotatedShape:
		localMin, localMax = s.Bounds()
	default:
		localMin, localMax = e.Def.Shape.Bounds()
	}

	return geometry.Point64{
			X: e.State.Anchor.X + int64(localMin.X),
			Y: e.State.Anchor.Y + int64(localMin.Y),
			Z: e.State.Anchor.Z + int64(localMin.Z),
		}, geometry.Point64{
			X: e.State.Anchor.X + int64(localMax.X),
			Y: e.State.Anchor.Y + int64(localMax.Y),
			Z: e.State.Anchor.Z + int64(localMax.Z),
		}
}

func (e *Entity) GetQueryID() uint64 {
	return e.State.LastQueryID
}

func (e *Entity) SetQueryID(id uint64) {
	e.State.LastQueryID = id
}
