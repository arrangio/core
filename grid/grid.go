package grid

import (
	"arrangio-core/geometry"
	"fmt"
)

// gridNode is an element in a flat array `nods`
// it is a node is a singly-linked list, links one entity to the next one in the same cell of the grid
type gridNode[T Spatial] struct {
	item   T
	itemID uint64
	next   int32 // index of the next node in the same cell chain (-1 if end of the list)
}

type Grid[T Spatial] struct {
	originX int64
	originY int64
	originZ int64

	shiftBits uint8 // determines the size of a single grid cell as a power of two
	sizeX     int64
	sizeY     int64
	sizeZ     int64
	strideY   int64 // precomputed offsets used to flatten 3D grid coordinates
	strideZ   int64 // into a single-dimensional `heads` slice index

	queryID uint64 // ID for deduplication in `QueryBuf` -- unique timestamp for current query session

	heads     []int32       // maps each 3D cell to the the starting index of its linked list inside `nodes`
	nodes     []gridNode[T] // stores all linked list nodes for all cells
	freeNodes []int32       // tracks which indices in the `nodes` are currently empty
}

// `maxObjectsPerCell` acts as the initial capacity for total entity-to-cell linkages allowed.
// The grid will dynamically grow if this limit is exceeded, but pre-allocating accurately avoids allocations.
// rule of thumb: `maxObjectsPerCell` = N * 8, where N is the number of entities
// assuming the worst of case of all 8 neighbor shapes overlapping at one cell.
func NewGrid[T Spatial](shiftBits uint8, minX, minY, minZ, maxX, maxY, maxZ int64, maxObjectsPerCell int) (*Grid[T], error) {
	worldW := maxX - minX
	worldH := maxY - minY
	worldD := maxZ - minZ

	cellsX := worldW >> shiftBits
	cellsY := worldH >> shiftBits
	cellsZ := worldD >> shiftBits

	if cellsX == 0 {
		cellsX = 1
	}
	if cellsY == 0 {
		cellsY = 1
	}
	if cellsZ == 0 {
		cellsZ = 1
	}

	totalCells := cellsX * cellsY * cellsZ

	// rough estimate for bounds checking to prevent OOM
	// 50M cells limit is approximately ~200MB memory for the heads array
	if totalCells <= 0 {
		return nil, fmt.Errorf("grid: invalid dimensions (totalCells = %d)", totalCells)
	}
	if totalCells > 50_000_000 {
		return nil, fmt.Errorf("grid: boundaries too large, exceeds 50M cells limit (got %d)", totalCells)
	}

	heads := make([]int32, totalCells)
	for i := range heads {
		heads[i] = -1
	}

	nodes := make([]gridNode[T], maxObjectsPerCell)
	freeNodes := make([]int32, maxObjectsPerCell)
	for i := 0; i < maxObjectsPerCell; i++ {
		freeNodes[i] = int32(i)
	}

	return &Grid[T]{
		originX:   minX,
		originY:   minY,
		originZ:   minZ,
		shiftBits: shiftBits,
		sizeX:     cellsX,
		sizeY:     cellsY,
		sizeZ:     cellsZ,
		strideY:   cellsX,
		strideZ:   cellsX * cellsY,
		queryID:   0,

		heads:     heads,
		nodes:     nodes,
		freeNodes: freeNodes,
	}, nil
}

func (g *Grid[T]) worldToCell(wx, wy, wz int64) (cx, cy, cz int64) {
	cx = (wx - g.originX) >> g.shiftBits
	cy = (wy - g.originY) >> g.shiftBits
	cz = (wz - g.originZ) >> g.shiftBits

	return cx, cy, cz
}

func (g *Grid[T]) Insert(item T) {
	minBounds, maxBounds := item.WorldBounds()
	itemID := item.GetID() // Hoist GetID() out of grid traversal loops

	minX, minY, minZ := g.worldToCell(minBounds.X, minBounds.Y, minBounds.Z)
	maxX, maxY, maxZ := g.worldToCell(maxBounds.X, maxBounds.Y, maxBounds.Z)

	// Clamp bounds to eliminate innermost loop bounds checking.
	minX = max(0, minX)
	minY = max(0, minY)
	minZ = max(0, minZ)
	maxX = min(g.sizeX-1, maxX)
	maxY = min(g.sizeY-1, maxY)
	maxZ = min(g.sizeZ-1, maxZ)

	for z := minZ; z <= maxZ; z++ {
		zOffset := z * g.strideZ
		for y := minY; y <= maxY; y++ {
			yOffset := zOffset + (y * g.strideY)
			for x := minX; x <= maxX; x++ {
				cellIdx := x + yOffset
				g.addToCell(cellIdx, item, itemID)
			}
		}
	}
}

func (g *Grid[T]) addToCell(cellIdx int64, item T, itemID uint64) {
	if len(g.freeNodes) == 0 {
		oldSize := len(g.nodes)
		newSize := oldSize * 2
		if newSize == 0 {
			newSize = 16
		}

		newNodes := make([]gridNode[T], newSize)
		copy(newNodes, g.nodes)
		g.nodes = newNodes

		for i := newSize - 1; i >= oldSize; i-- {
			g.freeNodes = append(g.freeNodes, int32(i))
		}
	}

	// use index from the end of slice
	nodeIdx := g.freeNodes[len(g.freeNodes)-1]
	// pop element from the end
	g.freeNodes = g.freeNodes[:len(g.freeNodes)-1]

	g.nodes[nodeIdx] = gridNode[T]{
		item:   item,
		itemID: itemID,
		next:   g.heads[cellIdx],
	}
	g.heads[cellIdx] = nodeIdx
}

func (g *Grid[T]) Remove(item T) {
	minBounds, maxBounds := item.WorldBounds()
	itemID := item.GetID() // Hoist GetID() out of grid traversal loops

	minX, minY, minZ := g.worldToCell(minBounds.X, minBounds.Y, minBounds.Z)
	maxX, maxY, maxZ := g.worldToCell(maxBounds.X, maxBounds.Y, maxBounds.Z)

	// Clamp bounds to eliminate innermost loop bounds checking.
	minX = max(0, minX)
	minY = max(0, minY)
	minZ = max(0, minZ)
	maxX = min(g.sizeX-1, maxX)
	maxY = min(g.sizeY-1, maxY)
	maxZ = min(g.sizeZ-1, maxZ)

	for z := minZ; z <= maxZ; z++ {
		zOffset := z * g.strideZ
		for y := minY; y <= maxY; y++ {
			yOffset := zOffset + (y * g.strideY)
			for x := minX; x <= maxX; x++ {
				cellIdx := x + yOffset
				g.removeFromCell(cellIdx, item, itemID)
			}
		}
	}
}

func (g *Grid[T]) removeFromCell(cellIdx int64, item T, itemID uint64) {
	currentNodeIdx := g.heads[cellIdx]
	var prevNodeIdx int32 = -1

	// Fast path: nothing in the cell
	if currentNodeIdx == -1 {
		return
	}

	// iterate through the list of nodes
	for currentNodeIdx != -1 {
		node := g.nodes[currentNodeIdx]

		if node.itemID == itemID {
			if prevNodeIdx == -1 {
				g.heads[cellIdx] = node.next
			} else {
				g.nodes[prevNodeIdx].next = node.next
			}

			g.freeNodes = append(g.freeNodes, currentNodeIdx)
			// zero out node to prevent memory leaks
			var zero T
			g.nodes[currentNodeIdx].item = zero
			break
		}

		prevNodeIdx = currentNodeIdx
		currentNodeIdx = node.next
	}
}

// Move performs a differential update to the grid. It only removes the object
// from cells it no longer occupies and adds it to newly occupied cells.
// This is significantly faster than Remove() followed by Insert() for small movements
// (a core operation in Simulated Annealing).
func (g *Grid[T]) Move(item T, oldMin, oldMax, newMin, newMax geometry.Point64) {
	itemID := item.GetID() // Hoist GetID() out of grid traversal loops
	oldMinX, oldMinY, oldMinZ := g.worldToCell(oldMin.X, oldMin.Y, oldMin.Z)
	oldMaxX, oldMaxY, oldMaxZ := g.worldToCell(oldMax.X, oldMax.Y, oldMax.Z)
	newMinX, newMinY, newMinZ := g.worldToCell(newMin.X, newMin.Y, newMin.Z)
	newMaxX, newMaxY, newMaxZ := g.worldToCell(newMax.X, newMax.Y, newMax.Z)

	// Calculate the union of the old and new cell ranges.
	// This defines the bounding box of all cells that could possibly be affected.
	uMinX := min(oldMinX, newMinX)
	uMinY := min(oldMinY, newMinY)
	uMinZ := min(oldMinZ, newMinZ)
	uMaxX := max(oldMaxX, newMaxX)
	uMaxY := max(oldMaxY, newMaxY)
	uMaxZ := max(oldMaxZ, newMaxZ)

	// Clamp the union boundaries to the grid dimensions to avoid out-of-bounds
	// array access during the loops. We iterate only over valid grid cells.
	cMinX := max(0, uMinX)
	cMinY := max(0, uMinY)
	cMinZ := max(0, uMinZ)
	cMaxX := min(g.sizeX-1, uMaxX)
	cMaxY := min(g.sizeY-1, uMaxY)
	cMaxZ := min(g.sizeZ-1, uMaxZ)

	for z := cMinZ; z <= cMaxZ; z++ {
		zOffset := z * g.strideZ
		for y := cMinY; y <= cMaxY; y++ {
			yOffset := zOffset + (y * g.strideY)
			for x := cMinX; x <= cMaxX; x++ {
				// Determine if the current cell belongs to the old and/or new bounding boxes.
				// We use the UNCLAMPED old/new boundaries here to ensure the logic remains
				// mathematically correct even if part of the object was outside the grid bounds.
				inOld := x >= oldMinX && x <= oldMaxX && y >= oldMinY && y <= oldMaxY && z >= oldMinZ && z <= oldMaxZ
				inNew := x >= newMinX && x <= newMaxX && y >= newMinY && y <= newMaxY && z >= newMinZ && z <= newMaxZ

				if inOld && !inNew {
					// Object has left this cell: remove it.
					cellIdx := x + yOffset
					g.removeFromCell(cellIdx, item, itemID)
				} else if inNew && !inOld {
					// Object has entered this cell: add it.
					cellIdx := x + yOffset
					g.addToCell(cellIdx, item, itemID)
				}
				// If both are true, the object was here and stays here (no action needed).
				// If both are false, the cell is in the union bounding box but belongs
				// to neither the old nor new shape (e.g., corners of the union volume).
			}
		}
	}
}

// return all entities from searchMin point to searchMax point
func (g *Grid[T]) QueryBuf(searchMin, searchMax geometry.Point64, buffer []T) []T {
	currentQueryID := g.queryID + 1
	g.queryID = currentQueryID
	result := buffer[:0]

	minX, minY, minZ := g.worldToCell(searchMin.X, searchMin.Y, searchMin.Z)
	maxX, maxY, maxZ := g.worldToCell(searchMax.X, searchMax.Y, searchMax.Z)

	// Clamp bounds to eliminate innermost loop bounds checking.
	minX = max(0, minX)
	minY = max(0, minY)
	minZ = max(0, minZ)
	maxX = min(g.sizeX-1, maxX)
	maxY = min(g.sizeY-1, maxY)
	maxZ = min(g.sizeZ-1, maxZ)

	for z := minZ; z <= maxZ; z++ {
		zOffset := z * g.strideZ
		for y := minY; y <= maxY; y++ {
			yOffset := zOffset + (y * g.strideY)
			for x := minX; x <= maxX; x++ {
				cellIdx := x + yOffset
				nodeIdx := g.heads[cellIdx]

				for nodeIdx != -1 {
					node := g.nodes[nodeIdx]
					item := node.item

					if item.GetQueryID() != currentQueryID {
						item.SetQueryID(currentQueryID)

						eMin, eMax := item.WorldBounds()
						if eMax.X >= searchMin.X && eMin.X <= searchMax.X &&
							eMax.Y >= searchMin.Y && eMin.Y <= searchMax.Y &&
							eMax.Z >= searchMin.Z && eMin.Z <= searchMax.Z {
							result = append(result, item)
						}
					}
					nodeIdx = node.next
				}
			}
		}
	}
	return result
}
