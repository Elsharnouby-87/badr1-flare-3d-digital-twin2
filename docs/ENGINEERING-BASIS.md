# Engineering Basis — BADR-1 Flare 3D Review

This digital twin is a provisional 3D engineering visualization for asset familiarization and technical review only, never for piping fabrication, safety approval, isolation, commissioning or flare relighting.

## Document sources
17 references in `engineering/source-register.json`: 10 piping ISO drawings, flare system P&ID Rev.02, rack GA WD-2946, two civil drawings, older 2008 site plan, generic HEI manual and an unrelated Zeeco flare IOM manual.

## Known dimensional data
KO-01 vessel OD approximately 914 mm and length 2134 mm; flare stack 12 in nominal and 12.798 m high; ZEECO rack longitudinal dimension approximately 2743 mm. Actual dimensions and latest revisions must be verified against approved supplier files.

All model positions are local Z-up coordinates in meters. Lines and supports not defined by complete dimensional chains are illustrated approximately. A material BOM length is **not** a measured centerline route.

## Engineering issue register
- ENG-001: TP-03/TP-04 service conflict among P&ID, isometrics and rack GA.
- ENG-002: pilot gas pressure reducing arrangement indicated HOLD.
- ENG-003: API Pit versus API Separator labels require field confirmation.
- Other registered issues identify missing approved job-specific vendor information, unverified site positions and incomplete geometrical dimensions.

## Generic Zeeco documents
ZHM-001 describes general HEI technology. Zeeco SO 23052 is a **different project**. Neither establishes approved operating setpoints for BADR-1 SO 53475.

## Safety limitations
No active instrumentation, no control commands, no equipment safety functions, no live conditions, and no shutdown / startup operating recommendations are implemented.
