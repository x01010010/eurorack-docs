# Modes

## Factory Programs (slots 1–8)

The eight factory programs cover the core FV-1 effect types. Parameter meanings (P1–P3) vary per program — consult the Erica Synths documentation or panel overlay for the exact mapping of each slot.

| Slot | Effect type | Typical parameters |
| --- | --- | --- |
| 1 | Small room reverb | Size, damping, mix |
| 2 | Large hall reverb | Decay, tone, mix |
| 3 | Plate reverb | Decay, pre-delay, mix |
| 4 | Spring reverb | Tension, decay, mix |
| 5 | Echo / delay | Time, feedback, mix |
| 6 | Chorus | Rate, depth, mix |
| 7 | Flanger | Rate, depth, feedback |
| 8 | Pitch shifter | Shift amount, mix, — |

*Note: exact program names and parameter assignments may vary between firmware versions. Verify against the panel silkscreen or the shipped documentation.*

## User Programs (slots 9–16)

Eight additional slots accept custom FV-1 assembly programs. Programs are uploaded via the PROG jack using a compatible programmer (e.g. the Erica Synths FV-1 programmer or a suitable DIY tool). Once uploaded, user programs behave identically to factory programs — PROGRAM knob selects them, P1–P3 control their parameters.

## Stereo and Mono Operation

- **Stereo**: patch separate signals to IN L and IN R.
- **Mono in**: patch a single signal to IN L; IN R normalls to IN L so both DSP channels receive the same input. The output remains stereo (the effect creates width from a mono source).
- **Mono out**: take only OUT L if a mono output is needed.

## DRY/WET

At fully CCW the output is dry (unprocessed). At fully CW the output is 100% wet. Mid-position blends both. For a parallel send/return setup, set DRY/WET to fully wet and control the blend at the mixer.
