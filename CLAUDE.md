# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static documentation site ("Modular Field Manual") for Eurorack modules from any manufacturer. A custom Node.js build script reads markdown content and JSON manifests, then emits a fully static HTML site.

## Commands

- **Build**: `npm run build` — runs `scripts/build.js`, outputs to `/public`
- **Serve**: `npm run serve` — serves `/public` on localhost:4321 via Python HTTP server

No test framework or linter is configured.

## Architecture

Single build script (`scripts/build.js`) that:
1. Reads `content/site.json` for global config (categories, section definitions)
2. Reads each `content/modules/<slug>/module.json` manifest + associated `.md` files
3. Reads standalone pages from `content/pages/*.md`
4. Renders everything to `/public` as static HTML using `marked` for markdown
5. Copies `public-static/` (CSS, JS, assets) into `/public`
6. Generates `search-index.json` for client-side search

### Content Structure

- `content/site.json` — defines categories and the ordered list of section IDs/labels
- `content/modules/<slug>/module.json` — module manifest (name, hp, category, tags, sections list)
- `content/modules/<slug>/<section-id>.md` — one markdown file per section listed in the manifest
- `content/pages/<slug>.md` — standalone pages (about, contributing)

### Adding a New Module

Create `content/modules/<slug>/` with a `module.json` and one `.md` file per section listed in the manifest's `sections` array. Rerun the build.

### Static Assets

`public-static/` contains hand-maintained files (CSS, `app.js`, `assets/`) that get copied verbatim into the build output. The build's `clean()` function preserves `public/assets/` between builds.

### Client-Side Features

`public-static/app.js` provides:
- **Theme toggle** — dark/light, stored in `localStorage`
- **Search** — against `search-index.json`; scores title ×10, tag hits ×6, manufacturer +8, body ×1; top 8 results shown
- **Manufacturer filter** — pill buttons on the index page, one per unique `manufacturer` value across all modules
- **Tag filter** — tag pills on index cards are `<button>` elements; clicking one filters to modules sharing that tag. Tag and manufacturer filters combine with AND logic.

### module.json — tags and filtering

`tags` values must be **hyphenated lowercase with no spaces** (e.g. `"self-oscillating"`, `"ring-modulator"`). Tags are rendered as interactive filter buttons on the index page and are included in search scoring. Tags on module detail pages are plain text only.

The `manufacturer` field drives the manufacturer filter pills. Both `manufacturer` and `tags` are included in `search-index.json` so they are searchable directly.
