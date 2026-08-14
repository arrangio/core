window.BENCHMARK_DATA = {
  "lastUpdate": 1786733531043,
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
      }
    ]
  }
}