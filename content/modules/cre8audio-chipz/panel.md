# Panel & I/O

## Chip1 — Oscillator 1

| Element | Description |
|---|---|
| PITCH 1 | Coarse pitch knob for Chip1 |
| WAVE 1 | Waveform morph knob — continuously sweeps sine → triangle → saw → square → noise |
| FILTER | Filter frequency knob — integrated lowpass darkens Chip1 output |
| V/OCT 1 | 1 V/oct pitch CV input |
| FILTER CV | CV input for filter frequency (positive voltages only) |
| CHIP1 OUT | Audio output |

## Chip2 — Oscillator 2

| Element | Description |
|---|---|
| PITCH 2 | Coarse pitch knob for Chip2 |
| WAVE 2 | Waveform morph knob — continuously sweeps sine → triangle → saw → square → noise |
| WIDTH | Pulse width (duty cycle) knob — affects waveform shape across all waveforms |
| V/OCT 2 | 1 V/oct pitch CV input |
| WIDTH CV | CV input for pulse width (positive voltages only) |
| CHIP2 OUT | Audio output |

## LFO

| Element | Description |
|---|---|
| RATE | LFO speed knob — controls LFO Out1 rate; LFO Out2 always runs at 4× |
| LFO WAVE | LFO waveform morph knob — sine → triangle → saw → square → noise/random |
| LFO TRIGGER | Trigger input — resets/retriggers the LFO cycle |
| LFO OUT1 | Slow LFO output (75.75 mHz – 2 Hz), 0–5 V unipolar |
| LFO OUT2 | Fast LFO output (370 mHz – 10 Hz, 4× Out1 speed), 0–5.8 V unipolar |

## Important Notes

- FILTER CV and WIDTH CV inputs accept **positive voltages only** (0–10 V input range for oscillators). Patching negative voltages into either causes erratic behaviour on all outputs including the LFOs.
- LFO Out2 runs at 4× the speed of LFO Out1 regardless of any other setting — this is a fixed ratio, not adjustable.
- Both LFO outputs are unipolar. They cannot swing negative and are not centred at 0 V.
