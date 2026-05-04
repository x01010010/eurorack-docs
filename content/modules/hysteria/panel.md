# Panel & I/O

## Controls

| Control | Type | Function |
| --- | --- | --- |
| QUANTIZE | Button | Toggles the VC quantizer on/off. LED indicates active state. |
| CV | Knob | Attenuator for the CV input jack — scales external pitch modulation. |
| OCT | Slider | Sets octave (quantized mode) or coarse tune (unquantized mode). |
| SEMI | Slider | Sets semitone (quantized mode) or fine tune (unquantized mode). |
| WAVEFORM | Slider | Morphs continuously through 7 waveforms via the analog waveshaper. |
| PW | Slider | Adjusts pulse width of the pulse output from narrow to 50% square. |

## Inputs

| Jack | Function |
| --- | --- |
| 1V/OCT | Primary pitch input, 1 volt-per-octave tracking. |
| CV | Secondary pitch CV input, scaled by the CV knob attenuator. |
| OCT | CV input for octave/coarse-tune modulation. |
| SEMI | CV input for semitone/fine-tune modulation. |
| WAVEFORM | CV control over waveshaper position. |
| SYNC | Hard sync input — resets the oscillator phase on rising edge. |

## Outputs

| Jack | Function |
| --- | --- |
| PULSE | Dedicated pulse/square output (0–5 V). Usable as clock or sync source. |
| OUT | Main audio output (0–5 V) carrying the shaped waveform. |

## Panel Notes

- When the quantizer is **on**, the OCT slider steps through octaves and the SEMI slider steps through semitones.
- When the quantizer is **off**, OCT becomes a continuous coarse-tune control and SEMI becomes fine-tune — useful for micro-tonal work or detuning against another oscillator.
- All CV inputs are non-inverted (v1.1). Positive voltage raises pitch/value.
