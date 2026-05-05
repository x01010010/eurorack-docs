# Panel & I/O

## Controls

| Control | Type | Function |
| --- | --- | --- |
| CV 1 (steps 1–8) | Knobs ×8 | CV value for each step in channel 1 |
| CV 2 (steps 1–8) | Knobs ×8 | CV value for each step in channel 2 |
| TEMPO | Knob | Internal clock rate |
| DELAY | Knob | Introduces a rhythmic delay/offset between the two CV channels |
| GATE TIME | Knob | Sets the duration of the output gate relative to the clock period |
| STEP NUMBER | Switch/Knob | Selects how many steps are active (1–8 per channel) |
| MODE | Switch | Selects playback direction/mode |
| SERIES | Switch | Links channel 1 and 2 into a single 16-step sequence |

## Inputs

| Jack | Function |
| --- | --- |
| EXT CLOCK | External clock input — overrides internal TEMPO |
| RESET | Returns sequencer to step 1 on rising edge |
| START/STOP | Gate high = run; gate low = stop |

## Outputs

| Jack | Function |
| --- | --- |
| CV1 | CV output for channel 1 (quantised to step knob positions) |
| CV2 | CV output for channel 2 |
| GATE | Gate output — high for duration set by GATE TIME, low between steps |
| TRIG | Short trigger pulse output at each step |
