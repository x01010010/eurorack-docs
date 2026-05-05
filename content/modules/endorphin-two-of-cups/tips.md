# Tips

## Organize Banks by Context

Group related sounds in each bank rather than mixing unrelated ones. For example: Bank 1 = kicks, Bank 2 = snares, Bank 3 = hi-hats, Bank 4 = melodic hits. This makes CV-driven bank and sample selection musically predictable.

## META as a Per-Step Sample Selector

Patch a stepped sequencer output to META. Each step selects a different sample from the bank. Quantize the CV range to cleanly span your sample count — if you have 8 samples in the bank, map 0–8 V in discrete steps of 1 V.

## Use Decay to Shape Rhythm

With Loop off, a short Decay (10–50 ms) tightens drum hits; a longer Decay (200 ms–1 s) adds natural release tails. Automate Decay via the PARAM page between patterns or phrases.

## Reverse + Loop for Swells

Enable both Reverse and Loop on a percussive sample to create a continuous reverse-swell pad. Pair with a long decay to produce gradually evolving textures.

## Detune Voices for Thickness

Load the same sample on both voices. Set a slight Pitch Offset difference (e.g. +3–5 semitones on Voice 2) and trigger both voices together. Mixing them creates a thicker, chorus-like sound without external effects.

## Pitch Offset Calibration

Use the Pitch Offset PARAM page to tune the sample to a known root pitch before applying V/oct. Patch a known voltage (e.g. 0 V for C) to the PITCH input, play back the sample, and adjust Pitch Offset until it sits in tune with your other oscillators.

## Firmware Update (mk1)

The final firmware V3 (December 2025) is available from the Endorphin.es website. Load it to microSD and follow the update procedure in the manual to access the latest improvements. After V3 there will be no further updates for the mk1.
