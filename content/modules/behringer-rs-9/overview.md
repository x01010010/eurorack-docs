# Overview

**RS-9** is the sequencer brain from the Behringer **RD-9** drum machine, repackaged as a 52 HP Eurorack module. It is a controller — there is no internal sound generation. Its job is to fire ten tracks of triggers, accents, and pitch CV at the rest of your rack, with the kind of step-programming workflow that synth musicians have been using since the original Roland x0x boxes.

## What it actually does

- **10 independent tracks**, each with a dedicated trigger output and accent output
- **Up to 64 steps per track** with per-track length — the basis for polyrhythmic patterns
- **256 user patterns** plus **16 songs** chained from those patterns
- **Pitch CV output** plus a separate gate output, so one track can play a melodic voice while the others drive percussion
- **MIDI in/out** on 5-pin DIN and **USB-C** for USB-MIDI to a computer or USB host
- **Clock and reset I/O** for syncing the rack to or from external gear

## Why pick it

RS-9 is the densest trigger sequencer Behringer makes for Eurorack, and it brings the RD-9's deep features — probability per step, swing, ratchets, flam, note repeat, step repeat — to a modular workflow. If you have a rack full of percussion voices (drum modules, ping filters, kick synths) it gives every voice its own dedicated trigger and accent line without an external MIDI-to-trigger interface.

## Things to know up front

- It is **wide** (52 HP) — plan your case accordingly.
- The **+12 V draw is 350 mA**, which is significant. Verify your bus board can handle it before buying.
- All trigger outputs are **3.5 mm TS, DC coupled**, so they will fire any standard Eurorack envelope, drum, or VCA.
- Patterns and songs are stored in onboard memory; firmware updates arrive over USB-C via Behringer SynthTribe.
