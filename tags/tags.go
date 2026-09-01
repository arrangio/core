package tags

import "sort"

type Mask struct {
	// tags which are used more often, that others
	fastBits uint64

	// use this if there are more than 64 tags
	dynamicIDs []uint16
}

func NewMask() Mask {
	return Mask{
		fastBits:   0,
		dynamicIDs: make([]uint16, 0, 4),
	}
}

func (m Mask) HasTags() bool {
	return m.fastBits != 0 || len(m.dynamicIDs) > 0
}

// check if mask contains tags or group of tags
func (m Mask) Has(other Mask) bool {
	if (m.fastBits & other.fastBits) != other.fastBits {
		return false
	}

	if len(other.dynamicIDs) == 0 {
		return true
	}

	i, j := 0, 0
	lenM := len(m.dynamicIDs)
	lenOther := len(other.dynamicIDs)

	for i < lenM && j < lenOther {
		mVal := m.dynamicIDs[i]
		otherVal := other.dynamicIDs[j]

		if mVal < otherVal {
			i++
		} else if mVal > otherVal {
			return false
		} else {
			i++
			j++
		}
	}

	return j == lenOther
}

// add tag to the Mask
func (m Mask) With(tagID int) Mask {
	if tagID < 0 || tagID > 65535 {
		return m
	}

	if tagID < 64 {
		// #nosec G115 -- safe because tagID is known to be small and positive
		m.fastBits |= (1 << uint64(tagID))
		return m
	}

	// #nosec G115 -- safe because we don't expect > 65535 tags
	dynID := uint16(tagID)

	// search index in which tagID will be inserted
	idx := sort.Search(len(m.dynamicIDs), func(i int) bool {
		return m.dynamicIDs[i] >= dynID
	})

	// if all elements in m.DynamicIDs are smaller than tagID
	// or tagID must be inserted in between existent elements
	if idx == len(m.dynamicIDs) || m.dynamicIDs[idx] != dynID {
		// create independent slice to ensure branching works
		oldDyn := m.dynamicIDs
		m.dynamicIDs = make([]uint16, len(oldDyn)+1)

		copy(m.dynamicIDs[:idx], oldDyn[:idx])
		copy(m.dynamicIDs[idx+1:], oldDyn[idx:])
		m.dynamicIDs[idx] = dynID
	}

	return m
}
