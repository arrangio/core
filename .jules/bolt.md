## 2024-08-14 - Inner Loop Branch Prediction
**Learning:** Branch checking inside the innermost loop of a 3D grid traversal is a significant bottleneck. When checking if a cell coordinate is out-of-bounds (`x < 0 || x >= size...`), it hurts branch prediction and forces unnecessary iterations for entities partially out of bounds.
**Action:** Hoist bounds checking outside the loops by pre-clamping the min/max bounds using `max(0, ...)` and `min(size-1, ...)`.

## 2026-08-17 - Spatial Grid Traversal Cache Locality
**Learning:** In a flattened 3D array (like `heads` mapped by `getIndex(x, y, z)`), traversing loops in `x, y, z` order causes huge memory strides for consecutive inner loop iterations, which severely hurts CPU cache spatial locality.
**Action:** Always order nested 3D spatial grid loops as `z, y, x` (outer to inner) to maximize CPU cache spatial locality and allow precomputing stride offsets where adjacent inner loop operations address adjacent memory locations.
