# Patch Recipes

Five starting patches that exercise different sides of WAVES.

## 1. Polyrhythmic Modulation Source

Drive four filters/VCAs with phase-offset versions of the same LFO.

```
WAVES OUT 1 → VCF 1 cutoff CV
WAVES OUT 2 → VCF 2 cutoff CV
WAVES OUT 3 → VCF 3 cutoff CV
WAVES OUT 4 → VCF 4 cutoff CV

Settings:
  MODE         : Cyclic (orange)
  RANGE        : Mid (orange)
  RELATIONSHIP : Phase offset (orange)
  FREQUENCY    : ~10 o'clock (slow)
  SLOPE        : 12 o'clock
  SHAPE        : 1 o'clock
  SHIFT/LEVEL  : sweep slowly to change groove
```

Modulating SHIFT/LEVEL with a slow LFO continuously shifts the polyrhythmic relationship.

## 2. Complex Envelope With Built-In Sustain

Use ASR mode for hand-played dynamics that go beyond a simple ADSR.

```
[ Gate from MIDI / sequencer ] → TRIG
WAVES OUT 1 → VCA CV

Settings:
  MODE       : ASR (red)
  RANGE      : Mid (orange)
  SLOPE      : 1 o'clock (slower release than attack)
  SHAPE      : CCW for soft attack, CW for sharp
  SMOOTHNESS : 12 o'clock
```

Modulate SHAPE with velocity for expressive envelopes.

## 3. Audio-Rate Oscillator With Wavefolding

WAVES as a primary or secondary VCO.

```
[ V/Oct from keyboard ] → V/OCT
WAVES OUT 1 → VCF input

Settings:
  MODE       : Cyclic (orange)
  RANGE      : Audio (red)
  SHAPE      : start at 12 o'clock
  SLOPE      : 12 o'clock for triangle
  SMOOTHNESS : 1-2 o'clock for wavefolded harmonics
  FREQUENCY  : tune to your reference VCO
```

Patch an LFO into SMOOTHNESS CV with the attenuverter at \~3 o'clock — animated harmonic content without changing pitch.

## 4. Clock-Synced Sub-Harmonic Drone

Lock WAVES to an external VCO to derive related pitches.

```
[ Square output of VCO ] → CLOCK
[ Same VCO V/Oct source ] → keyboard / sequencer

Settings:
  MODE         : Cyclic (orange)
  RELATIONSHIP : Frequency ratio (red)
  FREQUENCY    : sets clock div/mult — try 2:1, 4:1
  SHIFT/LEVEL  : detune outputs 2-4 against output 1
```

Mix outputs 1-4 through a stereo mixer for a thick, clock-locked chord.

## 5. Slow Modulation Crossfader

A single knob to morph between four signals.

```
WAVES outputs 1-4 → four separate modulation destinations

Settings:
  MODE         : Cyclic (orange)
  RANGE        : Slow (green)
  RELATIONSHIP : Crossfade (green)
  FREQUENCY    : fully CCW
  SHIFT/LEVEL  : main morph control
```

Patch a slow LFO into SHIFT/LEVEL CV and walk the modulation across all four destinations over minutes.

## CV Tips

- **All CV inputs are bipolar ±8 V** (V/OCT is -3 V to +5 V). Use the attenuverters generously — full-range CV is rarely musical.
- **Unpatched FM input** acts as a fine-tune control via the FM attenuverter.
- **TRIG is mode-sensitive** — same gate produces different behavior depending on MODE.
- **CLOCK overrides FREQUENCY** — if WAVES suddenly seems detuned, check whether CLOCK is patched.
