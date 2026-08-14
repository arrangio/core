package tags

import "sort"

type Mask struct {
	// tags which are used more often, that others
	FastBits uint64

	// use this if there are more than 64 tags
	DynamicIDs []uint16
}

func NewMask() Mask {
	return Mask{
		FastBits:   0,
		DynamicIDs: make([]uint16, 0, 4),
	}
}

// check if mask contains tags or group of tags
func (m Mask) Has(other Mask) bool {
	if (m.FastBits & other.FastBits) != other.FastBits {
		return false
	}

	if len(other.DynamicIDs) == 0 {
		return true
	}

	i, j := 0, 0
	lenM := len(m.DynamicIDs)
	lenOther := len(other.DynamicIDs)

	for i < lenM && j < lenOther {
		mVal := m.DynamicIDs[i]
		otherVal := other.DynamicIDs[j]

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
	if tagID < 64 {
		m.FastBits |= (1 << uint64(tagID))
		return m
	}

	dynID := uint16(tagID)

	// search index in which tagID will be inserted
	idx := sort.Search(len(m.DynamicIDs), func(i int) bool {
		return m.DynamicIDs[i] >= dynID
	})

	// if all elements in m.DynamicIDs are smaller than tagID
	// or tagID must be inserted in between existent elements
	if idx == len(m.DynamicIDs) || m.DynamicIDs[idx] != dynID {
		// create independent slice to ensure branching works
		oldDyn := m.DynamicIDs
		m.DynamicIDs = make([]uint16, len(oldDyn)+1)

		copy(m.DynamicIDs[:idx], oldDyn[:idx])
		copy(m.DynamicIDs[idx+1:], oldDyn[idx:])
		m.DynamicIDs[idx] = dynID
	}

	return m
}
