# Specifications

## Physical

| | |
| --- | --- |
| Format | Eurorack |
| Width | 16 HP |
| Depth | 44 mm |

## Power

| Rail | Draw |
| --- | --- |
| +12 V | 50 mA (some sources cite 40 mA) |
| -12 V | 50 mA (some sources cite 40 mA) |
| +5 V | 0 mA |

## Envelope (×2)

| | |
| --- | --- |
| Attack range | 1.5 ms to 7.5 s |
| Decay range | 4 ms to 15 s |
| Sustain range | ±10 V |
| Release range | 4 ms to 15 s |
| Manual gate | Front-panel button per envelope |

## Envelope I/O (per envelope)

| Jack | Direction | Type |
| --- | --- | --- |
| EXT GATE | In | 3.5 mm TS, DC coupled |
| ENV OUT (×2) | Out | 3.5 mm TS, DC coupled, +10 V peak, 1 kΩ impedance |
| ENV INV OUT | Out | 3.5 mm TS, DC coupled, -10 V peak |

## LFO

| | |
| --- | --- |
| Waveforms | Sine, triangle, pulse, sawtooth, reverse sawtooth |
| Range LOW | 0.05 Hz to 1.8 Hz |
| Range MID | ~1 Hz to 10 Hz |
| Range HIGH | ~10 Hz to 30 Hz |
| Delay range | ~0 to 7 seconds |

## LFO I/O

| Jack | Direction | Type |
| --- | --- | --- |
| FREQ CV IN | In | 3.5 mm TS, DC coupled, 50 kΩ impedance, max +10 V |
| TRIGGER IN | In | 3.5 mm TS, DC coupled |
| LFO OUT (upper) | Out | 3.5 mm TS, DC coupled, 1 kΩ, 10 V p-p / 1 V p-p switchable |
| LFO OUT (lower) | Out | Inverted, same spec |

## Notes

The 140 has **no CV control of envelope ADSR parameters** — these are slider-only. The rear panel has a jumper to disable the LFO re-trigger behavior if you prefer the LFO to ignore the TRIGGER input.
