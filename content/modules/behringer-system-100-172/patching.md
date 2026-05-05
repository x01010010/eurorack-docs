# Patch Recipes

## 1. Default Phaser on Anything

```
Audio source → 172 PHASE SIG IN
172 PHASE SIG OUT → mixer/output
PHASE EFFECT: ON
SHIFT FREQ: ~12 o'clock
RESONANCE: ~10 o'clock
MOD INTENSITY: ~1 o'clock
LFO FREQUENCY: ~9 o'clock (slow)
```

The internal LFO sweeps the phaser at its own pace — set and forget.

## 2. Stereo Phaser/Flanger

```
Audio source → 172 PHASE SIG IN
172 PHASE SIG OUT → output L
Same audio source → 172 DELAY SIG IN  (mix delay 50/50 externally for stereo flanger feel)
172 DELAY SIG OUT → output R
LFO OUT (upper) → PHASE CV IN
LFO OUT (lower, inverted) → DELAY CV IN
```

Phaser sweeps one direction, delay sweeps the opposite — wide stereo motion from a mono source.

## 3. Karplus-Strong Pluck

```
Noise source → 140 ENV 1 (very short A, very short D, 0 S, 0 R) → VCA → 172 DELAY SIG IN
172 DELAY SIG OUT → output (and feedback into VCA at low level)
DELAY TIME: very short
RESONANCE: high (just below self-oscillation)
```

A burst of noise excites the BBD line; high resonance makes it ring at a frequency set by DELAY TIME. Modulate DELAY TIME with V/oct (via an attenuator) for tracking pitches.

## 4. Vocal Wah on Drums

```
Drum loop → 172 PHASE SIG IN
172 PHASE SIG OUT → output
SHIFT FREQ: ~9 o'clock
RESONANCE: ~3 o'clock (high)
LFO FREQUENCY: tap to match groove
```

High resonance + a tempo-matched LFO turns the phaser into a quasi-wah on drum loops.

## 5. Polyrhythmic Gate Doubling

```
Clock → 172 GATE IN
DELAY TIME: half the clock period
GATE TIME: short
172 GATE OUT → drum voice 2 trigger
Original clock → drum voice 1 trigger
```

Drum 1 hits on the beat, drum 2 hits offset — a 2-vs-3 or 3-vs-4 polyrhythm without a sequencer.

## 6. Self-Oscillating Drone

```
PHASE EFFECT: ON
SHIFT FREQ: ~3 o'clock
RESONANCE: maximum (self-oscillates)
PHASE SIG IN: nothing patched
PHASE SIG OUT → output
```

With high resonance and no input, the phaser self-oscillates as a sine source. Modulate SHIFT FREQ with the LFO or external CV for drone melodies.

## CV Tips

- Both CV IN jacks are 0–10 V, DC coupled. Use an attenuator to scale modulation into a musical range.
- The internal LFO is **always** routed to the CV IN jacks unless something is patched. Patch a static CV (just a stable voltage) to lock the modulation to a fixed frequency.
- The delay output is wet-only. Mix with dry externally for chorus/flange effects.
- Gate delay is useful as a tempo-divided trigger source — it doesn't need to be used for gate effects.
