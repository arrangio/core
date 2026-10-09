window.BENCHMARK_DATA = {
  "lastUpdate": 1791577777619,
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
          "id": "f4efda5d23143153e0260eb3b58115ac29a67c7c",
          "message": "ci: don't fail on alert and increase alert threshold for benchmark job",
          "timestamp": "2026-08-13T21:35:26+03:00",
          "tree_id": "b7e98aa4d2d772397d7e033a2f7156803c567dd9",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/f4efda5d23143153e0260eb3b58115ac29a67c7c"
        },
        "date": 1786646174085,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 17.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "69018169 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 17.43,
            "unit": "ns/op",
            "extra": "69018169 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "69018169 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "69018169 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "561562 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2138,
            "unit": "ns/op",
            "extra": "561562 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "561562 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "561562 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 589.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2035522 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 589.3,
            "unit": "ns/op",
            "extra": "2035522 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2035522 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2035522 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 669.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1791919 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 669.3,
            "unit": "ns/op",
            "extra": "1791919 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1791919 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1791919 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "9ccca3c99485bb251b05df8c3dcb3464177b2225",
          "message": "\ud83e\uddf9 [Refactor Grid and Rules for Static Entities and Zones]",
          "timestamp": "2026-08-13T18:35:49Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/7/commits/9ccca3c99485bb251b05df8c3dcb3464177b2225"
        },
        "date": 1786651897373,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 44.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27929749 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 44.6,
            "unit": "ns/op",
            "extra": "27929749 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "27929749 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "27929749 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 4204,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "286586 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 4204,
            "unit": "ns/op",
            "extra": "286586 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "286586 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "286586 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 923.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1299440 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 923.8,
            "unit": "ns/op",
            "extra": "1299440 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1299440 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1299440 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 2692,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "407325 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 2692,
            "unit": "ns/op",
            "extra": "407325 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "407325 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "407325 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "Daniil Prokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b70acbac8ee94e7e66bd8265e49331f34bb83ce",
          "message": "Merge pull request #3 from dvprokofiev/perf/early-exit-collision-743282526597653625\n\n\u26a1 Performance: Optimize CheckCollision with early exit",
          "timestamp": "2026-08-14T11:21:34+03:00",
          "tree_id": "364a77fc157ecc84ba541002d57cbebd56465e5f",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/5b70acbac8ee94e7e66bd8265e49331f34bb83ce"
        },
        "date": 1786695723984,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 22.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53037290 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 22.45,
            "unit": "ns/op",
            "extra": "53037290 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53037290 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53037290 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2617,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "457298 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2617,
            "unit": "ns/op",
            "extra": "457298 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "457298 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "457298 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 761.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1576989 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 761.6,
            "unit": "ns/op",
            "extra": "1576989 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1576989 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1576989 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 863.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1388509 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 863.9,
            "unit": "ns/op",
            "extra": "1388509 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1388509 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1388509 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "a0019fb8b1c4c9d0ef850634738920951b985480",
          "message": "\u26a1 Optimize Mask.Has with two-pointer intersection",
          "timestamp": "2026-08-14T08:22:15Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/2/commits/a0019fb8b1c4c9d0ef850634738920951b985480"
        },
        "date": 1786695882184,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 22.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53160417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 22.49,
            "unit": "ns/op",
            "extra": "53160417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53160417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53160417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2635,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "456288 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2635,
            "unit": "ns/op",
            "extra": "456288 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "456288 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "456288 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 759.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1579844 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 759.5,
            "unit": "ns/op",
            "extra": "1579844 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1579844 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1579844 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 864.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1388096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 864.7,
            "unit": "ns/op",
            "extra": "1388096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1388096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1388096 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "Daniil Prokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "42481e14611ccf5c6e5fb5257bb651c056014bc1",
          "message": "Merge pull request #2 from dvprokofiev/perf-optimize-mask-has-9631233637720683612\n\n\u26a1 Optimize Mask.Has with two-pointer intersection",
          "timestamp": "2026-08-14T11:25:04+03:00",
          "tree_id": "f63441ded4471e26f158f9e3ca409b43e05a1273",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/42481e14611ccf5c6e5fb5257bb651c056014bc1"
        },
        "date": 1786695936852,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 22.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53151394 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 22.47,
            "unit": "ns/op",
            "extra": "53151394 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53151394 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53151394 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2980,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "397590 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2980,
            "unit": "ns/op",
            "extra": "397590 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "397590 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "397590 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 813.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1474798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 813.6,
            "unit": "ns/op",
            "extra": "1474798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1474798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1474798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 884.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1350081 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 884.3,
            "unit": "ns/op",
            "extra": "1350081 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1350081 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1350081 times\n4 procs"
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
          "id": "ec70cb78058801dc02cc6a1ce3530fd27f4060df",
          "message": "feat(entity): add IsStatic field\n\nMarks entities that should not be moved by the solver.\nAdded as 5th parameter to NewEntity and to TestEntity builder.\n\nGenerated-by: Antigravity (Claude)\nCo-authored-by: dvprokofiev <d@dvprokofiev.ru>",
          "timestamp": "2026-08-14T21:51:21+03:00",
          "tree_id": "ee4e1e4863ed2fa01424fdf20d00e942b6308d0c",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/ec70cb78058801dc02cc6a1ce3530fd27f4060df"
        },
        "date": 1786733529999,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 22.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53909437 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 22.69,
            "unit": "ns/op",
            "extra": "53909437 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53909437 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53909437 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2589,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "461952 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2589,
            "unit": "ns/op",
            "extra": "461952 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "461952 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "461952 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 675.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1777012 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 675.5,
            "unit": "ns/op",
            "extra": "1777012 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1777012 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1777012 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 775.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1546578 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 775.5,
            "unit": "ns/op",
            "extra": "1546578 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1546578 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1546578 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "51c80525432a8d7c46e1ac7e271c32021988a516",
          "message": "\u26a1 Bolt: Optimize grid cell loop clamping",
          "timestamp": "2026-08-14T18:51:51Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/10/commits/51c80525432a8d7c46e1ac7e271c32021988a516"
        },
        "date": 1786746053162,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41858934 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.36,
            "unit": "ns/op",
            "extra": "41858934 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41858934 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41858934 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3691,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "323737 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3691,
            "unit": "ns/op",
            "extra": "323737 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "323737 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "323737 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 496.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2418206 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 496.5,
            "unit": "ns/op",
            "extra": "2418206 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2418206 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2418206 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1083,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1083,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "458108f318a225e9b559112c008a1319294ac58a",
          "message": "\u26a1 Bolt: Optimize grid cell loop clamping",
          "timestamp": "2026-08-14T18:51:51Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/10/commits/458108f318a225e9b559112c008a1319294ac58a"
        },
        "date": 1786781004268,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43612851 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.03,
            "unit": "ns/op",
            "extra": "43612851 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43612851 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43612851 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3549,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "339168 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3549,
            "unit": "ns/op",
            "extra": "339168 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "339168 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "339168 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 469.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2556464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 469.4,
            "unit": "ns/op",
            "extra": "2556464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2556464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2556464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1117,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1117,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "Daniil Prokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22b3064ba181b80f96059ffe7bb0c0ecd3a2cda3",
          "message": "Merge pull request #10 from dvprokofiev/bolt-optimize-grid-clamping-5733546725222335751\n\n\u26a1 Bolt: Optimize grid cell loop clamping",
          "timestamp": "2026-08-15T11:29:42+03:00",
          "tree_id": "668042fdfb8f127f24d6166b8647f989dc72192d",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/22b3064ba181b80f96059ffe7bb0c0ecd3a2cda3"
        },
        "date": 1786782619225,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42026356 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.38,
            "unit": "ns/op",
            "extra": "42026356 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42026356 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42026356 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3687,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "325832 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3687,
            "unit": "ns/op",
            "extra": "325832 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "325832 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "325832 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 494.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2424800 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 494.9,
            "unit": "ns/op",
            "extra": "2424800 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2424800 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2424800 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1115,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1115,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "502388fd23ff2afd331edcbbfc84ad21bc61c28e",
          "message": "\u26a1 Bolt: Optimize 3D grid iteration loop order",
          "timestamp": "2026-08-15T08:29:54Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/11/commits/502388fd23ff2afd331edcbbfc84ad21bc61c28e"
        },
        "date": 1786832244931,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 24.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46174148 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 24.68,
            "unit": "ns/op",
            "extra": "46174148 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46174148 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46174148 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2498,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "479382 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2498,
            "unit": "ns/op",
            "extra": "479382 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "479382 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "479382 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 361.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3309814 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 361.7,
            "unit": "ns/op",
            "extra": "3309814 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3309814 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3309814 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 774.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1549046 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 774.4,
            "unit": "ns/op",
            "extra": "1549046 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1549046 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1549046 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "f7929f1801a2f9bc81a326fb4d1ada3b3c3db208",
          "message": "\u26a1 Bolt: Optimize 3D grid iteration loop order",
          "timestamp": "2026-08-15T08:29:54Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/11/commits/f7929f1801a2f9bc81a326fb4d1ada3b3c3db208"
        },
        "date": 1786832664040,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41067339 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 29,
            "unit": "ns/op",
            "extra": "41067339 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41067339 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41067339 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3905,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "305005 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3905,
            "unit": "ns/op",
            "extra": "305005 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "305005 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "305005 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 410.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2924172 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 410.1,
            "unit": "ns/op",
            "extra": "2924172 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2924172 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2924172 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1091,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1091,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "5e928eda783a9543a6f0b135e741e3bb0c50b84e",
          "message": "\u26a1 Bolt: Optimize 3D spatial loop ordering for better cache locality",
          "timestamp": "2026-08-15T08:29:54Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/12/commits/5e928eda783a9543a6f0b135e741e3bb0c50b84e"
        },
        "date": 1786919825958,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41319171 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.99,
            "unit": "ns/op",
            "extra": "41319171 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41319171 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41319171 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3670,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "325592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3670,
            "unit": "ns/op",
            "extra": "325592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "325592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "325592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 409,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2931174 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 409,
            "unit": "ns/op",
            "extra": "2931174 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2931174 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2931174 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1086,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1086,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "300c8f068322205831a8ada8c85da589605b310a",
          "message": "\u26a1 Bolt: Optimize 3D spatial loop ordering for better cache locality",
          "timestamp": "2026-08-15T08:29:54Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/12/commits/300c8f068322205831a8ada8c85da589605b310a"
        },
        "date": 1786920000384,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 22.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54507913 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 22.07,
            "unit": "ns/op",
            "extra": "54507913 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54507913 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54507913 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2721,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "441597 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2721,
            "unit": "ns/op",
            "extra": "441597 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "441597 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "441597 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 337.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3552350 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 337.9,
            "unit": "ns/op",
            "extra": "3552350 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3552350 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3552350 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 853,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1406096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 853,
            "unit": "ns/op",
            "extra": "1406096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1406096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1406096 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "e4fa8988100146c0fef93a18565f4fe20c51e2ce",
          "message": "\u26a1 Bolt: Improve cache spatial locality by reordering 3D grid traversal loops",
          "timestamp": "2026-08-15T08:29:54Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/13/commits/e4fa8988100146c0fef93a18565f4fe20c51e2ce"
        },
        "date": 1787005282267,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41760858 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.67,
            "unit": "ns/op",
            "extra": "41760858 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41760858 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41760858 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3712,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "325101 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3712,
            "unit": "ns/op",
            "extra": "325101 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "325101 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "325101 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 500.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2427499 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 500.3,
            "unit": "ns/op",
            "extra": "2427499 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2427499 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2427499 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1106,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1106,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "Daniil Prokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b005b277fed4b3b8c81c930d9193d7d0d5526100",
          "message": "Merge pull request #11 from dvprokofiev/bolt/optimize-grid-iteration-12406607358070992482\n\n\u26a1 Bolt: Optimize 3D grid iteration loop order",
          "timestamp": "2026-08-18T10:24:15+03:00",
          "tree_id": "e82adf6e67671be245b2fd1b6fc5f598ccdb6f49",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/b005b277fed4b3b8c81c930d9193d7d0d5526100"
        },
        "date": 1787037883778,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 21.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54788955 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 21.91,
            "unit": "ns/op",
            "extra": "54788955 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54788955 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54788955 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2693,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "445816 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2693,
            "unit": "ns/op",
            "extra": "445816 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "445816 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "445816 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 343.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3361752 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 343.7,
            "unit": "ns/op",
            "extra": "3361752 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3361752 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3361752 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 852.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1406154 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 852.9,
            "unit": "ns/op",
            "extra": "1406154 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1406154 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1406154 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "b831ef99eb97ffc2cb5aef93909d30ab736cdf40",
          "message": "\u26a1 Bolt: Optimize CheckCollision inner loop bounds check",
          "timestamp": "2026-08-18T07:25:23Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/14/commits/b831ef99eb97ffc2cb5aef93909d30ab736cdf40"
        },
        "date": 1787092479668,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42362994 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.23,
            "unit": "ns/op",
            "extra": "42362994 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42362994 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42362994 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3547,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "336162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3547,
            "unit": "ns/op",
            "extra": "336162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "336162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "336162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 437.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2731417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 437.5,
            "unit": "ns/op",
            "extra": "2731417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2731417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2731417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1100,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1100,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "Daniil Prokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc785b0032dce98e39dbd3f532a493490a9941e6",
          "message": "Merge pull request #14 from dvprokofiev/bolt-optimize-collision-18049269665295863973\n\n\u26a1 Bolt: Optimize CheckCollision inner loop bounds check",
          "timestamp": "2026-08-19T13:24:44+03:00",
          "tree_id": "8b754d350d0a83c71d9869491ac45672f8fad081",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/cc785b0032dce98e39dbd3f532a493490a9941e6"
        },
        "date": 1787135112064,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42502389 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.25,
            "unit": "ns/op",
            "extra": "42502389 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42502389 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42502389 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3584,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "334878 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3584,
            "unit": "ns/op",
            "extra": "334878 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "334878 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "334878 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 435.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2751810 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 435.8,
            "unit": "ns/op",
            "extra": "2751810 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2751810 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2751810 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1104,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1104,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "143a21a2b0c6e982d46f998985f87ec906a039a6",
          "message": "\u26a1 Bolt: Optimize CheckCollision inner loop type asserts",
          "timestamp": "2026-08-19T10:27:04Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/15/commits/143a21a2b0c6e982d46f998985f87ec906a039a6"
        },
        "date": 1787177611415,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 19.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58230273 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 19.67,
            "unit": "ns/op",
            "extra": "58230273 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58230273 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58230273 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2281,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "524329 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2281,
            "unit": "ns/op",
            "extra": "524329 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "524329 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "524329 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 308.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3871429 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 308.6,
            "unit": "ns/op",
            "extra": "3871429 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3871429 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3871429 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 686.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1751984 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 686.7,
            "unit": "ns/op",
            "extra": "1751984 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1751984 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1751984 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "c6f2abe1aee754c167c17f98e4ce82ac144af06c",
          "message": "\u26a1 Bolt: Optimize CheckCollision inner loop type asserts",
          "timestamp": "2026-08-19T10:27:04Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/15/commits/c6f2abe1aee754c167c17f98e4ce82ac144af06c"
        },
        "date": 1787179137692,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42092340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.46,
            "unit": "ns/op",
            "extra": "42092340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42092340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42092340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3524,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "346592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3524,
            "unit": "ns/op",
            "extra": "346592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "346592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "346592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 447.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2660194 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 447.6,
            "unit": "ns/op",
            "extra": "2660194 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2660194 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2660194 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1098,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1098,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "eae3301f7d9f4a6aacbda793b5e7f36f2defbe94",
          "message": "\u26a1 Bolt: Optimize CheckCollision with bounds hoisting and devirtualization",
          "timestamp": "2026-08-19T10:27:04Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/16/commits/eae3301f7d9f4a6aacbda793b5e7f36f2defbe94"
        },
        "date": 1787264850529,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 29.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41206528 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 29.19,
            "unit": "ns/op",
            "extra": "41206528 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41206528 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41206528 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3741,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "320516 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3741,
            "unit": "ns/op",
            "extra": "320516 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "320516 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "320516 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 415.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2922883 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 415.1,
            "unit": "ns/op",
            "extra": "2922883 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2922883 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2922883 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1088,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1088,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "c2f4ec3343bcf66ac8d5942061458a95805eda83",
          "message": "\u26a1 Bolt: Devirtualize shape intersection calls in collision checks",
          "timestamp": "2026-08-19T10:27:04Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/17/commits/c2f4ec3343bcf66ac8d5942061458a95805eda83"
        },
        "date": 1787351461096,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 27.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43290774 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 27.55,
            "unit": "ns/op",
            "extra": "43290774 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43290774 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43290774 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2729,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "440715 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2729,
            "unit": "ns/op",
            "extra": "440715 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "440715 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "440715 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 415.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2917119 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 415.4,
            "unit": "ns/op",
            "extra": "2917119 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2917119 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2917119 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 862.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1391499 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 862.3,
            "unit": "ns/op",
            "extra": "1391499 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1391499 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1391499 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "0fdb1f4e3a051c877f1d57f73a4d31c8b2634ba9",
          "message": "\u26a1 Bolt: Devirtualize Shape.Contains inside CheckCollision",
          "timestamp": "2026-08-19T10:27:04Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/18/commits/0fdb1f4e3a051c877f1d57f73a4d31c8b2634ba9"
        },
        "date": 1787437454772,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42525762 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.24,
            "unit": "ns/op",
            "extra": "42525762 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42525762 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42525762 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3472,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "345897 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3472,
            "unit": "ns/op",
            "extra": "345897 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "345897 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "345897 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 440.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2681680 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 440.3,
            "unit": "ns/op",
            "extra": "2681680 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2681680 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2681680 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1100,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1100,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "3c13d04a74d9750f2e7836ae0dd9d5caecd6894b",
          "message": "\u26a1 Bolt: Devirtualize Shape.Contains inside CheckCollision",
          "timestamp": "2026-08-19T10:27:04Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/18/commits/3c13d04a74d9750f2e7836ae0dd9d5caecd6894b"
        },
        "date": 1787437613288,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40843488 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.99,
            "unit": "ns/op",
            "extra": "40843488 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "40843488 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "40843488 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3806,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "316690 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3806,
            "unit": "ns/op",
            "extra": "316690 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "316690 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "316690 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 430,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2917096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 430,
            "unit": "ns/op",
            "extra": "2917096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2917096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2917096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1092,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1092,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "Daniil Prokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31142d006be938ff071342e211782ba8330f523f",
          "message": "Merge pull request #18 from dvprokofiev/perf-devirtualize-collision-10618127762261140718\n\n\u26a1 Bolt: Devirtualize Shape.Contains inside CheckCollision",
          "timestamp": "2026-08-24T00:20:49+03:00",
          "tree_id": "3561a462eb021462c1a5b51441c3153f49d81109",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/31142d006be938ff071342e211782ba8330f523f"
        },
        "date": 1787520078666,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42451100 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.23,
            "unit": "ns/op",
            "extra": "42451100 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42451100 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42451100 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3467,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "343702 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3467,
            "unit": "ns/op",
            "extra": "343702 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "343702 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "343702 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 436.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2750356 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 436.2,
            "unit": "ns/op",
            "extra": "2750356 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2750356 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2750356 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1108,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "6b701ec45501ff0a324e646f25e27ddc078c6879",
          "message": "\u26a1 Bolt: Fix pure box detection for value types",
          "timestamp": "2026-08-23T21:20:54Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/19/commits/6b701ec45501ff0a324e646f25e27ddc078c6879"
        },
        "date": 1787525273401,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42469482 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.24,
            "unit": "ns/op",
            "extra": "42469482 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42469482 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42469482 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3478,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "345417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3478,
            "unit": "ns/op",
            "extra": "345417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "345417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "345417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 454.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2680819 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 454.4,
            "unit": "ns/op",
            "extra": "2680819 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2680819 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2680819 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1110,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1110,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "Daniil Prokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4346bd7aa81bc17db7f571f54e14b86819c88282",
          "message": "Merge pull request #19 from dvprokofiev/bolt/fix-pure-box-detection-16923347439525771055\n\n\u26a1 Bolt: Fix pure box detection for value types",
          "timestamp": "2026-08-24T10:47:50+03:00",
          "tree_id": "2ef9eb61b658caef307a80bb871c7a73182709e9",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/4346bd7aa81bc17db7f571f54e14b86819c88282"
        },
        "date": 1787557703812,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 29.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41263389 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 29.04,
            "unit": "ns/op",
            "extra": "41263389 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41263389 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41263389 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3717,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "323194 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3717,
            "unit": "ns/op",
            "extra": "323194 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "323194 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "323194 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 409.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2926077 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 409.8,
            "unit": "ns/op",
            "extra": "2926077 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2926077 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2926077 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1089,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1089,
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
          "id": "03f772355c68ef6c3b0328fb995a0a154684c168",
          "message": "`RuleContext`: add `ZoneGrid` and `ZoneBuffer` -- by analogy with `EntityGrid` and `EntityBuffer`\n\n- update files in `rules` to match new names for `Grid` and `Buffer`",
          "timestamp": "2026-08-24T11:17:23+03:00",
          "tree_id": "b234717d7a7a5b193f4079c79bd0e7b57c4abfb0",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/03f772355c68ef6c3b0328fb995a0a154684c168"
        },
        "date": 1787559558700,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41971928 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.27,
            "unit": "ns/op",
            "extra": "41971928 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41971928 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41971928 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3677,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "326602 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3677,
            "unit": "ns/op",
            "extra": "326602 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "326602 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "326602 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 458.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2617153 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 458.5,
            "unit": "ns/op",
            "extra": "2617153 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2617153 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2617153 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1113,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "997524 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1113,
            "unit": "ns/op",
            "extra": "997524 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "997524 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "997524 times\n4 procs"
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
          "id": "2f6be687e1000dccfa0a2b2ef76706eb0e00664e",
          "message": "fix(rules): check if `subject` matched `Target` `Selector` in `AlignmentRule`",
          "timestamp": "2026-08-24T12:15:09+03:00",
          "tree_id": "63b19392e74ef1e55163428f81dac9421a185a0a",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/2f6be687e1000dccfa0a2b2ef76706eb0e00664e"
        },
        "date": 1787563110338,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42426402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.23,
            "unit": "ns/op",
            "extra": "42426402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42426402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42426402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3506,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "341804 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3506,
            "unit": "ns/op",
            "extra": "341804 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "341804 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "341804 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 447.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2615338 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 447.1,
            "unit": "ns/op",
            "extra": "2615338 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2615338 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2615338 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1101,
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
          "id": "380f58a5aa04d6f4d33cb766c4d659903188a83a",
          "message": "tests: separate checking geometry logic from checking how rule handles Selectors",
          "timestamp": "2026-08-24T12:26:44+03:00",
          "tree_id": "590fdcbbeef2dc9356c39ef06645f8718981004c",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/380f58a5aa04d6f4d33cb766c4d659903188a83a"
        },
        "date": 1787563652219,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41330487 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 29,
            "unit": "ns/op",
            "extra": "41330487 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41330487 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41330487 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3671,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "326293 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3671,
            "unit": "ns/op",
            "extra": "326293 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "326293 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "326293 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 413.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2931288 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 413.6,
            "unit": "ns/op",
            "extra": "2931288 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2931288 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2931288 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1089,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1089,
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
          "id": "d9bc0aec5df42d508674f929b26c45c71ad57d33",
          "message": "refactor: split proximity selector into Target and To fields, add input validation, fix tests",
          "timestamp": "2026-08-24T12:57:47+03:00",
          "tree_id": "a81a8afd22cc7e527f8bff5961f27f8603cf0dc7",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/d9bc0aec5df42d508674f929b26c45c71ad57d33"
        },
        "date": 1787565512551,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 29.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41285319 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 29.13,
            "unit": "ns/op",
            "extra": "41285319 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41285319 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41285319 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3705,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "324901 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3705,
            "unit": "ns/op",
            "extra": "324901 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "324901 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "324901 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 410.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2925992 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 410.2,
            "unit": "ns/op",
            "extra": "2925992 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2925992 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2925992 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1090,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1090,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "e51487ff7ad0bb718c485c945a1e843c853d64eb",
          "message": "\ud83d\udd12 Fix panic potential denial of service in grid insert",
          "timestamp": "2026-08-24T09:59:12Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/20/commits/e51487ff7ad0bb718c485c945a1e843c853d64eb"
        },
        "date": 1787605278880,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 17.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "67886637 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 17.63,
            "unit": "ns/op",
            "extra": "67886637 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67886637 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67886637 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2066,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "582708 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2066,
            "unit": "ns/op",
            "extra": "582708 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "582708 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "582708 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 324.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3690745 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 324.7,
            "unit": "ns/op",
            "extra": "3690745 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3690745 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3690745 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 638.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1879729 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 638.6,
            "unit": "ns/op",
            "extra": "1879729 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1879729 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1879729 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "d8294219e110118ddefc4bc4f52c74f250c42288",
          "message": "\ud83d\udd12 Fix panic potential denial of service in grid insert",
          "timestamp": "2026-08-24T09:59:12Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/20/commits/d8294219e110118ddefc4bc4f52c74f250c42288"
        },
        "date": 1787605666239,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41953777 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.64,
            "unit": "ns/op",
            "extra": "41953777 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41953777 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41953777 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3554,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "336278 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3554,
            "unit": "ns/op",
            "extra": "336278 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "336278 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "336278 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 435.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2750144 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 435.9,
            "unit": "ns/op",
            "extra": "2750144 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2750144 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2750144 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1100,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1100,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "e1ed2f8caad922605412719dbeabe575ffcb1991",
          "message": "\ud83d\udd12 Fix panic potential denial of service in grid insert",
          "timestamp": "2026-08-24T09:59:12Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/20/commits/e1ed2f8caad922605412719dbeabe575ffcb1991"
        },
        "date": 1787606091456,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 29.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40179646 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 29.79,
            "unit": "ns/op",
            "extra": "40179646 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "40179646 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "40179646 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3696,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "324476 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3696,
            "unit": "ns/op",
            "extra": "324476 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "324476 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "324476 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 410.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2922798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 410.3,
            "unit": "ns/op",
            "extra": "2922798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2922798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2922798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1085,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1085,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "Daniil Prokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1020dcb506e087958837c1d16da5b5096dc4c100",
          "message": "Merge pull request #20 from dvprokofiev/fix-grid-insert-dos-3060413929858200600\n\n\ud83d\udd12 Fix panic potential denial of service in grid insert",
          "timestamp": "2026-08-25T00:30:08+03:00",
          "tree_id": "d67d0678af9a29042f2d5dd797d02b8cc6b21d44",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/1020dcb506e087958837c1d16da5b5096dc4c100"
        },
        "date": 1787607038697,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41747445 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.84,
            "unit": "ns/op",
            "extra": "41747445 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41747445 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41747445 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3568,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "336430 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3568,
            "unit": "ns/op",
            "extra": "336430 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "336430 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "336430 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 436.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2750335 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 436.6,
            "unit": "ns/op",
            "extra": "2750335 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2750335 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2750335 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1101,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "6f8a3ccdffd4dd1174b677d5a6f523bc49172887",
          "message": "\u26a1 Bolt: Devirtualize Shape.Bounds in Footprint.WorldBounds",
          "timestamp": "2026-08-24T21:33:25Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/21/commits/6f8a3ccdffd4dd1174b677d5a6f523bc49172887"
        },
        "date": 1787682345199,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 22.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54195435 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 22.54,
            "unit": "ns/op",
            "extra": "54195435 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54195435 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54195435 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2791,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "432363 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2791,
            "unit": "ns/op",
            "extra": "432363 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "432363 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "432363 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 341.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3511863 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 341.2,
            "unit": "ns/op",
            "extra": "3511863 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3511863 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3511863 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 811.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1479919 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 811.1,
            "unit": "ns/op",
            "extra": "1479919 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1479919 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1479919 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "Daniil Prokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4370bd8159e9d3f7f0f39b660a910cb54eaef682",
          "message": "Merge pull request #21 from dvprokofiev/bolt-devirtualize-shape-bounds-11867120129532588871\n\nDevirtualize Shape.Bounds in Footprint.WorldBounds",
          "timestamp": "2026-08-25T21:55:58+03:00",
          "tree_id": "9325140f6d44dd1eefb3af6142f4a3fcf583d09b",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/4370bd8159e9d3f7f0f39b660a910cb54eaef682"
        },
        "date": 1787684190859,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41911486 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.62,
            "unit": "ns/op",
            "extra": "41911486 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41911486 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41911486 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3535,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "339447 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3535,
            "unit": "ns/op",
            "extra": "339447 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "339447 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "339447 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 433.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2764681 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 433.8,
            "unit": "ns/op",
            "extra": "2764681 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2764681 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2764681 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1050,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1050,
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
          "id": "ce189ea7fb88383f72622d0c44a31ca482d3d2dd",
          "message": "Merge branch 'main' of https://github.com/dvprokofiev/arrangio-core",
          "timestamp": "2026-08-25T21:57:45+03:00",
          "tree_id": "1dec1e0bca54e7631c8df5b71195a6b5b95da7db",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/ce189ea7fb88383f72622d0c44a31ca482d3d2dd"
        },
        "date": 1787684313850,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 28.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42042592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 28.53,
            "unit": "ns/op",
            "extra": "42042592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42042592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42042592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3634,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "317085 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3634,
            "unit": "ns/op",
            "extra": "317085 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "317085 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "317085 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 432.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2771056 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 432.8,
            "unit": "ns/op",
            "extra": "2771056 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2771056 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2771056 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1046,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1046,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "04d4950fb342754b93293e1c2d689b65fd7cddc5",
          "message": "\u26a1 Bolt: Optimize spatial narrow collision check points",
          "timestamp": "2026-08-25T19:01:24Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/22/commits/04d4950fb342754b93293e1c2d689b65fd7cddc5"
        },
        "date": 1787727539960,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 15.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "78140560 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 15.68,
            "unit": "ns/op",
            "extra": "78140560 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "78140560 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "78140560 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 1854,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "641139 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 1854,
            "unit": "ns/op",
            "extra": "641139 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "641139 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "641139 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 228.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4927402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 228.2,
            "unit": "ns/op",
            "extra": "4927402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4927402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4927402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 588.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2034506 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 588.9,
            "unit": "ns/op",
            "extra": "2034506 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2034506 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2034506 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "6715d5490d434d709bc66916e5b231606804bcf2",
          "message": "\u26a1 Bolt: Optimize spatial narrow collision check points",
          "timestamp": "2026-08-25T19:01:24Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/22/commits/6715d5490d434d709bc66916e5b231606804bcf2"
        },
        "date": 1787728343356,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 29.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40575442 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 29.61,
            "unit": "ns/op",
            "extra": "40575442 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "40575442 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "40575442 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3663,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "328144 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3663,
            "unit": "ns/op",
            "extra": "328144 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "328144 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "328144 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 436.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2773875 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 436.3,
            "unit": "ns/op",
            "extra": "2773875 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2773875 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2773875 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1065,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1065,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "d1c0573e380d75654231fe5735d4c6d5d98dec6d",
          "message": "\u26a1 Bolt: Optimize spatial narrow collision check points",
          "timestamp": "2026-08-25T19:01:24Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/22/commits/d1c0573e380d75654231fe5735d4c6d5d98dec6d"
        },
        "date": 1787728494027,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 29.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40523014 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 29.75,
            "unit": "ns/op",
            "extra": "40523014 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "40523014 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "40523014 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3679,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "325417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3679,
            "unit": "ns/op",
            "extra": "325417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "325417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "325417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 408.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2940446 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 408.3,
            "unit": "ns/op",
            "extra": "2940446 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2940446 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2940446 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1067,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1067,
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
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "Daniil Prokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eea64fece209b26aba59fb132b9ee935745a198d",
          "message": "Merge pull request #22 from dvprokofiev/bolt-collision-opt-6115462250525773973\n\nOptimize spatial narrow collision check points, change iteration order in `ForEachPoint`",
          "timestamp": "2026-08-26T10:18:33+03:00",
          "tree_id": "b175749e56487b6c6a91998edf12d4443fc24e7a",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/eea64fece209b26aba59fb132b9ee935745a198d"
        },
        "date": 1787728744841,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 29.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40313594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 29.62,
            "unit": "ns/op",
            "extra": "40313594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "40313594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "40313594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3699,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "328772 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3699,
            "unit": "ns/op",
            "extra": "328772 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "328772 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "328772 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 408.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2929700 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 408.6,
            "unit": "ns/op",
            "extra": "2929700 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2929700 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2929700 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1070,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1070,
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
          "id": "cd7e98ffd3214e8f71e85c70c4665bcc0c9d1d4b",
          "message": "tests(rules): zone exclusion rule\n\n- add `Zones` field to `RuleTestCase` struct -- to support running test cases with zones\n- `test_zone.go` defines `TestZone` and `BuildTestZone` similar to `TestEntity` and `BuildTestEntity`\n- test cases for zone exclusion rule\n\nCo-authored-by: Antigravity IDE <bot@antigravity.local>",
          "timestamp": "2026-08-26T22:04:46+03:00",
          "tree_id": "5c7e2c2db437856587697ad3a95a90f21a410a42",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/cd7e98ffd3214e8f71e85c70c4665bcc0c9d1d4b"
        },
        "date": 1787771137457,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 23.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "49872514 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 23.74,
            "unit": "ns/op",
            "extra": "49872514 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "49872514 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "49872514 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2375,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "514413 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2375,
            "unit": "ns/op",
            "extra": "514413 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "514413 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "514413 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 395.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3026220 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 395.5,
            "unit": "ns/op",
            "extra": "3026220 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3026220 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3026220 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 861,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1382084 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 861,
            "unit": "ns/op",
            "extra": "1382084 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1382084 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1382084 times\n4 procs"
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
          "id": "4087b06632e05089def60d99377d7833888d63f0",
          "message": "bench(grid): add benchmark for `Move` method",
          "timestamp": "2026-08-27T00:07:50+03:00",
          "tree_id": "08edc81c689012219f7720431cac96ff1e203362",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/4087b06632e05089def60d99377d7833888d63f0"
        },
        "date": 1787778509047,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 25.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47005464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 25.72,
            "unit": "ns/op",
            "extra": "47005464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47005464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47005464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3885,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "305120 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3885,
            "unit": "ns/op",
            "extra": "305120 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "305120 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "305120 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 337.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3567864 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 337.4,
            "unit": "ns/op",
            "extra": "3567864 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3567864 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3567864 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 811.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1508547 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 811.1,
            "unit": "ns/op",
            "extra": "1508547 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1508547 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1508547 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 57.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20503845 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 57.03,
            "unit": "ns/op",
            "extra": "20503845 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20503845 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20503845 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "dd84f14306565712dd031da9bc1f5d116c73d3a9",
          "message": "\u26a1 Bolt: Devirtualize pointer-type geometry.Box in collision loops",
          "timestamp": "2026-08-26T22:17:34Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/23/commits/dd84f14306565712dd031da9bc1f5d116c73d3a9"
        },
        "date": 1787783201059,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 19.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62259363 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 19.4,
            "unit": "ns/op",
            "extra": "62259363 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "62259363 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "62259363 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2795,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "430696 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2795,
            "unit": "ns/op",
            "extra": "430696 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "430696 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "430696 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 359.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3414374 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 359.9,
            "unit": "ns/op",
            "extra": "3414374 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3414374 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3414374 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 645.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1856173 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 645.2,
            "unit": "ns/op",
            "extra": "1856173 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1856173 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1856173 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 55.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21248055 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 55.27,
            "unit": "ns/op",
            "extra": "21248055 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21248055 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21248055 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "b77ac4837ef64896845b73d23f2c188a96efbf29",
          "message": "\u26a1 Bolt: Devirtualize pointer-type geometry.Box in collision loops",
          "timestamp": "2026-08-26T22:17:34Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/23/commits/b77ac4837ef64896845b73d23f2c188a96efbf29"
        },
        "date": 1787820588330,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 27.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43420594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 27.23,
            "unit": "ns/op",
            "extra": "43420594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43420594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43420594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3745,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "318416 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3745,
            "unit": "ns/op",
            "extra": "318416 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "318416 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "318416 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 462.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2584648 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 462.6,
            "unit": "ns/op",
            "extra": "2584648 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2584648 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2584648 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 869.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1381539 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 869.9,
            "unit": "ns/op",
            "extra": "1381539 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1381539 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1381539 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 76.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15782313 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 76.48,
            "unit": "ns/op",
            "extra": "15782313 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15782313 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15782313 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "7b122d2bf09e4d61338c605c47f59b43939dd4e2",
          "message": "\u26a1 Bolt: Devirtualize pointer-type geometry.Box in collision loops",
          "timestamp": "2026-08-26T22:17:34Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/23/commits/7b122d2bf09e4d61338c605c47f59b43939dd4e2"
        },
        "date": 1787820704582,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 25.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47089292 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 25.46,
            "unit": "ns/op",
            "extra": "47089292 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47089292 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47089292 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3809,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "314888 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3809,
            "unit": "ns/op",
            "extra": "314888 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "314888 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "314888 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 335.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3575390 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 335.6,
            "unit": "ns/op",
            "extra": "3575390 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3575390 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3575390 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 789.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1519552 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 789.4,
            "unit": "ns/op",
            "extra": "1519552 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1519552 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1519552 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 56.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20798703 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 56.94,
            "unit": "ns/op",
            "extra": "20798703 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20798703 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20798703 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "Daniil Prokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec658c286d503eaba390ef203bb0288bc5060e03",
          "message": "Merge pull request #23 from dvprokofiev/bolt-devirtualize-ptr-box-14310276341545980044\n\nDevirtualize pointer-type geometry.Box in collision loops\n\n- over 50% performance improvment, which is crucial for `CheckCollision` O(N^3) 3D spatial loops",
          "timestamp": "2026-08-27T23:24:12+03:00",
          "tree_id": "c2857b2acd489090f1323018488464615a1d7b6d",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/ec658c286d503eaba390ef203bb0288bc5060e03"
        },
        "date": 1787862288575,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 19.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62100120 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 19.47,
            "unit": "ns/op",
            "extra": "62100120 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "62100120 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "62100120 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2807,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "429021 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2807,
            "unit": "ns/op",
            "extra": "429021 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "429021 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "429021 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 352.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3428500 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 352.1,
            "unit": "ns/op",
            "extra": "3428500 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3428500 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3428500 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 646.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1861987 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 646.8,
            "unit": "ns/op",
            "extra": "1861987 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1861987 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1861987 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 55.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21147153 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 55.3,
            "unit": "ns/op",
            "extra": "21147153 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21147153 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21147153 times\n4 procs"
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
          "id": "0e7b6bcc4cb2583662f19f607446232b91cd6ead",
          "message": "fix(rules): retain `QueryBuf` slice capacity in `RuleContext` buffers",
          "timestamp": "2026-08-28T22:14:35+03:00",
          "tree_id": "fa8f9706be6347f7cbfdb18ff63e72910fbb5434",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/0e7b6bcc4cb2583662f19f607446232b91cd6ead"
        },
        "date": 1787944518818,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 34.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35891258 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 34.51,
            "unit": "ns/op",
            "extra": "35891258 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "35891258 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "35891258 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 4746,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "253466 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 4746,
            "unit": "ns/op",
            "extra": "253466 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "253466 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "253466 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 428,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2937224 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 428,
            "unit": "ns/op",
            "extra": "2937224 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2937224 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2937224 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1080,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1080,
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
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 70.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16870804 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 70.37,
            "unit": "ns/op",
            "extra": "16870804 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16870804 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16870804 times\n4 procs"
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
          "id": "1ebaceaec9e16fb92c8e1dc1dbc3010fddbc446b",
          "message": "refactor: split `Entity` into `Def` + `State`\n\nSeparate imutable `Entity` definitions from mutable per-generations (for solver) state. `Entity` acts like a lightweight wrapper with two pointers\n\nThese are preparations for the so-called 'island model', where every generation shares object's definitions, but needs its own copy to store position\n\n- `entity.go`: create `EntityDef`, `EntityState` and `Entity` wrapper\n- `test_entity.go`: `BuildTestEntity` updated\n- rules: replace `e.Footprint.Anchor` with `e.State.Anchor`, `e.Footprint.WorldBounds()` with `e.WorldBounds()`, `e.ID` with `e.Def.ID`\n- rules: `e.AsFootprint()` to build `Footprint` on fly\n- grid: update testa and benchmark helpers\n\nCo-authored-by: Antigravity IDE <bot@antigravity.local>",
          "timestamp": "2026-08-28T23:01:43+03:00",
          "tree_id": "077d754fe18a6ee3eb0110237b7fb13b166be864",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/1ebaceaec9e16fb92c8e1dc1dbc3010fddbc446b"
        },
        "date": 1787947359164,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 31.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36755683 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 31.97,
            "unit": "ns/op",
            "extra": "36755683 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "36755683 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "36755683 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 4745,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "253096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 4745,
            "unit": "ns/op",
            "extra": "253096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "253096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "253096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 422.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2946963 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 422.2,
            "unit": "ns/op",
            "extra": "2946963 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2946963 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2946963 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1030,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1030,
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
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 69.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16879124 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 69.92,
            "unit": "ns/op",
            "extra": "16879124 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16879124 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16879124 times\n4 procs"
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
          "id": "8e935ce60c559c9942ce4c399bcc9541aa58265e",
          "message": "ci: add new jobs 'security' and 'static', build check separated from 'test' job",
          "timestamp": "2026-08-28T23:26:37+03:00",
          "tree_id": "8249e5fbf19ea481f439df14d5917d1a156d92e8",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/8e935ce60c559c9942ce4c399bcc9541aa58265e"
        },
        "date": 1787948843375,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 32.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36641235 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 32.65,
            "unit": "ns/op",
            "extra": "36641235 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "36641235 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "36641235 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 5032,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "238695 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 5032,
            "unit": "ns/op",
            "extra": "238695 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "238695 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "238695 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 432.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2775528 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 432.8,
            "unit": "ns/op",
            "extra": "2775528 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2775528 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2775528 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 997,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1203264 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 997,
            "unit": "ns/op",
            "extra": "1203264 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1203264 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1203264 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 73.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15939982 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 73.43,
            "unit": "ns/op",
            "extra": "15939982 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15939982 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15939982 times\n4 procs"
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
          "id": "63fc51eb9c638015de1543daa29998132ef4f2bc",
          "message": "security: add `nosec` directives for `gosec` to ignore mathematically correct code",
          "timestamp": "2026-08-29T00:14:27+03:00",
          "tree_id": "f3ca9688ec1583b61526b724cb806db15c5b43bb",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/63fc51eb9c638015de1543daa29998132ef4f2bc"
        },
        "date": 1787951844347,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 31.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37523080 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 31.97,
            "unit": "ns/op",
            "extra": "37523080 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37523080 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37523080 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 4798,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "250089 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 4798,
            "unit": "ns/op",
            "extra": "250089 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "250089 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "250089 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 407.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2941280 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 407.3,
            "unit": "ns/op",
            "extra": "2941280 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2941280 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2941280 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1029,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1029,
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
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 70.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16858065 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 70.03,
            "unit": "ns/op",
            "extra": "16858065 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16858065 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16858065 times\n4 procs"
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
          "id": "0de0ff035a7f647e8c661e3830b0bc35f21ec164",
          "message": "security: add upper upper limit of cell number\n\n- tags: in `With` method check that `tagID` is in range from 1 to 65535 (int)",
          "timestamp": "2026-08-29T00:20:48+03:00",
          "tree_id": "c1a378e5c3cf54f67555925de45693a99033d929",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/0de0ff035a7f647e8c661e3830b0bc35f21ec164"
        },
        "date": 1787952230988,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 22.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54018162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 22.12,
            "unit": "ns/op",
            "extra": "54018162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54018162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54018162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3194,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "379330 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3194,
            "unit": "ns/op",
            "extra": "379330 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "379330 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "379330 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 372,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3162411 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 372,
            "unit": "ns/op",
            "extra": "3162411 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3162411 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3162411 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 725.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1664781 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 725.8,
            "unit": "ns/op",
            "extra": "1664781 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1664781 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1664781 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 56.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20764897 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 56.29,
            "unit": "ns/op",
            "extra": "20764897 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20764897 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20764897 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "8920ba356ec02045378304d203fd0965ebfc60ac",
          "message": "[hoist item.GetID() in removeFromCell loop]",
          "timestamp": "2026-08-28T21:21:10Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/24/commits/8920ba356ec02045378304d203fd0965ebfc60ac"
        },
        "date": 1788084765803,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 32.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37410357 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 32.12,
            "unit": "ns/op",
            "extra": "37410357 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37410357 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37410357 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 4807,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "251928 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 4807,
            "unit": "ns/op",
            "extra": "251928 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "251928 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "251928 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 408.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2938556 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 408.5,
            "unit": "ns/op",
            "extra": "2938556 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2938556 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2938556 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1005,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1005,
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
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 69.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16804899 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 69.96,
            "unit": "ns/op",
            "extra": "16804899 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16804899 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16804899 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "bd8339a1fad7eb51cf08e197fb26730196b1d35f",
          "message": "hoist item.GetID() in removeFromCell loop",
          "timestamp": "2026-08-28T21:21:10Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/24/commits/bd8339a1fad7eb51cf08e197fb26730196b1d35f"
        },
        "date": 1788085379683,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 32.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37399278 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 32.04,
            "unit": "ns/op",
            "extra": "37399278 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37399278 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37399278 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 4829,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "248955 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 4829,
            "unit": "ns/op",
            "extra": "248955 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "248955 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "248955 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 428.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2773261 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 428.9,
            "unit": "ns/op",
            "extra": "2773261 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2773261 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2773261 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1003,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1003,
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
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 70.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16881774 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 70.05,
            "unit": "ns/op",
            "extra": "16881774 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16881774 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16881774 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "Daniil Prokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "580998455ec6d06f272428fdf78cd63f6e697a5e",
          "message": "Merge pull request #24 from dvprokofiev/perf/hoist-getid-15710645768531647850\n\nhoist item.GetID() in removeFromCell and QueryBuf",
          "timestamp": "2026-08-30T13:43:56+03:00",
          "tree_id": "1f47528adc68fd890cf3901b7032400c4166c5be",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/580998455ec6d06f272428fdf78cd63f6e697a5e"
        },
        "date": 1788086802093,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 32.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37020033 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 32.1,
            "unit": "ns/op",
            "extra": "37020033 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37020033 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37020033 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 4775,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "252078 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 4775,
            "unit": "ns/op",
            "extra": "252078 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "252078 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "252078 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 433.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2756204 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 433.6,
            "unit": "ns/op",
            "extra": "2756204 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2756204 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2756204 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1007,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1007,
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
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 70.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16765791 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 70.13,
            "unit": "ns/op",
            "extra": "16765791 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16765791 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16765791 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "8d8db2168835ee7c300f748346ea1f2f5ebbbdfe",
          "message": "[performance improvement] Cache itemID in gridNode to prevent GetID() virtual calls",
          "timestamp": "2026-08-30T10:44:22Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/25/commits/8d8db2168835ee7c300f748346ea1f2f5ebbbdfe"
        },
        "date": 1788128840144,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 30.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39088628 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 30.67,
            "unit": "ns/op",
            "extra": "39088628 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39088628 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39088628 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 4338,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "279117 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 4338,
            "unit": "ns/op",
            "extra": "279117 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "279117 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "279117 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 432.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2769282 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 432.9,
            "unit": "ns/op",
            "extra": "2769282 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2769282 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2769282 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1015,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1015,
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
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 69.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16888988 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 69.98,
            "unit": "ns/op",
            "extra": "16888988 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16888988 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16888988 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "3bf45202560089b318286421b84e6e2f91c91753",
          "message": "[performance improvement] Cache itemID in gridNode to prevent GetID() virtual calls",
          "timestamp": "2026-08-30T10:44:22Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/25/commits/3bf45202560089b318286421b84e6e2f91c91753"
        },
        "date": 1788160637036,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 24.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48397946 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 24.68,
            "unit": "ns/op",
            "extra": "48397946 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48397946 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48397946 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3514,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "346618 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3514,
            "unit": "ns/op",
            "extra": "346618 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "346618 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "346618 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 337.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3554407 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 337.3,
            "unit": "ns/op",
            "extra": "3554407 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3554407 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3554407 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 765.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1567340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 765.2,
            "unit": "ns/op",
            "extra": "1567340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1567340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1567340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 55.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20841176 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 55.35,
            "unit": "ns/op",
            "extra": "20841176 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20841176 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20841176 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "Daniil Prokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4bc43d78eb6179b87a0b02fd3f1860e3480e6dc5",
          "message": "Merge pull request #25 from dvprokofiev/perf-cache-itemid-gridnode-13050606817924487980\n\n[performance improvement] Cache itemID in gridNode to prevent GetID() virtual calls",
          "timestamp": "2026-08-31T10:20:27+03:00",
          "tree_id": "9b443e1ad63712df3adf31ce9d95ec1a57ddb305",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/4bc43d78eb6179b87a0b02fd3f1860e3480e6dc5"
        },
        "date": 1788160988690,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 24.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48655610 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 24.66,
            "unit": "ns/op",
            "extra": "48655610 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48655610 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48655610 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3507,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "342586 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3507,
            "unit": "ns/op",
            "extra": "342586 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "342586 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "342586 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 337.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3553405 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 337.5,
            "unit": "ns/op",
            "extra": "3553405 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3553405 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3553405 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 752.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1592722 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 752.8,
            "unit": "ns/op",
            "extra": "1592722 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1592722 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1592722 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 56.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21439046 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 56.47,
            "unit": "ns/op",
            "extra": "21439046 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21439046 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21439046 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "993bcbea8ca752963068c06fe66e58ffbfa801b3",
          "message": "[performance improvement]",
          "timestamp": "2026-08-31T07:22:43Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/26/commits/993bcbea8ca752963068c06fe66e58ffbfa801b3"
        },
        "date": 1788259628485,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 23.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50672773 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 23.84,
            "unit": "ns/op",
            "extra": "50672773 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50672773 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50672773 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2811,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "432220 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2811,
            "unit": "ns/op",
            "extra": "432220 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "432220 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "432220 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 338.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3548812 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 338.4,
            "unit": "ns/op",
            "extra": "3548812 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3548812 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3548812 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 754.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1589850 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 754.6,
            "unit": "ns/op",
            "extra": "1589850 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1589850 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1589850 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 57.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20437416 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 57.95,
            "unit": "ns/op",
            "extra": "20437416 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20437416 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20437416 times\n4 procs"
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
          "id": "485cb5bae9bc179a9a8b05850be937f6baecf85f",
          "message": "perf(collision): replace diffX math with parallel cursors\n\n- Synchronized bx, by, bz cursors to avoid G115 overflow warnings\n- Removed int64 casting and addition from inner loops for speed\n\nCo-authored-by: Antigravity IDE <bot@antigravity.local>",
          "timestamp": "2026-09-01T16:48:25+03:00",
          "tree_id": "54505ecf3258f0bee95495e6c3334b5854ec3e50",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/485cb5bae9bc179a9a8b05850be937f6baecf85f"
        },
        "date": 1788270688569,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 27.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41866795 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 27.46,
            "unit": "ns/op",
            "extra": "41866795 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41866795 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41866795 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 4107,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "289110 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 4107,
            "unit": "ns/op",
            "extra": "289110 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "289110 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "289110 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 440.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2718482 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 440.7,
            "unit": "ns/op",
            "extra": "2718482 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2718482 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2718482 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 850.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1411052 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 850.2,
            "unit": "ns/op",
            "extra": "1411052 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1411052 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1411052 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 68.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18024496 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 68.88,
            "unit": "ns/op",
            "extra": "18024496 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18024496 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18024496 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "name": "dvprokofiev",
            "username": "dvprokofiev"
          },
          "id": "9801d73177fcec06b13bd6cdbc3f2b3c4233f3ca",
          "message": "[performance improvement hoist interface method calls]",
          "timestamp": "2026-09-01T14:24:45Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/27/commits/9801d73177fcec06b13bd6cdbc3f2b3c4233f3ca"
        },
        "date": 1788388138921,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 29.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40535852 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 29.54,
            "unit": "ns/op",
            "extra": "40535852 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "40535852 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "40535852 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3109,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "351972 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3109,
            "unit": "ns/op",
            "extra": "351972 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "351972 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "351972 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 415,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2885361 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 415,
            "unit": "ns/op",
            "extra": "2885361 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2885361 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2885361 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 980.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1223115 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 980.6,
            "unit": "ns/op",
            "extra": "1223115 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1223115 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1223115 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 58.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20125838 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 58.01,
            "unit": "ns/op",
            "extra": "20125838 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20125838 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20125838 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "d@dvprokofiev.ru",
            "name": "Daniil Prokofiev",
            "username": "dvprokofiev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2aec91ba2e8a1dbfeaca3ebe7ab02b51800f165d",
          "message": "Merge pull request #27 from dvprokofiev/bolt-hoist-getid-14557920681978546510\n\n[performance improvement hoist interface method calls]",
          "timestamp": "2026-09-03T18:01:51+03:00",
          "tree_id": "fed214ef35ef72129b436e42e9a842d394ab2414",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/2aec91ba2e8a1dbfeaca3ebe7ab02b51800f165d"
        },
        "date": 1788447881582,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 31.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35783096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 31.31,
            "unit": "ns/op",
            "extra": "35783096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "35783096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "35783096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3889,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "311296 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3889,
            "unit": "ns/op",
            "extra": "311296 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "311296 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "311296 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 430.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2767568 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 430.1,
            "unit": "ns/op",
            "extra": "2767568 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2767568 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2767568 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1005,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1005,
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
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 68.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17229997 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 68.85,
            "unit": "ns/op",
            "extra": "17229997 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17229997 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17229997 times\n4 procs"
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
          "id": "35bccf8d2358d899495709fd0a1aa7d5e9b8d357",
          "message": "chore: update module path and package name",
          "timestamp": "2026-09-03T20:19:57+03:00",
          "tree_id": "c0bf24707dfc5279b80030cb4c8a53e81f2d8184",
          "url": "https://github.com/arrangio/core/commit/35bccf8d2358d899495709fd0a1aa7d5e9b8d357"
        },
        "date": 1788456163200,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 30.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39039612 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 30.7,
            "unit": "ns/op",
            "extra": "39039612 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39039612 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39039612 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3437,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "349267 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3437,
            "unit": "ns/op",
            "extra": "349267 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "349267 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "349267 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 434.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2761137 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 434.4,
            "unit": "ns/op",
            "extra": "2761137 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2761137 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2761137 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 971.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1231944 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 971.9,
            "unit": "ns/op",
            "extra": "1231944 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1231944 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1231944 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 75.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15660806 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 75.59,
            "unit": "ns/op",
            "extra": "15660806 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15660806 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15660806 times\n4 procs"
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
          "id": "5555956bc4919b9d88d07f84cd0c4b9da09fd5b8",
          "message": "security: add `nosec` directive as this code is mahtematically safe",
          "timestamp": "2026-09-03T22:06:04+03:00",
          "tree_id": "fe6107dcebaf53ffe500018cf68b9cca5807714d",
          "url": "https://github.com/arrangio/core/commit/5555956bc4919b9d88d07f84cd0c4b9da09fd5b8"
        },
        "date": 1788462511214,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 30.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39155384 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 30.6,
            "unit": "ns/op",
            "extra": "39155384 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39155384 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39155384 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3546,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "338355 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3546,
            "unit": "ns/op",
            "extra": "338355 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "338355 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "338355 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 438.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2745334 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 438.9,
            "unit": "ns/op",
            "extra": "2745334 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2745334 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2745334 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1019,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1019,
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
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 75.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15701244 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 75.54,
            "unit": "ns/op",
            "extra": "15701244 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15701244 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15701244 times\n4 procs"
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
          "id": "fecf9f177cdce93069807c6b7d3d79648bc2e8e2",
          "message": "feat: introduce `RadiusRule` interface and track max influence radius in solver `State`",
          "timestamp": "2026-09-04T18:41:37+03:00",
          "tree_id": "d01aa25ccfd587c2e41da3a75da3ce1cb7bb1343",
          "url": "https://github.com/arrangio/core/commit/fecf9f177cdce93069807c6b7d3d79648bc2e8e2"
        },
        "date": 1788536658159,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 30.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39291109 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 30.6,
            "unit": "ns/op",
            "extra": "39291109 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39291109 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39291109 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3415,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "350856 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3415,
            "unit": "ns/op",
            "extra": "350856 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "350856 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "350856 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 435.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2727457 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 435.9,
            "unit": "ns/op",
            "extra": "2727457 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2727457 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2727457 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 972.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1237030 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 972.9,
            "unit": "ns/op",
            "extra": "1237030 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1237030 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1237030 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 75.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15613701 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 75.63,
            "unit": "ns/op",
            "extra": "15613701 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15613701 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15613701 times\n4 procs"
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
          "id": "5069dfdf48ee63a3a43a1bc9f93a04c209e08d46",
          "message": "solver: separate fitness calculation from `State` struct to `ScoreDirector`",
          "timestamp": "2026-09-04T21:30:02+03:00",
          "tree_id": "d8e302ff672cbfffc5d7bd9899746f2de0ec9605",
          "url": "https://github.com/arrangio/core/commit/5069dfdf48ee63a3a43a1bc9f93a04c209e08d46"
        },
        "date": 1788716078757,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 31.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38457032 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 31.2,
            "unit": "ns/op",
            "extra": "38457032 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38457032 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38457032 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3768,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "318388 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3768,
            "unit": "ns/op",
            "extra": "318388 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "318388 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "318388 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 447.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2768179 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 447.9,
            "unit": "ns/op",
            "extra": "2768179 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2768179 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2768179 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1018,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1018,
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
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 69.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16858470 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 69.77,
            "unit": "ns/op",
            "extra": "16858470 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16858470 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16858470 times\n4 procs"
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
          "id": "ae8b41643a70b477d9ab05f1efdf72bc46f0b27d",
          "message": "test(solver): test harness for solver components\n\n- support declarative test definition while allowing arbitrary test logic via `Run` closure",
          "timestamp": "2026-09-22T20:51:14+03:00",
          "tree_id": "b2fb4dff1af1263a5de3d50ddf34ce9fa9bc5c01",
          "url": "https://github.com/arrangio/core/commit/ae8b41643a70b477d9ab05f1efdf72bc46f0b27d"
        },
        "date": 1790099658929,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 31.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38450766 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 31.19,
            "unit": "ns/op",
            "extra": "38450766 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38450766 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38450766 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3799,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "315080 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3799,
            "unit": "ns/op",
            "extra": "315080 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "315080 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "315080 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 429.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2781046 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 429.9,
            "unit": "ns/op",
            "extra": "2781046 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2781046 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2781046 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1026,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1026,
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
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 69.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16965279 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 69.74,
            "unit": "ns/op",
            "extra": "16965279 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16965279 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16965279 times\n4 procs"
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
          "id": "f46208923a3ce921ee30931e76f80ac65148f1b4",
          "message": "entity: `BoundsAt` function that calculates entity's bounds as if it would be at specified anchor",
          "timestamp": "2026-09-22T21:12:01+03:00",
          "tree_id": "5e9c5398f4ae95f922e043714b7ba1753f4b1783",
          "url": "https://github.com/arrangio/core/commit/f46208923a3ce921ee30931e76f80ac65148f1b4"
        },
        "date": 1790100899753,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 34.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "34683759 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 34.3,
            "unit": "ns/op",
            "extra": "34683759 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "34683759 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "34683759 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3750,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "321662 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3750,
            "unit": "ns/op",
            "extra": "321662 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "321662 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "321662 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 431.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2782204 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 431.8,
            "unit": "ns/op",
            "extra": "2782204 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2782204 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2782204 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1151,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1151,
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
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 71.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16474741 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 71.54,
            "unit": "ns/op",
            "extra": "16474741 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16474741 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16474741 times\n4 procs"
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
          "id": "a0cb22c89757fe4642972e01b2c5387e72f92434",
          "message": "test: add unit tests for ScoreDirector and `GetEntity` helper",
          "timestamp": "2026-09-22T21:50:01+03:00",
          "tree_id": "de1b6e7b9143ec3d5fc75f76429df29402e774a5",
          "url": "https://github.com/arrangio/core/commit/a0cb22c89757fe4642972e01b2c5387e72f92434"
        },
        "date": 1790103221000,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 34.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "34995304 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 34.3,
            "unit": "ns/op",
            "extra": "34995304 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "34995304 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "34995304 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3757,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "318882 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3757,
            "unit": "ns/op",
            "extra": "318882 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "318882 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "318882 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 430.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2765181 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 430.7,
            "unit": "ns/op",
            "extra": "2765181 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2765181 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2765181 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1130,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1130,
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
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 71.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16367076 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 71.47,
            "unit": "ns/op",
            "extra": "16367076 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16367076 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16367076 times\n4 procs"
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
          "id": "1ab2e1ec75401a758b2690fe4d7462543c5266bc",
          "message": "rotations: define `minBase` and `maxBase` without initialization",
          "timestamp": "2026-09-25T17:51:05+03:00",
          "tree_id": "24e7fa30e7970739cdc05149075bb59e0f102151",
          "url": "https://github.com/arrangio/core/commit/1ab2e1ec75401a758b2690fe4d7462543c5266bc"
        },
        "date": 1790348025167,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 36.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31748599 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 36.37,
            "unit": "ns/op",
            "extra": "31748599 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "31748599 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "31748599 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3821,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "313540 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3821,
            "unit": "ns/op",
            "extra": "313540 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "313540 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "313540 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 439.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2732024 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 439.7,
            "unit": "ns/op",
            "extra": "2732024 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2732024 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2732024 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1256,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "957976 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1256,
            "unit": "ns/op",
            "extra": "957976 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "957976 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "957976 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 71.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16484666 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 71.7,
            "unit": "ns/op",
            "extra": "16484666 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16484666 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16484666 times\n4 procs"
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
          "id": "5c21a4460df4b4e286b6a7cd0ba83d8ba7ac6d32",
          "message": "chore: nosec G404 instead of G104",
          "timestamp": "2026-09-25T19:20:17+03:00",
          "tree_id": "91226121a9d637ba1380bbb3053d427ae7847584",
          "url": "https://github.com/arrangio/core/commit/5c21a4460df4b4e286b6a7cd0ba83d8ba7ac6d32"
        },
        "date": 1790353386544,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 23.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51270676 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 23.26,
            "unit": "ns/op",
            "extra": "51270676 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51270676 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51270676 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 1852,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "664590 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 1852,
            "unit": "ns/op",
            "extra": "664590 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "664590 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "664590 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 224.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5262064 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 224.9,
            "unit": "ns/op",
            "extra": "5262064 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5262064 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5262064 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 755.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1583464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 755.6,
            "unit": "ns/op",
            "extra": "1583464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1583464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1583464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 39.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29540626 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 39.73,
            "unit": "ns/op",
            "extra": "29540626 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "29540626 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "29540626 times\n4 procs"
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
          "id": "b3d9c17646d4f42b21076969e558de9636f67f23",
          "message": "rules: implement `ComputeForce` for orientation rule",
          "timestamp": "2026-10-04T13:02:03+03:00",
          "tree_id": "dd5fb9d008e7c98805c28424a400f8d747a0e89c",
          "url": "https://github.com/arrangio/core/commit/b3d9c17646d4f42b21076969e558de9636f67f23"
        },
        "date": 1791108298894,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 33.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35743138 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 33.9,
            "unit": "ns/op",
            "extra": "35743138 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "35743138 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "35743138 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2881,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "417488 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2881,
            "unit": "ns/op",
            "extra": "417488 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "417488 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "417488 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 474.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2530222 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 474.8,
            "unit": "ns/op",
            "extra": "2530222 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2530222 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2530222 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1001,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1001,
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
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 61.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19509752 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 61.78,
            "unit": "ns/op",
            "extra": "19509752 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19509752 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19509752 times\n4 procs"
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
          "id": "19cb2190cbd4e08e763fd4d36613632e9bd4cbbe",
          "message": "rules: calculate `Penalty` in every rule",
          "timestamp": "2026-10-06T21:00:10+03:00",
          "tree_id": "b945d55e54a993076ca5a1f69eb02427ccdf0d84",
          "url": "https://github.com/arrangio/core/commit/19cb2190cbd4e08e763fd4d36613632e9bd4cbbe"
        },
        "date": 1791312862895,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 27.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43286470 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 27.44,
            "unit": "ns/op",
            "extra": "43286470 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43286470 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43286470 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 2467,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "478666 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 2467,
            "unit": "ns/op",
            "extra": "478666 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "478666 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "478666 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 404.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3002602 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 404.9,
            "unit": "ns/op",
            "extra": "3002602 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3002602 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3002602 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 887.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1347260 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 887.1,
            "unit": "ns/op",
            "extra": "1347260 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1347260 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1347260 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid)",
            "value": 2997,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "388021 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 2997,
            "unit": "ns/op",
            "extra": "388021 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "388021 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "388021 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 52.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22112996 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 52.75,
            "unit": "ns/op",
            "extra": "22112996 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22112996 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22112996 times\n4 procs"
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
          "id": "c770d694758fbcb0b73e7e3877a66a33ade96b25",
          "message": "test: don't run 1M when using Actions",
          "timestamp": "2026-10-09T23:26:16+03:00",
          "tree_id": "cd3b802d4ab980ad6292298f12e424aaed93c74d",
          "url": "https://github.com/arrangio/core/commit/c770d694758fbcb0b73e7e3877a66a33ade96b25"
        },
        "date": 1791577776538,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid)",
            "value": 33.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "32990240 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - ns/op",
            "value": 33.86,
            "unit": "ns/op",
            "extra": "32990240 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "32990240 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "32990240 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid)",
            "value": 3411,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "339351 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - ns/op",
            "value": 3411,
            "unit": "ns/op",
            "extra": "339351 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "339351 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "339351 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid)",
            "value": 421.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2848752 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - ns/op",
            "value": 421.5,
            "unit": "ns/op",
            "extra": "2848752 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2848752 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2848752 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid)",
            "value": 1231,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "974859 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 1231,
            "unit": "ns/op",
            "extra": "974859 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "974859 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "974859 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid)",
            "value": 3908,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "306583 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - ns/op",
            "value": 3908,
            "unit": "ns/op",
            "extra": "306583 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "306583 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQueryWithContext_Dense (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "306583 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid)",
            "value": 60.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19509906 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - ns/op",
            "value": 60.19,
            "unit": "ns/op",
            "extra": "19509906 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19509906 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove (github.com/arrangio/core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19509906 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver)",
            "value": 198235256,
            "unit": "ns/op\t        68.00 iters/op\t     34263 stress\t   57408 B/op\t     797 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - ns/op",
            "value": 198235256,
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
            "value": 34263,
            "unit": "stress",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - B/op",
            "value": 57408,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_1K (github.com/arrangio/core/solver) - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver)",
            "value": 2757859189,
            "unit": "ns/op\t        78.00 iters/op\t    341212 stress\t  209472 B/op\t     892 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 2757859189,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - iters/op",
            "value": 78,
            "unit": "iters/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - stress",
            "value": 341212,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - B/op",
            "value": 209472,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 892,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver)",
            "value": 41080708144,
            "unit": "ns/op\t        80.00 iters/op\t   3599284 stress\t 1084032 B/op\t     909 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - ns/op",
            "value": 41080708144,
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
            "value": 3599284,
            "unit": "stress",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - B/op",
            "value": 1084032,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_100K (github.com/arrangio/core/solver) - allocs/op",
            "value": 909,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver)",
            "value": 22521212,
            "unit": "ns/op\t    3845 B/op\t      11 allocs/op",
            "extra": "49 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - ns/op",
            "value": 22521212,
            "unit": "ns/op",
            "extra": "49 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - B/op",
            "value": 3845,
            "unit": "B/op",
            "extra": "49 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_Step_10K (github.com/arrangio/core/solver) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "49 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver)",
            "value": 34673,
            "unit": "ns/op\t     577 B/op\t      11 allocs/op",
            "extra": "36171 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - ns/op",
            "value": 34673,
            "unit": "ns/op",
            "extra": "36171 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - B/op",
            "value": 577,
            "unit": "B/op",
            "extra": "36171 times\n4 procs"
          },
          {
            "name": "BenchmarkForceSolver_ZeroAllocs (github.com/arrangio/core/solver) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "36171 times\n4 procs"
          }
        ]
      }
    ]
  }
};
