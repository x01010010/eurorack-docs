# Patching

## Classic Amplitude Envelope

The most fundamental patch — shape the volume of a VCA with the envelope triggered by a sequencer gate.

```
Sequencer Gate Out → ENV Gate In
ENV Out 1 → VCA CV In
VCO Out → VCA Audio In
VCA Audio Out → Output/Mixer
```

## Simultaneous Amplitude + Filter Sweep

Use both envelope outputs to control two different destinations from one envelope shape.

```
Gate → ENV Gate In
ENV Out 1 → VCA CV In
ENV Out 2 → VCF Cutoff CV In
VCO Out → VCF In → VCA In → Output
```

## CV-Controlled Envelope Level (Velocity Simulation)

Use a stepped CV source (e.g. a sequencer's velocity or accent output) to vary the envelope's output level, simulating velocity-sensitive expression.

```
Gate → ENV Gate In
Sequencer Velocity/Accent Out → ENV CV In
ENV Out 1 → VCA CV In
```

## Gated LFO Modulation

In Gated Loop mode, the envelope acts as a rhythmic LFO that only runs during held notes — useful for tremolo, vibrato, or filter tremolo during sustained sections.

```
Gate → ENV Gate In
Mode switch → GATE
ENV Out 1 → VCF Cutoff CV or VCO V/Oct (for vibrato)
```

## Free-Running LFO / Modulation Source

In Loop mode with no gate patched, **ENV** outputs a continuous cycling waveform. Shape it with the ADSR knobs.

```
Mode switch → LOOP
ENV Out 1 → VCO PWM or VCF Cutoff CV
(No gate patch required)
```

## Audio-Rate Oscillator

Push the TIME knob toward minimum (or close to it) while in Loop mode. At fast enough settings the output exits LFO range and enters audio rate — patch it as an audio source or use it as a modulator for FM.

```
Mode switch → LOOP
TIME → minimum
ENV Out 1 → VCA Audio In or VCO FM In
```

## Trigger for Percussive One-Shots

Use the Trigger input (instead of Gate) with Punch Mode on for a tight, percussive hit. The trigger fires a single pass regardless of trigger length.

```
Clock / Trigger Source → ENV Trigger In
Punch switch → ON
ENV Out 1 → VCA CV In (for drums) or Pitch CV (for tuned percussion hits)
```

## Dual Destination with Independent Levels

Patch Out 1 to a VCA and Out 2 to a filter, but attenuate the filter envelope using an external attenuator. This allows the same shape to hit hard on amplitude and gently on filter.

```
Gate → ENV Gate In
ENV Out 1 → VCA CV In (full level)
ENV Out 2 → Attenuator In → VCF Cutoff CV In (reduced level)
```
