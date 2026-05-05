# Patching

## Basic Sub Bass Fattening

The core use: add octave-down and two-octaves-down layers to a VCO, then mix with the original.

```
VCO Saw/Square Out → SG IN
SG OUT → Mixer Ch 1
VCO Out (original) → Mixer Ch 2
Mixer Out → VCF In
```
Blend the SG output level against the original VCO at the mixer. Raise Knobs 3 and 4 on SG for the octave layers; add a touch of Knob 1 or 2 for harmonic complexity.

## SG into a Filter for Sub Synth Bass

Route the SG output through a low-pass filter for a classic sub-bass synthesizer sound.

```
VCO Square Out → SG IN
SG OUT → VCF In (LP mode)
ENV Out → VCF Cutoff CV
Gate → ENV Gate In
VCF Out → VCA In
```
Use only Knob 4 (two octaves down) for a pure sub-bass tone with filter envelope shaping.

## Thick Three-Layer Organ Bass

Combine original VCO, one-octave sub, and two-octave sub for a thick organ-like bass register.

```
VCO Out → SG IN
VCO Out → Mixer Ch 1 (original)
SG OUT → Mixer Ch 2 (sub layers)
```
On SG: raise Knob 3 (−1 oct) and Knob 4 (−2 oct) to taste, keep Knobs 1 and 2 low. Set VCO to square wave for the fullest organ-like character.

## Adding the 7th for Harmonic Richness

Dial in Knob 1 (7th below) at low levels alongside the octave knobs. The 7th interval adds a slightly rough, bluesy harmonic tension to the sub mix. At low levels it thickens without sounding dissonant.

```
VCO Square or Saw → SG IN
SG: Knob 1 (low), Knob 3 (medium), Knob 4 (medium)
SG OUT → Mixer Ch 1
VCO Out → Mixer Ch 2
```

## Sine Wave Input for Clean Subs

For the purest sub-bass tones with no extra harmonic content, use a sine wave input. The divided outputs will be close to square waves (flip-flop division always produces squares), but the input's fundamental character is clean and won't add upper-harmonic content.

```
VCO Sine Out → SG IN
SG: Knob 4 fully up, others low
SG OUT → VCF In → VCA In
```

## SG as Clock Divider (Experimental)

Feed a clock or gate signal into the IN jack. Raise Knob 3 and Knob 4 only (÷2 and ÷4 divisions). The output mix will contain trigger pulses at half and quarter clock rate. Patch through a comparator or trigger conditioner if clean trigger levels are needed.

```
Clock Out → SG IN
SG: Knob 3 and/or Knob 4 raised
SG OUT → Comparator or Trigger Input
```
