# Modes

**UTOPIA** has no discrete modes — the five functional sections operate independently and simultaneously. Their behavior changes based on how they are interconnected.

## Attenuverter Section

Each attenuverter independently scales any signal from full inversion (−1×) through mute (center) to full unity (+1×). Use all four to manage multiple CVs simultaneously, or chain them through the mixer for combined scaling.

## Offset Generator

The offset generator outputs a static DC voltage between −10 V and +10 V set by its knob. Used alone it provides bias or reference voltages. Summed with an attenuverter output it shifts the center point of a modulation signal.

## Mixer Mode vs. Splitter Mode

The 4-to-3 section changes function based on how many inputs are patched:

- **Mixer mode**: Multiple inputs patched → signals are summed across the three outputs.
- **Splitter mode**: Single input patched → that signal appears buffered on all three outputs. The buffering isolates the source from loading by three destinations.

## LFO Rate Range

The LFO spans sub-audio (30 s period) to audio rate (440 Hz). At slow settings it provides standard modulation shapes. At audio rate it generates pitched tones. CV over the rate input allows continuous sweeping across the full range.

## Pulserizer Effect

The Pulserizer acts as a comparator: when the input crosses the threshold, the output snaps between minimum and maximum. At moderate thresholds on an audio signal, it produces distorted, aggressive timbres. At very low thresholds it passes nearly everything as a pulse. At high thresholds only peaks of the signal trigger output.

## Self-Patching: LFO → Pulserizer

Routing the LFO output into the Pulserizer input converts the LFO into a square wave (clock or gate). Adjust the Pulserizer threshold to control pulse width relative to the LFO waveform.
