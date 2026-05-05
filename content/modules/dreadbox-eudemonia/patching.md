# Patching

## Standard Subtractive Voice

Classic oscillator → filter → VCA signal path through a single module.

```
VCO OUT → EUDEMONIA Mixer IN 1
ENV 1 OUT → LP CUTOFF CV    (filter envelope)
ENV 2 OUT → VCA CV          (amplitude envelope)
EUDEMONIA OUT → Mixer
```

## Three-Oscillator Mix and Filter

Blend three oscillators before filtering — useful for layered timbres or detuned patches.

```
VCO 1 OUT → Mixer IN 1
VCO 2 OUT → Mixer IN 2
VCO 3 OUT → Mixer IN 3
ENV OUT → LP CUTOFF CV
LFO OUT → VCA CV
EUDEMONIA OUT → Mixer
```

Adjust each LEVEL knob to balance the mix before it enters the filter chain.

## Band-Pass Sweep

Use both filters as a band-pass pair and sweep the band with CV.

```
VCO OUT → Mixer IN 1
LFO → LP CUTOFF CV   (sweeps top edge of band down)
LFO (inverted) → HP CUTOFF CV  (sweeps bottom edge up)
EUDEMONIA OUT → Reverb → Mixer
```

Using an inverted version of the same LFO narrows and widens the band in sync.

## Filter Feedback Patch

Patch the EUDEMONIA output back into Mixer IN 2 or IN 3 to create a feedback loop with the filter in the signal path.

```
VCO OUT → Mixer IN 1
EUDEMONIA OUT → Mixer IN 2 (low level for feedback)
EUDEMONIA OUT → Main Mixer
```

Adjust the feedback level carefully — small increases produce resonance-like effects; larger amounts lead to instability and chaos.

## Self-Oscillating Sine Voice

Use the LP resonance as a pitched sine oscillator.

```
Sequencer V/oct → LP CUTOFF CV
Sequencer Gate  → ENV trigger
ENV OUT → VCA CV
EUDEMONIA OUT → Mixer
```

Set LP RESONANCE to maximum, LP CUTOFF to a base pitch, and track the sequencer V/oct. No oscillator required.

## Pair with DYSTOPIA (Dreadbox Chromatic)

Process DYSTOPIA's noise output through EUDEMONIA for a complete noise-voice channel.

```
DYSTOPIA OUT → EUDEMONIA Mixer IN 1
Random Gate (DYSTOPIA) → ENV trigger → VCA CV
LFO → LP CUTOFF CV
EUDEMONIA OUT → Reverb → Mixer
```
