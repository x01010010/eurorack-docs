# Patch Recipes

A handful of starting points. None of these are sacred — granular modules reward experimentation more than recipe-following.

## 1. Frozen Ambient Pad

Capture a chord, freeze it, smear the grains.

```
[ Polyphonic VCO chord ] → SKIES IN L/R
[ Manual or trigger ] → FREEZE
SKIES OUT L/R → mixer

Settings:
  Mode      : Granular (default)
  POSITION  : 12 o'clock
  SIZE      : 2 o'clock (long grains)
  PITCH     : center
  DENSITY   : 11 o'clock (regular grains, slow)
  TEXTURE   : 2-3 o'clock (smearing)
  BLEND     : Reverb assigned, ~1 o'clock
```

Slowly modulate POSITION with a slow LFO (±2 V) for evolving motion.

## 2. Rhythmic Granular Stutter

Use an external clock to fire grains in time.

```
[ Drum loop / break ] → SKIES IN L
[ /4 clock from sequencer ] → TRIG
SKIES OUT → mixer

Settings:
  Mode      : Granular
  POSITION  : modulated by S&H
  SIZE      : 9 o'clock (short grains)
  DENSITY   : 12 o'clock (silent — only triggered grains play)
  TEXTURE   : 9 o'clock (square envelope)
  BLEND     : Wet/Dry fully CW
```

## 3. Endless Drone From a Single Note

```
[ Sustained VCO note ] → SKIES IN L
Hold FREEZE on after a few seconds.

Settings:
  Mode      : Granular
  Quality   : 16 kHz / 8 bit mono (8-second buffer)
  SIZE      : 3 o'clock
  DENSITY   : 11 o'clock
  TEXTURE   : 2 o'clock
  BLEND     : Feedback ~1 o'clock, then switch to Reverb ~2 o'clock
```

Slowly turn PITCH up or down to drift the drone away from the source pitch.

## 4. Tape-Loop Delay

```
[ Source ] → SKIES IN L
SKIES OUT → mixer

Settings:
  Mode      : Looping Delay (mode 3)
  FREEZE    : off
  POSITION  : sets delay time — sweep it for scrub effects
  SIZE      : adjust pitch-shift smoothness
  BLEND     : Feedback
```

## 5. Spectral Choir

```
[ Vocal sample / formant osc ] → SKIES IN L/R
Hold FREEZE.

Settings:
  Mode      : Spectral (mode 4)
  POSITION  : pick a captured buffer
  SIZE      : slowly modulate with LFO
  PITCH     : ±5 semitones
  TEXTURE   : just past 12 o'clock
```

## CV Tips

- All CV inputs are bipolar ±8 V — use attenuverters on your modulation source for tasteful amounts.
- FREEZE TRIG is gate-style: a long gate holds freeze, a short gate toggles it briefly.
- BLEND CV modulates whichever parameter BLEND is currently assigned to. Reassign with PARAMETER mid-patch for surprising results.
