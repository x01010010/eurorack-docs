# Modular Field Manual

A static documentation site for Eurorack synthesizer modules. A Node.js build script reads Markdown content and JSON manifests, then emits a fully static HTML site.

## Commands

```bash
npm run build        # Build site → /public
npm run serve        # Serve /public on http://localhost:4321
npm run fetch-images # Download panel photos from ModularGrid
```

## Hosting

The site is deployed with GitHub Pages using a GitHub Actions workflow:

- Workflow: [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)
- Trigger: every push to `main` (and manual `workflow_dispatch`)
- Build output: `public/`

Published URL:

- `https://x01010010.github.io/eurorack-docs/`

## Adding a Module

1. Create `content/modules/<slug>/` (lowercase, hyphenated slug)
2. Add `module.json` — see [AGENTS.md](AGENTS.md) for all required fields
3. Add one `.md` file per section listed in `module.json`'s `sections` array
4. Run `npm run build`

Optionally set `modulargrid_id` in `module.json` and run `npm run fetch-images` to download a panel photo.

## Project Structure

```
content/
  site.json              # Global config: categories, section definitions
  modules/<slug>/
    module.json          # Module manifest
    overview.md          # One file per section
    panel.md
    modes.md
    patching.md
    specs.md
    tips.md
  pages/
    about.md
    contributing.md
public/                  # Build output (do not hand-edit)
  assets/modules/        # Panel photos — preserved across builds
public-static/           # Hand-maintained CSS, JS, and assets
scripts/
  build.js               # Entire build pipeline
  fetch-images.js        # Downloads ModularGrid panel photos
```

## Content Guidelines

See [content/pages/contributing.md](content/pages/contributing.md) for the full style guide. Key conventions:

- Module names in body text: **BOLD CAPS** — `**SKIES**`
- Control names: CAPS, no bold — `CUTOFF`, `FREEZE`
- Voltages/units: space before unit — `±5 V`, `18 HP`
- Tags: hyphenated lowercase — `"self-oscillating"`, `"ring-modulator"`

## Tech Stack

- Node.js build script (no framework)
- [`marked`](https://marked.js.org/) for Markdown rendering
- Vanilla JS for client-side search, filtering, and theme toggle
- Fully static output — no server required
