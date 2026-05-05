# Patch Recipes

## Classic ADSR Envelope

Patch your gate into GATE IN 1. Set segment 1 to ramp (attack), segment 2 to ramp (decay), segment 3 to hold (sustain), segment 4 to ramp (release). Leave gate inputs 2–6 unpatched. Tune each knob to the desired stage time or level.

```
gate → GATE IN 1
OUT (segment 6) → VCA CV in
```

Set segment 3 (hold) knob to desired sustain level. The envelope sustains while gate is high and releases when gate goes low.

## Six-Step Voltage Sequencer

Set all six segments to step type. Patch a clock into all six gate inputs.

```
clock → GATE IN 1 (all six inputs receive clock)
OUT 1–6 → mixer or pitch input
```

Each segment advances on each clock pulse. Each knob sets the pitch or voltage for that step. For a traditional sequencer feel, patch all outputs through a sequential switch or use one group spanning all six stages.

## Three LFOs from One Module

Leave all gate inputs unpatched. Set all segments to step type. Patch gate into GATE IN 1, GATE IN 3, and GATE IN 5 — creating three two-stage groups.

```
(no clock patched — free running)
OUT (group 1–2) → filter cutoff
OUT (group 3–4) → oscillator pitch mod
OUT (group 5–6) → VCA tremolo
```

Each group cycles freely at a rate set by its two segment knobs.

## Slew Limiter / Portamento

Patch one gate input. Set a single ramp segment with a long attack time. Route a stepped CV (from a sequencer) into the gate input and the output to an oscillator's 1 V/oct input. The ramp segment smooths the transitions — the output glides between each new voltage.

```
sequencer V/oct → GATE IN 1 (also use as CV — see note)
OUT → oscillator 1V/oct
```

> **Note:** For true slew behavior, use the module's input as a trigger while multing the CV separately to the oscillator — or consult the Stages/Steps manual for the low-frequency step mode's slew behavior.

## 36-Stage Sequence (Two Modules)

Chain two **STEPS** units using CHAIN OUT → CHAIN IN. Set all 12 segments to step type, patch a single clock into the first module's GATE IN 1. The clock advances through all 12 stages in sequence.

```
clock → STEPS 1 GATE IN 1
STEPS 1 CHAIN OUT → STEPS 2 CHAIN IN
STEPS 1 OUT → pitch / modulation destination
```
