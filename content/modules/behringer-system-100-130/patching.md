# Patch Recipes

## Standard Synth Voice VCA

Patch your oscillator into SIG IN 1. Patch an envelope output into MOD IN 1. Set INITIAL GAIN to zero, LIN/EXP to EXP. The envelope now opens and closes the VCA — the fundamental building block of any synthesizer voice.

## Three-Source Mixer into VCA

Use all three SIG IN jacks to blend three oscillators (or any audio sources) before they hit the VCA. The SIG IN knobs become a pre-VCA mixer. One envelope on MOD IN then controls the combined volume of all three.

## Stereo Tremolo

Patch the same audio source into SIG IN 1 on both channels. Patch an LFO into MOD IN 1 on both channels but invert one (via attenuverter or mult into an inverter). Set both to LIN mode. The two outputs pan left and right with opposing amplitude — classic auto-panning tremolo.

## CV-Controlled Send Level

Set INITIAL GAIN at a fixed level with no modulation. Use SIG IN knobs to set the static mix. The VCA then acts as a manually-controlled gain stage for signal routing between modules — essentially a CV-addressable attenuator.

## Ducking / Sidechain

Patch a main signal into SIG IN 1 of channel 1. Patch a trigger or envelope from a kick drum into MOD IN 1 through an inverter. Each kick pulse dips the gain of the main signal, producing a pumping sidechain effect.

## Audio-Rate AM (Ring-Like)

In LIN mode, patch an audio-frequency oscillator into MOD IN 1 (turn the MOD IN knob up gradually). Patch a second oscillator into SIG IN 1. The carrier modulates the VCA at audio rate, producing sidebands — similar to ring modulation but one-sided (no negative excursion).

## Line-Level Interface

Use the HIGH OUT to connect Eurorack-level signals into line-level gear (mixer, audio interface). Use the LOW OUT for instrument-level destinations (guitar amp). Adjust INITIAL GAIN to set the appropriate output level.
