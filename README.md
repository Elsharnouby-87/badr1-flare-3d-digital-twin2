# BADR-1 Flare 3D Engineering Digital Twin 2

**Interactive engineering reconstruction of the BADR-1 Flare System** — a dependency-free WebGL2 viewer built from 17 source document references. This is an independent repository, separate from the original Work Mode project.

## Open the 3D viewer

[Open the viewer (GitHub Pages)](https://elsharnouby-87.github.io/badr1-flare-3d-digital-twin2/) once GitHub Pages deployment is enabled and succeeds.

For an offline version, download `dist/BADR-1-Flare-3D-Offline-Viewer.html` and open it in a WebGL2-capable browser. The repository root `index.html` also contains the complete standalone viewer.

## Features

- Interactive 3D KO-01, P-02, HF-03 (ZEECO ignition rack), F-04 (flare stack), API endpoints, valve and support representations.
- **All 10 piping Isometrics** as concept-level route geometry, color coded by service.
- Orbit/pan/zoom, rack and flare focus views, layer toggles, X-ray/transparent mode, component selection and technical properties.
- Tag search, piping/equipment source links, 17-document source register and engineering issue register.
- 8 explanatory diagnostic scenarios (not live safety automation).
- No external JavaScript libraries; a single-file HTML works without Internet connectivity.

## Project layout

- `index.html` — the production self-contained 3D viewer.
- `dist/BADR-1-Flare-3D-Offline-Viewer.html` — identical offline viewer.
- `src/engine.js`, `src/app.js`, `src/style.css` — readable unbundled source extracted from the tested standalone viewer.
- `engineering/model.json` and supporting engineering registers — structured visualization data.
- `docs/ENGINEERING-BASIS.md` — limitations and drawing conflict handling.
- `.github/workflows/deploy.yml` — workflow for GitHub Pages deployment.

## Local preview

Run `npm run dev` with Node.js 18+ and browse to `http://localhost:5173`. Or open the HTML directly. No package installation is needed.

Run `npm run check` for model integrity and syntax checks.

## Important engineering limitations

**Provisional engineering review model only.** This is *not* an as-built model, fabrication-ready piping model, safety-certified simulator, live control system or operating/relighting instruction. Route coordinates, some nozzle positions, pilot geometries and supports are schematic. BOM material quantities are not treated as actual routed lengths. TP-03/TP-04 ignition connections are disputed across supplied drawings, pilot gas pressure reduction is marked HOLD, and 2008 site context is not a current survey.

The two generic ZEECO manuals are not the BADR-1 job-specific IOM (ZEECO SO 53475); they must not be used as approved BADR-1 operating setpoints.

**Publishing approval:** repository publication was explicitly authorized by the project user. The source PDFs and proprietary manufacturer manuals are not included in this repository.
