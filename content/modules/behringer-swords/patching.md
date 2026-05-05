# Patch Recipes

## 1. Classic Low-Pass Bass

```
112 VCO 1 SAW → SWORDS SIG IN 1
SWORDS MODE 1: fully CCW (low-pass)
SWORDS RES 1: ~1 o'clock
SWORDS ROUTING: fully CCW (single)
SWORDS MAIN OUT → VCA → output
140 ENV 1 → SWORDS FREQ 1 CV (attenuverter ~2 o'clock)
140 ENV 2 → VCA CV
```

The starting point for any subtractive bass patch.

## 2. Stereo Filter Spread

```
Same source → SIG IN 1 and SIG IN 2 (use a multiple)
SWORDS MODE 1: low-pass
SWORDS MODE 2: low-pass
SWORDS FREQ 2: slightly higher than FREQ 1
SHIFT: engaged (filter 2 FREQ is now an offset)
LFO → FREQ 1 CV (attenuverter ~10 o'clock)
Filter 1 OUT → output L
Filter 2 OUT → output R
```

Both filters sweep together; the offset between L and R stays constant. Wide stereo motion from a mono source.

## 3. Band-Split Processing

```
Drum loop → multiple → SIG IN 1 and SIG IN 2
SWORDS MODE 1: fully CCW (low-pass) — captures kicks
SWORDS MODE 2: fully CW (high-pass) — captures hats/snares
SWORDS ROUTING: 12 o'clock (parallel)
Filter 1 OUT → drive/saturation effect → mixer
Filter 2 OUT → reverb → mixer
```

Process lows and highs separately — saturate the bass, wash out the highs.

## 4. 24 dB Series Cascade

```
112 VCO 1 SAW + 112 VCO 2 SAW → mixer → SWORDS SIG IN 1
SWORDS MODE 1 and MODE 2: both fully CCW (low-pass)
SWORDS ROUTING: fully CW (series)
SWORDS MAIN OUT → VCA → output
```

Two 12 dB low-pass filters in series = 24 dB total. Fatter, more "vintage" filter tone than a single 12 dB stage.

## 5. Stereo Sine VCO

```
RS-9 CV OUT → SWORDS V/OCT 1
RS-9 CV OUT → SWORDS V/OCT 2
SWORDS MODE 1 and MODE 2: ~12 o'clock (band-pass)
SWORDS RES 1 and RES 2: maximum (self-oscillates)
SWORDS FREQ 2: slight detune from FREQ 1
Filter 1 OUT → output L
Filter 2 OUT → output R
```

Two detuned sine VCOs tracking V/oct, panned hard. Detuned unison with no oscillator module needed.

## 6. Wavefolded Lead

```
112 VCO 1 SAW → SWORDS SIG IN 1
SWORDS DRIVE 1: ~3 o'clock (high)
SWORDS RESPONSE 1: fully CW (wavefolding)
SWORDS MODE 1: ~12 o'clock (band-pass)
SWORDS RES 1: ~1 o'clock
140 ENV 1 → SWORDS DRIVE CV 1 (modulates wavefold amount per note)
140 ENV 2 → SWORDS FREQ 1 CV
```

The wavefolder generates new harmonics on each note; the band-pass + envelope sweeps through them.

## 7. Audio-Rate Mode Modulation

```
WAVES VCO mode (audio-rate sine) → SWORDS MODE CV 1
112 VCO 1 SAW → SWORDS SIG IN 1
SWORDS RES 1: ~3 o'clock (high)
```

Modulating MODE at audio rate creates aggressive, gritty FM-like sidebands as the filter morphs through LP/BP/HP at audio rate.

## CV Tips

- Drive CV input range is **0 V to +8 V** — use unipolar envelopes or LFOs.
- The attenuverters (CCW for invert, CW for attenuate) on FREQ, RES, and ROUTING are essential — most modulation sources will overload the filter without them.
- V/OCT inputs only matter when the filter is self-oscillating; otherwise FREQ CV is the input you want for cutoff modulation.
- ROUTING CV lets you fade between single, parallel, and series under modulation — try a slow LFO into ROUTING CV for evolving routing topology.
