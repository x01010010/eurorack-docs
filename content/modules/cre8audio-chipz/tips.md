# Tips

## Positive CV Only for Filter and Width

This is the most important operational note: FILTER CV and WIDTH CV inputs only handle positive voltages. If you patch a bipolar CV (e.g., an LFO centred at 0 V or a standard envelope with negative values) you risk sending negative voltage which causes both oscillators and the LFOs to go into unpredictable states. Use the CHIPZ LFO Out1/Out2 directly (0–5 V unipolar), or offset a bipolar signal with a utility module before patching to either of these inputs.

## The Noise Waveform Is an Endpoint, Not a Source

The noise position on the WAVE knob is the far end of the morph range. Dialling from square toward noise creates a transition through increasingly complex, degraded waveforms — this range is the most lo-fi and game-console-like territory on the module. Try stopping short of full noise for hybrid square-noise tones.

## Detuning for Classic Dual-Oscillator Chorus

CHIPZ's two oscillators are perfect for a classic detuned two-oscillator patch: feed the same V/Oct source to both, then detune PITCH 2 by a few cents. The slight frequency difference between the two produces a natural beating/chorus effect. Widen the interval for more dramatic beating; close it for subtle thickening.

## LFO Out2 at 4× Is Musically Useful

The fixed 4× ratio between LFO Out1 and Out2 means they produce rhythmically related modulation. If Out1 is at 1 Hz (one cycle per second), Out2 is at 4 Hz — four times per second. This is ideal for modulating two different parameters in a tempo-coherent way: slow filter sweep on Out1, faster PWM or pitch vibrato on Out2.

## Use a Utility Offset to Centre the LFO

Both LFOs are unipolar (0–5 V). If you need a bipolar LFO from CHIPZ (e.g. for pitch vibrato centred at 0 V, or for a CV destination that expects ±5 V), send the LFO through an attenuverter/offset module set to shift the signal down by −2.5 V, resulting in a −2.5 to +2.5 V bipolar signal.

## The Integrated Filter Is Not a Full VCF

Chip1's filter is a simple colour/tone control rather than a resonant VCF. It has no resonance and doesn't self-oscillate. Think of it as a built-in tone darkener, useful for taming the brightness of the saw and square waveforms or sculpting the noise output into coloured noise.

## LFO Trigger for Rhythmic Sequencing

Patching a clock or gate to the LFO TRIGGER input resets the LFO to the start of its cycle. This locks the LFO phase to your sequence — every bar or beat the LFO starts fresh. Useful for predictable filter sweeps or PWM shapes that repeat in time with the music rather than drifting freely.
