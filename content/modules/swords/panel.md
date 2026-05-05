# Panel & I/O

The panel is roughly mirrored — filter 1 on the left, filter 2 on the right, shared routing and main output in the center. The descriptions below apply per-filter unless noted.

## Per-filter controls

| Control | Function |
| --- | --- |
| DRIVE | Input gain (0 dB at ~11 o'clock); CW increases distortion or wavefolding |
| RESPONSE | Drive character: CCW = soft clipping, CW = two-stage wavefolding |
| MODE | Continuously morphs low-pass (CCW) → band-pass (12 o'clock) → high-pass (CW) |
| FREQ | Filter cutoff frequency |
| RES | Resonance — self-oscillates at top with low-frequency compensation |
| FREQ ATTENUVERTER | Bipolar attenuator for FREQ CV input |
| RES ATTENUVERTER | Bipolar attenuator for RES CV input |

## Per-filter inputs

| Jack | Direction | Notes |
| --- | --- | --- |
| SIG IN | In | Audio input, 3.5 mm TS |
| DRIVE CV IN | In | 0 V to +8 V, CV-controls drive amount |
| MODE CV IN | In | Modulates the LP/BP/HP morph |
| FREQ CV IN | In | Bipolar, scaled by FREQ attenuverter |
| RES CV IN | In | Bipolar, scaled by RES attenuverter |
| V/OCT | In | 1 V/oct tracking input — accurate when self-oscillating |

## Per-filter outputs

| Jack | Direction | Notes |
| --- | --- | --- |
| OUT | Out | Filter section output, 1 kΩ impedance |

## Routing section (shared)

| Control | Function |
| --- | --- |
| ROUTING | Continuously varies the routing topology — single / parallel / series |
| ROUTING CV ATTENUVERTER | Attenuates the routing CV input |
| ROUTING CV IN | Modulates routing topology under CV control |
| MAIN OUT | The mixed output of both filters according to current routing |

## SHIFT button

Press **SHIFT** to couple the cutoff frequency of filter 2 to filter 1. With SHIFT engaged, the filter 2 FREQ knob acts as a transpose offset:

- **12 o'clock** = direct coupling (both filters at the same frequency)
- **CCW** = filter 2 transposed down relative to filter 1
- **CW** = filter 2 transposed up relative to filter 1

The internal LED on the SHIFT button lights when the function is active. Modulating filter 1's FREQ CV will move both filters together while preserving the offset — extremely useful for paraphonic patches and parallel band-splits.
