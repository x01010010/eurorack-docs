# Panel & I/O

## Controls

| Control | Description |
|---|---|
| VCO OFFSET | Sets the lowest VCO frequency (the VCO frequency at 0 V CV) |
| VCO RANGE | 3-position switch: selects low / mid / high frequency range |
| PHASE COMP. | 3-position switch: selects PC1 (XOR), PC2 (RS flip-flop), or PC3 (digital memory network) |
| LOW PASS FREQ | Sets the low-pass filter frequency; lower settings give smoother CV (more portamento), higher settings allow faster tracking (more jitter) |
| LOCK LED | LED indicator — illuminates when locked (only active when PC2 is selected) |

## Inputs

| Jack | Description |
|---|---|
| IN 1 (Signal In 1 / PC In 1) | Phase comparator input 1 — normally carries the internal VCO output (normalization breakable) |
| IN 2 (Signal In 2) | External signal input — the reference frequency to track. Connected via 1 kΩ + Zener protection (see notes) |
| VCO CV | External CV input for the internal VCO (linear response). Plugging in breaks the LPF → VCO normalization |

## Outputs

| Jack | Description |
|---|---|
| VCO RECT OUT | Internal VCO rectangle output |
| PC OUT | Phase comparator output (digital low/high/tristate) |
| LPF OUT | Low-pass filter output — the smoothed control voltage (also drives VCO via normalization) |

## Normalized Connections

All standard PLL connections are pre-wired via normalized (switched) sockets. Inserting a cable into any jack breaks the corresponding normalization:

- LPF OUT → VCO CV (normalization: LPF drives the internal VCO)
- VCO RECT OUT → IN 1 (normalization: internal VCO feeds the phase comparator)

## Technical Notes

- **JP3 / JP4 jumpers**: select DC coupling (jumper installed) or AC coupling (jumper removed) for Signal In 1 (JP3) and Signal In 2 (JP4) respectively. DC coupling is required for very low frequency operation; AC coupling allows direct connection of audio signals with DC offset.
- **IN 2 Zener protection**: the In 2 input is connected via a 1 kΩ series resistor to a 5 V Zener diode to protect the PLL chip (4046). This may clip or distort the input signal. If the same signal is used elsewhere in the patch, insert a buffer (e.g. A-180-3 or A-180-4) before branching to **A-196**.
