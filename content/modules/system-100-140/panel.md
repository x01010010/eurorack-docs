# Panel & I/O

The panel is divided into three blocks: **Envelope 1** (top), **Envelope 2** (middle), and the **LFO** (bottom).

## Envelope sections (×2)

Each envelope section is identical.

| Control | Function |
| --- | --- |
| MANUAL GATE | Press and hold to open the gate manually |
| ATTACK (slider) | Time to reach peak — 1.5 ms to 7.5 s |
| DECAY (slider) | Time to fall from peak to sustain — 4 ms to 15 s |
| SUSTAIN (slider) | Hold level — ±10 V |
| RELEASE (slider) | Time to fall from sustain to zero — 4 ms to 15 s |

## Envelope I/O (per envelope)

| Jack | Direction | Notes |
| --- | --- | --- |
| EXT GATE | In | 3.5 mm TS, DC coupled. Hold high for sustain. |
| ENV OUT (×2) | Out | Two positive copies of the envelope (~+10 V peak) |
| ENV INV OUT | Out | Inverted envelope (~-10 V peak) |

The two positive outputs are normalled together at the buffer — useful for sending the same envelope to a VCA and a filter without a multiple.

## LFO section

| Control | Function |
| --- | --- |
| FREQ RANGE | 3-position switch: LOW (0.05–1.8 Hz) / MID / HIGH (~30 Hz top) |
| FREQ (slider) | Frequency within the selected range |
| DELAY (slider) | Time after trigger before LFO resumes (0–7 s) |
| WAVEFORM | Rotary selector: sine, triangle, pulse, sawtooth, reverse sawtooth |
| OUTPUT LEVEL | Switch: 10 V p-p (×1) or 1 V p-p (×1/10) |

## LFO I/O

| Jack | Direction | Notes |
| --- | --- | --- |
| FREQ CV IN | In | External CV controls LFO frequency |
| TRIGGER IN | In | Gates the LFO off until end of trigger; works with DELAY for phase-lock |
| LFO OUT (upper) | Out | Non-inverted |
| LFO OUT (lower) | Out | Inverted |

A jumper on the rear panel disables the re-trigger behavior if you don't want the LFO to mute when a trigger arrives.
