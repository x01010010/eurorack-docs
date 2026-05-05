# Modes

Hysteria doesn't have discrete menu-driven modes like a digital module. Its two operating states are toggled by the QUANTIZE button.

## Quantized Mode (LED on)

All pitch inputs are quantized to the chromatic scale before reaching the VCO core.

- **OCT slider** — steps through octaves.
- **SEMI slider** — steps through semitones within the selected octave.
- **CV inputs** (1V/OCT, CV, OCT, SEMI) — incoming voltages are rounded to the nearest semitone.
- Best for melodic sequences, arpeggios, and any patch where you want guaranteed in-tune notes from unquantized sources.

## Unquantized Mode (LED off)

The quantizer is bypassed and pitch responds continuously to all inputs.

- **OCT slider** — continuous coarse frequency sweep.
- **SEMI slider** — continuous fine frequency adjustment.
- **CV inputs** — pass through directly with no rounding.
- Best for drones, detuned unison, portamento effects, FM experiments, and sub-audio LFO use.

## Waveshaper Behavior

The WAVEFORM slider (and its CV input) smoothly morphs through the available waveforms in this approximate order:

1. Triangle
2. Saw-triangle hybrid
3. Sawtooth
4. Saw-square hybrid
5. Square
6. Pulse (narrow)
7. Modified/folded wave

The transition is continuous — you're not switching between discrete shapes but smoothly warping the analog waveshape.
