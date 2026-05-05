# Panel & I/O

The module has two identical voice sections (Voice 1 top, Voice 2 bottom), each with the same controls and jacks.

## Controls (per voice, ×2)

| Control | Description |
|---|---|
| PARAM | Multi-function encoder. Short press cycles through parameter pages: **Decay**, **Volume**, **Pitch Offset**, **Sample Select**, **Loop**, **Reverse**. Rotate to adjust the selected parameter. |

### PARAM Pages

| Page | Range | Description |
|---|---|---|
| Decay | 10 ms – 10 s | Sets the decay of the internal ASR envelope applied to the sample output. |
| Volume | 0–100% | Sets the output level of this voice. |
| Pitch Offset | ±2 octaves | Transposes the sample pitch up or down, offset from the 1 V/oct CV input. |
| Sample Select | 1–32 | Selects the active sample within the current bank. Also addressable via META CV. |
| Loop | On / Off | Toggles continuous looping of the sample. |
| Reverse | On / Off | Toggles reversed sample playback. |

## Inputs (per voice, ×2)

| Jack | Description |
|---|---|
| GATE | Trigger or gate input. Rising edge starts playback; in ASR mode, the gate length controls the sustain portion. |
| PITCH | 1 V/oct pitch CV. Shifts playback speed/pitch relative to the sample's root. |
| META | CV input for sample and bank scanning. Sweeps through the available samples in the current bank (or across banks depending on configuration). |

## Outputs (per voice, ×2)

| Jack | Description |
|---|---|
| OUT | Mono audio output for this voice. |

## Panel Notes

- Voice 1 and Voice 2 outputs are separate mono jacks — combine in a mixer for stereo or layered use.
- The META input scans samples continuously as CV rises, enabling smooth timbre sweeps or CV-controlled sample selection per step.
- Bank switching is done via PARAM + button combination — consult the manual for the exact sequence.
