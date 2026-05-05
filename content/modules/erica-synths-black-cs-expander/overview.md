# Overview

**BLACK CS EXPANDER** is a 6 HP companion module for the Black Code Source, connecting via a rear ribbon cable. On its own it does nothing — it draws no power from the Eurorack bus and will be permanently damaged if connected to a PSU header. Its role is to extend the Code Source with features that make it practical as a percussion synthesizer and chiptune instrument.

The key addition is **autobend**: an attack envelope applied to the Code Source's internal clock rate. Each trigger causes the rate to leap to a high value (producing dense noise) then bend downward according to the autobend time and depth settings. This single feature transforms the Code Source from a steady-state noise source into a self-contained percussive instrument — the classic "attack transient + decaying pitched noise" shape of 8-bit drum sounds.

The expander also adds an alternative mode switch for more noise/CV variations, a clock output (exposing the Code Source's internal clock for use elsewhere), and an envelope output carrying the autobend shape.

## At a Glance

- **6 HP**, 33 mm deep
- **Requires** Black Code Source + ribbon cable (not standalone)
- **Autobend**: attack envelope on Code Source's internal clock pitch
- **AUTOBEND TIME** knob: controls the attack/bend duration
- **AUTOBEND DEPTH** attenuverter: controls how far the pitch bends
- **ALT MODE switch**: adds more noise/CV generation modes
- **Manual trigger button** + **external trigger input** for autobend
- **AUTOBEND ENV OUT**: the envelope shape as a patchable CV
- **CLOCK OUT**: Code Source's internal clock as a Eurorack signal
- **Power**: 16 mA (+12 V) / 11 mA (−12 V) — via ribbon from Code Source
