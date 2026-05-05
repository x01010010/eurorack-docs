# Modes

**DIV** has no modal switch. Its behavior is determined by the RATE knob positions and CV inputs.

## Division

When the RATE knob is set to a value greater than 1 with a clock at the input, **DIV** outputs one pulse for every N input pulses. At ÷2 it halves the tempo; at ÷16 it fires once every 16 incoming clock pulses. This is the primary use case — turning a master clock into slower sub-divisions for gates, envelopes, or stepped modulation.

## Multiplication

At ×2 and higher, **DIV** outputs multiple pulses per incoming clock pulse, effectively multiplying the tempo. At ×16 it outputs 16 pulses for every one input pulse. This is useful for generating faster triggers from a slow clock — 16th-note hi-hats from a quarter-note clock, for example.

## Unity (×1 / ÷1)

At rate 1, the output mirrors the input clock exactly. This is useful for splitting a clock to two destinations with different rates on each channel, keeping one channel locked to the original tempo.

## Voltage-Controlled Rate

With CV patched, the current rate can shift dynamically. A step sequencer outputting different voltages per step changes the division/multiplication each step, creating irregular, non-repeating rhythmic patterns from a uniform clock.

## Audio-Rate Division (Experimental)

Patching an audio-frequency signal into CLK and setting a division rate turns **DIV** into a crude sub-oscillator or frequency divider. The output is a square wave at the divided frequency, useful for chiptune-style tones and digital noise effects.
