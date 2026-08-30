window.BENCHMARK_DATA = {
  "lastUpdate": 1788084766544,
  "repoUrl": "https://github.com/dvprokofiev/arrangio-core",
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
          "distinct": false,
          "id": "665ce12d9fe7ec0a1699836bd6107610596c6f89",
          "message": "fix(ci): create GH Pages page to show off benchmark results",
          "timestamp": "2026-06-10T13:49:15+03:00",
          "tree_id": "94c71c64f751f1a079b12a80d08c9b61f601bc1a",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/665ce12d9fe7ec0a1699836bd6107610596c6f89"
        },
        "date": 1781088620156,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 21.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56175390 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 21.24,
            "unit": "ns/op",
            "extra": "56175390 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56175390 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56175390 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 810.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1487535 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 810.4,
            "unit": "ns/op",
            "extra": "1487535 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1487535 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1487535 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2620,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "458140 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2620,
            "unit": "ns/op",
            "extra": "458140 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "458140 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "458140 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 907.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1320357 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 907.8,
            "unit": "ns/op",
            "extra": "1320357 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1320357 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1320357 times\n4 procs"
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
          "id": "9dc11ec9a2bf4c757fc14dfd94b3c3e04524b21a",
          "message": "feat(rules): introduce `Rule` interface\n\n- `Type` - hard constraint (= -inf) and soft constraint\n- `Weight` - from 0 to 1, adds an ability to range rules from most important to least important\n- `Evaluate` - return value of rule violation, where 0 means rule is fully satisfied and 1 means that rule is not followed",
          "timestamp": "2026-07-03T22:30:34+03:00",
          "tree_id": "255afc4df7b64d4fbf076fbc4f5549a9831d7b70",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/9dc11ec9a2bf4c757fc14dfd94b3c3e04524b21a"
        },
        "date": 1783107102070,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52011086 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.56,
            "unit": "ns/op",
            "extra": "52011086 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52011086 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52011086 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 919.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1305772 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 919.3,
            "unit": "ns/op",
            "extra": "1305772 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1305772 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1305772 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2995,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "400400 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2995,
            "unit": "ns/op",
            "extra": "400400 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "400400 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "400400 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 942.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1270341 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 942.9,
            "unit": "ns/op",
            "extra": "1270341 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1270341 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1270341 times\n4 procs"
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
          "id": "208862b496c457c093e9eed11f19912ab39d5640",
          "message": "feat(rules): introduce `ProximityRule` interface\n\n- rule calculates attraction/distance scores to the closest object matching `Selector` scaled from 0.0 to 1.0",
          "timestamp": "2026-07-10T19:49:57+03:00",
          "tree_id": "7d2b524cd82346083e09772c7f88b4404ce77a26",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/208862b496c457c093e9eed11f19912ab39d5640"
        },
        "date": 1783702245010,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53786943 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.57,
            "unit": "ns/op",
            "extra": "53786943 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53786943 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53786943 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 919.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1303534 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 919.6,
            "unit": "ns/op",
            "extra": "1303534 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1303534 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1303534 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2978,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "401698 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2978,
            "unit": "ns/op",
            "extra": "401698 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "401698 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "401698 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 945.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1269733 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 945.2,
            "unit": "ns/op",
            "extra": "1269733 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1269733 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1269733 times\n4 procs"
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
          "id": "33324f88f4d20be06b589005f7d465c4c8a0d20f",
          "message": "feat(rules): introduce `AxisRestrictionRule` interface\n\n- evaluates objects's placement boundaries along X, Y or Z spatial axis\n- supports relational operations\n- provides non-linear gradient on non-matched objects to guide mutation",
          "timestamp": "2026-07-10T20:53:43+03:00",
          "tree_id": "d49312f36e4708f06894836b98ff899a7a2130db",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/33324f88f4d20be06b589005f7d465c4c8a0d20f"
        },
        "date": 1783706076636,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51997591 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.99,
            "unit": "ns/op",
            "extra": "51997591 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51997591 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51997591 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 802.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1487860 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 802.1,
            "unit": "ns/op",
            "extra": "1487860 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1487860 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1487860 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2602,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "459658 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2602,
            "unit": "ns/op",
            "extra": "459658 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "459658 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "459658 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 908.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1318641 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 908.4,
            "unit": "ns/op",
            "extra": "1318641 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1318641 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1318641 times\n4 procs"
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
          "id": "fb3e5adc2e39f7da93a04f6e7b6b592bb77db57f",
          "message": "fix(rules): logical errors in axis restriction rule\n\n- use integers (0, 1, 2) in `Axis` instead of characters 'X', 'Y', 'Z'\n- if `OpNot` is matched, return 0.5 because we cannot provide further direction for this kind of operator\n- `if diff <= 0` is now out of case for `OpGt`, `OpGe`",
          "timestamp": "2026-07-11T21:33:52+03:00",
          "tree_id": "5632e99db068646a2f71e2f0eb463d00f1fbef48",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/fb3e5adc2e39f7da93a04f6e7b6b592bb77db57f"
        },
        "date": 1783794885240,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 21.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54678554 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 21.23,
            "unit": "ns/op",
            "extra": "54678554 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54678554 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54678554 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 919.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1299825 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 919.1,
            "unit": "ns/op",
            "extra": "1299825 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1299825 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1299825 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 3005,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "398862 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 3005,
            "unit": "ns/op",
            "extra": "398862 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "398862 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "398862 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1009,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1009,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "id": "bd969a3bd72682b111bfa90fac751e560ea7b690",
          "message": "feat(rules): introduce `AlignmentRule` interface\n\n- align `subject` to nearby objects that match the `Selector`",
          "timestamp": "2026-07-11T22:03:05+03:00",
          "tree_id": "a8b24893bd341e5c04438106380877c38195dd62",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/bd969a3bd72682b111bfa90fac751e560ea7b690"
        },
        "date": 1783796643102,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 21.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53243289 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 21.25,
            "unit": "ns/op",
            "extra": "53243289 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53243289 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53243289 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 919,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1232212 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 919,
            "unit": "ns/op",
            "extra": "1232212 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1232212 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1232212 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2998,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "402205 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2998,
            "unit": "ns/op",
            "extra": "402205 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "402205 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "402205 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 973.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1232192 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 973.6,
            "unit": "ns/op",
            "extra": "1232192 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1232192 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1232192 times\n4 procs"
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
          "id": "f64146222b585ce7e2bacf8769750e46048dbacb",
          "message": "fix(rules): use `uint8` instead of `int64` to store axes",
          "timestamp": "2026-07-14T16:34:33+03:00",
          "tree_id": "4134e61e459386d41feb25fa39d92a2dacea5e59",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/f64146222b585ce7e2bacf8769750e46048dbacb"
        },
        "date": 1784036145015,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 21.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55625145 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 21.24,
            "unit": "ns/op",
            "extra": "55625145 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "55625145 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "55625145 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 917.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1297387 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 917.3,
            "unit": "ns/op",
            "extra": "1297387 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1297387 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1297387 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2983,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "401173 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2983,
            "unit": "ns/op",
            "extra": "401173 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "401173 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "401173 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 978.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1230054 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 978.7,
            "unit": "ns/op",
            "extra": "1230054 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1230054 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1230054 times\n4 procs"
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
          "id": "1ed218c815375cd7680cb4393eb4b398271cc69b",
          "message": "fix(rules): math error in axis restriction rule\n\n- if `val >= Ref` for 'less' operator, distance to valid zone (which is <= Ref - 1) is equal `val - (Ref - 1)`\n- if `val <= Ref` for 'greater' operator, distance to valid zone (which is >= Ref + 1) is equal `(Ref + 1) - val`",
          "timestamp": "2026-07-14T17:38:49+03:00",
          "tree_id": "0003cf2e904d345a979a2ef8fcdc5a31ce8ed936",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/1ed218c815375cd7680cb4393eb4b398271cc69b"
        },
        "date": 1784039980401,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 11.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "97555978 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 11.01,
            "unit": "ns/op",
            "extra": "97555978 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "97555978 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "97555978 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 531.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2280290 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 531.7,
            "unit": "ns/op",
            "extra": "2280290 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2280290 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2280290 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 1302,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "921859 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 1302,
            "unit": "ns/op",
            "extra": "921859 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "921859 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "921859 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 515.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2327985 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 515.6,
            "unit": "ns/op",
            "extra": "2327985 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2327985 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2327985 times\n4 procs"
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
          "id": "0f5f89c2068770cb7997c9f01154e24651ae1236",
          "message": "tests(rules): introduce 'framework' for rules tests\n\n- describe entities inserted to the grid by using `TestEntity` structure\n- `buildTestEntity` builds `Entity` from `TestEntity` with given `ID`, `Anchor`, `Tags` and size\n- `RunRuleTest` creates grid 2000x2000x2000, places neighbors from `RuleTestCase` and evaluates given rule",
          "timestamp": "2026-07-14T18:19:51+03:00",
          "tree_id": "407ec887596c47a3a5953ed30e0c971aed5ead1d",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/0f5f89c2068770cb7997c9f01154e24651ae1236"
        },
        "date": 1784042464276,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51370024 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.57,
            "unit": "ns/op",
            "extra": "51370024 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51370024 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51370024 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 923.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1306970 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 923.6,
            "unit": "ns/op",
            "extra": "1306970 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1306970 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1306970 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 3019,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "395938 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 3019,
            "unit": "ns/op",
            "extra": "395938 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "395938 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "395938 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 945.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1262497 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 945.8,
            "unit": "ns/op",
            "extra": "1262497 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1262497 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1262497 times\n4 procs"
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
          "id": "0f5f89c2068770cb7997c9f01154e24651ae1236",
          "message": "tests(rules): introduce 'framework' for rules tests\n\n- describe entities inserted to the grid by using `TestEntity` structure\n- `buildTestEntity` builds `Entity` from `TestEntity` with given `ID`, `Anchor`, `Tags` and size\n- `RunRuleTest` creates grid 2000x2000x2000, places neighbors from `RuleTestCase` and evaluates given rule",
          "timestamp": "2026-07-14T18:19:51+03:00",
          "tree_id": "407ec887596c47a3a5953ed30e0c971aed5ead1d",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/0f5f89c2068770cb7997c9f01154e24651ae1236"
        },
        "date": 1784042707574,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 21.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54525582 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 21.26,
            "unit": "ns/op",
            "extra": "54525582 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54525582 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54525582 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 917.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1300906 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 917.5,
            "unit": "ns/op",
            "extra": "1300906 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1300906 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1300906 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2985,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "402529 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2985,
            "unit": "ns/op",
            "extra": "402529 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "402529 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "402529 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 943.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1269679 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 943.7,
            "unit": "ns/op",
            "extra": "1269679 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1269679 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1269679 times\n4 procs"
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
          "id": "1ed218c815375cd7680cb4393eb4b398271cc69b",
          "message": "fix(rules): math error in axis restriction rule\n\n- if `val >= Ref` for 'less' operator, distance to valid zone (which is <= Ref - 1) is equal `val - (Ref - 1)`\n- if `val <= Ref` for 'greater' operator, distance to valid zone (which is >= Ref + 1) is equal `(Ref + 1) - val`",
          "timestamp": "2026-07-14T17:38:49+03:00",
          "tree_id": "0003cf2e904d345a979a2ef8fcdc5a31ce8ed936",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/1ed218c815375cd7680cb4393eb4b398271cc69b"
        },
        "date": 1784043821493,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 21.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55005207 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 21.75,
            "unit": "ns/op",
            "extra": "55005207 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "55005207 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "55005207 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 920.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1247346 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 920.7,
            "unit": "ns/op",
            "extra": "1247346 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1247346 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1247346 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2999,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "401478 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2999,
            "unit": "ns/op",
            "extra": "401478 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "401478 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "401478 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 948.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1257162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 948.7,
            "unit": "ns/op",
            "extra": "1257162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1257162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1257162 times\n4 procs"
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
          "id": "1ed218c815375cd7680cb4393eb4b398271cc69b",
          "message": "fix(rules): math error in axis restriction rule\n\n- if `val >= Ref` for 'less' operator, distance to valid zone (which is <= Ref - 1) is equal `val - (Ref - 1)`\n- if `val <= Ref` for 'greater' operator, distance to valid zone (which is >= Ref + 1) is equal `(Ref + 1) - val`",
          "timestamp": "2026-07-14T17:38:49+03:00",
          "tree_id": "0003cf2e904d345a979a2ef8fcdc5a31ce8ed936",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/1ed218c815375cd7680cb4393eb4b398271cc69b"
        },
        "date": 1784054618928,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 21.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52709090 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 21.25,
            "unit": "ns/op",
            "extra": "52709090 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52709090 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52709090 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 922.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1271254 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 922.3,
            "unit": "ns/op",
            "extra": "1271254 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1271254 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1271254 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 3260,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "380546 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 3260,
            "unit": "ns/op",
            "extra": "380546 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "380546 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "380546 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 944.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1271428 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 944.3,
            "unit": "ns/op",
            "extra": "1271428 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1271428 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1271428 times\n4 procs"
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
          "id": "74270e62bc1bea6d6d83c33bec0daf0c79dd1eea",
          "message": "test(rules): proximity rule",
          "timestamp": "2026-07-27T17:02:16+03:00",
          "tree_id": "e12ef6be184b643c0dd2975425d03e33d2402a2a",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/74270e62bc1bea6d6d83c33bec0daf0c79dd1eea"
        },
        "date": 1785160988551,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 18.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "72025045 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 18.8,
            "unit": "ns/op",
            "extra": "72025045 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "72025045 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "72025045 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 624.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1913323 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 624.4,
            "unit": "ns/op",
            "extra": "1913323 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1913323 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1913323 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "554178 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2170,
            "unit": "ns/op",
            "extra": "554178 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "554178 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "554178 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 703.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1708227 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 703.5,
            "unit": "ns/op",
            "extra": "1708227 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1708227 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1708227 times\n4 procs"
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
          "id": "86d6c4405c3e77352f7a56db68071a1b4865ef82",
          "message": "tests(rules): no collision\n\nTest cases:\n- no collision (separated objects)\n- no collision (touching boundaries)\n- collision (overlap)\n- collision ignored because of mismatching `Selector`\n- collision with specific `Selector`\n- ignore self collision",
          "timestamp": "2026-07-27T17:23:14+03:00",
          "tree_id": "cd9de0ec4ef8b6b8c4f9a2a1866c53c76376d2eb",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/86d6c4405c3e77352f7a56db68071a1b4865ef82"
        },
        "date": 1785162516827,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 20.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58049594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 20.92,
            "unit": "ns/op",
            "extra": "58049594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58049594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58049594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 818.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1420366 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 818.4,
            "unit": "ns/op",
            "extra": "1420366 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1420366 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1420366 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2466,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "483429 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2466,
            "unit": "ns/op",
            "extra": "483429 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "483429 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "483429 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 728.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1647964 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 728.2,
            "unit": "ns/op",
            "extra": "1647964 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1647964 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1647964 times\n4 procs"
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
          "id": "161ce056b7358f5c41807fd1020709e1e4e8ba11",
          "message": "tests(rules): axis restriction rule\n\nTest cases:\n- OpEq (==): matched, violation above, violation below\n- OpNot(!=): matched, violated\n- OpLt(<): matched, violated\n- OpLe(<=): matched, violated\n- OpGt(>): matched, violated\n- OpGe(>=): matched, violated\n- non-existent axis",
          "timestamp": "2026-07-28T13:32:56+03:00",
          "tree_id": "fb6f319f374f2eaef6a951afa4851f8e341423f3",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/161ce056b7358f5c41807fd1020709e1e4e8ba11"
        },
        "date": 1785234839884,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 21.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54291406 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 21.24,
            "unit": "ns/op",
            "extra": "54291406 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54291406 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54291406 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 919.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1305858 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 919.3,
            "unit": "ns/op",
            "extra": "1305858 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1305858 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1305858 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 3013,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "398000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 3013,
            "unit": "ns/op",
            "extra": "398000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "398000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "398000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 947.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1267612 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 947.5,
            "unit": "ns/op",
            "extra": "1267612 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1267612 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1267612 times\n4 procs"
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
          "id": "34e14230587de1b5f4ae21ea82ad9fb7d65b0052",
          "message": "tests(rules): alignment rule\n\nTest cases:\n- \"perfect\" alignment on each of axes\n- score being calculated correctly\n- rule chooses the closest neighbor\n- rule ignores neighbor with non-matching `Selector`\n- rule ignores self\n- rule doesn't choose neighbors outside of search radius\n- fallback on non-valid axes",
          "timestamp": "2026-07-28T20:11:09+03:00",
          "tree_id": "eaecbd71eba36636fa8d662517040bf044cedf7a",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/34e14230587de1b5f4ae21ea82ad9fb7d65b0052"
        },
        "date": 1785258748581,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 16.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "65182840 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 16.5,
            "unit": "ns/op",
            "extra": "65182840 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "65182840 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "65182840 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 622.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1923122 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 622.9,
            "unit": "ns/op",
            "extra": "1923122 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1923122 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1923122 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2017,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "591930 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2017,
            "unit": "ns/op",
            "extra": "591930 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "591930 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "591930 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 704.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1689624 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 704.8,
            "unit": "ns/op",
            "extra": "1689624 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1689624 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1689624 times\n4 procs"
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
          "id": "013176204a4c87aa42f213bb1ed403058f7ef094",
          "message": "feat(rules): introduce `ContainmentRule` interface\n\nThis rule helps to keep objects with matching `Selector` in a given cube",
          "timestamp": "2026-07-28T22:29:36+03:00",
          "tree_id": "ca9ea62d170ce403126be07e84e2f8ceb3c5af86",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/013176204a4c87aa42f213bb1ed403058f7ef094"
        },
        "date": 1785267039861,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 21.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55920636 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 21.29,
            "unit": "ns/op",
            "extra": "55920636 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "55920636 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "55920636 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 804.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1489615 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 804.3,
            "unit": "ns/op",
            "extra": "1489615 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1489615 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1489615 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2649,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "435064 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2649,
            "unit": "ns/op",
            "extra": "435064 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "435064 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "435064 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 910.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1307450 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 910.4,
            "unit": "ns/op",
            "extra": "1307450 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1307450 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1307450 times\n4 procs"
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
          "id": "cc406ef2e5a3ce52dc9e54864b577e311c82dfed",
          "message": "tests(rules): containment rule\n\nTest cases:\n- apply rule to the object with non-matching `Selector`\n- object is fully inside boundaries\n- object touches boundaries\n- object is outside given boundaries on one axis\n- object is outside given boundaries on multiple axes",
          "timestamp": "2026-07-28T22:39:14+03:00",
          "tree_id": "1497e7578a8c9f5b6be04bc471221a2439a44ff1",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/cc406ef2e5a3ce52dc9e54864b577e311c82dfed"
        },
        "date": 1785267705358,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 20.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57010833 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 20.99,
            "unit": "ns/op",
            "extra": "57010833 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57010833 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57010833 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 804.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1476996 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 804.1,
            "unit": "ns/op",
            "extra": "1476996 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1476996 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1476996 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2607,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "460106 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2607,
            "unit": "ns/op",
            "extra": "460106 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "460106 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "460106 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 911.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1322864 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 911.5,
            "unit": "ns/op",
            "extra": "1322864 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1322864 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1322864 times\n4 procs"
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
          "id": "34a07cc7ce6c810614ae71aba0fb8353a4e0dad3",
          "message": "feat(rules): introduce `ClearanceRule` interface\n\nThis rule checks for padding around subject from objects with matching `Obstacle` Selector",
          "timestamp": "2026-07-28T23:43:38+03:00",
          "tree_id": "b5579df823794afa10878b912ee5361796679854",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/34a07cc7ce6c810614ae71aba0fb8353a4e0dad3"
        },
        "date": 1785271497256,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 21.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56276572 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 21.32,
            "unit": "ns/op",
            "extra": "56276572 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56276572 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56276572 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 923.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1305721 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 923.8,
            "unit": "ns/op",
            "extra": "1305721 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1305721 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1305721 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2980,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "401122 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2980,
            "unit": "ns/op",
            "extra": "401122 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "401122 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "401122 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 949.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1265737 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 949.9,
            "unit": "ns/op",
            "extra": "1265737 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1265737 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1265737 times\n4 procs"
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
          "id": "73cf5cf660ea2486cfcba87c47998d7830dcdd85",
          "message": "tests(rules): clearance rule\n\nTest cases:\n- subject doesn't match Target `Selector`\n- obstacle is outside clearance zone\n- obstacle touches the boundary of clearance zone\n- obstacle protrudes into clearance zone\n- rule ignores obstacles that doesn't match Obstacle `Selector`\n- rule ignores self match",
          "timestamp": "2026-07-31T10:50:28+03:00",
          "tree_id": "53a3d8ec2312faf217a091b18ffb512460830fbf",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/73cf5cf660ea2486cfcba87c47998d7830dcdd85"
        },
        "date": 1785484299395,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54248644 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.65,
            "unit": "ns/op",
            "extra": "54248644 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54248644 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54248644 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 921.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1305044 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 921.1,
            "unit": "ns/op",
            "extra": "1305044 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1305044 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1305044 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 3004,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "398212 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 3004,
            "unit": "ns/op",
            "extra": "398212 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "398212 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "398212 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 948,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1265226 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 948,
            "unit": "ns/op",
            "extra": "1265226 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1265226 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1265226 times\n4 procs"
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
          "id": "4261292b6d4f7f2cc6fcf0d084552dd48b5f0770",
          "message": "refactor(shape): new VoxelShape realization, separated `voxel_shape.go` and `box.go` files\n\n- in VoxelShape, use `bitset` slice of uint64s for faster, O(1) `Contains` check",
          "timestamp": "2026-07-31T14:32:00+03:00",
          "tree_id": "6c5cc257748b608194718f79ce0b91096ee1ef8f",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/4261292b6d4f7f2cc6fcf0d084552dd48b5f0770"
        },
        "date": 1785497602847,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 21.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54128296 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 21.35,
            "unit": "ns/op",
            "extra": "54128296 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54128296 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54128296 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 922.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1309203 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 922.2,
            "unit": "ns/op",
            "extra": "1309203 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1309203 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1309203 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 3146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "380854 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 3146,
            "unit": "ns/op",
            "extra": "380854 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "380854 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "380854 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 944.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1268034 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 944.5,
            "unit": "ns/op",
            "extra": "1268034 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1268034 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1268034 times\n4 procs"
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
          "id": "71ac15dca8521f50cf414f0c2cf11967eb649df5",
          "message": "feat(facings): introduce `Facings` map and `WorldFacing` function\n\n- `Facings` map stores local direction vectors that represent edges of the object\n- `WorldFacing` applies rotation to the direction vector if it's rotatable\n- `SetRotation` and `GetRotation` functions which check if underlying `Shape` is `Rotatable` interface and if so, use its methods",
          "timestamp": "2026-08-01T21:14:54+03:00",
          "tree_id": "c6f7297b082178d00d9572f0c02635cd9246e6e7",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/71ac15dca8521f50cf414f0c2cf11967eb649df5"
        },
        "date": 1785608170893,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51920805 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.96,
            "unit": "ns/op",
            "extra": "51920805 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51920805 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51920805 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 761.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1557471 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 761.8,
            "unit": "ns/op",
            "extra": "1557471 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1557471 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1557471 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2664,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "450396 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2664,
            "unit": "ns/op",
            "extra": "450396 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "450396 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "450396 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 908.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1304076 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 908.8,
            "unit": "ns/op",
            "extra": "1304076 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1304076 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1304076 times\n4 procs"
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
          "id": "7d03b849796a141dbed8e68b195c0ffabffcc535",
          "message": "feat(rules): orientation rule\n\n- use dot product to check the angle between object's rotated vector and `TargetVector` to see, to what extent do the vectors coincide",
          "timestamp": "2026-08-01T21:19:18+03:00",
          "tree_id": "d717a97bd35bad217d859ab8ecaf4566542c4bde",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/7d03b849796a141dbed8e68b195c0ffabffcc535"
        },
        "date": 1785608420635,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 21.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53511327 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 21.08,
            "unit": "ns/op",
            "extra": "53511327 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53511327 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53511327 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 918.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1307779 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 918.5,
            "unit": "ns/op",
            "extra": "1307779 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1307779 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1307779 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2961,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "404328 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2961,
            "unit": "ns/op",
            "extra": "404328 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "404328 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "404328 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 969.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1240911 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 969.7,
            "unit": "ns/op",
            "extra": "1240911 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1240911 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1240911 times\n4 procs"
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
          "id": "f3a4f5c6602bb4e61838f1aea7d1b800af993a0f",
          "message": "fix(rules): protect `cosTheta` from float64 inaccuracy in orientation rule",
          "timestamp": "2026-08-03T17:39:43+03:00",
          "tree_id": "2974d9b3b0209bca06ca95fd44578b6c5126598f",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/f3a4f5c6602bb4e61838f1aea7d1b800af993a0f"
        },
        "date": 1785768040431,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 16.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "71472837 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 16.26,
            "unit": "ns/op",
            "extra": "71472837 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "71472837 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "71472837 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 589.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2034784 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 589.1,
            "unit": "ns/op",
            "extra": "2034784 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2034784 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2034784 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2130,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "565128 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2130,
            "unit": "ns/op",
            "extra": "565128 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "565128 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "565128 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 704.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1673388 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 704.9,
            "unit": "ns/op",
            "extra": "1673388 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1673388 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1673388 times\n4 procs"
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
          "id": "db59bb73a0d41ca44d2b5c54dbd8082860562535",
          "message": "tests(rules): orientation rule\n\nTest cases:\n- ignore object with non-matching `Selector`\n- object with matching `Selector` does not have rule's marker\n- perfect match\n- object looks at perpendicular direction\n- object looks at the opposite direction",
          "timestamp": "2026-08-03T17:54:52+03:00",
          "tree_id": "0bda7bb231d8fb46fa265f17d93f7801edd9a23f",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/db59bb73a0d41ca44d2b5c54dbd8082860562535"
        },
        "date": 1785768960600,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 20.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56845352 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 20.99,
            "unit": "ns/op",
            "extra": "56845352 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56845352 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56845352 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 760.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1572403 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 760.5,
            "unit": "ns/op",
            "extra": "1572403 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1572403 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1572403 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2648,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "452418 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2648,
            "unit": "ns/op",
            "extra": "452418 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "452418 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "452418 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 920.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1302554 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 920.6,
            "unit": "ns/op",
            "extra": "1302554 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1302554 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1302554 times\n4 procs"
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
          "id": "648377efbd211461295475c0c6be0dbd8fe01c1e",
          "message": "feat(rules): introduce `SeparationRule`\n\n- rule helps to keep objects with `Target` Selector on a distance further than `MinDistance` from objects with `Obstacle` Selector\n- use the largest gap along all axes to calculate score",
          "timestamp": "2026-08-04T00:45:03+03:00",
          "tree_id": "f78266b915f952cc7267601435ca77b7e0a55bae",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/648377efbd211461295475c0c6be0dbd8fe01c1e"
        },
        "date": 1785793591748,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 20.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56143765 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 20.95,
            "unit": "ns/op",
            "extra": "56143765 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56143765 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56143765 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 917.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1304347 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 917.8,
            "unit": "ns/op",
            "extra": "1304347 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1304347 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1304347 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2971,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "403706 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2971,
            "unit": "ns/op",
            "extra": "403706 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "403706 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "403706 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 948.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1265496 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 948.2,
            "unit": "ns/op",
            "extra": "1265496 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1265496 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1265496 times\n4 procs"
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
          "id": "968e6a0f97022d73e28a7f51ab4d6b2916fac368",
          "message": "fix(rules): typo when working with slice in separation rule",
          "timestamp": "2026-08-04T13:47:40+03:00",
          "tree_id": "48fc68fd10b1bb0231206553b4ea3de71937c4e8",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/968e6a0f97022d73e28a7f51ab4d6b2916fac368"
        },
        "date": 1785840530888,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 21.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53194962 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 21.66,
            "unit": "ns/op",
            "extra": "53194962 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53194962 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53194962 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 926.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1307703 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 926.9,
            "unit": "ns/op",
            "extra": "1307703 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1307703 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1307703 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2965,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "400875 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2965,
            "unit": "ns/op",
            "extra": "400875 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "400875 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "400875 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 961.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1262641 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 961.8,
            "unit": "ns/op",
            "extra": "1262641 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1262641 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1262641 times\n4 procs"
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
          "id": "2bf3443ffdf34a277c02838e9c4ea8a59a518e9c",
          "message": "refactor: add missing file",
          "timestamp": "2026-08-07T20:27:37+03:00",
          "tree_id": "0c9d4ce11e55c009ac67571b2a386510ac0c7c63",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/2bf3443ffdf34a277c02838e9c4ea8a59a518e9c"
        },
        "date": 1786123745736,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 21.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56616798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 21.07,
            "unit": "ns/op",
            "extra": "56616798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56616798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56616798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 918.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1305961 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 918.3,
            "unit": "ns/op",
            "extra": "1305961 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1305961 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1305961 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 2970,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "402978 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 2970,
            "unit": "ns/op",
            "extra": "402978 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "402978 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "402978 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 948.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1264777 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 948.1,
            "unit": "ns/op",
            "extra": "1264777 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1264777 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1264777 times\n4 procs"
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
          "id": "7756ab92231348f8a8ec16d20407deaa5fb2bbba",
          "message": "refactor: the return of benchmarks for the `Grid`",
          "timestamp": "2026-08-07T21:12:18+03:00",
          "tree_id": "227df850c16215044a7716a689b723054099df3b",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/7756ab92231348f8a8ec16d20407deaa5fb2bbba"
        },
        "date": 1786126406521,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52923854 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.78,
            "unit": "ns/op",
            "extra": "52923854 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52923854 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52923854 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2482,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "484833 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2482,
            "unit": "ns/op",
            "extra": "484833 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "484833 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "484833 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 763.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1572036 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 763.1,
            "unit": "ns/op",
            "extra": "1572036 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1572036 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1572036 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 893.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1339989 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 893.6,
            "unit": "ns/op",
            "extra": "1339989 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1339989 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1339989 times\n4 procs"
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
          "id": "93d2e322503f5ae7442b5049ee1e8e87d14bced2",
          "message": "tests: rewrite tests for `RotatedShape`\n\n- check both `VoxelShape` and `Box` where applicable\n\nTest cases:\n- check `RotatedShape` has all methods `Shape` and `Rotatable` have\n- guardrail for non-existent rotation indexes\n- check rotated shapes have all the points at position that `ForEachPoint` told and volume hasn't changed\n- check shape doesn't contain points outside of its bounds\n- check internal void in a `VoxelShape`\n- check bounds tightness\n- end-to-end rotation test",
          "timestamp": "2026-08-13T12:00:09+03:00",
          "tree_id": "dcd970006e950a7f2da249db58b19485617fb243",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/93d2e322503f5ae7442b5049ee1e8e87d14bced2"
        },
        "date": 1786611670012,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53239840 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.57,
            "unit": "ns/op",
            "extra": "53239840 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53239840 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53239840 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3031,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "397800 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3031,
            "unit": "ns/op",
            "extra": "397800 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "397800 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "397800 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 828.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1448821 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 828.3,
            "unit": "ns/op",
            "extra": "1448821 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1448821 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1448821 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 895.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1341242 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 895.3,
            "unit": "ns/op",
            "extra": "1341242 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1341242 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1341242 times\n4 procs"
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
          "id": "7f90fad4b86cf0981924b21b472b026f81498a74",
          "message": "feat(ci): new separate job for benchmarking",
          "timestamp": "2026-08-13T12:04:24+03:00",
          "tree_id": "cf2a09fdbc9207d8bec1bdeac75225808aec71cd",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/7f90fad4b86cf0981924b21b472b026f81498a74"
        },
        "date": 1786611897102,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53171085 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.58,
            "unit": "ns/op",
            "extra": "53171085 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53171085 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53171085 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2623,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "456492 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2623,
            "unit": "ns/op",
            "extra": "456492 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "456492 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "456492 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 763.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1575007 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 763.4,
            "unit": "ns/op",
            "extra": "1575007 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1575007 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1575007 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 867.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1382392 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 867.2,
            "unit": "ns/op",
            "extra": "1382392 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1382392 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1382392 times\n4 procs"
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
          "id": "d2857a08d92fb3d89d27899208a38d0e13fea18b",
          "message": "fix(rules): straighten `Selector` logic -- match only if tags AND id match",
          "timestamp": "2026-08-13T12:50:19+03:00",
          "tree_id": "bf5433d789f89c413bb101f13d92c9f0ab7b4e04",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/d2857a08d92fb3d89d27899208a38d0e13fea18b"
        },
        "date": 1786614657731,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52859392 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.74,
            "unit": "ns/op",
            "extra": "52859392 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52859392 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52859392 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2665,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "449512 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2665,
            "unit": "ns/op",
            "extra": "449512 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "449512 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "449512 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 760.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1577668 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 760.8,
            "unit": "ns/op",
            "extra": "1577668 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1577668 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1577668 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 869.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1387053 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 869.1,
            "unit": "ns/op",
            "extra": "1387053 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1387053 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1387053 times\n4 procs"
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
          "id": "1b221b6fb5ab4d7104cf1f92b27d27ad77513f34",
          "message": "opt(collision): if two objects are `Box` and their AABB boxes overlap, they overlap",
          "timestamp": "2026-08-13T13:05:11+03:00",
          "tree_id": "1b574eaccdc9ea75bc95c7e5d7348df51b700781",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/1b221b6fb5ab4d7104cf1f92b27d27ad77513f34"
        },
        "date": 1786615543888,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 43.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28023054 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 43.26,
            "unit": "ns/op",
            "extra": "28023054 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "28023054 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "28023054 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2632,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "456982 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2632,
            "unit": "ns/op",
            "extra": "456982 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "456982 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "456982 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 777,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1527974 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 777,
            "unit": "ns/op",
            "extra": "1527974 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1527974 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1527974 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 872,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1385487 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 872,
            "unit": "ns/op",
            "extra": "1385487 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1385487 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1385487 times\n4 procs"
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
          "id": "25eca3609aa13d642b57255d87689ba4109e3bb2",
          "message": "fix(grid): race condition in `Query`",
          "timestamp": "2026-08-13T13:33:18+03:00",
          "tree_id": "b677f16cedbf4daef08dc822043241b616db78fb",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/25eca3609aa13d642b57255d87689ba4109e3bb2"
        },
        "date": 1786617237057,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53432532 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.46,
            "unit": "ns/op",
            "extra": "53432532 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53432532 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53432532 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2969,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "405612 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2969,
            "unit": "ns/op",
            "extra": "405612 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "405612 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "405612 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 815.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1470328 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 815.5,
            "unit": "ns/op",
            "extra": "1470328 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1470328 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1470328 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 891,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1346020 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 891,
            "unit": "ns/op",
            "extra": "1346020 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1346020 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1346020 times\n4 procs"
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
          "id": "73cb9771a194cd352f488ec5fd800765aa9794b6",
          "message": "Fix grid QueryBuf Z-axis bounds check and thread-safety bugs",
          "timestamp": "2026-08-13T10:34:27Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/1/commits/73cb9771a194cd352f488ec5fd800765aa9794b6"
        },
        "date": 1786635487758,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 26.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45625972 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 26.41,
            "unit": "ns/op",
            "extra": "45625972 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45625972 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45625972 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "382560 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3142,
            "unit": "ns/op",
            "extra": "382560 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "382560 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "382560 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 897.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1332198 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 897.4,
            "unit": "ns/op",
            "extra": "1332198 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1332198 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1332198 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1008,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1008,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "id": "d6459ff50e53549d60c864b09cf3a62403e89a56",
          "message": "Merge pull request #1 from dvprokofiev/fix-grid-query-8231754457473494138\n\nFix grid QueryBuf Z-axis bounds check and thread-safety bugs",
          "timestamp": "2026-08-13T18:38:36+03:00",
          "tree_id": "ceaf41f1c79cbe72de42f5062297c2c672375f19",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/d6459ff50e53549d60c864b09cf3a62403e89a56"
        },
        "date": 1786635554990,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 21.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59588306 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 21.15,
            "unit": "ns/op",
            "extra": "59588306 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "59588306 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "59588306 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2328,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "532032 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2328,
            "unit": "ns/op",
            "extra": "532032 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "532032 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "532032 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 642.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1876432 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 642.8,
            "unit": "ns/op",
            "extra": "1876432 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1876432 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1876432 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 649.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1862254 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 649.9,
            "unit": "ns/op",
            "extra": "1862254 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1862254 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1862254 times\n4 procs"
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
          "id": "125fae8ca9beff465f5aac327b0289d15c3e24bb",
          "message": "⚡ Optimize Mask.Has with two-pointer intersection",
          "timestamp": "2026-08-13T15:39:56Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/2/commits/125fae8ca9beff465f5aac327b0289d15c3e24bb"
        },
        "date": 1786636450251,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert (arrangio-core/grid)",
            "value": 22.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53601267 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (arrangio-core/grid) - ns/op",
            "value": 22.52,
            "unit": "ns/op",
            "extra": "53601267 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (arrangio-core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53601267 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (arrangio-core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53601267 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (arrangio-core/grid)",
            "value": 2641,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "456565 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (arrangio-core/grid) - ns/op",
            "value": 2641,
            "unit": "ns/op",
            "extra": "456565 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (arrangio-core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "456565 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (arrangio-core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "456565 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (arrangio-core/grid)",
            "value": 778,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1523551 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (arrangio-core/grid) - ns/op",
            "value": 778,
            "unit": "ns/op",
            "extra": "1523551 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (arrangio-core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1523551 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (arrangio-core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1523551 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (arrangio-core/grid)",
            "value": 881.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1350800 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (arrangio-core/grid) - ns/op",
            "value": 881.6,
            "unit": "ns/op",
            "extra": "1350800 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (arrangio-core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1350800 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (arrangio-core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1350800 times\n4 procs"
          },
          {
            "name": "BenchmarkMask_Has (arrangio-core/tags)",
            "value": 291.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3958585 times\n4 procs"
          },
          {
            "name": "BenchmarkMask_Has (arrangio-core/tags) - ns/op",
            "value": 291.8,
            "unit": "ns/op",
            "extra": "3958585 times\n4 procs"
          },
          {
            "name": "BenchmarkMask_Has (arrangio-core/tags) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3958585 times\n4 procs"
          },
          {
            "name": "BenchmarkMask_Has (arrangio-core/tags) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3958585 times\n4 procs"
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
          "id": "e5c8f76bf0334fd9300b9fb18aa7d0b4f7f9c3d2",
          "message": "⚡ Performance: Optimize CheckCollision with early exit",
          "timestamp": "2026-08-13T15:39:56Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/3/commits/e5c8f76bf0334fd9300b9fb18aa7d0b4f7f9c3d2"
        },
        "date": 1786636741955,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCheckCollisionVoxel (arrangio-core/collision)",
            "value": 943,
            "unit": "ns/op\t      33 B/op\t       2 allocs/op",
            "extra": "1271670 times\n4 procs"
          },
          {
            "name": "BenchmarkCheckCollisionVoxel (arrangio-core/collision) - ns/op",
            "value": 943,
            "unit": "ns/op",
            "extra": "1271670 times\n4 procs"
          },
          {
            "name": "BenchmarkCheckCollisionVoxel (arrangio-core/collision) - B/op",
            "value": 33,
            "unit": "B/op",
            "extra": "1271670 times\n4 procs"
          },
          {
            "name": "BenchmarkCheckCollisionVoxel (arrangio-core/collision) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "1271670 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (arrangio-core/grid)",
            "value": 22.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53172607 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (arrangio-core/grid) - ns/op",
            "value": 22.48,
            "unit": "ns/op",
            "extra": "53172607 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (arrangio-core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53172607 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (arrangio-core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53172607 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (arrangio-core/grid)",
            "value": 2969,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "403539 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (arrangio-core/grid) - ns/op",
            "value": 2969,
            "unit": "ns/op",
            "extra": "403539 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (arrangio-core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "403539 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (arrangio-core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "403539 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (arrangio-core/grid)",
            "value": 813.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1475522 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (arrangio-core/grid) - ns/op",
            "value": 813.2,
            "unit": "ns/op",
            "extra": "1475522 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (arrangio-core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1475522 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (arrangio-core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1475522 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (arrangio-core/grid)",
            "value": 903.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1378830 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (arrangio-core/grid) - ns/op",
            "value": 903.4,
            "unit": "ns/op",
            "extra": "1378830 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (arrangio-core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1378830 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (arrangio-core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1378830 times\n4 procs"
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
          "id": "448ab2a9d4f2024a55167e0a9d5d495f670de808",
          "message": "⚡ Performance: Optimize CheckCollision with early exit",
          "timestamp": "2026-08-13T15:39:56Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/3/commits/448ab2a9d4f2024a55167e0a9d5d495f670de808"
        },
        "date": 1786637008814,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 20.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59013218 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 20.77,
            "unit": "ns/op",
            "extra": "59013218 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "59013218 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "59013218 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2000,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "606895 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2000,
            "unit": "ns/op",
            "extra": "606895 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "606895 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "606895 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 645.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1850167 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 645.6,
            "unit": "ns/op",
            "extra": "1850167 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1850167 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1850167 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 634.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1888322 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 634.7,
            "unit": "ns/op",
            "extra": "1888322 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1888322 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1888322 times\n4 procs"
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
          "id": "808bba2f368639624514bc0c737260be113ca874",
          "message": "🧹 Code Health: Replace multiple `if` calls with `min` and `max` in `ClearanceRule`",
          "timestamp": "2026-08-13T15:39:56Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/4/commits/808bba2f368639624514bc0c737260be113ca874"
        },
        "date": 1786639015962,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53393052 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.48,
            "unit": "ns/op",
            "extra": "53393052 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53393052 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53393052 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2988,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "402066 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2988,
            "unit": "ns/op",
            "extra": "402066 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "402066 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "402066 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 812.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1477518 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 812.6,
            "unit": "ns/op",
            "extra": "1477518 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1477518 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1477518 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 866.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1385701 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 866.1,
            "unit": "ns/op",
            "extra": "1385701 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1385701 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1385701 times\n4 procs"
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
          "id": "1cb5697941e1ee1b2723adf652a03de25c5d1fd6",
          "message": "Merge pull request #4 from dvprokofiev/fix-code-health-clearance-min-3372737037849158066\n\n🧹 Code Health: Replace multiple `if` calls with `min` and `max` in `ClearanceRule`",
          "timestamp": "2026-08-13T19:37:24+03:00",
          "tree_id": "b8b42bc671f03a86d380df826921724578b46803",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/1cb5697941e1ee1b2723adf652a03de25c5d1fd6"
        },
        "date": 1786639074015,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 23.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51592525 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 23.14,
            "unit": "ns/op",
            "extra": "51592525 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51592525 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51592525 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2621,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "459554 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2621,
            "unit": "ns/op",
            "extra": "459554 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "459554 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "459554 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 760.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1576308 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 760.9,
            "unit": "ns/op",
            "extra": "1576308 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1576308 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1576308 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 875.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1364386 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 875.8,
            "unit": "ns/op",
            "extra": "1364386 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1364386 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1364386 times\n4 procs"
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
          "id": "fff3a937dd5f3f6a16a6743540e3c5356381f3cb",
          "message": "🧹 [Code Health] Remove unused `GetRotationMatrices`",
          "timestamp": "2026-08-13T16:37:29Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/5/commits/fff3a937dd5f3f6a16a6743540e3c5356381f3cb"
        },
        "date": 1786639160307,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53510134 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.52,
            "unit": "ns/op",
            "extra": "53510134 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53510134 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53510134 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2974,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "400340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2974,
            "unit": "ns/op",
            "extra": "400340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "400340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "400340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 821.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1474872 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 821.5,
            "unit": "ns/op",
            "extra": "1474872 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1474872 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1474872 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 868.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1381242 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 868.6,
            "unit": "ns/op",
            "extra": "1381242 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1381242 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1381242 times\n4 procs"
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
          "id": "fa074f7427934272b10b5d8b9f08e2974bf69660",
          "message": "🧹 [Refactor proximity rule to avoid redundant calculation]",
          "timestamp": "2026-08-13T16:37:29Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/6/commits/fa074f7427934272b10b5d8b9f08e2974bf69660"
        },
        "date": 1786639229329,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 20.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58613503 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 20.46,
            "unit": "ns/op",
            "extra": "58613503 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58613503 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58613503 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2110,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "571730 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2110,
            "unit": "ns/op",
            "extra": "571730 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "571730 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "571730 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 647.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1862191 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 647.7,
            "unit": "ns/op",
            "extra": "1862191 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1862191 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1862191 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 629.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1902230 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 629.4,
            "unit": "ns/op",
            "extra": "1902230 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1902230 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1902230 times\n4 procs"
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
          "id": "b9b173db571c4b17dcac5f82533f1ce5081e3b6b",
          "message": "Merge pull request #5 from dvprokofiev/remove-unused-getrotationmatrices-17729059821128238219\n\n🧹 [Code Health] Remove unused `GetRotationMatrices`",
          "timestamp": "2026-08-13T19:40:09+03:00",
          "tree_id": "69c19c00f9679d86b31a1392dfcbdb8070a0f2fc",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/b9b173db571c4b17dcac5f82533f1ce5081e3b6b"
        },
        "date": 1786639241669,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53523421 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.45,
            "unit": "ns/op",
            "extra": "53523421 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53523421 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53523421 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2632,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "456020 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2632,
            "unit": "ns/op",
            "extra": "456020 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "456020 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "456020 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 760.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1578338 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 760.5,
            "unit": "ns/op",
            "extra": "1578338 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1578338 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1578338 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 894.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1335224 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 894.2,
            "unit": "ns/op",
            "extra": "1335224 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1335224 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1335224 times\n4 procs"
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
          "id": "6dd5ae33a9e818595d0a829155e5d497e83790a1",
          "message": "Merge pull request #6 from dvprokofiev/fix-redundant-calc-9695964594736060751\n\n🧹 [Refactor proximity rule to avoid redundant calculation]",
          "timestamp": "2026-08-13T19:40:52+03:00",
          "tree_id": "ec7462ad6dd056a567d7fde98c97b4c790e3f964",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/6dd5ae33a9e818595d0a829155e5d497e83790a1"
        },
        "date": 1786639285301,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53346536 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.53,
            "unit": "ns/op",
            "extra": "53346536 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53346536 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53346536 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3220,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "390268 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3220,
            "unit": "ns/op",
            "extra": "390268 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "390268 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "390268 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 812.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1476903 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 812.7,
            "unit": "ns/op",
            "extra": "1476903 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1476903 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1476903 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 866.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1386234 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 866.5,
            "unit": "ns/op",
            "extra": "1386234 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1386234 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1386234 times\n4 procs"
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
            "name": "BenchmarkGridInsert",
            "value": 17.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "69018169 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 17.43,
            "unit": "ns/op",
            "extra": "69018169 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "69018169 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "69018169 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "561562 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2138,
            "unit": "ns/op",
            "extra": "561562 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "561562 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "561562 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 589.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2035522 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 589.3,
            "unit": "ns/op",
            "extra": "2035522 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2035522 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2035522 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 669.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1791919 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 669.3,
            "unit": "ns/op",
            "extra": "1791919 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1791919 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "🧹 [Refactor Grid and Rules for Static Entities and Zones]",
          "timestamp": "2026-08-13T18:35:49Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/7/commits/9ccca3c99485bb251b05df8c3dcb3464177b2225"
        },
        "date": 1786651897373,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 44.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27929749 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 44.6,
            "unit": "ns/op",
            "extra": "27929749 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "27929749 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "27929749 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 4204,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "286586 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 4204,
            "unit": "ns/op",
            "extra": "286586 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "286586 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "286586 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 923.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1299440 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 923.8,
            "unit": "ns/op",
            "extra": "1299440 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1299440 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1299440 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 2692,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "407325 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 2692,
            "unit": "ns/op",
            "extra": "407325 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "407325 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "Merge pull request #3 from dvprokofiev/perf/early-exit-collision-743282526597653625\n\n⚡ Performance: Optimize CheckCollision with early exit",
          "timestamp": "2026-08-14T11:21:34+03:00",
          "tree_id": "364a77fc157ecc84ba541002d57cbebd56465e5f",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/5b70acbac8ee94e7e66bd8265e49331f34bb83ce"
        },
        "date": 1786695723984,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53037290 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.45,
            "unit": "ns/op",
            "extra": "53037290 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53037290 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53037290 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2617,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "457298 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2617,
            "unit": "ns/op",
            "extra": "457298 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "457298 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "457298 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 761.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1576989 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 761.6,
            "unit": "ns/op",
            "extra": "1576989 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1576989 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1576989 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 863.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1388509 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 863.9,
            "unit": "ns/op",
            "extra": "1388509 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1388509 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "⚡ Optimize Mask.Has with two-pointer intersection",
          "timestamp": "2026-08-14T08:22:15Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/2/commits/a0019fb8b1c4c9d0ef850634738920951b985480"
        },
        "date": 1786695882184,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53160417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.49,
            "unit": "ns/op",
            "extra": "53160417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53160417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53160417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2635,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "456288 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2635,
            "unit": "ns/op",
            "extra": "456288 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "456288 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "456288 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 759.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1579844 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 759.5,
            "unit": "ns/op",
            "extra": "1579844 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1579844 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1579844 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 864.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1388096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 864.7,
            "unit": "ns/op",
            "extra": "1388096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1388096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "Merge pull request #2 from dvprokofiev/perf-optimize-mask-has-9631233637720683612\n\n⚡ Optimize Mask.Has with two-pointer intersection",
          "timestamp": "2026-08-14T11:25:04+03:00",
          "tree_id": "f63441ded4471e26f158f9e3ca409b43e05a1273",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/42481e14611ccf5c6e5fb5257bb651c056014bc1"
        },
        "date": 1786695936852,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53151394 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.47,
            "unit": "ns/op",
            "extra": "53151394 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53151394 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53151394 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2980,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "397590 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2980,
            "unit": "ns/op",
            "extra": "397590 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "397590 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "397590 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 813.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1474798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 813.6,
            "unit": "ns/op",
            "extra": "1474798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1474798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1474798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 884.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1350081 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 884.3,
            "unit": "ns/op",
            "extra": "1350081 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1350081 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
            "name": "BenchmarkGridInsert",
            "value": 22.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53909437 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.69,
            "unit": "ns/op",
            "extra": "53909437 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53909437 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53909437 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2589,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "461952 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2589,
            "unit": "ns/op",
            "extra": "461952 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "461952 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "461952 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 675.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1777012 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 675.5,
            "unit": "ns/op",
            "extra": "1777012 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1777012 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1777012 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 775.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1546578 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 775.5,
            "unit": "ns/op",
            "extra": "1546578 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1546578 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "⚡ Bolt: Optimize grid cell loop clamping",
          "timestamp": "2026-08-14T18:51:51Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/10/commits/51c80525432a8d7c46e1ac7e271c32021988a516"
        },
        "date": 1786746053162,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 28.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41858934 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 28.36,
            "unit": "ns/op",
            "extra": "41858934 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41858934 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41858934 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3691,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "323737 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3691,
            "unit": "ns/op",
            "extra": "323737 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "323737 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "323737 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 496.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2418206 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 496.5,
            "unit": "ns/op",
            "extra": "2418206 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2418206 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2418206 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1083,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1083,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "⚡ Bolt: Optimize grid cell loop clamping",
          "timestamp": "2026-08-14T18:51:51Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/10/commits/458108f318a225e9b559112c008a1319294ac58a"
        },
        "date": 1786781004268,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 28.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43612851 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 28.03,
            "unit": "ns/op",
            "extra": "43612851 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43612851 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43612851 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3549,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "339168 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3549,
            "unit": "ns/op",
            "extra": "339168 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "339168 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "339168 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 469.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2556464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 469.4,
            "unit": "ns/op",
            "extra": "2556464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2556464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2556464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1117,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1117,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "Merge pull request #10 from dvprokofiev/bolt-optimize-grid-clamping-5733546725222335751\n\n⚡ Bolt: Optimize grid cell loop clamping",
          "timestamp": "2026-08-15T11:29:42+03:00",
          "tree_id": "668042fdfb8f127f24d6166b8647f989dc72192d",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/22b3064ba181b80f96059ffe7bb0c0ecd3a2cda3"
        },
        "date": 1786782619225,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 28.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42026356 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 28.38,
            "unit": "ns/op",
            "extra": "42026356 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42026356 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42026356 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3687,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "325832 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3687,
            "unit": "ns/op",
            "extra": "325832 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "325832 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "325832 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 494.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2424800 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 494.9,
            "unit": "ns/op",
            "extra": "2424800 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2424800 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2424800 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1115,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1115,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "⚡ Bolt: Optimize 3D grid iteration loop order",
          "timestamp": "2026-08-15T08:29:54Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/11/commits/502388fd23ff2afd331edcbbfc84ad21bc61c28e"
        },
        "date": 1786832244931,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 24.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46174148 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 24.68,
            "unit": "ns/op",
            "extra": "46174148 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46174148 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46174148 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2498,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "479382 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2498,
            "unit": "ns/op",
            "extra": "479382 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "479382 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "479382 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 361.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3309814 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 361.7,
            "unit": "ns/op",
            "extra": "3309814 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3309814 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3309814 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 774.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1549046 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 774.4,
            "unit": "ns/op",
            "extra": "1549046 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1549046 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "⚡ Bolt: Optimize 3D grid iteration loop order",
          "timestamp": "2026-08-15T08:29:54Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/11/commits/f7929f1801a2f9bc81a326fb4d1ada3b3c3db208"
        },
        "date": 1786832664040,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41067339 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 29,
            "unit": "ns/op",
            "extra": "41067339 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41067339 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41067339 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3905,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "305005 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3905,
            "unit": "ns/op",
            "extra": "305005 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "305005 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "305005 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 410.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2924172 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 410.1,
            "unit": "ns/op",
            "extra": "2924172 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2924172 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2924172 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1091,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1091,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "⚡ Bolt: Optimize 3D spatial loop ordering for better cache locality",
          "timestamp": "2026-08-15T08:29:54Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/12/commits/5e928eda783a9543a6f0b135e741e3bb0c50b84e"
        },
        "date": 1786919825958,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 28.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41319171 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 28.99,
            "unit": "ns/op",
            "extra": "41319171 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41319171 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41319171 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3670,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "325592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3670,
            "unit": "ns/op",
            "extra": "325592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "325592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "325592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 409,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2931174 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 409,
            "unit": "ns/op",
            "extra": "2931174 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2931174 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2931174 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1086,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1086,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "⚡ Bolt: Optimize 3D spatial loop ordering for better cache locality",
          "timestamp": "2026-08-15T08:29:54Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/12/commits/300c8f068322205831a8ada8c85da589605b310a"
        },
        "date": 1786920000384,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54507913 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.07,
            "unit": "ns/op",
            "extra": "54507913 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54507913 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54507913 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2721,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "441597 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2721,
            "unit": "ns/op",
            "extra": "441597 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "441597 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "441597 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 337.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3552350 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 337.9,
            "unit": "ns/op",
            "extra": "3552350 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3552350 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3552350 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 853,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1406096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 853,
            "unit": "ns/op",
            "extra": "1406096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1406096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "⚡ Bolt: Improve cache spatial locality by reordering 3D grid traversal loops",
          "timestamp": "2026-08-15T08:29:54Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/13/commits/e4fa8988100146c0fef93a18565f4fe20c51e2ce"
        },
        "date": 1787005282267,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 28.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41760858 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 28.67,
            "unit": "ns/op",
            "extra": "41760858 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41760858 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41760858 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3712,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "325101 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3712,
            "unit": "ns/op",
            "extra": "325101 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "325101 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "325101 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 500.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2427499 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 500.3,
            "unit": "ns/op",
            "extra": "2427499 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2427499 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2427499 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1106,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1106,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "Merge pull request #11 from dvprokofiev/bolt/optimize-grid-iteration-12406607358070992482\n\n⚡ Bolt: Optimize 3D grid iteration loop order",
          "timestamp": "2026-08-18T10:24:15+03:00",
          "tree_id": "e82adf6e67671be245b2fd1b6fc5f598ccdb6f49",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/b005b277fed4b3b8c81c930d9193d7d0d5526100"
        },
        "date": 1787037883778,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 21.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54788955 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 21.91,
            "unit": "ns/op",
            "extra": "54788955 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54788955 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54788955 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2693,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "445816 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2693,
            "unit": "ns/op",
            "extra": "445816 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "445816 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "445816 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 343.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3361752 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 343.7,
            "unit": "ns/op",
            "extra": "3361752 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3361752 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3361752 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 852.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1406154 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 852.9,
            "unit": "ns/op",
            "extra": "1406154 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1406154 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "⚡ Bolt: Optimize CheckCollision inner loop bounds check",
          "timestamp": "2026-08-18T07:25:23Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/14/commits/b831ef99eb97ffc2cb5aef93909d30ab736cdf40"
        },
        "date": 1787092479668,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 28.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42362994 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 28.23,
            "unit": "ns/op",
            "extra": "42362994 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42362994 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42362994 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3547,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "336162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3547,
            "unit": "ns/op",
            "extra": "336162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "336162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "336162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 437.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2731417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 437.5,
            "unit": "ns/op",
            "extra": "2731417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2731417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2731417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1100,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1100,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "Merge pull request #14 from dvprokofiev/bolt-optimize-collision-18049269665295863973\n\n⚡ Bolt: Optimize CheckCollision inner loop bounds check",
          "timestamp": "2026-08-19T13:24:44+03:00",
          "tree_id": "8b754d350d0a83c71d9869491ac45672f8fad081",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/cc785b0032dce98e39dbd3f532a493490a9941e6"
        },
        "date": 1787135112064,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 28.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42502389 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 28.25,
            "unit": "ns/op",
            "extra": "42502389 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42502389 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42502389 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3584,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "334878 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3584,
            "unit": "ns/op",
            "extra": "334878 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "334878 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "334878 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 435.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2751810 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 435.8,
            "unit": "ns/op",
            "extra": "2751810 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2751810 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2751810 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1104,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1104,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "⚡ Bolt: Optimize CheckCollision inner loop type asserts",
          "timestamp": "2026-08-19T10:27:04Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/15/commits/143a21a2b0c6e982d46f998985f87ec906a039a6"
        },
        "date": 1787177611415,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCheckCollision_Boxes (arrangio-core/collision)",
            "value": 947.1,
            "unit": "ns/op\t     129 B/op\t       2 allocs/op",
            "extra": "1240430 times\n4 procs"
          },
          {
            "name": "BenchmarkCheckCollision_Boxes (arrangio-core/collision) - ns/op",
            "value": 947.1,
            "unit": "ns/op",
            "extra": "1240430 times\n4 procs"
          },
          {
            "name": "BenchmarkCheckCollision_Boxes (arrangio-core/collision) - B/op",
            "value": 129,
            "unit": "B/op",
            "extra": "1240430 times\n4 procs"
          },
          {
            "name": "BenchmarkCheckCollision_Boxes (arrangio-core/collision) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "1240430 times\n4 procs"
          },
          {
            "name": "BenchmarkCheckCollision_VoxelShapes (arrangio-core/collision)",
            "value": 1902,
            "unit": "ns/op\t     129 B/op\t       2 allocs/op",
            "extra": "594364 times\n4 procs"
          },
          {
            "name": "BenchmarkCheckCollision_VoxelShapes (arrangio-core/collision) - ns/op",
            "value": 1902,
            "unit": "ns/op",
            "extra": "594364 times\n4 procs"
          },
          {
            "name": "BenchmarkCheckCollision_VoxelShapes (arrangio-core/collision) - B/op",
            "value": 129,
            "unit": "B/op",
            "extra": "594364 times\n4 procs"
          },
          {
            "name": "BenchmarkCheckCollision_VoxelShapes (arrangio-core/collision) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "594364 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (arrangio-core/grid)",
            "value": 19.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58230273 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (arrangio-core/grid) - ns/op",
            "value": 19.67,
            "unit": "ns/op",
            "extra": "58230273 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (arrangio-core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58230273 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (arrangio-core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58230273 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (arrangio-core/grid)",
            "value": 2281,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "524329 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (arrangio-core/grid) - ns/op",
            "value": 2281,
            "unit": "ns/op",
            "extra": "524329 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (arrangio-core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "524329 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (arrangio-core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "524329 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (arrangio-core/grid)",
            "value": 308.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3871429 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (arrangio-core/grid) - ns/op",
            "value": 308.6,
            "unit": "ns/op",
            "extra": "3871429 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (arrangio-core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3871429 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (arrangio-core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3871429 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (arrangio-core/grid)",
            "value": 686.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1751984 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (arrangio-core/grid) - ns/op",
            "value": 686.7,
            "unit": "ns/op",
            "extra": "1751984 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (arrangio-core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1751984 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (arrangio-core/grid) - allocs/op",
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
          "message": "⚡ Bolt: Optimize CheckCollision inner loop type asserts",
          "timestamp": "2026-08-19T10:27:04Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/15/commits/c6f2abe1aee754c167c17f98e4ce82ac144af06c"
        },
        "date": 1787179137692,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCheckCollision_Boxes (arrangio-core/collision)",
            "value": 1567,
            "unit": "ns/op\t     129 B/op\t       2 allocs/op",
            "extra": "758628 times\n4 procs"
          },
          {
            "name": "BenchmarkCheckCollision_Boxes (arrangio-core/collision) - ns/op",
            "value": 1567,
            "unit": "ns/op",
            "extra": "758628 times\n4 procs"
          },
          {
            "name": "BenchmarkCheckCollision_Boxes (arrangio-core/collision) - B/op",
            "value": 129,
            "unit": "B/op",
            "extra": "758628 times\n4 procs"
          },
          {
            "name": "BenchmarkCheckCollision_Boxes (arrangio-core/collision) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "758628 times\n4 procs"
          },
          {
            "name": "BenchmarkCheckCollision_VoxelShapes (arrangio-core/collision)",
            "value": 2925,
            "unit": "ns/op\t     129 B/op\t       2 allocs/op",
            "extra": "403318 times\n4 procs"
          },
          {
            "name": "BenchmarkCheckCollision_VoxelShapes (arrangio-core/collision) - ns/op",
            "value": 2925,
            "unit": "ns/op",
            "extra": "403318 times\n4 procs"
          },
          {
            "name": "BenchmarkCheckCollision_VoxelShapes (arrangio-core/collision) - B/op",
            "value": 129,
            "unit": "B/op",
            "extra": "403318 times\n4 procs"
          },
          {
            "name": "BenchmarkCheckCollision_VoxelShapes (arrangio-core/collision) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "403318 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (arrangio-core/grid)",
            "value": 28.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42092340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (arrangio-core/grid) - ns/op",
            "value": 28.46,
            "unit": "ns/op",
            "extra": "42092340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (arrangio-core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42092340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert (arrangio-core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42092340 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (arrangio-core/grid)",
            "value": 3524,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "346592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (arrangio-core/grid) - ns/op",
            "value": 3524,
            "unit": "ns/op",
            "extra": "346592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (arrangio-core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "346592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery (arrangio-core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "346592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (arrangio-core/grid)",
            "value": 447.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2660194 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (arrangio-core/grid) - ns/op",
            "value": 447.6,
            "unit": "ns/op",
            "extra": "2660194 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (arrangio-core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2660194 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant (arrangio-core/grid) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2660194 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (arrangio-core/grid)",
            "value": 1098,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (arrangio-core/grid) - ns/op",
            "value": 1098,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (arrangio-core/grid) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense (arrangio-core/grid) - allocs/op",
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
          "message": "⚡ Bolt: Optimize CheckCollision with bounds hoisting and devirtualization",
          "timestamp": "2026-08-19T10:27:04Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/16/commits/eae3301f7d9f4a6aacbda793b5e7f36f2defbe94"
        },
        "date": 1787264850529,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 29.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41206528 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 29.19,
            "unit": "ns/op",
            "extra": "41206528 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41206528 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41206528 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3741,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "320516 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3741,
            "unit": "ns/op",
            "extra": "320516 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "320516 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "320516 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 415.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2922883 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 415.1,
            "unit": "ns/op",
            "extra": "2922883 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2922883 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2922883 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1088,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1088,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "⚡ Bolt: Devirtualize shape intersection calls in collision checks",
          "timestamp": "2026-08-19T10:27:04Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/17/commits/c2f4ec3343bcf66ac8d5942061458a95805eda83"
        },
        "date": 1787351461096,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 27.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43290774 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 27.55,
            "unit": "ns/op",
            "extra": "43290774 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43290774 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43290774 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2729,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "440715 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2729,
            "unit": "ns/op",
            "extra": "440715 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "440715 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "440715 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 415.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2917119 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 415.4,
            "unit": "ns/op",
            "extra": "2917119 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2917119 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2917119 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 862.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1391499 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 862.3,
            "unit": "ns/op",
            "extra": "1391499 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1391499 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "⚡ Bolt: Devirtualize Shape.Contains inside CheckCollision",
          "timestamp": "2026-08-19T10:27:04Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/18/commits/0fdb1f4e3a051c877f1d57f73a4d31c8b2634ba9"
        },
        "date": 1787437454772,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 28.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42525762 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 28.24,
            "unit": "ns/op",
            "extra": "42525762 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42525762 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42525762 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3472,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "345897 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3472,
            "unit": "ns/op",
            "extra": "345897 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "345897 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "345897 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 440.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2681680 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 440.3,
            "unit": "ns/op",
            "extra": "2681680 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2681680 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2681680 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1100,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1100,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "⚡ Bolt: Devirtualize Shape.Contains inside CheckCollision",
          "timestamp": "2026-08-19T10:27:04Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/18/commits/3c13d04a74d9750f2e7836ae0dd9d5caecd6894b"
        },
        "date": 1787437613288,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 28.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40843488 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 28.99,
            "unit": "ns/op",
            "extra": "40843488 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "40843488 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "40843488 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3806,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "316690 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3806,
            "unit": "ns/op",
            "extra": "316690 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "316690 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "316690 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 430,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2917096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 430,
            "unit": "ns/op",
            "extra": "2917096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2917096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2917096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1092,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1092,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "Merge pull request #18 from dvprokofiev/perf-devirtualize-collision-10618127762261140718\n\n⚡ Bolt: Devirtualize Shape.Contains inside CheckCollision",
          "timestamp": "2026-08-24T00:20:49+03:00",
          "tree_id": "3561a462eb021462c1a5b51441c3153f49d81109",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/31142d006be938ff071342e211782ba8330f523f"
        },
        "date": 1787520078666,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 28.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42451100 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 28.23,
            "unit": "ns/op",
            "extra": "42451100 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42451100 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42451100 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3467,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "343702 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3467,
            "unit": "ns/op",
            "extra": "343702 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "343702 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "343702 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 436.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2750356 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 436.2,
            "unit": "ns/op",
            "extra": "2750356 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2750356 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2750356 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1108,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "⚡ Bolt: Fix pure box detection for value types",
          "timestamp": "2026-08-23T21:20:54Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/19/commits/6b701ec45501ff0a324e646f25e27ddc078c6879"
        },
        "date": 1787525273401,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 28.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42469482 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 28.24,
            "unit": "ns/op",
            "extra": "42469482 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42469482 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42469482 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3478,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "345417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3478,
            "unit": "ns/op",
            "extra": "345417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "345417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "345417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 454.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2680819 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 454.4,
            "unit": "ns/op",
            "extra": "2680819 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2680819 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2680819 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1110,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1110,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "Merge pull request #19 from dvprokofiev/bolt/fix-pure-box-detection-16923347439525771055\n\n⚡ Bolt: Fix pure box detection for value types",
          "timestamp": "2026-08-24T10:47:50+03:00",
          "tree_id": "2ef9eb61b658caef307a80bb871c7a73182709e9",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/4346bd7aa81bc17db7f571f54e14b86819c88282"
        },
        "date": 1787557703812,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 29.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41263389 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 29.04,
            "unit": "ns/op",
            "extra": "41263389 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41263389 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41263389 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3717,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "323194 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3717,
            "unit": "ns/op",
            "extra": "323194 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "323194 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "323194 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 409.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2926077 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 409.8,
            "unit": "ns/op",
            "extra": "2926077 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2926077 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2926077 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1089,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1089,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
            "name": "BenchmarkGridInsert",
            "value": 28.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41971928 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 28.27,
            "unit": "ns/op",
            "extra": "41971928 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41971928 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41971928 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3677,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "326602 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3677,
            "unit": "ns/op",
            "extra": "326602 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "326602 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "326602 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 458.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2617153 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 458.5,
            "unit": "ns/op",
            "extra": "2617153 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2617153 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2617153 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1113,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "997524 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1113,
            "unit": "ns/op",
            "extra": "997524 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "997524 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
            "name": "BenchmarkGridInsert",
            "value": 28.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42426402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 28.23,
            "unit": "ns/op",
            "extra": "42426402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42426402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42426402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3506,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "341804 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3506,
            "unit": "ns/op",
            "extra": "341804 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "341804 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "341804 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 447.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2615338 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 447.1,
            "unit": "ns/op",
            "extra": "2615338 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2615338 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2615338 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1101,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
            "name": "BenchmarkGridInsert",
            "value": 29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41330487 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 29,
            "unit": "ns/op",
            "extra": "41330487 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41330487 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41330487 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3671,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "326293 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3671,
            "unit": "ns/op",
            "extra": "326293 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "326293 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "326293 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 413.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2931288 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 413.6,
            "unit": "ns/op",
            "extra": "2931288 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2931288 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2931288 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1089,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1089,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
            "name": "BenchmarkGridInsert",
            "value": 29.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41285319 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 29.13,
            "unit": "ns/op",
            "extra": "41285319 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41285319 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41285319 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3705,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "324901 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3705,
            "unit": "ns/op",
            "extra": "324901 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "324901 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "324901 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 410.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2925992 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 410.2,
            "unit": "ns/op",
            "extra": "2925992 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2925992 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2925992 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1090,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1090,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "🔒 Fix panic potential denial of service in grid insert",
          "timestamp": "2026-08-24T09:59:12Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/20/commits/e51487ff7ad0bb718c485c945a1e843c853d64eb"
        },
        "date": 1787605278880,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 17.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "67886637 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 17.63,
            "unit": "ns/op",
            "extra": "67886637 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67886637 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67886637 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2066,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "582708 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2066,
            "unit": "ns/op",
            "extra": "582708 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "582708 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "582708 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 324.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3690745 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 324.7,
            "unit": "ns/op",
            "extra": "3690745 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3690745 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3690745 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 638.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1879729 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 638.6,
            "unit": "ns/op",
            "extra": "1879729 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1879729 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "🔒 Fix panic potential denial of service in grid insert",
          "timestamp": "2026-08-24T09:59:12Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/20/commits/d8294219e110118ddefc4bc4f52c74f250c42288"
        },
        "date": 1787605666239,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 28.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41953777 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 28.64,
            "unit": "ns/op",
            "extra": "41953777 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41953777 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41953777 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3554,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "336278 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3554,
            "unit": "ns/op",
            "extra": "336278 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "336278 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "336278 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 435.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2750144 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 435.9,
            "unit": "ns/op",
            "extra": "2750144 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2750144 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2750144 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1100,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1100,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "🔒 Fix panic potential denial of service in grid insert",
          "timestamp": "2026-08-24T09:59:12Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/20/commits/e1ed2f8caad922605412719dbeabe575ffcb1991"
        },
        "date": 1787606091456,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 29.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40179646 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 29.79,
            "unit": "ns/op",
            "extra": "40179646 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "40179646 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "40179646 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3696,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "324476 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3696,
            "unit": "ns/op",
            "extra": "324476 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "324476 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "324476 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 410.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2922798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 410.3,
            "unit": "ns/op",
            "extra": "2922798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2922798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2922798 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1085,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1085,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "Merge pull request #20 from dvprokofiev/fix-grid-insert-dos-3060413929858200600\n\n🔒 Fix panic potential denial of service in grid insert",
          "timestamp": "2026-08-25T00:30:08+03:00",
          "tree_id": "d67d0678af9a29042f2d5dd797d02b8cc6b21d44",
          "url": "https://github.com/dvprokofiev/arrangio-core/commit/1020dcb506e087958837c1d16da5b5096dc4c100"
        },
        "date": 1787607038697,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 28.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41747445 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 28.84,
            "unit": "ns/op",
            "extra": "41747445 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41747445 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41747445 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3568,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "336430 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3568,
            "unit": "ns/op",
            "extra": "336430 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "336430 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "336430 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 436.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2750335 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 436.6,
            "unit": "ns/op",
            "extra": "2750335 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2750335 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2750335 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1101,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "⚡ Bolt: Devirtualize Shape.Bounds in Footprint.WorldBounds",
          "timestamp": "2026-08-24T21:33:25Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/21/commits/6f8a3ccdffd4dd1174b677d5a6f523bc49172887"
        },
        "date": 1787682345199,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 22.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54195435 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.54,
            "unit": "ns/op",
            "extra": "54195435 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54195435 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54195435 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2791,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "432363 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2791,
            "unit": "ns/op",
            "extra": "432363 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "432363 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "432363 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 341.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3511863 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 341.2,
            "unit": "ns/op",
            "extra": "3511863 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3511863 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3511863 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 811.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1479919 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 811.1,
            "unit": "ns/op",
            "extra": "1479919 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1479919 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
            "name": "BenchmarkGridInsert",
            "value": 28.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41911486 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 28.62,
            "unit": "ns/op",
            "extra": "41911486 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41911486 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41911486 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3535,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "339447 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3535,
            "unit": "ns/op",
            "extra": "339447 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "339447 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "339447 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 433.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2764681 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 433.8,
            "unit": "ns/op",
            "extra": "2764681 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2764681 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2764681 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1050,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1050,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
            "name": "BenchmarkGridInsert",
            "value": 28.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42042592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 28.53,
            "unit": "ns/op",
            "extra": "42042592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42042592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42042592 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3634,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "317085 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3634,
            "unit": "ns/op",
            "extra": "317085 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "317085 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "317085 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 432.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2771056 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 432.8,
            "unit": "ns/op",
            "extra": "2771056 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2771056 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2771056 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1046,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1046,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "⚡ Bolt: Optimize spatial narrow collision check points",
          "timestamp": "2026-08-25T19:01:24Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/22/commits/04d4950fb342754b93293e1c2d689b65fd7cddc5"
        },
        "date": 1787727539960,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 15.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "78140560 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 15.68,
            "unit": "ns/op",
            "extra": "78140560 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "78140560 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "78140560 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 1854,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "641139 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 1854,
            "unit": "ns/op",
            "extra": "641139 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "641139 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "641139 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 228.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4927402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 228.2,
            "unit": "ns/op",
            "extra": "4927402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4927402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4927402 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 588.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2034506 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 588.9,
            "unit": "ns/op",
            "extra": "2034506 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2034506 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "⚡ Bolt: Optimize spatial narrow collision check points",
          "timestamp": "2026-08-25T19:01:24Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/22/commits/6715d5490d434d709bc66916e5b231606804bcf2"
        },
        "date": 1787728343356,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 29.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40575442 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 29.61,
            "unit": "ns/op",
            "extra": "40575442 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "40575442 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "40575442 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3663,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "328144 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3663,
            "unit": "ns/op",
            "extra": "328144 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "328144 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "328144 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 436.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2773875 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 436.3,
            "unit": "ns/op",
            "extra": "2773875 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2773875 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2773875 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1065,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1065,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
          "message": "⚡ Bolt: Optimize spatial narrow collision check points",
          "timestamp": "2026-08-25T19:01:24Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/22/commits/d1c0573e380d75654231fe5735d4c6d5d98dec6d"
        },
        "date": 1787728494027,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 29.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40523014 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 29.75,
            "unit": "ns/op",
            "extra": "40523014 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "40523014 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "40523014 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3679,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "325417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3679,
            "unit": "ns/op",
            "extra": "325417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "325417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "325417 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 408.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2940446 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 408.3,
            "unit": "ns/op",
            "extra": "2940446 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2940446 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2940446 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1067,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1067,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
            "name": "BenchmarkGridInsert",
            "value": 29.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40313594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 29.62,
            "unit": "ns/op",
            "extra": "40313594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "40313594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "40313594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3699,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "328772 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3699,
            "unit": "ns/op",
            "extra": "328772 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "328772 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "328772 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 408.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2929700 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 408.6,
            "unit": "ns/op",
            "extra": "2929700 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2929700 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2929700 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1070,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1070,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
            "name": "BenchmarkGridInsert",
            "value": 23.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "49872514 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 23.74,
            "unit": "ns/op",
            "extra": "49872514 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "49872514 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "49872514 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2375,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "514413 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2375,
            "unit": "ns/op",
            "extra": "514413 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "514413 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "514413 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 395.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3026220 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 395.5,
            "unit": "ns/op",
            "extra": "3026220 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3026220 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3026220 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 861,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1382084 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 861,
            "unit": "ns/op",
            "extra": "1382084 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1382084 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
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
            "name": "BenchmarkGridInsert",
            "value": 25.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47005464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 25.72,
            "unit": "ns/op",
            "extra": "47005464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47005464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47005464 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3885,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "305120 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3885,
            "unit": "ns/op",
            "extra": "305120 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "305120 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "305120 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 337.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3567864 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 337.4,
            "unit": "ns/op",
            "extra": "3567864 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3567864 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3567864 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 811.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1508547 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 811.1,
            "unit": "ns/op",
            "extra": "1508547 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1508547 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1508547 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove",
            "value": 57.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20503845 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - ns/op",
            "value": 57.03,
            "unit": "ns/op",
            "extra": "20503845 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20503845 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - allocs/op",
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
          "message": "⚡ Bolt: Devirtualize pointer-type geometry.Box in collision loops",
          "timestamp": "2026-08-26T22:17:34Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/23/commits/dd84f14306565712dd031da9bc1f5d116c73d3a9"
        },
        "date": 1787783201059,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 19.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62259363 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 19.4,
            "unit": "ns/op",
            "extra": "62259363 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "62259363 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "62259363 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2795,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "430696 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2795,
            "unit": "ns/op",
            "extra": "430696 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "430696 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "430696 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 359.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3414374 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 359.9,
            "unit": "ns/op",
            "extra": "3414374 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3414374 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3414374 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 645.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1856173 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 645.2,
            "unit": "ns/op",
            "extra": "1856173 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1856173 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1856173 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove",
            "value": 55.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21248055 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - ns/op",
            "value": 55.27,
            "unit": "ns/op",
            "extra": "21248055 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21248055 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - allocs/op",
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
          "message": "⚡ Bolt: Devirtualize pointer-type geometry.Box in collision loops",
          "timestamp": "2026-08-26T22:17:34Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/23/commits/b77ac4837ef64896845b73d23f2c188a96efbf29"
        },
        "date": 1787820588330,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 27.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43420594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 27.23,
            "unit": "ns/op",
            "extra": "43420594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43420594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43420594 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3745,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "318416 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3745,
            "unit": "ns/op",
            "extra": "318416 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "318416 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "318416 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 462.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2584648 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 462.6,
            "unit": "ns/op",
            "extra": "2584648 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2584648 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2584648 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 869.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1381539 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 869.9,
            "unit": "ns/op",
            "extra": "1381539 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1381539 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1381539 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove",
            "value": 76.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15782313 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - ns/op",
            "value": 76.48,
            "unit": "ns/op",
            "extra": "15782313 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15782313 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - allocs/op",
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
          "message": "⚡ Bolt: Devirtualize pointer-type geometry.Box in collision loops",
          "timestamp": "2026-08-26T22:17:34Z",
          "url": "https://github.com/dvprokofiev/arrangio-core/pull/23/commits/7b122d2bf09e4d61338c605c47f59b43939dd4e2"
        },
        "date": 1787820704582,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGridInsert",
            "value": 25.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47089292 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 25.46,
            "unit": "ns/op",
            "extra": "47089292 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47089292 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47089292 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3809,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "314888 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3809,
            "unit": "ns/op",
            "extra": "314888 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "314888 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "314888 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 335.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3575390 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 335.6,
            "unit": "ns/op",
            "extra": "3575390 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3575390 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3575390 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 789.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1519552 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 789.4,
            "unit": "ns/op",
            "extra": "1519552 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1519552 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1519552 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove",
            "value": 56.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20798703 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - ns/op",
            "value": 56.94,
            "unit": "ns/op",
            "extra": "20798703 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20798703 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - allocs/op",
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
            "name": "BenchmarkGridInsert",
            "value": 19.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62100120 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 19.47,
            "unit": "ns/op",
            "extra": "62100120 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "62100120 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "62100120 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 2807,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "429021 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 2807,
            "unit": "ns/op",
            "extra": "429021 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "429021 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "429021 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 352.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3428500 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 352.1,
            "unit": "ns/op",
            "extra": "3428500 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3428500 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3428500 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 646.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1861987 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 646.8,
            "unit": "ns/op",
            "extra": "1861987 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1861987 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1861987 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove",
            "value": 55.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21147153 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - ns/op",
            "value": 55.3,
            "unit": "ns/op",
            "extra": "21147153 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21147153 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - allocs/op",
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
            "name": "BenchmarkGridInsert",
            "value": 34.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35891258 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 34.51,
            "unit": "ns/op",
            "extra": "35891258 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "35891258 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "35891258 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 4746,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "253466 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 4746,
            "unit": "ns/op",
            "extra": "253466 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "253466 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "253466 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 428,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2937224 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 428,
            "unit": "ns/op",
            "extra": "2937224 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2937224 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2937224 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1080,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1080,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove",
            "value": 70.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16870804 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - ns/op",
            "value": 70.37,
            "unit": "ns/op",
            "extra": "16870804 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16870804 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - allocs/op",
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
            "name": "BenchmarkGridInsert",
            "value": 31.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36755683 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 31.97,
            "unit": "ns/op",
            "extra": "36755683 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "36755683 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "36755683 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 4745,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "253096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 4745,
            "unit": "ns/op",
            "extra": "253096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "253096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "253096 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 422.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2946963 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 422.2,
            "unit": "ns/op",
            "extra": "2946963 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2946963 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2946963 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1030,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1030,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove",
            "value": 69.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16879124 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - ns/op",
            "value": 69.92,
            "unit": "ns/op",
            "extra": "16879124 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16879124 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - allocs/op",
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
            "name": "BenchmarkGridInsert",
            "value": 32.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36641235 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 32.65,
            "unit": "ns/op",
            "extra": "36641235 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "36641235 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "36641235 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 5032,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "238695 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 5032,
            "unit": "ns/op",
            "extra": "238695 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "238695 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "238695 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 432.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2775528 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 432.8,
            "unit": "ns/op",
            "extra": "2775528 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2775528 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2775528 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 997,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1203264 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 997,
            "unit": "ns/op",
            "extra": "1203264 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1203264 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1203264 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove",
            "value": 73.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15939982 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - ns/op",
            "value": 73.43,
            "unit": "ns/op",
            "extra": "15939982 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15939982 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - allocs/op",
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
            "name": "BenchmarkGridInsert",
            "value": 31.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37523080 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 31.97,
            "unit": "ns/op",
            "extra": "37523080 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37523080 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37523080 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 4798,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "250089 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 4798,
            "unit": "ns/op",
            "extra": "250089 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "250089 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "250089 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 407.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2941280 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 407.3,
            "unit": "ns/op",
            "extra": "2941280 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2941280 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2941280 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1029,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1029,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove",
            "value": 70.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16858065 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - ns/op",
            "value": 70.03,
            "unit": "ns/op",
            "extra": "16858065 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16858065 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - allocs/op",
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
            "name": "BenchmarkGridInsert",
            "value": 22.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54018162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 22.12,
            "unit": "ns/op",
            "extra": "54018162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54018162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54018162 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 3194,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "379330 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 3194,
            "unit": "ns/op",
            "extra": "379330 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "379330 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "379330 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 372,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3162411 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 372,
            "unit": "ns/op",
            "extra": "3162411 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3162411 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3162411 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 725.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1664781 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 725.8,
            "unit": "ns/op",
            "extra": "1664781 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1664781 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1664781 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove",
            "value": 56.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20764897 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - ns/op",
            "value": 56.29,
            "unit": "ns/op",
            "extra": "20764897 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20764897 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - allocs/op",
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
            "name": "BenchmarkGridInsert",
            "value": 32.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37410357 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - ns/op",
            "value": 32.12,
            "unit": "ns/op",
            "extra": "37410357 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37410357 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37410357 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery",
            "value": 4807,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "251928 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - ns/op",
            "value": 4807,
            "unit": "ns/op",
            "extra": "251928 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "251928 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "251928 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant",
            "value": 408.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2938556 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - ns/op",
            "value": 408.5,
            "unit": "ns/op",
            "extra": "2938556 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2938556 times\n4 procs"
          },
          {
            "name": "BenchmarkGridInsert_Giant - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2938556 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense",
            "value": 1005,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - ns/op",
            "value": 1005,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridQuery_Dense - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove",
            "value": 69.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16804899 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - ns/op",
            "value": 69.96,
            "unit": "ns/op",
            "extra": "16804899 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16804899 times\n4 procs"
          },
          {
            "name": "BenchmarkGridMove - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16804899 times\n4 procs"
          }
        ]
      }
    ]
  }
}