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

`public-static/app.js` provides theme toggling (dark/light) and client-side search against the generated `search-index.json`.
