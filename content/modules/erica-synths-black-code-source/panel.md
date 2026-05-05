# Panel & I/O

## Controls

| Control | Type | Function |
| --- | --- | --- |
| RATE | Large knob | Sets the internal clock rate. Low values (CCW): slow stepped CV output. High values (CW): audio-rate digital noise. |
| X | Knob | Selects the X-axis polynomial (1–16). Combined with Y, defines the polynomial feedback register used to generate the sequence. |
| Y | Knob | Selects the Y-axis polynomial (1–16). |
| S | Knob | Sets the starting point of the current polynomial sequence — effectively a "rewind" or offset into the pseudo-random chain. |
| MODE | 3-position switch | Selects one of three generation modes, each yielding a fundamentally different character of noise and CV. |
| X CV attenuator | Knob | Scales incoming X CV input. |
| Y CV attenuator | Knob | Scales incoming Y CV input. |
| S CV attenuator | Knob | Scales incoming S CV input. |

## Inputs

| Jack | Function |
| --- | --- |
| CLOCK IN | External clock input. Replaces the internal RATE clock when patched; RATE knob has no effect (except for freeze at a specific position). |
| X CV | CV control over X polynomial selection (scaled by X CV attenuator). Range: −10 V to +10 V. |
| Y CV | CV control over Y polynomial selection (scaled by Y CV attenuator). |
| S CV | CV control over sequence start point S (scaled by S CV attenuator). |
| S TRIG | Dual-purpose: trigger/gate input to reset the sequence to the S position, OR audio input for external signal processing / bitcrushing. Accepts signals from full-bandwidth audio to single trigger pulses. |

## Outputs

| Jack | Function |
| --- | --- |
| OUT A | First digital noise / random CV output. −5 V to +5 V (or 0–+10 V — see Panel Notes). |
| OUT B | Second digital noise / random CV output, derived from the same polynomial but producing a different correlated sequence. |

## Panel Notes

- Default output is bipolar (−5 V to +5 V). A jumper on the PCB switches to unipolar (0 V to +10 V).
- The S TRIG input is tolerant of a wide input range — patching audio directly into it enables extreme bitcrushing and digital destruction effects.
- All CV inputs are protected against overvoltage (−10 V to +10 V range).
- The expander ribbon connector is on the rear of the module — remove the security jumper before attaching the CS Expander.
