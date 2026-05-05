# Patching

## Basic Pitch Glide

```
Sequencer CV out → 297 Port A IN
297 Port A OUT   → 112 VCO 1V/oct
```

Adjust RISE for upward glide speed and FALL for downward glide speed independently.

## Dual-Voice Portamento

Use both portamento channels for a two-voice patch, with different glide times per voice to create expressive lead/bass relationships.

```
Seq CH1 → 297 Port A IN → VCO 1
Seq CH2 → 297 Port B IN → VCO 2
```

## Offset and Mix

Sum a sequencer pitch CV with a manual offset using CV Mixer 1, then pass the result through a portamento channel for smoothed pitch with transpose.

```
Sequencer CV → CV Mixer 1 IN 1
Manual offset → CV Mixer 1 IN 2
CV Mixer 1 OUT → 297 Port A IN → VCO
```

## LFO Smoothing

Patch a square LFO through a portamento channel to convert it into a rising/falling ramp shape with controllable transition time.

```
LFO square OUT → 297 Port B IN
297 Port B OUT  → VCF cutoff CV
```
