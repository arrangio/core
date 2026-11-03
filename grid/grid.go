package grid

import (
	"fmt"

	"github.com/arrangio/core/geometry"
)

const defaultSlotCapacity = 256  // needs to be a power of 2
const phi64 = 0x9e3779b97f4a7c15 // goldens ratio for fast 64-bit hashing

// gridNode is an element in a flat array `nods`
// it is a node is a singly-linked list, links one entity to the next one in the same cell of the grid
type gridNode[T Spatial] struct {
	item      T
	itemID    uint64
	minBounds geometry.Point64
	maxBounds geometry.Point64
	next      int32 // index of the next node in the same cell chain (-1 if end of the list)
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

	heads        []int32       // maps each 3D cell to the the starting index of its linked list inside `nodes`
	nodes        []gridNode[T] // stores all linked list nodes for all cells
	freeNodes    []int32       // tracks which indices in the `nodes` are currently empty
	cellVersions []uint32
	version      uint32
}

// `maxObjectsPerCell` acts as the initial capacity for total entity-to-cell linkages allowed.
// The grid will dynamically grow if this limit is exceeded, but pre-allocating accurately avoids allocations.
// rule of thumb: `maxObjectsPerCell` = N * 8, where N is the number of entities
// assuming the worst of case of all 8 neighbor shapes overlapping at one cell.
func NewGrid[T Spatial](shiftBits uint8, minX, minY, minZ, maxX, maxY, maxZ int64, maxObjectsPerCell int) (*Grid[T], error) {
	worldW := maxX - minX
	worldH := maxY - minY
	worldD := maxZ - minZ

	cellsX := (worldW + (1 << shiftBits) - 1) >> shiftBits
	cellsY := (worldH + (1 << shiftBits) - 1) >> shiftBits
	cellsZ := (worldD + (1 << shiftBits) - 1) >> shiftBits

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

		heads:        heads,
		nodes:        nodes,
		freeNodes:    freeNodes,
		cellVersions: make([]uint32, totalCells),
		version:      1,
	}, nil
}

func (g *Grid[T]) SetVersion(v uint32) {
	g.version = v
}

func (g *Grid[T]) IsRegionDirty(searchMin, searchMax geometry.Point64, lastVersion uint32) bool {
	if len(g.cellVersions) == 0 {
		return true
	}
	minX, minY, minZ := g.worldToCell(searchMin.X, searchMin.Y, searchMin.Z)
	maxX, maxY, maxZ := g.worldToCell(searchMax.X, searchMax.Y, searchMax.Z)

	minX = max(0, minX)
	minY = max(0, minY)
	minZ = max(0, minZ)
	maxX = min(g.sizeX-1, maxX)
	maxY = min(g.sizeY-1, maxY)
	maxZ = min(g.sizeZ-1, maxZ)

	if minX > maxX || minY > maxY || minZ > maxZ {
		return false
	}

	for z := minZ; z <= maxZ; z++ {
		zOffset := z * g.strideZ
		for y := minY; y <= maxY; y++ {
			row := g.cellVersions[zOffset+y*g.strideY+minX : zOffset+y*g.strideY+maxX+1]
			for _, v := range row {
				if v > lastVersion {
					return true
				}
			}
		}
	}
	return false
}

func (g *Grid[T]) worldToCell(wx, wy, wz int64) (cx, cy, cz int64) {
	cx = (wx - g.originX) >> g.shiftBits
	cy = (wy - g.originY) >> g.shiftBits
	cz = (wz - g.originZ) >> g.shiftBits

	return cx, cy, cz
}

func part1By1(n uint32) uint32 {
	n &= 0x0000ffff
	n = (n ^ (n << 8)) & 0x00ff00ff
	n = (n ^ (n << 4)) & 0x0f0f0f0f
	n = (n ^ (n << 2)) & 0x33333333
	n = (n ^ (n << 1)) & 0x55555555
	return n
}

func (g *Grid[T]) MortonKey(wx, wy int64) uint64 {
	cx := uint32(max(0, (wx-g.originX)>>g.shiftBits))
	cy := uint32(max(0, (wy-g.originY)>>g.shiftBits))
	return (uint64(part1By1(cy)) << 1) | uint64(part1By1(cx))
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

	if minX > maxX || minY > maxY || minZ > maxZ {
		return
	}

	for z := minZ; z <= maxZ; z++ {
		zOffset := z * g.strideZ
		for y := minY; y <= maxY; y++ {
			yOffset := zOffset + (y * g.strideY)
			for x := minX; x <= maxX; x++ {
				cellIdx := x + yOffset
				g.addToCell(cellIdx, item, itemID, minBounds, maxBounds)
			}
		}
	}
}

func (g *Grid[T]) addToCell(cellIdx int64, item T, itemID uint64, minB, maxB geometry.Point64) {
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
		item:      item,
		itemID:    itemID,
		minBounds: minB,
		maxBounds: maxB,
		next:      g.heads[cellIdx],
	}
	g.heads[cellIdx] = nodeIdx
	if len(g.cellVersions) > 0 {
		g.cellVersions[cellIdx] = g.version
	}
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

	if minX > maxX || minY > maxY || minZ > maxZ {
		return
	}

	for z := minZ; z <= maxZ; z++ {
		zOffset := z * g.strideZ
		for y := minY; y <= maxY; y++ {
			yOffset := zOffset + (y * g.strideY)
			for x := minX; x <= maxX; x++ {
				cellIdx := x + yOffset
				g.removeFromCell(cellIdx, itemID)
			}
		}
	}
}

func (g *Grid[T]) removeFromCell(cellIdx int64, itemID uint64) {
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
			g.nodes[currentNodeIdx].minBounds = geometry.Point64{}
			g.nodes[currentNodeIdx].maxBounds = geometry.Point64{}
			if len(g.cellVersions) > 0 {
				g.cellVersions[cellIdx] = g.version
			}
			break
		}

		prevNodeIdx = currentNodeIdx
		currentNodeIdx = node.next
	}
}

func (g *Grid[T]) updateBoundsInCell(cellIdx int64, itemID uint64, minB, maxB geometry.Point64) {
	nodeIdx := g.heads[cellIdx]
	for nodeIdx != -1 {
		if g.nodes[nodeIdx].itemID == itemID {
			g.nodes[nodeIdx].minBounds = minB
			g.nodes[nodeIdx].maxBounds = maxB
			if len(g.cellVersions) > 0 {
				g.cellVersions[cellIdx] = g.version
			}
			return
		}
		nodeIdx = g.nodes[nodeIdx].next
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

	// fast-path if the object remains in the same cells
	if oldMinX == newMinX && oldMaxX == newMaxX &&
		oldMinY == newMinY && oldMaxY == newMaxY &&
		oldMinZ == newMinZ && oldMaxZ == newMaxZ {
		return
	}

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
					g.removeFromCell(cellIdx, itemID)
				} else if inNew && !inOld {
					// Object has entered this cell: add it.
					cellIdx := x + yOffset
					g.addToCell(cellIdx, item, itemID, newMin, newMax)
				} else if inOld && inNew {
					// Object stays in this cell: update its bounding box.
					cellIdx := x + yOffset
					g.updateBoundsInCell(cellIdx, itemID, newMin, newMax)
				}
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

	if minX > maxX || minY > maxY || minZ > maxZ {
		return result
	}

	for z := minZ; z <= maxZ; z++ {
		zOffset := z * g.strideZ
		for y := minY; y <= maxY; y++ {
			yOffset := zOffset + (y * g.strideY)
			row := g.heads[yOffset+minX : yOffset+maxX+1]
			for _, nodeIdx := range row {
				for nodeIdx != -1 {
					node := &g.nodes[nodeIdx]
					item := node.item

					if item.GetQueryID() != currentQueryID {
						item.SetQueryID(currentQueryID)

						if node.maxBounds.X >= searchMin.X && node.minBounds.X <= searchMax.X &&
							node.maxBounds.Y >= searchMin.Y && node.minBounds.Y <= searchMax.Y &&
							node.maxBounds.Z >= searchMin.Z && node.minBounds.Z <= searchMax.Z {
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

func (g *Grid[T]) WorldBounds() (geometry.Point64, geometry.Point64) {
	return geometry.Point64{X: g.originX, Y: g.originY, Z: g.originZ}, geometry.Point64{X: g.originX + g.sizeX<<g.shiftBits, Y: g.originY + g.sizeY<<g.shiftBits, Z: g.originZ + g.sizeZ<<g.shiftBits}
}

type querySlot struct {
	itemID  uint64
	queryID uint32
}

type QueryContext[T Spatial] struct {
	Buffer    []T
	BufferMin []geometry.Point64
	BufferMax []geometry.Point64

	fastSeen  [8]uint64
	fastCount int

	slots   []querySlot
	mask    int
	count   int
	queryID uint32
}

func NewQueryContext[T Spatial](initialCap int) *QueryContext[T] {
	slotCap := defaultSlotCapacity
	for slotCap < initialCap*2 {
		slotCap *= 2
	}

	return &QueryContext[T]{
		Buffer:    make([]T, 0, initialCap),
		BufferMin: make([]geometry.Point64, 0, initialCap),
		BufferMax: make([]geometry.Point64, 0, initialCap),
		slots:     make([]querySlot, slotCap),
		mask:      slotCap - 1,
		queryID:   1,
	}
}

func (qc *QueryContext[T]) Reset() {
	qc.Buffer = qc.Buffer[:0]
	qc.BufferMin = qc.BufferMin[:0]
	qc.BufferMax = qc.BufferMax[:0]
	qc.fastCount = 0
	qc.count = 0
	qc.queryID++
	if qc.queryID == 0 {
		clear(qc.slots)
		qc.queryID = 1
	}
}

func (qc *QueryContext[T]) grow() {
	previousSlots := qc.slots
	newCapacity := len(previousSlots) * 2
	if newCapacity == 0 {
		newCapacity = defaultSlotCapacity
	}

	expandedSlots := make([]querySlot, newCapacity)
	newBitMask := newCapacity - 1
	currentQueryID := qc.queryID

	for slotIndex := range previousSlots {
		existingSlot := &previousSlots[slotIndex]
		if existingSlot.queryID == currentQueryID {
			targetIndex := int(existingSlot.itemID*phi64>>32) & newBitMask
			for expandedSlots[targetIndex].queryID == currentQueryID {
				targetIndex = (targetIndex + 1) & newBitMask
			}
			expandedSlots[targetIndex] = *existingSlot
		}
	}

	qc.slots = expandedSlots
	qc.mask = newBitMask
}

func (qc *QueryContext[T]) Seen(id uint64) bool {
	if qc.fastCount < 8 {
		for i := 0; i < qc.fastCount; i++ {
			if qc.fastSeen[i] == id {
				return true
			}
		}
		qc.fastSeen[qc.fastCount] = id
		qc.fastCount++
		return false
	}

	if qc.count == 0 {
		for i := 0; i < 8; i++ {
			qc.insertHash(qc.fastSeen[i])
		}
	}
	return qc.insertHash(id)
}

func (qc *QueryContext[T]) insertHash(id uint64) bool {
	if qc.count*2 >= len(qc.slots) {
		qc.grow()
	}

	idx := int(id*phi64>>32) & qc.mask
	for {
		s := &qc.slots[idx]
		if s.queryID != qc.queryID {
			s.queryID = qc.queryID
			s.itemID = id
			qc.count++
			return false
		}
		if s.itemID == id {
			return true
		}
		idx = (idx + 1) & qc.mask
	}
}

// QueryBufWithContext queries all entities intersecting the search bounding box using a thread-local QueryContext.
// Unlike QueryBuf, it does not mutate Grid state or entity state, making it safe for concurrent reads across goroutines.
func (g *Grid[T]) QueryBufWithContext(searchMin, searchMax geometry.Point64, qctx *QueryContext[T]) []T {
	if qctx == nil {
		return nil
	}
	qctx.Reset()

	minX, minY, minZ := g.worldToCell(searchMin.X, searchMin.Y, searchMin.Z)
	maxX, maxY, maxZ := g.worldToCell(searchMax.X, searchMax.Y, searchMax.Z)

	minX = max(0, minX)
	minY = max(0, minY)
	minZ = max(0, minZ)
	maxX = min(g.sizeX-1, maxX)
	maxY = min(g.sizeY-1, maxY)
	maxZ = min(g.sizeZ-1, maxZ)

	if minX > maxX || minY > maxY || minZ > maxZ {
		return qctx.Buffer
	}

	for z := minZ; z <= maxZ; z++ {
		zOffset := z * g.strideZ
		for y := minY; y <= maxY; y++ {
			yOffset := zOffset + (y * g.strideY)
			row := g.heads[yOffset+minX : yOffset+maxX+1]
			for _, nodeIdx := range row {
				for nodeIdx != -1 {
					node := &g.nodes[nodeIdx]
					if !qctx.Seen(node.itemID) {
						if node.maxBounds.X >= searchMin.X && node.minBounds.X <= searchMax.X &&
							node.maxBounds.Y >= searchMin.Y && node.minBounds.Y <= searchMax.Y &&
							node.maxBounds.Z >= searchMin.Z && node.minBounds.Z <= searchMax.Z {
							qctx.Buffer = append(qctx.Buffer, node.item)
							qctx.BufferMin = append(qctx.BufferMin, node.minBounds)
							qctx.BufferMax = append(qctx.BufferMax, node.maxBounds)
						}
					}
					nodeIdx = node.next
				}
			}
		}
	}
	return qctx.Buffer
}
