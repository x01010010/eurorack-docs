# Panel & I/O

## Controls

| Control | Description |
|---|---|
| RATE A | Sets the division/multiplication factor for channel A. Stepping through detents selects 1, 2, 3, 4, 5, 6, 7, 8, or 16. |
| RATE B | Sets the division/multiplication factor for channel B, independently of channel A. |

## Inputs

| Jack | Description |
|---|---|
| CLK | Clock input, shared by both channels. Accepts a gate or trigger signal. |
| CV A | Voltage control over channel A's rate. Shifts the current rate selection up or down. |
| CV B | Voltage control over channel B's rate. |

## Outputs

| Jack | Description |
|---|---|
| OUT A | Clock output for channel A at the selected division/multiplication rate. |
| OUT B | Clock output for channel B at the selected division/multiplication rate. |

## Panel Notes

- Both channels share the single CLK input — only one clock source is needed for both outputs.
- CV inputs interact with the RATE knob position; the knob sets a base value and CV offsets from it.
- Outputs are gate/pulse signals at the divided or multiplied rate.
