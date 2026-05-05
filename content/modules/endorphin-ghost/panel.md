# Panel & I/O

## Knobs

| Knob | Function |
| --- | --- |
| PRE-VCA | Input amplitude control for the incoming stereo signal. Normalled to +5 V (full open) with no CV patched. |
| TONE/GAIN | Tilt EQ: CCW boosts lows, CW boosts highs, 12 o'clock is flat. Hold ROUTING and turn for additional input gain boost. |
| DISTORTION | Distortion amount. Summed with DISTORTION CV input. |
| FREQUENCY | Filter cutoff frequency. |
| CUTOFF CV | Polarizer/attenuverter for the VCF CV input. |
| DELAY | Delay dry/wet mix. Also scales the DELAY DRY/WET CV input. |
| REPEATS/TONE | Delay feedback amount; high settings approach self-oscillation. Hold ROUTING for delay tone control. |
| TIME/DIV | Delay time (audio rate to 2.5 s). Acts as clock divider when external clock is patched. |
| REVERB | Reverb dry/wet mix. Also scales the REVERB DRY/WET CV input. |
| TAIL/PREDELAY | Reverb decay time. Hold ROUTING to adjust reverb pre-delay. |
| RESONANCE | Filter resonance. Bipolar in comb filter mode (CCW = negative comb, CW = positive). |
| SIDECHAIN | Sidechain/envelope release time (0–5 s). Hold ROUTING to set ducking depth. |
| COMPRESSOR | Compression amount. Presets tuned for ambient (12 o'clock) and drums (full CW). |
| VOLUME/DRIVE | Final output volume. Adds analogue-style saturation past approximately 3 o'clock. |

## Buttons

| Button | Primary Function | Shift Function (hold ROUTING) |
| --- | --- | --- |
| ROUTING | Cycles through 3 effect chain orderings | Acts as shift key for secondary knob functions |
| TAP/TAPS | Tap tempo for delay | Cycles stereo tap patterns: LRLR, LRRL, STEREO |
| HOLD/REVERSE | Freezes reverb buffer | Activates reverse reverb algorithm |
| BPF/COMB | Cycles filter type: LP/HP → Band-pass → Comb | — |

## Inputs

| Jack | CV Range | Function |
| --- | --- | --- |
| IN 1 | Audio | Left stereo input. Normalled to IN 2 when IN 2 is unpatched. |
| IN 2 | Audio | Right stereo input. |
| PRE-VCA CV | 0–+5 V | Controls input amplitude. |
| DISTORTION CV | 0–+5 V | Adds to DISTORTION knob position. |
| VCF CV | −5–+5 V | Filter cutoff CV (scaled by CUTOFF CV knob attenuverter). |
| DELAY DRY/WET CV | 0–+5 V | Delay mix (scaled by DELAY knob). |
| REPEATS CV | 0–+5 V | Delay feedback amount. |
| TIME CV | −5–+5 V | Delay time with 1V/oct tracking. |
| CLOCK IN | 0–+5 V | External clock for delay tempo. |
| REVERB DRY/WET CV | 0–+5 V | Reverb mix (scaled by REVERB knob). |
| TAIL CV | 0–+5 V | Reverb decay time. |
| RESONANCE CV | 0–+5 V | Filter resonance CV. |
| FREEZE | 0–+5 V | Gate/trigger to freeze (hold) reverb buffer. |
| SIDECHAIN TRIG | 0–+5 V | Trigger for sidechain ducking envelope. |
| COMPRESSOR CV | 0–+5 V | Compressor amount. |
| POST-VCA CV | 0–+5 V | Final output volume CV. |

## Outputs

| Jack | Function |
| --- | --- |
| OUT 1 | Left stereo audio output (±5 V typical). Supports TRS for pseudo-balanced connection. |
| OUT 2 | Right stereo audio output (±5 V typical). |
| ENV OUT | 0–+5 V envelope output triggered from SIDECHAIN TRIG input. |

## LEDs

| LED | Function |
| --- | --- |
| CLIP | Lights when clipping occurs at the distortion stage. |
| ENV DEPTH | Brightness shows internal envelope level. Also indicates sidechain ducking depth when adjusted. |
| ROUTING | Indicates current routing order (off / half / full brightness). |
