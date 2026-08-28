package rules

import (
	"arrangio-core/entity"
	"arrangio-core/tags"
	"arrangio-core/zones"
)

// Selector filters entities by ID or tag
type Selector struct {
	TargetID uint64
	Mask     tags.Mask
	MatchAny bool
}

func (s *Selector) matches(id uint64, mask tags.Mask) bool {
	if s.MatchAny {
		return true
	}
	if s.TargetID != 0 && id != s.TargetID {
		return false
	}
	hasTags := s.Mask.FastBits != 0 || len(s.Mask.DynamicIDs) > 0
	if hasTags && !mask.Has(s.Mask) {
		return false
	}

	if s.TargetID == 0 && !hasTags {
		return false
	}

	return true
}

func (s *Selector) Matches(e *entity.Entity) bool {
	return s.matches(e.Def.ID, e.Def.Tags)
}

func (s *Selector) MatchesZone(z *zones.Zone) bool {
	return s.matches(z.ID, z.Tags)
}
