# Patching

## Basic CV/Gate Control

```
Sequencer 1V/oct → 1V/OCT jack
Sequencer gate   → GATE jack
```

Bypasses MIDI — drives pitch and envelopes directly from any Eurorack sequencer.

## External Audio Through Ladder Filter

```
External audio → EXT IN jack
EXT IN switch  → ON in Mixer
OSC levels     → zero
VCF CUTOFF / EMPHASIS → as desired
```

Use the 24 dB ladder filter as a standalone filter for any signal source.

## OSC 3 Modulation via Patch Jack

```
OSC 3 OUT jack → External VCO 1V/oct (or VCF cutoff CV input)
OSC 3 FREQ switch → free-running (KB CTRL off)
OSC 3 RANGE → low (32′ or 16′)
```

Patch OSC 3 out directly to an external target for precise low-frequency modulation without using the internal mod routing.

## Envelope to External Module

```
VCF CONTOUR OUT → External VCF cutoff CV
LOUDNESS CONTOUR OUT → External VCA CV
```

The Model D's envelopes can drive external modules — useful when using an external filter but wanting the Model D's envelope character.

## Filter Self-Oscillation as Sine VCO

```
VCF EMPHASIS → maximum
VCF CUTOFF → pitch
1V/OCT → VCF CUTOFF CV (if jack available)
VCF OUT → destination
```

At maximum resonance the ladder filter self-oscillates as a clean sine wave, tracked by pitch CV.

## Stacked Oscillators with External Tuning

```
OSC 1 OUT → External mixer IN 1
OSC 2 OUT → External mixer IN 2
OSC 3 OUT → External ring modulator / wavefolder
Mixed out → VCF IN jack (bypassing internal mixer)
```

Route individual OSC outputs externally for processing before re-entering the filter.
