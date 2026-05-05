# Patching

## Basic Melodic Controller

Programme pitches into the 16 pads, then route CV Out 1 to a VCO V/Oct input and Gate Out to an envelope gate input. Touch the pads to play notes.

```
CELLZ CV Out 1 → VCO V/Oct
CELLZ Gate Out → EG Gate In
EG Out → VCA CV
VCO Out → VCA In
```

## Dual-Output Pitch + Timbre Controller

Programme two different CV values per pad — pitch on Out 1, a timbral parameter (filter cutoff, wave morph, drive level) on Out 2. Both outputs update simultaneously when you touch a pad.

```
CELLZ CV Out 1 → VCO V/Oct
CELLZ CV Out 2 → VCF Cutoff CV
CELLZ Gate Out → EG Gate In
```

## Paired with Chipz LFOs for Auto-Sequencing

Connect the Chipz LFO outputs to the CELLZ LFO trigger inputs. CELLZ then cycles through pads in step with the two Chipz LFO rates (Out1 slow, Out2 four times faster). Route CELLZ Out 1 back to Chipz for pitch and Out 2 to filter or timbre.

```
CHIPZ LFO Out1 → CELLZ LFO Trig 1
CHIPZ LFO Out2 → CELLZ LFO Trig 2
CELLZ CV Out 1 → CHIPZ OSC1 V/Oct
CELLZ CV Out 2 → CHIPZ Filter CV
```

## Arpeggiator with External Envelope

Hold two or more pads to arpeggiate between them. Route Gate Out to an envelope — the envelope fires once per step, producing a rhythmically articulated arpeggio. Set SPEED to taste.

```
CELLZ Gate Out → EG Gate In
CELLZ CV Out 1 → VCO V/Oct
EG Out → VCA CV
SPEED knob → arpeggio rate
```

## External Clock-Stepped Sequence

Patch a clock source to LFO TRIG 1 to step through the 16 pads in time with your sequence. The gate/trigger output of a clock divider or a basic square LFO works. CELLZ advances one pad per incoming trigger.

```
Clock / LFO square → CELLZ LFO Trig 1
CELLZ CV Out 1 → Pitch / parameter target
CELLZ Gate Out → EG Gate In
```

## CV Controller for Effects

In free-scale mode, programme pads with specific CC-equivalent CV values for an effects module (reverb time, delay feedback, chorus depth). Touch pads during a performance to recall your favourite settings instantly — like a CV preset bank.

```
CELLZ CV Out 1 → Reverb Time CV
CELLZ CV Out 2 → Delay Feedback CV
```
