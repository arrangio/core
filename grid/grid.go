package grid

import (
	"arrangio-core/geometry"
	"sync/atomic"
)

// gridNode is an element in a flat array `nods`
// it is a node is a singly-linked list, links one entity to the next one in the same cell of the grid
type gridNode[T Spatial] struct {
	item T
	next int32 // index of the next node in the same cell chain (-1 if end of the list)
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

// `maxObjectsPerCell` is a hard limit for total entity-to-cell linkages allowed
// rule of thumb: `maxObjectsPerCell` = N * 8, where are N is a number of entities
// assuming the worst of case of all 8 neighbor shapes overlapping at one cell
func NewGrid[T Spatial](shiftBits uint8, minX, minY, minZ, maxX, maxY, maxZ int64, maxObjectsPerCell int) *Grid[T] {
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
	}
}

func (g *Grid[T]) worldToCell(wx, wy, wz int64) (cx, cy, cz int64) {
	cx = (wx - g.originX) >> g.shiftBits
	cy = (wy - g.originY) >> g.shiftBits
	cz = (wz - g.originZ) >> g.shiftBits

	return cx, cy, cz
}

func (g *Grid[T]) getIndex(cx, cy, cz int64) int64 {
	return cx + (cy * g.strideY) + (cz * g.strideZ)
}

func (g *Grid[T]) Insert(item T) {
	footprint := item.GetFootprint()
	minBounds, maxBounds := footprint.WorldBounds()

	minX, minY, minZ := g.worldToCell(minBounds.X, minBounds.Y, minBounds.Z)
	maxX, maxY, maxZ := g.worldToCell(maxBounds.X, maxBounds.Y, maxBounds.Z)

	for x := minX; x <= maxX; x++ {
		for y := minY; y <= maxY; y++ {
			for z := minZ; z <= maxZ; z++ {
				if x < 0 || x >= g.sizeX || y < 0 || y >= g.sizeY || z < 0 || z >= g.sizeZ {
					continue
				}

				cellIdx := g.getIndex(x, y, z)

				if len(g.freeNodes) == 0 {
					panic("grid: out of memory in nodes pool! Increase maxObjectsPerCell")
				}

				// use index from the end of slice
				nodeIdx := g.freeNodes[len(g.freeNodes)-1]
				// pop element from the end
				g.freeNodes = g.freeNodes[:len(g.freeNodes)-1]

				g.nodes[nodeIdx] = gridNode[T]{
					item: item,
					next: g.heads[cellIdx],
				}
				g.heads[cellIdx] = nodeIdx
			}
		}
	}
}

func (g *Grid[T]) Remove(item T) {
	footprint := item.GetFootprint()
	minBounds, maxBounds := footprint.WorldBounds()

	minX, minY, minZ := g.worldToCell(minBounds.X, minBounds.Y, minBounds.Z)
	maxX, maxY, maxZ := g.worldToCell(maxBounds.X, maxBounds.Y, maxBounds.Z)

	itemID := item.GetID()

	for x := minX; x <= maxX; x++ {
		for y := minY; y <= maxY; y++ {
			for z := minZ; z <= maxZ; z++ {
				if x < 0 || x >= g.sizeX || y < 0 || y >= g.sizeY || z < 0 || z >= g.sizeZ {
					continue
				}

				cellIdx := g.getIndex(x, y, z)

				currentNodeIdx := g.heads[cellIdx]
				var prevNodeIdx int32 = -1

				// iterate through the list of nodes
				for currentNodeIdx != -1 {
					node := g.nodes[currentNodeIdx]

					if node.item.GetID() == itemID {
						if prevNodeIdx == -1 {
							g.heads[cellIdx] = node.next
						} else {
							g.nodes[prevNodeIdx].next = node.next
						}

						g.freeNodes = append(g.freeNodes, currentNodeIdx)

						// reset to empty item
						var empty T
						g.nodes[currentNodeIdx].item = empty

						break
					}

					prevNodeIdx = currentNodeIdx
					currentNodeIdx = node.next
				}
			}
		}
	}
}

// return all entities from searchMin point to searchMax point
func (g *Grid[T]) QueryBuf(searchMin, searchMax geometry.Point64, buffer []T) []T {
	result := buffer[:0]

	minX, minY, minZ := g.worldToCell(searchMin.X, searchMin.Y, searchMin.Z)
	maxX, maxY, maxZ := g.worldToCell(searchMax.X, searchMax.Y, searchMax.Z)

	queryID := atomic.AddUint64(&g.queryID, 1)

	for x := minX; x <= maxX; x++ {
		for y := minY; y <= maxY; y++ {
			for z := minZ; z <= maxZ; z++ {
				if x < 0 || x >= g.sizeX || y < 0 || y >= g.sizeY || z < 0 || z >= g.sizeZ {
					continue
				}

				cellIdx := g.getIndex(x, y, z)
				nodeIdx := g.heads[cellIdx]

				for nodeIdx != -1 {
					node := g.nodes[nodeIdx]
					item := node.item

					if item.GetLastQueryID() != queryID {
						item.SetLastQueryID(queryID)

						footprint := item.GetFootprint()
						eMin, eMax := footprint.WorldBounds()
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
