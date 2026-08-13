package rules

import (
	"arrangio-core/entity"
	"arrangio-core/tags"
)

// Selector filters entities by ID or tag
type Selector struct {
	TargetID uint64
	Mask     tags.Mask
	MatchAny bool
}

func (s *Selector) Matches(e *entity.Entity) bool {
	if s.MatchAny {
		return true
	}

	if s.TargetID != 0 {
		if e.ID != s.TargetID {
			return false
		}
	}

	hasTags := s.Mask.FastBits != 0 || len(s.Mask.DynamicIDs) > 0
	if hasTags {
		if !e.HasTags(s.Mask) {
			return false
		}
	}

	if s.TargetID == 0 && !hasTags {
		return false
	}

	return true
}
