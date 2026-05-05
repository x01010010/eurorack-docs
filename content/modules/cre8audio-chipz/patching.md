# Patching

## Basic Dual Oscillator Voice

```
V/OCT from keyboard/sequencer → V/OCT 1
V/OCT from keyboard/sequencer → V/OCT 2 (same source, detune PITCH 2 slightly)
CHIP1 OUT → VCA or mixer channel A
CHIP2 OUT → VCA or mixer channel B
Mix for classic detuned oscillator chorus
```

## Filter Sweep on Chip1

```
V/OCT → V/OCT 1
Envelope → FILTER CV
CHIP1 OUT → VCA → output
FILTER knob set to taste — envelope opens the filter on each note
```

Note: FILTER CV is positive-only. Use an envelope with 0–8 V output; do not use bipolar CVs directly.

## PWM from LFO

```
V/OCT → V/OCT 2
LFO OUT1 → WIDTH CV (use only if LFO is positive — CHIPZ LFO Out1 is 0–5 V, suitable)
CHIP2 OUT → output
WIDTH knob at 50%
```

LFO sweeps the duty cycle creating a classic analogue PWM sound from Chip2.

## Two Oscillators + Cellz as Sequencer

```
Cellz CV OUT1 → CHIPZ V/OCT 1
Cellz CV OUT2 → CHIPZ V/OCT 2
CHIPZ LFO OUT1 → Cellz LFO TRIG 1
CHIPZ LFO OUT2 → Cellz LFO TRIG 2
CHIP1 OUT → filter → output
CHIP2 OUT → separate filter or effect
```

The NiftyBUNDLE patch: Cellz sequences the pitch of both oscillators; Chipz LFOs cycle Cellz at two tempos.

## Lo-fi Noise Layer

```
WAVE 1 at maximum (noise position)
No V/OCT input needed
FILTER knob at low setting to shape noise colour
CHIP1 OUT → VCA gated by drum trigger → output
```

Gated noise bursts with integrated filtering for lo-fi percussion or noise hits.

## LFO as Slow Drone Modulator

```
LFO WAVE → triangle position
RATE at minimum (LFO Out1: ~75 mHz ≈ 13-second cycle)
LFO OUT1 → another module's CV (e.g. filter cutoff, VCA, or reverb mix)
```

Very slow, unipolar sine or triangle sweep. Feed into a utility offset/attenuverter if you need the signal to swing negative.

## Synchronized LFO

```
Sequencer GATE → LFO TRIGGER
LFO OUT1 → FILTER CV
LFO OUT2 → WIDTH CV
```

LFO resets phase each time a gate fires — filter sweep and PWM both restart in phase with the sequence.
