# Modes

RS-9 inherits the operating modes of the RD-9 sequencer engine. The same step grid is reinterpreted depending on which mode is active.

## Pattern mode

The default. Each of the 16 step buttons toggles a step on the currently selected track. Edits are non-destructive and can be played back live.

- Press a step to toggle it on/off
- Hold a step + turn the value encoder to set probability or velocity
- Use **SHIFT + step** to mark accent

## Song mode

Chains patterns together into a longer sequence. Up to 16 songs can be saved, each referencing patterns from the 256-pattern bank. Useful for performing through a full track without manually changing patterns.

## Step edit mode

Per-step micro-controls — ratchet count, flam timing, step repeat, and probability. Hold a step button and adjust to apply.

| Edit | What it does |
| --- | --- |
| Probability | Step fires N% of the time (1–100%) |
| Ratchet | Subdivides the step into 2, 3, or 4 retriggers |
| Flam | Adds a short delay to one of two stacked hits |
| Step repeat | Repeats the step N times within its window |

## Real-time recording

Press **REC** during playback and play steps live from the step buttons or via incoming MIDI/CV. Quantization can be set per track.

## Polyrhythm

Each track has independent length (1–64 steps). Set track 1 to 16 steps and track 2 to 12, and they will phase against each other indefinitely. This is the engine's most powerful mode for generating evolving patterns from a static input.

## Random

Press **SHIFT + RAND** (or the equivalent menu) to generate a new random pattern on the current track. Useful as a starting point that you then sculpt by hand.
