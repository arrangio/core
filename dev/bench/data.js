window.BENCHMARK_DATA = {
  "lastUpdate": 1793039786479,
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
      }
    ]
  }
}