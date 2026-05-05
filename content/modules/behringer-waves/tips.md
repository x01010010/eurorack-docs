# Tips & Tricks

## Practical

- **Watch the LED colors.** Each button's bicolor LED tells you exactly what state WAVES is in — green / orange / red on the FREQUENCY RANGE, MODE, and RELATIONSHIP buttons. If the patch sounds wrong, glance at the LEDs first.
- **Attenuverters are your friend.** Every CV input has one. CCW is invert, center is silent, CW is positive scale. They prevent the very common "why does my LFO blow this thing up" problem.
- **The FM attenuverter doubles as fine tune** when nothing is patched into FM. Useful for tuning at audio rate.
- **CLOCK input has priority.** If you patch CLOCK and then wonder why FREQUENCY no longer changes pitch, that's why — FREQUENCY now sets the clock div/mult ratio instead.

## Sonic

- **For thick chords at audio rate**, combine RELATIONSHIP = Frequency Ratio with the 4 outputs summed. The detune is harmonic, not random — it produces actual intervals rather than chorus-like wash.
- **Phase-offset modulation makes everything feel sequenced**, even with a single static LFO patched. Try it on a drum bus's effects sends.
- **Crossfade RELATIONSHIP turns SHIFT/LEVEL into a four-way modulation router** — handy for live performance morphing without an additional crossfader module.
- **Wavefolder gets aggressive fast.** SMOOTHNESS past about 2 o'clock starts adding very strong harmonics — back it off if the signal starts clipping downstream.

## Workflow

- **Use AD mode as an envelope generator with a built-in shape control.** SHAPE on AD mode is the equivalent of a per-segment curve setting on most envelope generators.
- **For Tides-style "tidal" modulation**, set MODE cyclic, RELATIONSHIP phase offset, FREQUENCY slow. Patch outputs 1 and 4 to a stereo panner — the result is a gently breathing stereo movement.
- **The four outputs love being summed.** Feed them through a mixer at low levels for an instant complex modulation source that you can then send anywhere.

## Hardware

- **Behringer SWING** is the suggested V/OCT keyboard pairing in the official documentation, but any calibrated 1 V/oct source will work — the V/OCT input range is -3 V to +5 V.
- **DC-coupled outputs** mean the four outputs work equally well as audio and as CV. You can pipe an oscillator output straight through SMOOTHNESS as a wavefolder.

## Open-Source Heritage

WAVES is based on Mutable Instruments' open-source [Tides 2 design](https://pichenettes.github.io/mutable-instruments-documentation/modules/tides/manual/). The original manual is worth reading for deeper conceptual context — particularly Émilie Gillet's notes on time-domain vs frequency-domain interpretation of the same signal.
