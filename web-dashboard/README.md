# Project Cube Dashboard

This directory contains the static React dashboard for the Project Cube speedcubing training vault.

## Features

- current-session guidance and phase analysis;
- seven-session cycle and six-month roadmap views;
- a searchable CFOP library with 41 F2L, 57 OLL, and 21 PLL cases;
- setup algorithms, solving algorithms, and interactive 3D playback powered by `cubing.js`;
- responsive layouts for desktop and mobile;
- static deployment through GitHub Pages.

## Development

Requires Node.js `>=22.13.0`.

```bash
pnpm install
pnpm run dev
pnpm run build
```

The production build is written to `dist-pages/` with the `/project-cube/` base path.

## Algorithm Data

CFOP case data is stored in `src/data/cfop-algorithms.json` and sourced from [SpeedCubeDB](https://www.speedcubedb.com/a/3x3). To regenerate it, download the F2L, OLL, and PLL source pages and run:

```bash
python ../scripts/import_cfop_algorithms.py --input-dir <download-directory>
```
