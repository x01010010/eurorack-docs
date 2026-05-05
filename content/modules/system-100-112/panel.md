# Panel & I/O

The panel is symmetrical — two identical VCO sections stacked vertically. The descriptions below apply to both cores.

## Per-VCO controls

| Control | Function |
| --- | --- |
| RANGE | 5-position octave switch: 32′ / 16′ / 8′ / 4′ / 2′ |
| TUNE / PITCH | Continuous coarse pitch (~2 octave span) |
| PW | Manual pulse width offset, ±50% |
| MOD MANUAL | Attenuator for the summed CV mod input |
| PWM IN | CV input for pulse-width modulation |

## Per-VCO CV inputs

Three pitch CV inputs are summed at the input stage. All are 1 V/oct, ±10 V tolerant, summed into the exponential converter.

| Input | Notes |
| --- | --- |
| KBD CV IN 1 | Typically the keyboard or sequencer V/oct |
| MOD CV IN 2 | LFO, envelope, or audio-rate FM |
| MOD CV IN 3 | Second modulator with its own attenuverter via MOD MANUAL |

## Per-VCO outputs

Each VCO has dedicated waveform outputs:

| Output | Polarity | Level |
| --- | --- | --- |
| TRI OUT | Bipolar | ±5 V |
| SAW OUT | Unipolar | 0 V to +10 V |
| PULSE OUT | Unipolar | 0 V to +10 V |
| SYNC OUT | Pulse | Always outputs pulse, doubles as additional audio out |

## Sync

A switch between the two cores selects **WEAK** or **STRONG** sync. Patch VCO 1 SYNC OUT into VCO 2 SYNC IN (or vice versa) and engage the switch. Strong sync is a hard reset; weak sync is a softer phase pull that preserves more of the slave's harmonics.

## Cautions about waveform polarity

Sawtooth and pulse waveforms swing **0 V to +10 V** — these are unipolar with a DC offset. Some DC-coupled inputs elsewhere in your rack will overload if you patch two saws together raw. Mix through an attenuator or AC-coupled input.

Triangle is the only fully bipolar waveform, swinging ±5 V.
