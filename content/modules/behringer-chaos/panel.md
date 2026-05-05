# Panel & I/O

## T Section Controls

| Control | Type | Function |
| --- | --- | --- |
| RATE | Knob | Internal clock rate (when no external clock) |
| BIAS | Knob | Probability distribution of triggers across T1/T2/T3 |
| JITTER | Knob | Amount of timing randomness added to the internal clock |

## X Section Controls

| Control | Type | Function |
| --- | --- | --- |
| SPREAD | Knob | Voltage spread/range of X outputs |
| STEPS | Knob | Quantisation — from fully smooth to stepped (scale-quantised) |
| FEEDBACK | Knob | Amount of internal feedback in the voltage generation algorithm — affects correlation between outputs |

## Global Controls

| Control | Type | Function |
| --- | --- | --- |
| LENGTH | Knob | Loop length — how many steps before the sequence repeats (1 = fully locked loop; max = no repetition) |

## Inputs

| Jack | Function |
| --- | --- |
| EXT CLOCK | External clock input — replaces internal RATE clock |
| EXT BIAS | CV over T section BIAS |
| EXT SPREAD | CV over X section SPREAD |
| EXT STEPS | CV over X section STEPS |

## Outputs

| Jack | Function |
| --- | --- |
| T1, T2, T3 | Gate/trigger outputs — rhythmically distributed based on RATE and BIAS |
| X1, X2, X3 | Random CV outputs — voltage controlled by SPREAD, STEPS, FEEDBACK |
| Y | Smoothed random CV derived from the T section clock (continuous, slow-moving) |
