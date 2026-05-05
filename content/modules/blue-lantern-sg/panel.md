# Panel & I/O

## Controls

| Control | Division | Interval |
|---|---|---|
| Knob 1 | ÷ (7th) | 7th note down from input pitch |
| Knob 2 | ÷ (7th + octave) | 7th note, one octave below input |
| Knob 3 | ÷2 | One octave below input |
| Knob 4 | ÷4 | Two octaves below input |

Each knob mixes its corresponding sub-harmonic division into the output. Turning a knob clockwise increases that layer's contribution. All four layers are summed to the output simultaneously — set any knob to zero to exclude that layer.

## Inputs

| Jack | Description |
|---|---|
| IN | Audio input — patch any waveform from a VCO (saw, square, triangle, or sine) |

## Outputs

| Jack | Description |
|---|---|
| OUT | Blended sub-harmonic mix output |

## Notes on Input Waveforms

**SG** accepts all common VCO waveforms:

- **Square wave** — the cleanest input for flip-flop division; the divided outputs are also clean squares
- **Saw wave** — produces rich, harmonically dense sub-harmonic layers
- **Triangle wave** — produces softer, less bright sub-harmonic content
- **Sine wave** — produces the cleanest, most fundamental sub-harmonic tones

The original VCO signal is not passed through the output. To mix the original VCO with the SG sub layers, use an external mixer module.
