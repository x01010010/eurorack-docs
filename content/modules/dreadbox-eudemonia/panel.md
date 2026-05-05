# Panel & I/O

## Mixer Section (3-to-1)

| Control/Jack | Description |
|---|---|
| IN 1–3 | Three signal inputs |
| LEVEL 1–3 | Individual level knobs per input |
| MIX OUT | Summed output (feeds the filter section internally) |
| LED | CV sum indicator for the mixer section |

The mixer output feeds directly into the LP filter input. Patch external audio into the filter section by bypassing the mixer and using the filter's own input jack.

## Low-Pass Filter (24 dB/oct)

| Control/Jack | Description |
|---|---|
| CUTOFF | LP cutoff frequency |
| RESONANCE | Resonance level — self-oscillates at maximum |
| CUTOFF CV | CV input for cutoff modulation |
| LED | CV sum indicator |

The 24 dB Moog-style LP is placed first in the series chain. Self-oscillation produces a sine wave at the cutoff frequency, usable as an audio source.

## High-Pass Filter (18 dB/oct)

| Control/Jack | Description |
|---|---|
| CUTOFF | HP cutoff frequency |
| CUTOFF CV | CV input for cutoff modulation |
| LED | CV sum indicator |

The non-resonant 18 dB HP follows the LP in the signal chain. Sweeping its cutoff removes low-frequency content from the LP output.

## VCA

| Control/Jack | Description |
|---|---|
| GAIN | Initial gain / offset |
| CV IN | Exponential CV input for amplitude control |
| LED | CV sum indicator |
| PEAK LED | Lights when output exceeds 10 VPTP |
| OUT | Final audio output |

The exponential response makes the VCA behave naturally with linear CV sources — fast attack shapes feel punchy, slow swells feel smooth.
