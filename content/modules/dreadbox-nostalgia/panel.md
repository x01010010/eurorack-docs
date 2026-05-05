# Panel & I/O

## Controls

| Control | Description |
|---|---|
| TIME | Sets the delay time for all three stages simultaneously. Clockwise increases delay from approximately 30 ms to 1 s. |
| FEEDBACK 1 | Regeneration around the first two delay stages. Lower values give a tight early-reflection character; higher values produce denser buildup in the first two stages before signal reaches the third. |
| FEEDBACK 2 | Regeneration around the full three-stage chain. Increasing this toward maximum creates self-oscillating, runaway feedback — the signal loops through all three stages and grows with each pass. |
| LFO RATE | Speed of the internal LFO that modulates delay time. Slow rates produce subtle pitch drift and chorus; faster rates create vibrato and warble. |
| LFO DEPTH | Amount of delay-time modulation from the internal LFO. At minimum the LFO has no audible effect; at maximum it produces a pronounced wobble. |

## Inputs

| Jack | Level | Description |
|---|---|---|
| IN | Modular (+/−5 V) | Primary audio input. Accepts standard Eurorack signal levels. |
| EXT IN | Instrument | Padded input for guitar, bass, or keyboard. Bypasses the need for a separate attenuator. |
| CV | 0–5 V | Voltage control over delay time. CV sums with the TIME knob position. |

## Outputs

| Jack | Description |
|---|---|
| TAP 1 OUT | Output after the first delay stage. Signal level is approximately half the input level. Useful as an early echo or a dry-ish wet signal for blending. |
| TAP 2 OUT | Output after the second delay stage. Also approximately half level. Provides a mid-chain tap for rhythmic offset or stereo effects. |
| OUT | Full three-stage processed output at normal modular level. |

> **Note:** TAP 1 and TAP 2 outputs are approximately 6 dB lower than the main input level. Compensate with a VCA or mixer if matching levels with the main output.
