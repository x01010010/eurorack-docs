# Adding a New Module

The site is content-driven — every page is generated from Markdown and a small JSON manifest. Adding a new module manual takes about ten minutes.

## 1. Create the module folder

Inside `content/modules/`, create a new folder named after the module's slug (lowercase, hyphenated):

```
content/modules/brains/
```

## 2. Write the manifest

Add a `module.json` in the new folder describing the module:

```json
{
  "slug": "brains",
  "name": "BRAINS",
  "subtitle": "Multi-Engine Macro Oscillator",
  "category": "sound-source",
  "hp": 12,
  "manufacturer": "Behringer",
  "released": "2021",
  "inspiration": "Mutable Instruments Plaits",
  "tags": ["digital", "oscillator", "macro", "wavetable"],
  "summary": "Short blurb shown in the index card and at the top of the module page.",
  "color_accent": "#c4a86d",
  "panel_color": "#1f1d18",
  "sections": ["overview", "panel", "modes", "patching", "specs", "tips"]
}
```

### Manifest fields

| Field | Required | Notes |
| --- | --- | --- |
| `slug` | yes | URL slug. Must match folder name. |
| `name` | yes | Display name (typically uppercase). |
| `subtitle` | yes | One-line descriptor. |
| `category` | yes | One of the categories defined in `content/site.json`. |
| `hp` | yes | Eurorack width. |
| `manufacturer`, `released`, `inspiration` | optional | Shown in the metadata strip. |
| `tags` | optional | Used as filterable chips. |
| `summary` | yes | 1–3 sentence module description. |
| `color_accent` | optional | Per-module accent color (hex). Defaults to site primary. |
| `panel_color` | optional | Used as the module's hero background. |
| `sections` | yes | Ordered list of section IDs — must match Markdown filenames. |

## 3. Add Markdown files

For each entry in `sections`, add a matching `.md` file:

```
content/modules/brains/
  module.json
  overview.md
  panel.md
  modes.md
  patching.md
  specs.md
  tips.md
```

The first `# Heading` in each file becomes the page title. Use standard GitHub-flavored Markdown — tables, code blocks, headings, lists, and inline links all render with the site's typography.

## 4. (Optional) Add a new section type

If a module needs a section that doesn't exist yet (e.g. `firmware-updates`), add it to `content/site.json` under `sections` so the navigation knows about it. Then reference its ID in any module's `sections` array.

## 5. (Optional) Add a new category

Edit `content/site.json` and add to `categories`. The index page automatically groups modules by category.

## 6. Rebuild

```bash
node scripts/build.js
```

The script regenerates `public/` with one HTML page per module section, an updated index, search data, and a sitemap. Deploy `public/` and you're done.

## Style Conventions

A few small conventions keep the site feeling consistent across manuals:

- **Module names in body copy** are written `**SKIES**` (bold, uppercase).
- **Knob and button names** are written in CAPS without bold (POSITION, FREEZE).
- **Voltages** use `±` and a space before units: `±5 V`, `0 V to +8 V`, never `0V-8V`.
- **HP and impedance** use spaced units: `18 HP`, `50 kΩ`.
- Patch examples use fenced code blocks with ASCII flow arrows (`→`).
- Tables for control summaries — narrative for everything else.

The four standard sections (Overview, Panel & I/O, Modes, Patch Recipes, Specifications, Tips & Tricks) cover most modules. Skip ones that don't apply by leaving them out of `sections`.
