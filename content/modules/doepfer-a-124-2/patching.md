# Patching

## Basic Low-Pass Sweep

```
VCO → AUDIO IN
LFO OUT → CV 1 (attenuate CV1 knob to taste)
MIX OUT → destination (MIX knob fully CCW for LP)
```

## Envelope-Controlled High-Pass

```
VCO → AUDIO IN
ADSR ENV OUT → CV 1
MIX OUT → destination (MIX knob fully CW for HP)
FREQ set to taste — envelope opens the HP cutoff upward
```

## Notch Sweep via CV

```
VCO → AUDIO IN
LFO OUT → CV 2 (set CV2 trimmer to moderate amount)
MIX OUT → destination (MIX knob at noon for Notch)
FREQ set in low-mid range
Slow LFO sweeps the notch frequency rhythmically
```

## Parallel LP and BP

```
VCO → AUDIO IN
MIX OUT (LP) → Mixer channel 1
BP OUT → Mixer channel 2
Blend in mixer for LP-plus-BP texture
```

## LP and HP Simultaneously (Pseudo-Stereo or Dual Path)

```
VCO → AUDIO IN
Set jumper for LP on LP/HP OUT
MIX OUT (HP, MIX CW) → left channel / processing chain A
LP/HP OUT (LP) → right channel / processing chain B
```

## Drive It Hard

The Wasp circuit tolerates and responds well to hot input signals. Running a sawtooth VCO at full amplitude into AUDIO IN with a fast attack envelope will produce pleasant grit. Use INPUT LEVEL trimmer to reduce if the overdrive is too heavy, or keep it at maximum for maximum character.

## Pairing with a Resonant Filter

The A-124-2 does not self-oscillate, so it pairs well in series with a self-oscillating module like the A-120 (Moog-style LP). Run the Wasp first for its grit and saturation, then into the resonant filter for pitched resonance.
