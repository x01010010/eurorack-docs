# Modes

## Exponential vs Linear Curve

The CURVE switch per channel selects the VCA's response characteristic:

| Setting | Behaviour | Best For |
| --- | --- | --- |
| Exponential (EXP) | Gain increases exponentially with CV — mirrors human hearing | Audio signals, natural-sounding envelopes |
| Linear (LIN) | Gain increases linearly with CV | CV mixing, precise control of modulation levels |

For audio VCA duties, exponential is almost always the right choice — it sounds like the volume is changing at a consistent rate even though the voltage is linear. For CV processing where you need predictable voltage scaling, use linear.

## CV Normalisation (Cascade)

If the CV input of a channel is unpatched, it is normalled from the channel above. This means:
- Patch one CV to channel 1's CV input with channels 2, 3, 4 unpatched → all four channels respond to the same CV.
- Patch CVs to channel 1 and channel 3 → channel 1+2 share CV 1, channels 3+4 share CV 3.
- Patch a CV to every channel → all four are fully independent.

## BOOST

The BOOST switch increases the maximum gain above unity. Use BOOST when the input signal is weak, or when you need gain above unity for mixing headroom. At normal Eurorack levels with no BOOST, the VCA operates around unity gain at full LEVEL + full CV.

## MIX as Voltage-Controlled Mixer

With four independent inputs and individual CV control per channel, the MIX output delivers a voltage-controlled mix. Set each LEVEL knob for the static mix and use CVs to dynamically fade voices in and out.
