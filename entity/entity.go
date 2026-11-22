package entity

import (
	"github.com/arrangio/core/geometry"
	"github.com/arrangio/core/tags"
)

// EntityDef holds the immutable definition of an entity
type EntityDef struct {
	ID            uint64
	IsStatic      bool
	CanRotate     bool
	Tags          tags.Mask
	Props         []float64
	Shape         geometry.Shape
	Facings       *geometry.Facings
	rotatedBounds [24][2]geometry.Point
	boundsInit    bool
}

func (d *EntityDef) initRotatedBounds() {
	if d.Shape == nil {
		return
	}
	for r := uint8(0); r < 24; r++ {
		minPt, maxPt := geometry.GetRotatedBounds(d.Shape, r)
		d.rotatedBounds[r][0] = minPt
		d.rotatedBounds[r][1] = maxPt
	}
	d.boundsInit = true
}

// EntityState holds the mutable state of an entity
type EntityState struct {
	Anchor       geometry.Point64
	Rotation     uint8
	rotatedShape geometry.RotatedShape
}

// Entity is a lightweight wrapper that glues a shared definition with entity-specific state
type Entity struct {
	Def   *EntityDef
	State *EntityState
}

func NewEntity(id uint64, isStatic, canRotate bool, tagMask tags.Mask, props []float64, shape geometry.Shape, facings *geometry.Facings, anchor geometry.Point64) *Entity {
	def := &EntityDef{
		ID:        id,
		IsStatic:  isStatic,
		CanRotate: canRotate,
		Tags:      tagMask,
		Props:     props,
		Shape:     shape,
		Facings:   facings,
	}
	def.initRotatedBounds()

	baseShape := shape
	if rs, ok := shape.(*geometry.RotatedShape); ok {
		baseShape = rs.Unwrap()
	}

	return &Entity{
		Def: def,
		State: &EntityState{
			Anchor:       anchor,
			rotatedShape: *geometry.NewRotatedShape(baseShape),
		},
	}
}

func (e *Entity) HasTags(required tags.Mask) bool {
	return e.Def.Tags.Has(required)
}

// AsFootprint constructs a geometry.Footprint on the fly
func (e *Entity) AsFootprint() geometry.Footprint {
	shape := e.Def.Shape
	if e.State.Rotation != 0 {
		if e.State.rotatedShape.Unwrap() == nil && shape != nil {
			base := shape
			if rs, ok := shape.(*geometry.RotatedShape); ok {
				base = rs.Unwrap()
			}
			e.State.rotatedShape = *geometry.NewRotatedShape(base)
			e.State.rotatedShape.SetRotation(e.State.Rotation)
		}
		shape = &e.State.rotatedShape
	}

	return geometry.Footprint{
		Anchor:  e.State.Anchor,
		Shape:   shape,
		Facings: e.Def.Facings,
	}
}

// `WorldFacingAt` delegates to Footprint.WorldFacing by constructing a temporary Footprint
func (e *Entity) WorldFacingAt(marker string, rotation uint8) (geometry.Point64, bool) {
	if e.Def == nil {
		return geometry.Point64{}, false
	}

	if !e.Def.CanRotate {
		rotation = e.State.Rotation
	}
	fp := geometry.Footprint{
		Anchor:  e.State.Anchor,
		Shape:   e.Def.Shape,
		Facings: e.Def.Facings,
	}
	return fp.WorldFacingAt(marker, rotation)
}

// `WorldFacing` delegates to `WorldFacingAt` with current entity rotation
func (e *Entity) WorldFacing(marker string) (geometry.Point64, bool) {
	return e.WorldFacingAt(marker, e.State.Rotation)
}

// Spatial interface implementation

func (e *Entity) GetID() uint64 {
	return e.Def.ID
}

func (e *Entity) SetRotation(rotation uint8) {
	if e.Def != nil && !e.Def.CanRotate {
		return
	}

	if rotation >= 24 {
		rotation = 0
	}
	e.State.Rotation = rotation
	e.State.rotatedShape.SetRotation(rotation)
}

func (e *Entity) GetRotation() uint8 {
	return e.State.Rotation
}

func (e *Entity) fallbackBounds(rotation uint8) (geometry.Point, geometry.Point) {
	if e.Def != nil && e.Def.Shape != nil {
		return geometry.GetRotatedBounds(e.Def.Shape, rotation)
	}
	return geometry.Point{}, geometry.Point{}
}

func (e *Entity) BoundsAt(anchor geometry.Point64, rotation uint8) (geometry.Point64, geometry.Point64) {
	if rotation >= 24 {
		rotation = 0
	}
	localMin := e.Def.rotatedBounds[rotation][0]
	localMax := e.Def.rotatedBounds[rotation][1]
	if !e.Def.boundsInit {
		localMin, localMax = e.fallbackBounds(rotation)
	}

	return geometry.Point64{
		X: anchor.X + int64(localMin.X),
		Y: anchor.Y + int64(localMin.Y),
		Z: anchor.Z + int64(localMin.Z),
	}, geometry.Point64{
		X: anchor.X + int64(localMax.X),
		Y: anchor.Y + int64(localMax.Y),
		Z: anchor.Z + int64(localMax.Z),
	}
}

func (e *Entity) WorldBounds() (geometry.Point64, geometry.Point64) {
	rot := e.State.Rotation
	if rot >= 24 {
		rot = 0
	}
	if !e.Def.boundsInit {
		return e.BoundsAt(e.State.Anchor, rot)
	}
	b := e.Def.rotatedBounds[rot]
	ax, ay, az := e.State.Anchor.X, e.State.Anchor.Y, e.State.Anchor.Z

	return geometry.Point64{
		X: ax + int64(b[0].X),
		Y: ay + int64(b[0].Y),
		Z: az + int64(b[0].Z),
	}, geometry.Point64{
		X: ax + int64(b[1].X),
		Y: ay + int64(b[1].Y),
		Z: az + int64(b[1].Z),
	}
}

