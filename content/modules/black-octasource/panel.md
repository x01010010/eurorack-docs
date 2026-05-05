# Panel & I/O

## Controls

| Control | Type | Function |
| --- | --- | --- |
| RATE | Large knob | Sets LFO frequency (0.03–30 Hz). Clockwise increases rate with clockwise phase shift; counter-clockwise increases rate with counter-clockwise phase shift. At exactly 12 o'clock, the LFO freezes at its current output value. |
| WAVE | Knob | Selects the LFO waveform (Single mode) or rotates waveform assignments across outputs (Multi mode). Morphs smoothly between waveforms. |
| FM LEVEL | Knob | Attenuator for the FM IN input — sets the depth of external frequency modulation. |
| MULTI / SINGLE | Toggle switch | Selects operating mode. |

## Inputs

| Jack | Function |
| --- | --- |
| SYNC | External clock input. Locks LFO frequency to the incoming clock. When active, the RATE knob has no effect (except the 12 o'clock freeze position). |
| FM IN | Frequency modulation CV input. Scaled by the FM LEVEL knob. |
| WAVE CV | CV control over waveform selection. Accepts signals from another LFO, sequencer, or even a feedback patch from one of the Octasource's own outputs. Range: −5 V to +5 V. |
| PHASE CV | CV control over inter-output phase shift. At 0 V, outputs are evenly spaced 45° apart. CV adjusts the phase window around that 45° spacing per output. Range: −5 V to +5 V. |

## Outputs

| Jack | Function |
| --- | --- |
| 1–8 | Eight simultaneous LFO outputs (±5 V bipolar by default). Each has a bipolar LED indicator showing the current output level and polarity. |

## LEDs

Each of the eight outputs has a bipolar LED that illuminates to indicate current output voltage — positive (typically green) above zero, negative (typically red) below zero. Useful for visually confirming phase relationships and waveform shapes without an oscilloscope.

## Panel Notes

- **Bipolar to unipolar conversion**: set RATE to 12 o'clock, then flip the MULTI/SINGLE switch six times. The outputs switch between ±5 V and 0–+5 V. Repeat to revert.
- PHASE CV modulates phase within a ±45° window around the default 45° spacing — it shifts all outputs, not just one.
- FM IN is bipolar — negative CV decreases rate, positive CV increases it (within the 0.03–30 Hz range).
