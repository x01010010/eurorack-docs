# Patching

## Initial Recommended Settings (from Doepfer)

Start here to understand the basic PLL behaviour:

```
VCO OFFSET = 0
VCO RANGE = mid
PHASE COMP. = PC3
LOW PASS FREQ = 0 (fully CCW)
IN 2 ← rectangle output of an external VCO (~50% pulsewidth)
Monitor: VCO RECT OUT
```

In the range ~30 Hz to 1 kHz the internal VCO should follow the external signal. Vary the external VCO's pitch and observe the PLL tracking. Then experiment with RANGE, OFFSET, PC type, and LOW PASS FREQ to explore the effect of each.

## Frequency Multiplication with Divider

The PLL can multiply a frequency by inserting an external divider in the feedback path.

```
External VCO RECT → A-196 IN 2
A-196 VCO RECT OUT → A-163 (or A-160/A-161) divider IN
A-163 divided output → A-196 IN 1 (breaking VCO normalization)
A-196 VCO RECT OUT → destination
```

With A-163 set to divide-by-5, the internal VCO locks at 5× the external frequency. Using a voltage-controlled divider lets the multiplication ratio vary with CV, sweeping through pseudo-harmonics.

## Portamento Pitch Follower

```
CV sequencer PITCH CV → A-110 VCO pitch CV
A-110 VCO RECT OUT → A-196 IN 2
A-196 VCO RECT OUT → A-170 (or VCA/mixer)
LOW PASS FREQ = low setting
PC = PC3
```

The PLL follows the sequencer pitch but lags behind it — the result is an automatic portamento. The lag time is set by LOW PASS FREQ.

## Harmonic Locking with PC1

```
A-110 VCO RECT OUT → A-196 IN 2
A-196 VCO RECT OUT → Ring Modulator (e.g. A-114) IN A
A-110 VCO TRIANGLE → Ring Modulator IN B
PC = PC1
VCO RANGE = high (sets internal VCO in a higher harmonic range)
A-114 OUT → A-120 VCF → output
```

PC1 snaps the internal VCO to a harmonic of the external VCO. As VCO OFFSET changes or the external pitch moves, the internal VCO hops between harmonic relationships, producing pseudo-harmonic ring-mod tones.

## Frequency Jitter / Wobble Effect

```
A-110 VCO RECT → A-196 IN 2
LOW PASS FREQ = high/mid setting
PC = PC2 or PC1
Monitor: VCO RECT OUT → VCA → output
```

With a higher LPF frequency the internal VCO does not settle cleanly — it oscillates around the target, creating audible pitch wobble or vibrato. The wobble rate is related to the LPF frequency; the wobble depth depends on the input frequency and PC type.

## VCO RECT OUT as Clock Source

```
Slow LFO RECT → A-196 IN 2
A-196 VCO RECT OUT → Sequencer CLOCK IN
A-163 divider in feedback for ratio control
```

The internal VCO (locked to the LFO) generates a higher-frequency clock. A frequency multiplier can provide synchronised, tempo-related clock multiples.

## Accessing the PC Output

```
A-196 PC OUT → A-120 VCF CV IN
A-196 PC OUT → Ring Modulator
```

The phase comparator output is a digital (gate-like) signal whose duty cycle reflects the phase difference. Patching it to audio-rate processors produces additional timbral effects beyond simple pitch tracking.
