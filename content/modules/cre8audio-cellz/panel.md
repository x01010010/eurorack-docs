# Panel & I/O

## Touch Pad Grid

| Element | Description |
|---|---|
| PADS 1–16 | 16 capacitive touch pads in a 4×4 grid — touch to output stored CV values |

Each pad stores two values: one for CV Out 1 and one for CV Out 2. Values are programmed by the user and stored in memory.

## Controls

| Control | Description |
|---|---|
| SPEED | Arpeggiate speed knob — sets how fast CELLZ steps between held/active pads |
| QUANTIZE switch | Toggles between semi-tone quantized mode and free-scale (unquantized) mode |

## Inputs

| Jack | Description |
|---|---|
| LFO TRIG 1 | LFO trigger input 1 — advances the active pad at the rate of the incoming signal |
| LFO TRIG 2 | LFO trigger input 2 — advances the active pad at a second rate (Chipz LFO Out2 runs 4× Out1) |

Minimum voltage to trigger high: 0.8 V. Designed to receive the Chipz LFO Out1 (Trig 1) and LFO Out2 (Trig 2).

## Outputs

| Jack | Description |
|---|---|
| CV OUT 1 | First CV output — outputs the stored CV 1 value for the active pad |
| CV OUT 2 | Second CV output — outputs the stored CV 2 value for the active pad |
| GATE OUT | Gate output — fires high when a pad is active |

## Voltage Ranges

| Mode | CV Out 1 | CV Out 2 |
|---|---|---|
| Free scale (unquantized) | 0–10 V | 0–10 V |
| Quantized | ~2–4 V | ~4–6 V |

In quantized mode the pitch output is confined to a narrower range (~2 octaves centred in the usable V/Oct range). In free-scale mode the full 0–10 V span is available on both outputs.

## Programming Pads

To program a pad, enter programming mode (consult the Cellz video manual for the exact button sequence), then set the desired CV value for Out 1 and Out 2 on that pad. Values are stored permanently in non-volatile memory.
