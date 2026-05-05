# Modes

## Standard Monophonic Voice

The default mode: keyboard/CV plays all three oscillators in unison, filter and VCA envelopes shape the sound. Classic subtractive synthesis — the original Minimoog workflow.

## OSC 3 as Free LFO

Engage the **FREQ** switch on OSC 3 to decouple it from keyboard tracking. OSC 3 then runs at its own pitch, set by its TUNE and RANGE controls. Route OSC 3 output via the MOD section to modulate VCO 1+2 pitch or VCF cutoff for vibrato and filter sweeps without needing an external LFO.

## OSC 3 as Sub-Oscillator

Keep OSC 3 tracking pitch but set its RANGE two octaves lower (8′ vs 16′). Blend it into the Mixer at low level for sub-bass reinforcement.

## Noise Lead

Open the NOISE source in the Mixer alongside the OSCs. At higher levels with tight filter settings this creates a breath or noise-layer sound. Full noise with OSCs off produces pure white noise through the filter — useful for percussion.

## LP / HP Filter Switching

The VCF MODE switch toggles between low-pass and high-pass. HP mode opens up thin, cutting tones and can act as a high-pass filter for external audio processing.

## 16-Voice Poly Chain

Connect multiple Model D units via MIDI: the first unit distributes incoming MIDI notes across all linked units in round-robin order, effectively creating a polyphonic synth from multiple monophonic voices. Each unit must be set to the same MIDI channel with poly chain enabled.
