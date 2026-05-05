# Patching

## Default Internal Signal Flow

```
VCO 1 + VCO 2 → VCO MIX → VCF → VCA → OUT
ENV 1 → VCF cutoff (normalled)
ENV 2 → VCA (normalled)
LFO → VCO pitch (via mod routing)
```

## External Oscillator Through the VCF

```
External VCO → EXT IN
EXT IN OUT   → VCF IN
```

Use the Neutron's filter and envelopes on a signal from any external module.

## Self-Oscillating VCF as Sine VCO

```
RESONANCE → maximum
ENV AMT    → zero
VCF LP OUT → mixer / destination
```

With CUTOFF as pitch control and resonance at maximum, the VCF self-oscillates as a sine wave. Patch a 1 V/oct CV to VCF CUTOFF for tracked pitches.

## S&H Random Melody

```
Noise OUT (internal normal) → S&H SIGNAL IN (already normalled)
LFO square OUT → S&H CLOCK IN
S&H OUT → VCO 1 pitch (via summer or attenuator)
```

Clocked random pitch variation. Reduce depth with the attenuator before summing with the main CV.

## BBD Delay as Audio-Rate Modulator

```
VCO OUT → Delay IN
Delay TIME CV → LFO OUT (audio rate LFO)
Delay OUT → VCF IN
```

At audio-rate TIME modulation the BBD produces flanging/chorus textures.

## Feedback Patch

```
VCA OUT → EXT IN
EXT IN OUT → Summer IN 1
VCO OUT    → Summer IN 2
Summer OUT → VCF IN
```

Mix the output back into the signal path for feedback resonance. Keep the attenuator low to avoid runaway.

## Use Utilities with External Modules

```
External LFO → Attenuator IN → Attenuator OUT → Neutron VCF cutoff CV
External CV  → Summer IN 1
Neutron ENV  → Summer IN 2
Summer OUT   → External VCO pitch
```

The attenuators, summers, and mult jacks work on any Eurorack signal regardless of source.
