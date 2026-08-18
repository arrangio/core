## 2024-08-14 - Inner Loop Branch Prediction
**Learning:** Branch checking inside the innermost loop of a 3D grid traversal is a significant bottleneck. When checking if a cell coordinate is out-of-bounds (`x < 0 || x >= size...`), it hurts branch prediction and forces unnecessary iterations for entities partially out of bounds.
**Action:** Hoist bounds checking outside the loops by pre-clamping the min/max bounds using `max(0, ...)` and `min(size-1, ...)`.
## 2024-08-14 - Loop Ordering and Index Calculation in 3D Grid
**Learning:** The spatial grid insertion and query performance is sensitive to the nested loop order and redundant calculations within the inner loops. The previous `x, y, z` nested loop required calling `getIndex` which multiplied inner variables repeatedly. Additionally, traversing slices sequentially is usually better for cache performance.
**Action:** Order 3D grid traversal loops as `z, y, x` (outer to inner) to allow precomputing `zOffset` and `yOffset`, reducing the inner loop's address calculation to a simple addition `x + yOffset`.
