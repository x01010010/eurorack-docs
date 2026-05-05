# Modes

## RATE: CV vs. Noise Continuum

The RATE knob is not a simple mode switch — it continuously morphs the character of the outputs:

- **Low RATE (CCW)**: the polynomial calculation clocks slowly, producing stepped random CV at OUT A and OUT B. Useful as a dual sample-and-hold voltage source for modulation.
- **Mid RATE**: the stepping becomes faster and harder to distinguish from continuous motion — a blurred, sweeping CV or low-frequency noise.
- **High RATE (CW)**: audio-rate clocking produces digital noise with a tonal character determined by the X/Y polynomial. Different polynomials produce noise with different frequency spectra — from white-ish to distinctly pitched.

## MODE Switch

The three-position MODE switch fundamentally changes the polynomial feedback algorithm:

**Mode 1** — Standard pseudo-random sequence generation. Outputs a long, seemingly random sequence of voltages determined by the X/Y polynomial selection. The most "neutral" noise mode, well-suited to dual CV and general noise applications.

**Mode 2** — Alternative polynomial configuration. Produces a different set of sequence lengths and patterns. Some X/Y combinations in this mode yield shorter repeating sequences (useful for rhythmic modulation) while others produce very long non-repeating runs.

**Mode 3 (ZX Mode)** — Encodes the output in the exact format of a ZX Spectrum home computer tape-loading signal. Produces a distinctly tonal, biphase-mark-coded sound that changes character with X/Y selection. At mid RATE, it recreates the melodic quality of 8-bit computer loading sounds; set RATE to slightly below 3 o'clock for the classic "fast loader" protection sound.

## Sequence Rewind

The S knob sets a starting offset into the current polynomial sequence. Sending a trigger to S TRIG resets the sequence to that point — turning a long pseudo-random run into a repeatable phrase. Combined with CV over S, this enables complex "controlled randomness" where the sequence origin shifts over time but each trigger resets to a predictable position.

## External Clock

When a signal is patched to CLOCK IN, the internal rate is bypassed and the polynomial advances on each incoming clock pulse. Gate or trigger signals work equally well. This enables tempo-synced stepped CV or noise bursts.
