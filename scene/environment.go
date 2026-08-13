package scene

import (
	"arrangio-core/entity"
	"arrangio-core/grid"
)

type Environment struct {
	Entities *grid.Grid[*entity.Entity]
	Zones    *grid.Grid[*Zone]
}

func NewEnvironment(entities *grid.Grid[*entity.Entity], zones *grid.Grid[*Zone]) *Environment {
	return &Environment{
		Entities: entities,
		Zones:    zones,
	}
}
