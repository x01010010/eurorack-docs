# Modes & Operation

WAVES is configured along three axes: **MODE** (what kind of signal it produces), **FREQUENCY RANGE** (how fast), and **RELATIONSHIP** (how the four outputs relate to each other). Together they cover an unusually wide functional surface.

## Mode (Button 2)

| LED | Mode | Output | Triggering |
| --- | --- | --- | --- |
| 🟢 Green | **AD envelope** | 0 V to +8 V unipolar | Trigger pulse fires the full attack/decay cycle. |
| 🟠 Orange | **Cyclic LFO / VCO** | ±5 V bipolar | Trigger pulse resets phase. Free-running otherwise. |
| 🔴 Red | **ASR envelope** | 0 V to +8 V unipolar | Gate-driven: attack on rising edge, hold while gate high, release on falling edge. |

The AD and ASR modes are one-shot — they will not retrigger themselves and they need a trigger or gate at TRIG. The cyclic mode is the only mode where WAVES self-oscillates.

## Frequency Range (Button 1)

The FREQUENCY knob has a ±4-octave range, centered on whichever LED is lit:

| LED | Center | Useful For |
| --- | --- | --- |
| 🟢 Green | ⅛ Hz | Slow modulation, drift, evolving textures (~8 s per cycle) |
| 🟠 Orange | 2 Hz | Standard LFO, slow envelopes, panning, rhythm |
| 🔴 Red | 131 Hz | Audio-rate oscillator, fast envelopes |

Switching to the audio range also adjusts the SHAPE response curve so it sweeps through perceptually distinct timbres rather than nearly identical low-frequency curves.

## Relationship (Button 3)

The RELATIONSHIP button reassigns the four outputs and the SHIFT/LEVEL knob:

### 🟢 Green — Crossfade

SHIFT/LEVEL morphs the active output across the four available signals. Useful as a four-way modulation selector or a single-knob waveshape morph.

### 🟠 Orange — Phase Offset

All four outputs share the same frequency but their peaks are spaced apart. SHIFT/LEVEL controls how far apart. Patch the four outputs to four VCAs or filters and you have an instant polyrhythmic / sequenced groove.

### 🔴 Red — Frequency Ratio

Outputs 2–4 detune from output 1. At 12 o'clock all four lock together; CW raises the ratio of 2–4; CCW lowers them. Excellent at audio rate as a quick chord or sub-harmonic generator.

## Clock / PLL Mode

Patch a clock signal into the **CLOCK** input. The FREQUENCY knob now controls a clock division/multiplication ratio instead of absolute pitch. WAVES will lock its frequency to the incoming clock — including derived sub-harmonics from a VCO if you patch one in.

## SHAPE / SLOPE / SMOOTHNESS Together

These three controls form a kind of three-dimensional waveform sculpting space:

- **SLOPE** — symmetry of the rising vs falling segment (saw → triangle → ramp).
- **SHAPE** — curvature of those segments (linear → exponential → sinusoidal).
- **SMOOTHNESS** — final shaping. CCW = low-pass smoothing, CW = wavefolder. Center is unmodified.

At audio rates these three controls double as timbre controls: SHAPE picks waveform character, SLOPE pulse-width-modulates, and SMOOTHNESS adds harmonic content via the wavefolder.

## Default User Patch

A useful starting point:

```
MODE        : Cyclic (orange)
RANGE       : Mid (orange)
RELATIONSHIP: Phase offset (orange)
FREQUENCY   : 12 o'clock
SLOPE       : 12 o'clock (triangle)
SHAPE       : 12 o'clock
SMOOTHNESS  : 12 o'clock
SHIFT/LEVEL : ~10 o'clock (small phase spread)
```

Patch all four outputs into separate VCAs / filters / panners — instant moving texture.
