package solver

import (
	"math/rand"
	"time"

	"github.com/arrangio/core/entity"
	"github.com/arrangio/core/geometry"
)

// `MoveWeights` defines the probabilities (weights) of each move type
// being selected during random generation
type MoveWeights struct {
	ShiftWeight    int
	TeleportWeight int
	RotateWeight   int
}

// `DefaultMoveWeights` provides a sensible defaults
var DefaultMoveWeights = MoveWeights{
	ShiftWeight:    70,
	TeleportWeight: 15,
	RotateWeight:   15,
}

type MoveGenerator struct {
	rnd         *rand.Rand
	weights     MoveWeights
	totalWeight int

	shiftMove    ShiftMove
	teleportMove TeleportMove
	rotationMove RotationMove

	minX, maxX int64
	minY, maxY int64
	minZ, maxZ int64
}

func NewMoveGenerator(seed int64, min, max geometry.Point64, weights MoveWeights) *MoveGenerator {
	if seed == 0 {
		seed = time.Now().UnixNano()
	}
	return &MoveGenerator{
		rnd:         rand.New(rand.NewSource(seed)),
		weights:     weights,
		totalWeight: weights.ShiftWeight + weights.TeleportWeight + weights.RotateWeight,
		minX:        min.X, maxX: max.X,
		minY: min.Y, maxY: max.Y,
		minZ: min.Z, maxZ: max.Z,
	}
}

func (g *MoveGenerator) GenerateShift(target *entity.Entity, dx, dy, dz int64) Move {
	g.shiftMove.Target = target
	g.shiftMove.OldAnchor = target.State.Anchor
	g.shiftMove.NewAnchor = geometry.Point64{
		X: target.State.Anchor.X + dx,
		Y: target.State.Anchor.Y + dy,
		Z: target.State.Anchor.Z + dz,
	}
	return &g.shiftMove
}

func (g *MoveGenerator) GenerateTeleport(target *entity.Entity, newAnchor geometry.Point64) Move {
	g.teleportMove.Target = target
	g.teleportMove.OldAnchor = target.State.Anchor
	g.teleportMove.NewAnchor = newAnchor
	return &g.teleportMove
}

func (g *MoveGenerator) GenerateRotation(target *entity.Entity, newRot uint8) Move {
	g.rotationMove.Target = target
	g.rotationMove.OldRot = target.GetRotation()
	g.rotationMove.NewRot = newRot
	return &g.rotationMove
}

func (g *MoveGenerator) NextRandom(state *State) Move {
	if len(state.Entities) == 0 || g.totalWeight <= 0 {
		return nil
	}

	target := state.Entities[g.rnd.Intn(len(state.Entities))]
	val := g.rnd.Intn(g.totalWeight)

	// Roulette wheel selection
	if val < g.weights.ShiftWeight {
		dx := int64(g.rnd.Intn(3) - 1)
		dy := int64(g.rnd.Intn(3) - 1)
		dz := int64(g.rnd.Intn(3) - 1)
		if dx == 0 && dy == 0 && dz == 0 {
			dx = 1
		}
		return g.GenerateShift(target, dx, dy, dz)
	}
	val -= g.weights.ShiftWeight

	if val < g.weights.TeleportWeight {
		pt := geometry.Point64{
			X: g.randomInt64(g.minX, g.maxX),
			Y: g.randomInt64(g.minY, g.maxY),
			Z: g.randomInt64(g.minZ, g.maxZ),
		}
		return g.GenerateTeleport(target, pt)
	}

	newRot := uint8(g.rnd.Intn(24))
	return g.GenerateRotation(target, newRot)
}

func (g *MoveGenerator) randomInt64(min, max int64) int64 {
	if min >= max {
		return min
	}
	return min + g.rnd.Int63n(max-min)
}
