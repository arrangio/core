window.BENCHMARK_DATA = {
  "lastUpdate": 1795711582716,
  "repoUrl": "https://github.com/arrangio/core",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "distinct": true,
          "id": "1ab8f58fee9a3d5d8c726789007aac6851568e32",
          "message": "perf(geometry): precalculate entity bounds",
          "timestamp": "2026-10-09T23:54:27+03:00",
          "tree_id": "bac99c51aa31f153a87e858c1fe49ddd2386a4e9",
          "url": "https://github.com/arrangio/core/commit/1ab8f58fee9a3d5d8c726789007aac6851568e32"
        },
        "date": 1791579470638,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42825410 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.01,
            "unit": "ns/op",
            "extra": "42825410 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42825410 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42825410 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2684,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "447426 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2684,
            "unit": "ns/op",
            "extra": "447426 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "447426 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "447426 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 338.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3547491 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 338.2,
            "unit": "ns/op",
            "extra": "3547491 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3547491 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3547491 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 990.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1211584 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 990.2,
            "unit": "ns/op",
            "extra": "1211584 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1211584 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1211584 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid)",
            "value": 3510,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "340866 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 3510,
            "unit": "ns/op",
            "extra": "340866 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "340866 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "340866 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 58.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20625399 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 58.95,
            "unit": "ns/op",
            "extra": "20625399 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20625399 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20625399 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver)",
            "value": 149840289,
            "unit": "ns/op\t        72.00 iters/op\t     31993 stress\t   56731 B/op\t     815 allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - ns/op",
            "value": 149840289,
            "unit": "ns/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - iters/op",
            "value": 72,
            "unit": "iters/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - stress",
            "value": 31993,
            "unit": "stress",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - B/op",
            "value": 56731,
            "unit": "B/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - allocs/op",
            "value": 815,
            "unit": "allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver)",
            "value": 2104546896,
            "unit": "ns/op\t        77.00 iters/op\t    340808 stress\t  204576 B/op\t     872 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 2104546896,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - iters/op",
            "value": 77,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - stress",
            "value": 340808,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - B/op",
            "value": 204576,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 872,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver)",
            "value": 29787494187,
            "unit": "ns/op\t        80.00 iters/op\t   3560443 stress\t 1083072 B/op\t     907 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - ns/op",
            "value": 29787494187,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - iters/op",
            "value": 80,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - stress",
            "value": 3560443,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - B/op",
            "value": 1083072,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - allocs/op",
            "value": 907,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver)",
            "value": 14026953,
            "unit": "ns/op\t    2712 B/op\t      11 allocs/op",
            "extra": "75 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 14026953,
            "unit": "ns/op",
            "extra": "75 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - B/op",
            "value": 2712,
            "unit": "B/op",
            "extra": "75 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "75 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver)",
            "value": 27996,
            "unit": "ns/op\t     576 B/op\t      11 allocs/op",
            "extra": "43782 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - ns/op",
            "value": 27996,
            "unit": "ns/op",
            "extra": "43782 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - B/op",
            "value": 576,
            "unit": "B/op",
            "extra": "43782 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "43782 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "distinct": true,
          "id": "2edf96e74183a86217aa9473be3ade5b3cfbc299",
          "message": "grid: optimize `QueryContext` deduplication with Fibonacci (multiplicative) hashing",
          "timestamp": "2026-10-22T18:46:26+03:00",
          "tree_id": "cfedc93cde7027f76f2d0a19731e7215ab8900f8",
          "url": "https://github.com/arrangio/core/commit/2edf96e74183a86217aa9473be3ade5b3cfbc299"
        },
        "date": 1792684198025,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 27.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43243808 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 27.61,
            "unit": "ns/op",
            "extra": "43243808 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43243808 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43243808 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2640,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "454388 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2640,
            "unit": "ns/op",
            "extra": "454388 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "454388 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "454388 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 342.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3534518 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 342.6,
            "unit": "ns/op",
            "extra": "3534518 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3534518 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3534518 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 984.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1223295 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 984.4,
            "unit": "ns/op",
            "extra": "1223295 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1223295 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1223295 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid)",
            "value": 1026,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1026,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 59.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19218273 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 59.56,
            "unit": "ns/op",
            "extra": "19218273 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19218273 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19218273 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver)",
            "value": 107278078,
            "unit": "ns/op\t        68.00 iters/op\t     24416 stress\t   48619 B/op\t     791 allocs/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - ns/op",
            "value": 107278078,
            "unit": "ns/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - iters/op",
            "value": 68,
            "unit": "iters/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - stress",
            "value": 24416,
            "unit": "stress",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - B/op",
            "value": 48619,
            "unit": "B/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - allocs/op",
            "value": 791,
            "unit": "allocs/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver)",
            "value": 1519522444,
            "unit": "ns/op\t        76.00 iters/op\t    336489 stress\t  174848 B/op\t     837 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 1519522444,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - iters/op",
            "value": 76,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - stress",
            "value": 336489,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - B/op",
            "value": 174848,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 837,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver)",
            "value": 25171093421,
            "unit": "ns/op\t        81.00 iters/op\t   3580064 stress\t 1054384 B/op\t     893 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - ns/op",
            "value": 25171093421,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - iters/op",
            "value": 81,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - stress",
            "value": 3580064,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - B/op",
            "value": 1054384,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - allocs/op",
            "value": 893,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver)",
            "value": 10661041,
            "unit": "ns/op\t    1913 B/op\t      11 allocs/op",
            "extra": "98 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 10661041,
            "unit": "ns/op",
            "extra": "98 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - B/op",
            "value": 1913,
            "unit": "B/op",
            "extra": "98 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "98 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver)",
            "value": 28322,
            "unit": "ns/op\t     576 B/op\t      11 allocs/op",
            "extra": "42532 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - ns/op",
            "value": 28322,
            "unit": "ns/op",
            "extra": "42532 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - B/op",
            "value": 576,
            "unit": "B/op",
            "extra": "42532 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "42532 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "distinct": true,
          "id": "f829b5657c86129c45c4c3d2c3631c4974ba66c7",
          "message": "fix(grid): prevent hash table from overflowing",
          "timestamp": "2026-10-22T18:51:59+03:00",
          "tree_id": "d51e352b90abd2e59bfdf09154e5f04c41efc365",
          "url": "https://github.com/arrangio/core/commit/f829b5657c86129c45c4c3d2c3631c4974ba66c7"
        },
        "date": 1792684585483,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 35.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "34139965 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 35.32,
            "unit": "ns/op",
            "extra": "34139965 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "34139965 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "34139965 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3763,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "323649 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3763,
            "unit": "ns/op",
            "extra": "323649 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "323649 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "323649 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 427.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2783976 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 427.4,
            "unit": "ns/op",
            "extra": "2783976 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2783976 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2783976 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1267,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "957164 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1267,
            "unit": "ns/op",
            "extra": "957164 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "957164 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "957164 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid)",
            "value": 1358,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "875816 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1358,
            "unit": "ns/op",
            "extra": "875816 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "875816 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "875816 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 72.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16199497 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 72.93,
            "unit": "ns/op",
            "extra": "16199497 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16199497 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16199497 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver)",
            "value": 137852507,
            "unit": "ns/op\t        71.00 iters/op\t     32411 stress\t   54824 B/op\t     800 allocs/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - ns/op",
            "value": 137852507,
            "unit": "ns/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - iters/op",
            "value": 71,
            "unit": "iters/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - stress",
            "value": 32411,
            "unit": "stress",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - B/op",
            "value": 54824,
            "unit": "B/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver)",
            "value": 2206480200,
            "unit": "ns/op\t        79.00 iters/op\t    353819 stress\t  209360 B/op\t     875 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 2206480200,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - iters/op",
            "value": 79,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - stress",
            "value": 353819,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - B/op",
            "value": 209360,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 875,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver)",
            "value": 37201211563,
            "unit": "ns/op\t        80.00 iters/op\t   3581462 stress\t 1095680 B/op\t     889 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - ns/op",
            "value": 37201211563,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - iters/op",
            "value": 80,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - stress",
            "value": 3581462,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - B/op",
            "value": 1095680,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - allocs/op",
            "value": 889,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver)",
            "value": 17586429,
            "unit": "ns/op\t    3220 B/op\t      11 allocs/op",
            "extra": "62 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 17586429,
            "unit": "ns/op",
            "extra": "62 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - B/op",
            "value": 3220,
            "unit": "B/op",
            "extra": "62 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "62 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver)",
            "value": 32264,
            "unit": "ns/op\t     576 B/op\t      11 allocs/op",
            "extra": "36780 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - ns/op",
            "value": 32264,
            "unit": "ns/op",
            "extra": "36780 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - B/op",
            "value": 576,
            "unit": "B/op",
            "extra": "36780 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "36780 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "distinct": true,
          "id": "0c5fe9359115bb522c3c78db3479c90c6a2ef9ae",
          "message": "refactor(solver): do not create worker every iteration",
          "timestamp": "2026-10-22T19:36:45+03:00",
          "tree_id": "69c17fe37f196f808e10ca172c9aa9d8c6607392",
          "url": "https://github.com/arrangio/core/commit/0c5fe9359115bb522c3c78db3479c90c6a2ef9ae"
        },
        "date": 1792687201420,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 20.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56228190 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 20.97,
            "unit": "ns/op",
            "extra": "56228190 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56228190 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56228190 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 1814,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "665234 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 1814,
            "unit": "ns/op",
            "extra": "665234 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "665234 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "665234 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 233.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5145164 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 233.2,
            "unit": "ns/op",
            "extra": "5145164 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5145164 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5145164 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 702,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1675604 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 702,
            "unit": "ns/op",
            "extra": "1675604 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1675604 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1675604 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid)",
            "value": 744.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1614249 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 744.3,
            "unit": "ns/op",
            "extra": "1614249 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1614249 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1614249 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 20.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56446620 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 20.79,
            "unit": "ns/op",
            "extra": "56446620 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56446620 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56446620 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver)",
            "value": 89985850,
            "unit": "ns/op\t        72.00 iters/op\t     33815 stress\t    5304 B/op\t      10 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - ns/op",
            "value": 89985850,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - iters/op",
            "value": 72,
            "unit": "iters/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - stress",
            "value": 33815,
            "unit": "stress",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - B/op",
            "value": 5304,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver)",
            "value": 1407996603,
            "unit": "ns/op\t        79.00 iters/op\t    350961 stress\t  166688 B/op\t      21 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 1407996603,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - iters/op",
            "value": 79,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - stress",
            "value": 350961,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - B/op",
            "value": 166688,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver)",
            "value": 33418753718,
            "unit": "ns/op\t        81.00 iters/op\t   3562055 stress\t 1052016 B/op\t      44 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - ns/op",
            "value": 33418753718,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - iters/op",
            "value": 81,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - stress",
            "value": 3562055,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - B/op",
            "value": 1052016,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - allocs/op",
            "value": 44,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver)",
            "value": 7134532,
            "unit": "ns/op\t    2867 B/op\t       7 allocs/op",
            "extra": "148 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 7134532,
            "unit": "ns/op",
            "extra": "148 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - B/op",
            "value": 2867,
            "unit": "B/op",
            "extra": "148 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "148 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver)",
            "value": 20040,
            "unit": "ns/op\t     257 B/op\t       6 allocs/op",
            "extra": "59379 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - ns/op",
            "value": 20040,
            "unit": "ns/op",
            "extra": "59379 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - B/op",
            "value": 257,
            "unit": "B/op",
            "extra": "59379 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "59379 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "distinct": true,
          "id": "2f3330179da26183d12f9d6a849a8c883245e917",
          "message": "grid: early exit in `QueryBuf`, `Insert` and `Remove` methods if coordinates are outside of the grid",
          "timestamp": "2026-10-24T17:59:23+03:00",
          "tree_id": "4e653aaeea4ec17d9019cc044c3c83d7c244030e",
          "url": "https://github.com/arrangio/core/commit/2f3330179da26183d12f9d6a849a8c883245e917"
        },
        "date": 1792854157330,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 36.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "33249781 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 36.29,
            "unit": "ns/op",
            "extra": "33249781 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "33249781 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "33249781 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3875,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "321448 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3875,
            "unit": "ns/op",
            "extra": "321448 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "321448 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "321448 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 428.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2798804 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 428.8,
            "unit": "ns/op",
            "extra": "2798804 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2798804 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2798804 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1229,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1229,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid)",
            "value": 1346,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "901837 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1346,
            "unit": "ns/op",
            "extra": "901837 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "901837 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "901837 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 35.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "33928402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 35.34,
            "unit": "ns/op",
            "extra": "33928402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "33928402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "33928402 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver)",
            "value": 141199369,
            "unit": "ns/op\t        66.00 iters/op\t     23436 stress\t    7964 B/op\t      13 allocs/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - ns/op",
            "value": 141199369,
            "unit": "ns/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - iters/op",
            "value": 66,
            "unit": "iters/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - stress",
            "value": 23436,
            "unit": "stress",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - B/op",
            "value": 7964,
            "unit": "B/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver)",
            "value": 2087107962,
            "unit": "ns/op\t        74.00 iters/op\t    240960 stress\t   33920 B/op\t      18 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 2087107962,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - iters/op",
            "value": 74,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - stress",
            "value": 240960,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - B/op",
            "value": 33920,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver)",
            "value": 31734969343,
            "unit": "ns/op\t        80.00 iters/op\t   2356371 stress\t 1049856 B/op\t      15 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - ns/op",
            "value": 31734969343,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - iters/op",
            "value": 80,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - stress",
            "value": 2356371,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - B/op",
            "value": 1049856,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver)",
            "value": 24970252,
            "unit": "ns/op\t    1912 B/op\t       9 allocs/op",
            "extra": "44 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 24970252,
            "unit": "ns/op",
            "extra": "44 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - B/op",
            "value": 1912,
            "unit": "B/op",
            "extra": "44 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "44 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver)",
            "value": 28772,
            "unit": "ns/op\t     257 B/op\t       6 allocs/op",
            "extra": "41542 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - ns/op",
            "value": 28772,
            "unit": "ns/op",
            "extra": "41542 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - B/op",
            "value": 257,
            "unit": "B/op",
            "extra": "41542 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "41542 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "distinct": true,
          "id": "48644486f17afaa28bebb70bac7bd90f409de7a0",
          "message": "rules(orientation): start checking rotation indexes from 0 instead of 1",
          "timestamp": "2026-10-26T21:32:17+03:00",
          "tree_id": "bcdab5389b1f1b66e190619d0f408be0afe981e4",
          "url": "https://github.com/arrangio/core/commit/48644486f17afaa28bebb70bac7bd90f409de7a0"
        },
        "date": 1793039784848,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 36.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "33152732 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 36.23,
            "unit": "ns/op",
            "extra": "33152732 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "33152732 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "33152732 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3819,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "315301 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3819,
            "unit": "ns/op",
            "extra": "315301 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "315301 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "315301 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 458,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2751207 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 458,
            "unit": "ns/op",
            "extra": "2751207 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2751207 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2751207 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1184,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1184,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid)",
            "value": 1321,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "907340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1321,
            "unit": "ns/op",
            "extra": "907340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "907340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "907340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 34.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "33705668 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 34.94,
            "unit": "ns/op",
            "extra": "33705668 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "33705668 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "33705668 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver)",
            "value": 143103330,
            "unit": "ns/op\t        73.00 iters/op\t     24644 stress\t    7848 B/op\t      12 allocs/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - ns/op",
            "value": 143103330,
            "unit": "ns/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - iters/op",
            "value": 73,
            "unit": "iters/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - stress",
            "value": 24644,
            "unit": "stress",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - B/op",
            "value": 7848,
            "unit": "B/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver)",
            "value": 2037621140,
            "unit": "ns/op\t        71.00 iters/op\t    234267 stress\t   42800 B/op\t      19 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 2037621140,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - iters/op",
            "value": 71,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - stress",
            "value": 234267,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - B/op",
            "value": 42800,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 19,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver)",
            "value": 31027886420,
            "unit": "ns/op\t        79.00 iters/op\t   2347331 stress\t 1052448 B/op\t      25 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - ns/op",
            "value": 31027886420,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - iters/op",
            "value": 79,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - stress",
            "value": 2347331,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - B/op",
            "value": 1052448,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver)",
            "value": 24484571,
            "unit": "ns/op\t    1507 B/op\t       7 allocs/op",
            "extra": "45 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 24484571,
            "unit": "ns/op",
            "extra": "45 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - B/op",
            "value": 1507,
            "unit": "B/op",
            "extra": "45 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "45 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver)",
            "value": 29830,
            "unit": "ns/op\t     258 B/op\t       6 allocs/op",
            "extra": "40316 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - ns/op",
            "value": 29830,
            "unit": "ns/op",
            "extra": "40316 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "40316 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "40316 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "distinct": true,
          "id": "66b37c8d08c46b3966520f52ec7e94e2b5afb171",
          "message": "rules: export `CalculateRepulsion` and `CalculateAxisOverlap` functions to make use of them in third-party rules",
          "timestamp": "2026-11-02T18:28:50+03:00",
          "tree_id": "203e70f550abe079a9db46b105697adc3fbdd5b0",
          "url": "https://github.com/arrangio/core/commit/66b37c8d08c46b3966520f52ec7e94e2b5afb171"
        },
        "date": 1793636332922,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 19.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60810158 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 19.59,
            "unit": "ns/op",
            "extra": "60810158 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "60810158 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "60810158 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 1700,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "710227 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 1700,
            "unit": "ns/op",
            "extra": "710227 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "710227 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "710227 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 203.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5904856 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 203.6,
            "unit": "ns/op",
            "extra": "5904856 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5904856 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5904856 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 657.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1830344 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 657.1,
            "unit": "ns/op",
            "extra": "1830344 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1830344 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1830344 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid)",
            "value": 707.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1692979 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 707.7,
            "unit": "ns/op",
            "extra": "1692979 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1692979 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1692979 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 19.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62119893 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 19.27,
            "unit": "ns/op",
            "extra": "62119893 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "62119893 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "62119893 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver)",
            "value": 86756765,
            "unit": "ns/op\t        66.00 iters/op\t     24074 stress\t    5833 B/op\t      11 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - ns/op",
            "value": 86756765,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - iters/op",
            "value": 66,
            "unit": "iters/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - stress",
            "value": 24074,
            "unit": "stress",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - B/op",
            "value": 5833,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver)",
            "value": 1347100242,
            "unit": "ns/op\t        73.00 iters/op\t    239652 stress\t   33920 B/op\t      18 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 1347100242,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - iters/op",
            "value": 73,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - stress",
            "value": 239652,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - B/op",
            "value": 33920,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver)",
            "value": 21717414405,
            "unit": "ns/op\t        77.00 iters/op\t   2352909 stress\t 1052336 B/op\t      24 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - ns/op",
            "value": 21717414405,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - iters/op",
            "value": 77,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - stress",
            "value": 2352909,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - B/op",
            "value": 1052336,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - allocs/op",
            "value": 24,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver)",
            "value": 13691490,
            "unit": "ns/op\t    2996 B/op\t       7 allocs/op",
            "extra": "74 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 13691490,
            "unit": "ns/op",
            "extra": "74 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - B/op",
            "value": 2996,
            "unit": "B/op",
            "extra": "74 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "74 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver)",
            "value": 14621,
            "unit": "ns/op\t     256 B/op\t       6 allocs/op",
            "extra": "82405 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - ns/op",
            "value": 14621,
            "unit": "ns/op",
            "extra": "82405 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - B/op",
            "value": 256,
            "unit": "B/op",
            "extra": "82405 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "82405 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "distinct": true,
          "id": "1ecb964fb9277f394c5657006dcacbf1261aacfe",
          "message": "nosec: mathematically safe `uint32` conversions",
          "timestamp": "2026-11-03T16:19:28+03:00",
          "tree_id": "bfe2e9b994a459d8aa775ad24571cd507dc1f0ab",
          "url": "https://github.com/arrangio/core/commit/1ecb964fb9277f394c5657006dcacbf1261aacfe"
        },
        "date": 1793712161017,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 40.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29310308 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 40.58,
            "unit": "ns/op",
            "extra": "29310308 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "29310308 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "29310308 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 6770,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "177442 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 6770,
            "unit": "ns/op",
            "extra": "177442 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "177442 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "177442 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 325.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3695932 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 325.1,
            "unit": "ns/op",
            "extra": "3695932 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3695932 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3695932 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 797.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1505336 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 797.1,
            "unit": "ns/op",
            "extra": "1505336 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1505336 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1505336 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid)",
            "value": 1259,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "902110 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1259,
            "unit": "ns/op",
            "extra": "902110 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "902110 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "902110 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 30.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39210411 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 30.03,
            "unit": "ns/op",
            "extra": "39210411 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39210411 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39210411 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver)",
            "value": 169797002,
            "unit": "ns/op\t        76.00 iters/op\t     23203 stress\t    1452 B/op\t       8 allocs/op",
            "extra": "24 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - ns/op",
            "value": 169797002,
            "unit": "ns/op",
            "extra": "24 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - iters/op",
            "value": 76,
            "unit": "iters/op",
            "extra": "24 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - stress",
            "value": 23203,
            "unit": "stress",
            "extra": "24 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - B/op",
            "value": 1452,
            "unit": "B/op",
            "extra": "24 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "24 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver)",
            "value": 1371102948,
            "unit": "ns/op\t       100.0 iters/op\t    216524 stress\t   67904 B/op\t      15 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 1371102948,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - iters/op",
            "value": 100,
            "unit": "iters/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - stress",
            "value": 216524,
            "unit": "stress",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - B/op",
            "value": 67904,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver)",
            "value": 3706148202,
            "unit": "ns/op\t       100.0 iters/op\t   2139311 stress\t 1008096 B/op\t       9 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - ns/op",
            "value": 3706148202,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - iters/op",
            "value": 100,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - stress",
            "value": 2139311,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - B/op",
            "value": 1008096,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver)",
            "value": 27542132,
            "unit": "ns/op\t     699 B/op\t       7 allocs/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 27542132,
            "unit": "ns/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - B/op",
            "value": 699,
            "unit": "B/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver)",
            "value": 3965321644,
            "unit": "ns/op\t     256 B/op\t       6 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - ns/op",
            "value": 3965321644,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - B/op",
            "value": 256,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver)",
            "value": 27416,
            "unit": "ns/op\t     258 B/op\t       6 allocs/op",
            "extra": "42644 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - ns/op",
            "value": 27416,
            "unit": "ns/op",
            "extra": "42644 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "42644 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "42644 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "distinct": true,
          "id": "fb7b836d968c532b5605e4d8944752c96ebfb36d",
          "message": "perf(grid): compact `gridNode` as storing `minBounds` and `maxBounds` was x3 memory ineffecient and caused it to be out of L1/L2 CPU cache",
          "timestamp": "2026-11-04T15:04:23+03:00",
          "tree_id": "73179523a9787f4437a420789571d41a2f6ebbf5",
          "url": "https://github.com/arrangio/core/commit/fb7b836d968c532b5605e4d8944752c96ebfb36d"
        },
        "date": 1793795611880,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 38.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31127859 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 38.43,
            "unit": "ns/op",
            "extra": "31127859 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "31127859 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "31127859 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 4567,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "260384 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 4567,
            "unit": "ns/op",
            "extra": "260384 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "260384 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "260384 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 382.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3105705 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 382.2,
            "unit": "ns/op",
            "extra": "3105705 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3105705 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3105705 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1231,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "970509 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1231,
            "unit": "ns/op",
            "extra": "970509 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "970509 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "970509 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid)",
            "value": 1864,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "645043 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1864,
            "unit": "ns/op",
            "extra": "645043 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "645043 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "645043 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 35.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "33730569 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 35.15,
            "unit": "ns/op",
            "extra": "33730569 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "33730569 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "33730569 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver)",
            "value": 272280280,
            "unit": "ns/op\t        77.00 iters/op\t     26560 stress\t    7257 B/op\t      11 allocs/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - ns/op",
            "value": 272280280,
            "unit": "ns/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - iters/op",
            "value": 77,
            "unit": "iters/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - stress",
            "value": 26560,
            "unit": "stress",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - B/op",
            "value": 7257,
            "unit": "B/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver)",
            "value": 975454406,
            "unit": "ns/op\t        86.00 iters/op\t    181666 stress\t   45184 B/op\t      13 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 975454406,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - iters/op",
            "value": 86,
            "unit": "iters/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - stress",
            "value": 181666,
            "unit": "stress",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - B/op",
            "value": 45184,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver)",
            "value": 3488797873,
            "unit": "ns/op\t       100.0 iters/op\t   2132689 stress\t 1007872 B/op\t       7 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - ns/op",
            "value": 3488797873,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - iters/op",
            "value": 100,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - stress",
            "value": 2132689,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - B/op",
            "value": 1007872,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver)",
            "value": 23101877,
            "unit": "ns/op\t    3226 B/op\t       6 allocs/op",
            "extra": "48 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 23101877,
            "unit": "ns/op",
            "extra": "48 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - B/op",
            "value": 3226,
            "unit": "B/op",
            "extra": "48 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "48 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver)",
            "value": 3944944156,
            "unit": "ns/op\t    1216 B/op\t       8 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - ns/op",
            "value": 3944944156,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - B/op",
            "value": 1216,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver)",
            "value": 27812,
            "unit": "ns/op\t     257 B/op\t       6 allocs/op",
            "extra": "42140 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - ns/op",
            "value": 27812,
            "unit": "ns/op",
            "extra": "42140 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - B/op",
            "value": 257,
            "unit": "B/op",
            "extra": "42140 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "42140 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "distinct": true,
          "id": "53771a78bd2b52371967b3c6d7aebdd3b3b74e4b",
          "message": "chore: bye, Jules",
          "timestamp": "2026-11-08T10:26:58+03:00",
          "tree_id": "d450c3498e9ff8ce2ac2558ef16077164307afc5",
          "url": "https://github.com/arrangio/core/commit/53771a78bd2b52371967b3c6d7aebdd3b3b74e4b"
        },
        "date": 1794122998752,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 30.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39523212 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 30.16,
            "unit": "ns/op",
            "extra": "39523212 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39523212 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39523212 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3297,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "363331 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3297,
            "unit": "ns/op",
            "extra": "363331 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "363331 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "363331 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 333.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3587856 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 333.6,
            "unit": "ns/op",
            "extra": "3587856 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3587856 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3587856 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1021,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1021,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid)",
            "value": 1508,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "793638 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1508,
            "unit": "ns/op",
            "extra": "793638 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "793638 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "793638 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 27.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42883675 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 27.81,
            "unit": "ns/op",
            "extra": "42883675 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42883675 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42883675 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver)",
            "value": 220585160,
            "unit": "ns/op\t        77.00 iters/op\t     26870 stress\t    5908 B/op\t       8 allocs/op",
            "extra": "21 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - ns/op",
            "value": 220585160,
            "unit": "ns/op",
            "extra": "21 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - iters/op",
            "value": 77,
            "unit": "iters/op",
            "extra": "21 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - stress",
            "value": 26870,
            "unit": "stress",
            "extra": "21 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - B/op",
            "value": 5908,
            "unit": "B/op",
            "extra": "21 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "21 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver)",
            "value": 799634241,
            "unit": "ns/op\t        85.00 iters/op\t    185875 stress\t   44661 B/op\t       8 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 799634241,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - iters/op",
            "value": 85,
            "unit": "iters/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - stress",
            "value": 185875,
            "unit": "stress",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - B/op",
            "value": 44661,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver)",
            "value": 2787989480,
            "unit": "ns/op\t       100.0 iters/op\t   2133741 stress\t 1008432 B/op\t      12 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - ns/op",
            "value": 2787989480,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - iters/op",
            "value": 100,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - stress",
            "value": 2133741,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - B/op",
            "value": 1008432,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver)",
            "value": 20175544,
            "unit": "ns/op\t    2932 B/op\t       7 allocs/op",
            "extra": "56 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 20175544,
            "unit": "ns/op",
            "extra": "56 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - B/op",
            "value": 2932,
            "unit": "B/op",
            "extra": "56 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "56 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver)",
            "value": 3332661390,
            "unit": "ns/op\t     256 B/op\t       6 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - ns/op",
            "value": 3332661390,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - B/op",
            "value": 256,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver)",
            "value": 22571,
            "unit": "ns/op\t     257 B/op\t       6 allocs/op",
            "extra": "52081 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - ns/op",
            "value": 22571,
            "unit": "ns/op",
            "extra": "52081 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - B/op",
            "value": 257,
            "unit": "B/op",
            "extra": "52081 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "52081 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "distinct": true,
          "id": "437d08c3906e4656c797b48960262dcae6a078ed",
          "message": "fix(containment): even if object is outside of zone from the left and from the right simultaneously, calculate the displacements independently of one other",
          "timestamp": "2026-11-14T23:20:36+03:00",
          "tree_id": "95ff572aae707e5b03265aa3868a2a4b33f7fa3c",
          "url": "https://github.com/arrangio/core/commit/437d08c3906e4656c797b48960262dcae6a078ed"
        },
        "date": 1794688162535,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 22.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51097560 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 22.65,
            "unit": "ns/op",
            "extra": "51097560 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51097560 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51097560 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2228,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "537618 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2228,
            "unit": "ns/op",
            "extra": "537618 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "537618 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "537618 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 178.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6531057 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 178.2,
            "unit": "ns/op",
            "extra": "6531057 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6531057 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6531057 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 692.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1727132 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 692.8,
            "unit": "ns/op",
            "extra": "1727132 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1727132 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1727132 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid)",
            "value": 1097,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1097,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 20.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56444706 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 20.97,
            "unit": "ns/op",
            "extra": "56444706 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56444706 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56444706 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver)",
            "value": 96399880,
            "unit": "ns/op\t        69.00 iters/op\t     22871 stress\t    2061 B/op\t      10 allocs/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - ns/op",
            "value": 96399880,
            "unit": "ns/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - iters/op",
            "value": 69,
            "unit": "iters/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - stress",
            "value": 22871,
            "unit": "stress",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - B/op",
            "value": 2061,
            "unit": "B/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver)",
            "value": 1051837345,
            "unit": "ns/op\t        77.00 iters/op\t    235600 stress\t    1320 B/op\t      11 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 1051837345,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - iters/op",
            "value": 77,
            "unit": "iters/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - stress",
            "value": 235600,
            "unit": "stress",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - B/op",
            "value": 1320,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver)",
            "value": 6226442665,
            "unit": "ns/op\t       100.0 iters/op\t   2274084 stress\t 1007984 B/op\t       8 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - ns/op",
            "value": 6226442665,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - iters/op",
            "value": 100,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - stress",
            "value": 2274084,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - B/op",
            "value": 1007984,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver)",
            "value": 13215646,
            "unit": "ns/op\t    2448 B/op\t       7 allocs/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 13215646,
            "unit": "ns/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - B/op",
            "value": 2448,
            "unit": "B/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver)",
            "value": 2766403104,
            "unit": "ns/op\t     256 B/op\t       6 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - ns/op",
            "value": 2766403104,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - B/op",
            "value": 256,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver)",
            "value": 16667,
            "unit": "ns/op\t     256 B/op\t       6 allocs/op",
            "extra": "69846 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - ns/op",
            "value": 16667,
            "unit": "ns/op",
            "extra": "69846 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - B/op",
            "value": 256,
            "unit": "B/op",
            "extra": "69846 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "69846 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "distinct": true,
          "id": "9a0eeae5c9ac0fdd74054371cd2f68d84b3bcc0c",
          "message": "fix(grid): use half-open intervals",
          "timestamp": "2026-11-19T19:59:57+03:00",
          "tree_id": "d1fd50b4b6be94eb8b8ec6f151b6c4dd2ffd7c1a",
          "url": "https://github.com/arrangio/core/commit/9a0eeae5c9ac0fdd74054371cd2f68d84b3bcc0c"
        },
        "date": 1795107890751,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 25.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46819207 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 25.54,
            "unit": "ns/op",
            "extra": "46819207 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46819207 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46819207 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2242,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "536674 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2242,
            "unit": "ns/op",
            "extra": "536674 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "536674 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "536674 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 177.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6748165 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 177.1,
            "unit": "ns/op",
            "extra": "6748165 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6748165 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6748165 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 710.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1682685 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 710.8,
            "unit": "ns/op",
            "extra": "1682685 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1682685 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1682685 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid)",
            "value": 1125,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1125,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 22.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53364939 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 22.46,
            "unit": "ns/op",
            "extra": "53364939 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53364939 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53364939 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver)",
            "value": 63063691,
            "unit": "ns/op\t        70.00 iters/op\t     24141 stress\t    1359 B/op\t      10 allocs/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - ns/op",
            "value": 63063691,
            "unit": "ns/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - iters/op",
            "value": 70,
            "unit": "iters/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - stress",
            "value": 24141,
            "unit": "stress",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - B/op",
            "value": 1359,
            "unit": "B/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver)",
            "value": 730297858,
            "unit": "ns/op\t        78.00 iters/op\t    234938 stress\t     816 B/op\t      11 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 730297858,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - iters/op",
            "value": 78,
            "unit": "iters/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - stress",
            "value": 234938,
            "unit": "stress",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - B/op",
            "value": 816,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver)",
            "value": 7666312957,
            "unit": "ns/op\t        87.00 iters/op\t   2386054 stress\t     592 B/op\t       9 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - ns/op",
            "value": 7666312957,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - iters/op",
            "value": 87,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - stress",
            "value": 2386054,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - B/op",
            "value": 592,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver)",
            "value": 11096070,
            "unit": "ns/op\t     577 B/op\t       7 allocs/op",
            "extra": "93 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 11096070,
            "unit": "ns/op",
            "extra": "93 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - B/op",
            "value": 577,
            "unit": "B/op",
            "extra": "93 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "93 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver)",
            "value": 2557652172,
            "unit": "ns/op\t     256 B/op\t       6 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - ns/op",
            "value": 2557652172,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - B/op",
            "value": 256,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver)",
            "value": 683775,
            "unit": "ns/op\t     292 B/op\t       6 allocs/op",
            "extra": "1732 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - ns/op",
            "value": 683775,
            "unit": "ns/op",
            "extra": "1732 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - B/op",
            "value": 292,
            "unit": "B/op",
            "extra": "1732 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1732 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "distinct": true,
          "id": "0ca5ec3e7af01acdf0814fedaa5419c2b7e295d9",
          "message": "fix(collision): do not detect collisions for 0-volume boxes",
          "timestamp": "2026-11-21T22:50:04+03:00",
          "tree_id": "e7cf98a3f85db857d0171e923f49727a34b3b9cf",
          "url": "https://github.com/arrangio/core/commit/0ca5ec3e7af01acdf0814fedaa5419c2b7e295d9"
        },
        "date": 1795291159175,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 43.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27439952 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 43.66,
            "unit": "ns/op",
            "extra": "27439952 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "27439952 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "27439952 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 4735,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "254096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 4735,
            "unit": "ns/op",
            "extra": "254096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "254096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "254096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 367.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3233778 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 367.3,
            "unit": "ns/op",
            "extra": "3233778 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3233778 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3233778 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1200,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1200,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid)",
            "value": 1879,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "635882 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1879,
            "unit": "ns/op",
            "extra": "635882 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "635882 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "635882 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 38.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30795658 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 38.76,
            "unit": "ns/op",
            "extra": "30795658 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "30795658 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "30795658 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver)",
            "value": 97419772,
            "unit": "ns/op\t        70.00 iters/op\t     23243 stress\t    1710 B/op\t      11 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - ns/op",
            "value": 97419772,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - iters/op",
            "value": 70,
            "unit": "iters/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - stress",
            "value": 23243,
            "unit": "stress",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - B/op",
            "value": 1710,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver)",
            "value": 1125496152,
            "unit": "ns/op\t        75.00 iters/op\t    239538 stress\t     480 B/op\t       8 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 1125496152,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - iters/op",
            "value": 75,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - stress",
            "value": 239538,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - B/op",
            "value": 480,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver)",
            "value": 12553998911,
            "unit": "ns/op\t       100.0 iters/op\t   2381174 stress\t     816 B/op\t      11 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - ns/op",
            "value": 12553998911,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - iters/op",
            "value": 100,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - stress",
            "value": 2381174,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - B/op",
            "value": 816,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver)",
            "value": 19788760,
            "unit": "ns/op\t     637 B/op\t       7 allocs/op",
            "extra": "55 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 19788760,
            "unit": "ns/op",
            "extra": "55 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - B/op",
            "value": 637,
            "unit": "B/op",
            "extra": "55 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "55 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver)",
            "value": 3770221317,
            "unit": "ns/op\t     256 B/op\t       6 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - ns/op",
            "value": 3770221317,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - B/op",
            "value": 256,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver)",
            "value": 1346145,
            "unit": "ns/op\t     332 B/op\t       6 allocs/op",
            "extra": "882 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - ns/op",
            "value": 1346145,
            "unit": "ns/op",
            "extra": "882 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - B/op",
            "value": 332,
            "unit": "B/op",
            "extra": "882 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "882 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "distinct": true,
          "id": "d743f91ad19677736c56a0cd5c0486d19c4f6c6e",
          "message": "security(rotations): clamp `int16` from up and down with `clampInt16()` method",
          "timestamp": "2026-11-22T19:36:05+03:00",
          "tree_id": "068560ab6f76731e87d546fb83bca3417fe46154",
          "url": "https://github.com/arrangio/core/commit/d743f91ad19677736c56a0cd5c0486d19c4f6c6e"
        },
        "date": 1795365534491,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41666293 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.97,
            "unit": "ns/op",
            "extra": "41666293 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41666293 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41666293 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3400,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "352723 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3400,
            "unit": "ns/op",
            "extra": "352723 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "352723 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "352723 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 322.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3700844 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 322.7,
            "unit": "ns/op",
            "extra": "3700844 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3700844 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3700844 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1256,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "959162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1256,
            "unit": "ns/op",
            "extra": "959162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "959162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "959162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid)",
            "value": 1287,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "941824 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1287,
            "unit": "ns/op",
            "extra": "941824 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "941824 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "941824 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 26.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45798710 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 26.33,
            "unit": "ns/op",
            "extra": "45798710 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45798710 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45798710 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver)",
            "value": 96981242,
            "unit": "ns/op\t        68.00 iters/op\t     26579 stress\t      48 B/op\t       0 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - ns/op",
            "value": 96981242,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - iters/op",
            "value": 68,
            "unit": "iters/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - stress",
            "value": 26579,
            "unit": "stress",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver)",
            "value": 880309778,
            "unit": "ns/op\t        83.00 iters/op\t    251216 stress\t     232 B/op\t       2 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 880309778,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - iters/op",
            "value": 83,
            "unit": "iters/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - stress",
            "value": 251216,
            "unit": "stress",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - B/op",
            "value": 232,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver)",
            "value": 7627422545,
            "unit": "ns/op\t       100.0 iters/op\t   2456300 stress\t     224 B/op\t       2 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - ns/op",
            "value": 7627422545,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - iters/op",
            "value": 100,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - stress",
            "value": 2456300,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - B/op",
            "value": 224,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver)",
            "value": 21943021,
            "unit": "ns/op\t      28 B/op\t       0 allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 21943021,
            "unit": "ns/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - B/op",
            "value": 28,
            "unit": "B/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver)",
            "value": 2779728096,
            "unit": "ns/op\t     784 B/op\t       7 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - ns/op",
            "value": 2779728096,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - B/op",
            "value": 784,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver)",
            "value": 2768394,
            "unit": "ns/op\t      15 B/op\t       0 allocs/op",
            "extra": "429 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - ns/op",
            "value": 2768394,
            "unit": "ns/op",
            "extra": "429 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - B/op",
            "value": 15,
            "unit": "B/op",
            "extra": "429 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "429 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "distinct": true,
          "id": "a8861ccf662c16a7a22698b6a49dae88bdc549df",
          "message": "fix(gosec): ignore G115 overflow conversion warnings",
          "timestamp": "2026-11-26T19:27:54+03:00",
          "tree_id": "a0fea48bd28c948c20dc99d6867598015449bb41",
          "url": "https://github.com/arrangio/core/commit/a8861ccf662c16a7a22698b6a49dae88bdc549df"
        },
        "date": 1795710674494,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 48.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24928309 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 48.82,
            "unit": "ns/op",
            "extra": "24928309 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "24928309 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "24928309 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3676,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "328070 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3676,
            "unit": "ns/op",
            "extra": "328070 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "328070 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "328070 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 455.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2635088 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 455.4,
            "unit": "ns/op",
            "extra": "2635088 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2635088 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2635088 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 2071,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "589645 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 2071,
            "unit": "ns/op",
            "extra": "589645 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "589645 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "589645 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid)",
            "value": 1995,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "595882 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1995,
            "unit": "ns/op",
            "extra": "595882 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "595882 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "595882 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 41.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28522704 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 41.71,
            "unit": "ns/op",
            "extra": "28522704 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "28522704 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "28522704 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver)",
            "value": 201082619,
            "unit": "ns/op\t        68.00 iters/op\t     24205 stress\t   20405 B/op\t       2 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - ns/op",
            "value": 201082619,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - iters/op",
            "value": 68,
            "unit": "iters/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - stress",
            "value": 24205,
            "unit": "stress",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - B/op",
            "value": 20405,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver)",
            "value": 2532955074,
            "unit": "ns/op\t        74.00 iters/op\t    241217 stress\t 2654096 B/op\t      23 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 2532955074,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - iters/op",
            "value": 74,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - stress",
            "value": 241217,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - B/op",
            "value": 2654096,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver)",
            "value": 29060143354,
            "unit": "ns/op\t        81.00 iters/op\t   2504423 stress\t32260768 B/op\t      40 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - ns/op",
            "value": 29060143354,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - iters/op",
            "value": 81,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - stress",
            "value": 2504423,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - B/op",
            "value": 32260768,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - allocs/op",
            "value": 40,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver)",
            "value": 46289071,
            "unit": "ns/op\t  102093 B/op\t       1 allocs/op",
            "extra": "26 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 46289071,
            "unit": "ns/op",
            "extra": "26 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - B/op",
            "value": 102093,
            "unit": "B/op",
            "extra": "26 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "26 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver)",
            "value": 5297240401,
            "unit": "ns/op\t313221456 B/op\t      47 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - ns/op",
            "value": 5297240401,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - B/op",
            "value": 313221456,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - allocs/op",
            "value": 47,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver)",
            "value": 25955,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46082 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - ns/op",
            "value": 25955,
            "unit": "ns/op",
            "extra": "46082 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46082 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46082 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "d@dvprokofiev.ru",
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "distinct": true,
          "id": "4259fbdf2670bd6dcac36dce9f451b5cac3a65f2",
          "message": "perf(`force_solver`): pre-allocate `movedRecords`\n\n- wake up all entities in the scene if more than 1/4 of them are in `movedRecords`",
          "timestamp": "2026-11-26T19:43:29+03:00",
          "tree_id": "55fb43894ff105a69de4c30c8d1ab7c20cc48901",
          "url": "https://github.com/arrangio/core/commit/4259fbdf2670bd6dcac36dce9f451b5cac3a65f2"
        },
        "date": 1795711582222,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 37.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "32181456 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 37.19,
            "unit": "ns/op",
            "extra": "32181456 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "32181456 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "32181456 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2920,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "410814 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2920,
            "unit": "ns/op",
            "extra": "410814 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "410814 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "410814 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 353.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3395854 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 353.4,
            "unit": "ns/op",
            "extra": "3395854 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3395854 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3395854 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1545,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "767584 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1545,
            "unit": "ns/op",
            "extra": "767584 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "767584 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "767584 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid)",
            "value": 1543,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "780732 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1543,
            "unit": "ns/op",
            "extra": "780732 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "780732 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "780732 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 32.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36940071 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 32.43,
            "unit": "ns/op",
            "extra": "36940071 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "36940071 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "36940071 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver)",
            "value": 132950026,
            "unit": "ns/op\t        63.00 iters/op\t     26590 stress\t      30 B/op\t       0 allocs/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - ns/op",
            "value": 132950026,
            "unit": "ns/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - iters/op",
            "value": 63,
            "unit": "iters/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - stress",
            "value": 26590,
            "unit": "stress",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver)",
            "value": 1661436715,
            "unit": "ns/op\t        76.00 iters/op\t    243237 stress\t     224 B/op\t       2 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 1661436715,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - iters/op",
            "value": 76,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - stress",
            "value": 243237,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - B/op",
            "value": 224,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver)",
            "value": 18825003748,
            "unit": "ns/op\t        82.00 iters/op\t   2522825 stress\t     560 B/op\t       5 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - ns/op",
            "value": 18825003748,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - iters/op",
            "value": 82,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - stress",
            "value": 2522825,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - B/op",
            "value": 560,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver)",
            "value": 22976959,
            "unit": "ns/op\t      15 B/op\t       0 allocs/op",
            "extra": "50 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 22976959,
            "unit": "ns/op",
            "extra": "50 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - B/op",
            "value": 15,
            "unit": "B/op",
            "extra": "50 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver)",
            "value": 2966769438,
            "unit": "ns/op\t     896 B/op\t       8 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - ns/op",
            "value": 2966769438,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - B/op",
            "value": 896,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_1M (github.com/arrangio/core/solver) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver)",
            "value": 20110,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55425 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - ns/op",
            "value": 20110,
            "unit": "ns/op",
            "extra": "55425 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "55425 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "55425 times\n4 procs"
          }
        ]
      }
    ]
  }
}