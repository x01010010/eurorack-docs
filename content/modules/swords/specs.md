# Specifications

## Physical

| | |
| --- | --- |
| Format | Eurorack |
| Width | 18 HP |
| Depth | 52 mm |

## Power

| Rail | Draw |
| --- | --- |
| +12 V | 150 mA |
| -12 V | 140 mA |
| +5 V | 0 mA |

## Filter (per channel, ×2)

| | |
| --- | --- |
| Type | State-variable, 12 dB / octave |
| Core | V2164 quad VCA chip |
| Modes | Continuously variable: low-pass, band-pass, high-pass |
| Resonance | Off to self-oscillation |
| Self-oscillation tracking | Accurate to 1 V/octave |
| Low-frequency compensation | Yes, supports stable resonance at low frequencies |

## Drive (per channel, ×2)

| | |
| --- | --- |
| Range | Soft clipping (CCW response) to two-stage wavefolding (CW response) |
| Unity gain | ~11 o'clock on DRIVE control |

## Routing

| Position | Topology |
| --- | --- |
| Fully CCW | Single (one filter only) |
| 12 o'clock | Parallel |
| Fully CW | Series (filter 1 → filter 2, 24 dB cascade in matched LP) |
| Continuously variable | Yes — can be morphed via knob or CV |

## Inputs (per filter)

| Jack | Type |
| --- | --- |
| SIG IN | 3.5 mm TS, AC coupled |
| DRIVE CV IN | 3.5 mm TS, DC coupled, 0 V to +8 V |
| MODE CV IN | 3.5 mm TS, DC coupled, ±8 V |
| FREQ CV IN | 3.5 mm TS, DC coupled, ±8 V (attenuverter on panel) |
| RES CV IN | 3.5 mm TS, DC coupled, ±8 V (attenuverter on panel) |
| V/OCT | 3.5 mm TS, DC coupled, 1 V/oct |

## Inputs (shared)

| Jack | Type |
| --- | --- |
| ROUTING CV IN | 3.5 mm TS, DC coupled (attenuverter on panel) |

## Outputs

| Jack | Type | Notes |
| --- | --- | --- |
| FILTER 1 OUT | 3.5 mm TS, DC coupled, 1 kΩ | Per-filter output |
| FILTER 2 OUT | 3.5 mm TS, DC coupled, 1 kΩ | Per-filter output |
| MAIN OUT | 3.5 mm TS, DC coupled, 1 kΩ | Mixed output, follows current routing |

## SHIFT button

Couples filter 2 cutoff to filter 1. Filter 2 FREQ knob becomes a transpose offset (12 o'clock = unison). LED indicates state.
