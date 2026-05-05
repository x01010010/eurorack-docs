# Panel & I/O

## Noise Generator

| Control/Jack | Description |
|---|---|
| TYPE | Selects noise color: white, white→pink, white→blue, scatter, digital, pitched |
| PITCH | Pitch knob (active in Pitched mode) — sets the center frequency of the pitched noise |
| PITCH CV | CV input for pitch modulation (Pitched mode) |
| LED | Indicates noise output level |

Noise types run from broadband (white) through filtered colors (pink, blue), randomized bursts (scatter), and digital artifacts (digital). Pitched mode focuses the noise around a tuneable frequency.

## Bit Crusher

| Control/Jack | Description |
|---|---|
| CRUSH | Sets the sample rate from 8 kHz (clean) down to 1 Hz (extreme decimation) |
| CRUSH CV | CV input for modulating crush depth |
| LED | Indicates crusher output level |

Lower settings introduce heavy aliasing artifacts, stutter, and pitch-shifting side effects. At extreme low values the output becomes rhythmic pulses.

## Random Gate Generator

The DIGITAL noise type generates a random gate signal in addition to audio noise. The gate output fires at a rate determined by the noise density:

| Jack | Description |
|---|---|
| GATE OUT | Random gate output (active when TYPE = digital) |

Use this to trigger envelopes, step sequencers, or sample-and-hold circuits without an external clock.

## Dual Filter

| Control/Jack | Description |
|---|---|
| LP FREQ | Low-pass filter cutoff frequency |
| LP CV | CV input for LP cutoff modulation |
| HP FREQ | High-pass filter cutoff frequency |
| HP CV | CV input for HP cutoff modulation |
| LP LED | Indicates LP section CV sum |
| HP LED | Indicates HP section CV sum |

The LP and HP filters run in parallel and both feed the output. Sweep them together or apart to shape the frequency content of the noise or external signal.

## External Input

| Jack | Description |
|---|---|
| EXT IN | When patched, replaces the internal noise generator as the signal source |

Any signal patched here — audio, drone, CV — bypasses the internal noise and enters the crusher and filter chain directly.

## Output

| Jack | Description |
|---|---|
| OUT | Main audio output |
