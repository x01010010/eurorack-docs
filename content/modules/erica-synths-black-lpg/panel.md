# Panel & I/O

## Controls

| Control | Type | Function |
| --- | --- | --- |
| OFFSET | Knob | Sets the VCF cutoff frequency (in VCF/VCF+VCA modes) or VCA offset (in VCA mode). |
| RESONANCE | Knob | Controls resonance depth of the low-pass filter. No effect in VCA-only mode. |
| DECAY | Knob | Sets the decay time of the built-in envelope generator (0–4 seconds). |
| CV | Knob (attenuator) | Scales the incoming CV signal applied to offset/cutoff. |
| MODE | Switch/CV | Selects operating mode: VCF, VCF+VCA, or VCA. Also CV-addressable. |
| OVERDRIVE | Toggle switch | Engages resonance overdrive for aggressive, saturated self-oscillation. |

## Inputs

| Jack | Function |
| --- | --- |
| IN | Audio signal input. |
| CV | Control voltage for cutoff/offset, scaled by the CV attenuator knob. |
| MODE CV | Voltage control over mode selection (VCF / VCF+VCA / VCA). |
| DECAY CV | Voltage control over envelope decay time. |
| TRIG | Trigger/gate input for the built-in decay envelope. Fires the envelope on rising edge. |

## Outputs

| Jack | Function |
| --- | --- |
| OUT | Processed audio output (10 Vpp). |
| EG OUT | Envelope generator CV output — sends the decay envelope to other modules. |

## Panel Notes

- The OFFSET knob interacts with the selected mode: in VCF mode it sets the filter's base cutoff frequency; in VCA mode it sets the base amplitude level; in VCF+VCA mode it controls both simultaneously.
- The overdrive switch only affects the resonance circuit — it doesn't clip the audio input itself.
- The TRIG input responds to gates of any length; the decay envelope always completes its full cycle regardless of gate duration.
