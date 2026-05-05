# Patch Recipes

## 1. Standard Bass Voice

```
Sequencer GATE → 140 ENV 1 EXT GATE
Sequencer V/OCT → 112 VCO 1 KBD CV IN
112 VCO 1 SAW → SWORDS IN 1
140 ENV 1 OUT → SWORDS FREQ CV (attenuverter ~2 o'clock)
140 ENV 2 OUT → VCA CV
SWORDS OUT 1 → VCA → output

ENV 1: short A, short D, low S, medium R   (filter snap)
ENV 2: short A, medium D, high S, short R  (amp shape)
```

Two envelopes — one for filter, one for amp — is the classic subtractive setup the 140 was designed for.

## 2. Vibrato That Fades In

```
140 LFO RANGE: LOW
140 LFO WAVEFORM: SINE
140 LFO OUTPUT LEVEL: 1/10
140 LFO DELAY: ~3 o'clock
Sequencer GATE → 140 LFO TRIGGER IN
140 LFO OUT (upper) → 112 VCO 1 MOD CV IN, MOD MANUAL ~9 o'clock
```

Each note plays straight at first, then vibrato gradually fades in — beautiful for held lead lines.

## 3. Sidechain-Style Ducking

```
RS-9 TRIG 1 (kick) → 140 ENV 1 EXT GATE
140 ENV 1 INV OUT → VCA CV (mixer return)
ENV 1: very short A, short D, zero S, medium R
```

The inverted envelope drops the mix every time the kick fires, then recovers. Quick, analog sidechain without a compressor.

## 4. Auto-Wah on Drums

```
Drum loop → SWORDS IN
140 LFO RANGE: MID
140 LFO WAVEFORM: TRIANGLE
140 LFO OUT → SWORDS FREQ CV (attenuverter ~1 o'clock)
SWORDS MODE: ~12 o'clock (band-pass)
```

The LFO sweeps the band-pass center for a continuous wah-wah motion.

## 5. Two-Voice Polyphony

```
Voice 1: gate → 140 ENV 1, V/OCT → 112 VCO 1 → mixer
Voice 2: gate → 140 ENV 2, V/OCT → 112 VCO 2 → mixer
140 ENV 1 OUT → VCA 1 CV
140 ENV 2 OUT → VCA 2 CV
mixer → output
```

Two envelopes, two VCOs, two VCAs — true two-voice paraphony driven by a duophonic sequencer.

## CV Tips

- The 140 envelopes are **not voltage-controlled**. If you need CV-able envelope shapes, look elsewhere — but for snappy, repeatable utility envelopes, the 140 is hard to beat.
- The two ENV OUT jacks per envelope are **buffered copies** — patch them to two destinations without a multiple.
- LFO TRIGGER IN inverts the LFO's behavior when patched: gate high silences the LFO. Counterintuitive, but powerful when combined with DELAY.
