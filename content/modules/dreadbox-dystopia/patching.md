# Patching

## Textured Noise Bed

Route the noise output directly through the filters to create a shaped noise pad.

```
Internal Noise → Bit Crusher → Dual Filter → OUT → Mixer
```

Set LP FREQ to taste (low-mid for warmth, high for air). Sweep HP FREQ up to cut rumble. Modulate LP CV with a slow LFO for evolving texture.

## Lo-Fi Drum Processor

Patch a drum machine or sample output into EXT IN to crush and filter it.

```
Drum machine OUT → DYSTOPIA EXT IN → Crusher → Dual Filter → OUT → Mixer
```

Use the CRUSH knob to dial in the amount of degradation. Pull LP FREQ down for a gritty sub-heavy character or use HP FREQ to cut lows for an abrasive hi-hat texture.

## Random Gate Sequencing

Use Digital noise mode to trigger an envelope and a sample-and-hold, creating self-generating melodies.

```
GATE OUT → ENV trigger
GATE OUT → S&H trigger
Noise OUT → S&H IN (voltage source)
S&H OUT → VCO V/oct
ENV OUT → VCA CV
VCO OUT → VCA IN → Mixer
```

Random pitch and random rhythm together produce an autonomous generative voice.

## CV-Modulated Noise Color

Modulate filter frequencies via CV to sweep between bright and dark noise tones.

```
LFO → LP CV (slow sweep)
ENV → HP CV (envelope-controlled high-pass gate)
Noise OUT → Filters → OUT → Reverb → Mixer
```

The envelope opens and closes the high-pass, letting bursts of high-frequency noise through on each hit while the LFO slowly rolls off the lows.

## Pitched Noise as Melodic Source

Set TYPE to Pitched and modulate PITCH CV with a V/oct source to tune the noise to notes.

```
Sequencer V/oct → Pitch CV
Sequencer Gate  → Envelope trigger
Envelope OUT    → VCA CV
DYSTOPIA OUT    → VCA IN → Mixer
```

Pitched noise tracks pitch like a noisy oscillator, useful for metallic percussion or tonal noise effects.

## Parallel LP/HP Split

Use the two filters as a crossover to separate bass and treble content of an external source.

```
EXT IN → Bit Crusher (CRUSH at 8kHz, minimal effect) → Dual Filter
LP OUT → Bass channel
HP OUT → Treble channel
```

Route LP and HP to separate mixer channels or effects paths.
