# Patch Recipes

## 1. Classic Detuned Lead

Two saws, slightly offset, into a filter and envelope. The bread and butter of analog leads.

```
Sequencer V/OCT → 112 VCO 1 KBD CV IN
Sequencer V/OCT → 112 VCO 2 KBD CV IN
112 VCO 2 TUNE: detune ~3 cents
112 VCO 1 SAW → mixer
112 VCO 2 SAW → mixer
mixer → SWORDS IN 1
SWORDS OUT 1 → VCA → output
140 ENV 1 → VCA CV
140 ENV 2 → SWORDS FREQ CV
```

## 2. Hard Sync Sweep Lead

```
Sequencer V/OCT → 112 VCO 1 KBD CV IN
112 VCO 1 SYNC OUT → 112 VCO 2 SYNC IN  (switch: STRONG)
112 VCO 2 SAW → SWORDS IN
140 ENV 2 → 112 VCO 2 MOD CV IN 3, MOD MANUAL ~2 o'clock
140 ENV 1 → VCA CV
```

Increase MOD MANUAL for a wider sweep on each note.

## 3. Analog FM Bell

```
112 VCO 1 RANGE: 8'
112 VCO 2 RANGE: 8'
Sequencer V/OCT → 112 VCO 2 KBD CV IN
112 VCO 1 TRI → 112 VCO 2 MOD CV IN 2, MOD MANUAL ~12 o'clock
140 ENV 1 → 112 VCO 1 MOD CV IN  (modulates carrier-to-modulator ratio)
112 VCO 2 SAW → SWORDS IN (mode CW for high-pass) → VCA
```

Short envelope on VCO 1 PITCH = classic FM percussion attack.

## 4. PWM Pad

```
WAVES UNI OUT (slow LFO, ~0.2 Hz) → 112 VCO 1 PWM IN
WAVES BI OUT  (slow LFO, ~0.3 Hz) → 112 VCO 2 PWM IN
Sequencer V/OCT → both VCOs
112 VCO 1 PULSE → mixer
112 VCO 2 PULSE → mixer
mixer → SWORDS (low-pass) → VCA → output
```

The slightly offset LFOs prevent the PWM phasing from being predictable.

## 5. Cross-Mod Drone

```
112 VCO 1 RANGE: 32'
112 VCO 2 RANGE: 8'
112 VCO 1 SAW → 112 VCO 2 MOD CV IN 3, MOD MANUAL slowly opening
112 VCO 2 SAW → 172 SIG IN (delay or phaser)
172 SIG OUT → output
```

Open MOD MANUAL gradually to introduce inharmonic motion to a sustained drone.

## CV Tips

- The three CV inputs per VCO are **summed**. Add as many modulators as you have, but watch for clipping if total CV exceeds ±10 V at the converter.
- Sawtooth and pulse outputs are **unipolar 0 V to +10 V**. Use an attenuator or AC-coupled input when mixing two together.
- Triangle is the cleanest source for audio-rate FM.
