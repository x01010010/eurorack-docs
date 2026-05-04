# Panel & I/O

The module provides two identical envelope channels arranged vertically. Each channel has the following controls and jacks.

## Controls (per channel)

| Control | Type | Function |
| --- | --- | --- |
| ATTACK | Knob | Sets the attack time (rise from 0 to peak). |
| DECAY | Knob | Sets the decay time (fall from peak to sustain level). |
| SUSTAIN | Knob | Sets the sustain level (held while gate is high). |
| RELEASE | Knob | Sets the release time (fall from sustain to 0 after gate ends). |
| GATE LENGTH | Knob | Sets the duration of the internal gate generator. Extends short triggers into full gates. |
| LOOP | Switch | Engages looping mode — envelope cycles continuously through ADSR. |
| GATE | Button | Manual gate — press to fire the envelope without an external signal. |

## Inputs (per channel)

| Jack | Function |
| --- | --- |
| GATE IN | Gate/trigger input. Rising edge starts the envelope; falling edge (or internal gate length expiry) begins the release stage. |
| GL CV | Control voltage for gate length — modulates the internal gate generator duration. |

## Outputs (per channel)

| Jack | Function |
| --- | --- |
| OUT | Envelope CV output (exponential, positive voltage). |

## Panel Notes

- The two channels are fully independent — they can run at different rates, different shapes, and different modes simultaneously.
- The GATE button is useful for auditioning envelope shapes without patching a gate source.
- When GATE LENGTH is fully counter-clockwise, the internal gate generator is effectively off and the module responds to the actual gate duration at GATE IN. Turning it up overrides short triggers with a longer internal gate.
- GL CV adds to the knob position — positive CV lengthens the gate, negative shortens it.
