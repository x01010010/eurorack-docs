# Modes

## Single Mode

One waveform (selected by the WAVE knob) is output on all eight jacks simultaneously. Each successive output is phase-shifted 45° further than the previous:

| Output | Phase offset |
| --- | --- |
| 1 | 0° |
| 2 | 45° |
| 3 | 90° |
| 4 | 135° |
| 5 | 180° |
| 6 | 225° |
| 7 | 270° |
| 8 | 315° |

This is the classic quadrature LFO concept extended to eight phases. Outputs 1 and 5 are always 180° apart (inverted); outputs 1 and 3 are 90° apart (quadrature). Use the PHASE CV input to dynamically shift the window between phases.

## Multi Mode

All eight waveforms are output simultaneously, one per jack. The WAVE knob rotates the waveform-to-output assignment — turning it shifts which waveform appears on which output. This creates evolving, ever-changing modulation patterns as the rotation causes each destination to receive a different curve.

**Waveform order (approximate, rotating with WAVE knob):**

| # | Waveform |
| --- | --- |
| 1 | Sine |
| 2 | Ramp (rising sawtooth) |
| 3 | Inverted absolute value of sine (inverted U shape) |
| 4 | Triangle |
| 5 | Pulse / square |
| 6 | Absolute value of sine (bumps) |
| 7 | Sawtooth (falling) |
| 8 | Sample-and-hold (stepped random) |

Morphing occurs between adjacent waveforms as the WAVE knob moves between positions.

## Freeze

Setting RATE to exactly 12 o'clock freezes the LFO — all outputs hold their current voltage and stop changing. This works in both Single and Multi modes and is unaffected by the SYNC input.

## Clock Sync

When a clock signal is patched to SYNC, the LFO period locks to the incoming clock. The RATE knob position is ignored except at 12 o'clock (freeze). The LFO resets its phase on each incoming clock pulse.
