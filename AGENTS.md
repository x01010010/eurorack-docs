# Modular Field Manual — Agent Instructions

Static documentation site for Eurorack modules. A Node.js build script reads markdown + JSON manifests and emits a fully static HTML site.

## Commands

```
npm run build   # outputs to /public
npm run serve   # serves /public on localhost:4321
```

No tests or linter configured. Always run `npm run build` after content changes to verify.

## Key Files

| Path | Purpose |
|------|---------|
| `scripts/build.js` | Entire build pipeline |
| `content/site.json` | Global config: categories and section type definitions |
| `content/modules/<slug>/module.json` | Per-module manifest |
| `content/modules/<slug>/<section-id>.md` | One file per section |
| `content/pages/*.md` | Standalone pages (about, contributing) |
| `public-static/` | Hand-maintained CSS/JS/assets, copied verbatim into build |
| `public/assets/` | Preserved across builds — do not delete |

## Adding a New Module

1. Create `content/modules/<slug>/` — slug must be lowercase, hyphenated
2. Write `module.json` (see [Required Fields](#module-manifest-fields))
3. Add one `.md` file for each section ID listed in `manifest.sections`
4. Run `npm run build`

### Module Manifest Fields

```jsonc
{
  "slug": "my-module",          // must match folder name exactly
  "name": "MY MODULE",          // uppercase display name
  "subtitle": "One-line descriptor",
  "category": "sound-source",   // must match an id in site.json categories
  "hp": 12,                     // integer
  "manufacturer": "Acme",
  "released": "2024",
  "tags": ["oscillator"],
  "summary": "1–3 sentences.",
  "color_accent": "#6db5c8",    // optional hex
  "panel_color": "#1a1a1a",     // optional hex
  "sections": ["overview", "panel", "modes", "patching", "specs", "tips"]
}
```

### Standard Sections

`overview` · `panel` · `modes` · `patching` · `specs` · `tips`

Modules may omit any section by excluding it from the `sections` array.

## Markdown Conventions

See [content/pages/contributing.md](content/pages/contributing.md) for full style guide. Key rules:

- **First `# Heading`** is extracted as the page title and stripped from the rendered body — every section `.md` must start with one
- **Module names** in body: `**SKIES**` (bold, uppercase)
- **Control names**: `POSITION`, `FREEZE` (caps, no bold)
- **Voltages/units**: `±5 V`, `18 HP`, `50 kΩ` (space before unit, ± symbol)
- **Patch examples**: fenced code blocks with ASCII arrows (`→`)
- **Subsections**: `##` headings (not `#`)

## Architecture Notes

- Build reads slug from `module.json`'s `slug` field (falls back to folder name)
- `public/assets/` is preserved across builds — safe for hand-curated images
- Search index (`search-index.json`) is rebuilt on every build; text excerpts cap at 1500 chars
- Theme: dark/light toggled via `data-theme` on `<html>`, stored in `localStorage`

## Filtering & Search

### Manufacturer filter

The index page has a row of filter pills — one per unique `manufacturer` value across all modules, auto-generated at build time. No manual configuration needed; adding a module with a new `manufacturer` value automatically creates a new pill.

### Tag filter

Tag pills on index cards are `<button>` elements (`class="tag-filter-btn"`). Clicking one filters the catalog to modules that share that tag. Clicking the same tag again clears the filter. Tag and manufacturer filters work together with AND logic — selecting a tag resets the manufacturer pill to "All", and vice versa.

Tag pills on module detail pages (overview section) are plain `<li>` text — not interactive.

### Tag format rules

Tags in `module.json` **must be hyphenated lowercase with no spaces**:

```json
"tags": ["filter", "vcf", "self-oscillating", "ring-modulator"]
```

Spaces in tag values break the space-delimited `data-tags` attribute used by the filter, causing those tags to silently fail to match. Always use hyphens.

### Search scoring

| Field | Weight |
|-------|--------|
| Title match | ×10 per hit |
| Tag match | ×6 per hit |
| Manufacturer match | +8 (once per term) |
| Body text match | ×1 per hit |

Searching "Behringer", "Erica Synths", "reverb", "self-oscillating", etc. surfaces modules even when the term only appears in `manufacturer` or `tags`, not in section text.
