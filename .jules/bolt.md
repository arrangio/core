## 2024-08-14 - Inner Loop Branch Prediction
**Learning:** Branch checking inside the innermost loop of a 3D grid traversal is a significant bottleneck. When checking if a cell coordinate is out-of-bounds (`x < 0 || x >= size...`), it hurts branch prediction and forces unnecessary iterations for entities partially out of bounds.
**Action:** Hoist bounds checking outside the loops by pre-clamping the min/max bounds using `max(0, ...)` and `min(size-1, ...)`.

## 2025-02-24 - 3D Grid Loop Ordering & Cache Locality
**Learning:** Ordering nested 3D spatial grid loops as x, y, z causes poor CPU cache spatial locality and redundant computation of stride offsets in the inner loops.
**Action:** Always order nested 3D spatial grid loops as z, y, x (outer to inner). This maximizes cache locality and allows precomputing the stride offsets for `z` and `y` outside the innermost `x` loop.
