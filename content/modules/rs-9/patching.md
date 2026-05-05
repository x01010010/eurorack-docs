# Patch Recipes

Most of these assume a rack with a few drum voices, a bass voice, and at least one envelope or VCA per voice.

## 1. Classic Four-on-the-Floor + Hats

Standard starting point: kick on track 1 every 4 steps, snare on track 2 (steps 5 & 13), closed hats on track 3 every step, open hats on track 4 (steps 3, 7, 11, 15).

```
RS-9 TRIG 1 → Kick voice trig
RS-9 TRIG 2 → Snare voice trig
RS-9 TRIG 3 → Closed hat trig
RS-9 TRIG 4 → Open hat trig
RS-9 ACCENT 1 → VCA CV (kick) for accents
RS-9 CLK OUT → external delay tap-in
```

## 2. Polyrhythmic Drone Bed

Two tracks at unequal lengths drive long envelopes — phasing, never repeating exactly.

```
Track 1: length 13, single trig at step 1
Track 2: length 17, single trig at step 1
RS-9 TRIG 1 → SKIES FREEZE TRIG
RS-9 TRIG 2 → WAVES TRIG (envelope)
WAVES envelope → VCA controlling drone source
SKIES IN ← drone source
SKIES OUT → mixer
```

13 vs 17 steps will not align for **221 cycles** of the master clock — effectively never, in performance terms.

## 3. Probability Sequencing

Set track 5 to fill every step, then dial probability down to 25–40%. Each cycle plays a different sparse pattern.

```
Track 5: every step on, probability 30%
RS-9 TRIG 5 → percussion voice
```

Combine with another track at 100% probability for a tight kick over a stochastic shaker layer.

## 4. CV Melody Layer

Use the CV OUT and GATE OUT to drive a melodic voice while the trigger tracks handle drums.

```
RS-9 CV OUT → SYSTEM 100 112 VCO 1 V/OCT IN
RS-9 GATE OUT → 140 EXT GATE
140 ENV 1 OUT → VCA CV
112 SAW OUT → VCA → SWORDS IN
```

Set the CV track to a musical scale (in the menu) so random notes still land in key.

## 5. External Sync

Use RS-9 as the rack master clock or as a slave to another sequencer.

```
Master:  RS-9 CLK OUT → other modules' CLK IN
Slave:   external clock → RS-9 CLK IN
         (RS-9 PLAY follows external transport via RESET IN)
```

USB-C MIDI clock works in either direction with a DAW.

## CV / Trigger Tips

- Trigger outputs are **+5 V**, plenty for any percussion module.
- Accent outputs fire **independent of the trigger** — patch accent to a VCA on the same voice for dynamic level control without altering the trigger pattern.
- The two patch inputs (CLK IN, RESET / GATE IN) accept any standard +5 V Eurorack signal.
