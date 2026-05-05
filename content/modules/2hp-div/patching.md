# Patch Recipes

## Basic Polyrhythm

Set channel A to ÷4 and channel B to ÷6 from the same clock. The two outputs create a 4-against-6 polyrhythm — they realign every 12 beats. Route each output to a different percussive voice or envelope trigger.

```
master clock → CLK
OUT A (÷4) → kick drum trigger
OUT B (÷6) → hi-hat trigger
```

## Slow Modulation Gate from a Fast Clock

Set RATE A to ÷16 from a 16th-note master clock. OUT A fires once per bar. Use it to trigger a slow envelope, open a sample-and-hold, or reset a sequencer.

```
16th-note clock → CLK
OUT A (÷16) → S&H trigger / envelope gate
```

## Dynamic Rhythm with CV Control

Patch a step sequencer CV output into CV A. Each step of the sequence sets a different division rate for channel A, creating a rhythmic pattern that shifts its subdivision every step.

```
clock → CLK
sequencer CV → CV A
OUT A → gate destination
```

## Two Independent Tempos from One Clock

Set channel A to ×2 and channel B to ÷3. You get double-time and one-third-time outputs from a single clock input — useful for driving two independent voices at different perceived speeds.

```
clock → CLK
OUT A (×2) → fast voice
OUT B (÷3) → slow voice
```

## Audio Sub-Oscillator

Patch a VCO square or pulse output into CLK. Set RATE A to ÷2. OUT A produces a square wave one octave below the input frequency — a simple analog-style sub-oscillator effect.

```
VCO square → CLK
OUT A (÷2) → VCA / mixer (sub voice)
```
