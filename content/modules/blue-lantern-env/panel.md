# Panel & I/O

## Controls

| Control | Description |
|---|---|
| ATTACK | Sets the attack time — how long the envelope takes to rise from zero to peak |
| DECAY | Sets the decay time — how long it takes to fall from peak to the sustain level |
| SUSTAIN | Sets the sustain level — the steady voltage held while the gate remains high |
| RELEASE | Sets the release time — how long the envelope takes to fall to zero after the gate closes |
| TIME | Master time scale knob — stretches or compresses all time stages (Attack, Decay, Release) simultaneously |
| LEVEL | Sets the output amplitude; also serves as an attenuator for the CV input |

## Switches

| Switch | Positions | Description |
|---|---|---|
| Shape | LIN / EXP | Linear or Exponential curve for time stages |
| Mode | NORM / GATE / LOOP | Single-pass, Gated loop, or Free-running loop |
| Punch | ON / OFF | Adds a sharp transient snap to the start of the attack |

**Shape switch**: LIN produces straight-line ramps; EXP produces curved, accelerating/decelerating ramps that feel more natural for amplitude envelopes.

**Mode switch**: NORM fires the full ADSR shape once per gate/trigger. GATE loops continuously but only while a gate signal is present. LOOP runs continuously regardless of gate input.

**Punch switch**: When on, injects a brief voltage spike at the start of the attack — reinforces percussive transients and adds initial snap.

## Inputs

| Jack | Description |
|---|---|
| GATE | Gate input — triggers attack on rising edge; sustains while high; triggers release on falling edge |
| TRIGGER | Trigger input — fires a one-shot attack/decay pass regardless of gate length |
| CV IN | CV input for output level — scaled by the LEVEL knob |

## Outputs

| Jack | Description |
|---|---|
| ENV OUT 1 | First envelope output |
| ENV OUT 2 | Second envelope output (identical to Env Out 1) |

Both outputs fire simultaneously — use them to modulate two different destinations from a single envelope.
