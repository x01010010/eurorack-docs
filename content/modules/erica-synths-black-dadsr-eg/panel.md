# Panel & I/O

## Gate Delay Section

| Element | Description |
|---|---|
| GATE IN | Gate input — feeds the delay section |
| DELAY | Knob — sets the gate delay time (up to ~0.7 s) |
| DELAYED GATE OUT | Outputs the delayed gate signal; also normalled to the ADSR gate input |

The gate delay is an independent functional block. A gate arrives at GATE IN, waits for the duration set by DELAY, then the delayed gate emerges from DELAYED GATE OUT and simultaneously triggers the ADSR section.

## ADSR Controls and CVs

Each stage has a dedicated knob and a CV input with attenuator:

| Stage | Knob | CV Range | Notes |
|---|---|---|---|
| ATTACK | A | ±5 V | 0–2.5 s (up to 4.4 s with max CV) |
| DECAY | D | ±5 V | 0–5 s (up to 12 s with max CV) |
| SUSTAIN | S | ±5 V | Sustain level 0–10 V |
| RELEASE | R | ±5 V | 0–4.5 s (up to 10 s with max CV) |

## Inputs

| Jack | Description |
|---|---|
| GATE IN | Gate input to the delay section |
| A CV | CV input for Attack time |
| D CV | CV input for Decay time |
| S CV | CV input for Sustain level |
| R CV | CV input for Release time |

## Outputs

| Jack | Description |
|---|---|
| DELAYED GATE OUT | Gate output after delay stage |
| ENV OUT | Envelope output (0–10 V) |

## Controls

| Control | Description |
|---|---|
| GATE button | Manual gate — triggers the envelope by hand |
| LOOP switch | Enables looping mode — envelope cycles continuously after each release |
