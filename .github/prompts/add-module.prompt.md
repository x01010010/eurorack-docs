---
mode: agent
description: Add a new Eurorack module to the Modular Field Manual. Use when you want to scaffold a new module with its manifest and section files.
---

Add a new module to the Modular Field Manual site.

Module details: ${input:moduleDetails:Describe the module (name, manufacturer, HP, category, what it does)}

## Steps

1. Determine a slug: lowercase, hyphenated, no special characters (e.g., `mutable-plaits`)
2. Create `content/modules/<slug>/module.json` with all known fields. Use `"sections": ["overview", "panel", "modes", "patching", "specs", "tips"]` unless some sections clearly don't apply. Category must match one of: `sound-source`, `modulation`, `processor`, `utility` (or check `content/site.json` for the current list).
3. Create each section `.md` file listed in `sections`. Every file must begin with a `# Heading` (this becomes the page title). Write substantive placeholder content based on the module details provided — do not leave files empty.
4. Run `npm run build` to verify the build succeeds.

Refer to `AGENTS.md` for manifest field reference and markdown conventions.
