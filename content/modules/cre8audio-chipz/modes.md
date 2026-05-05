# Modes

## Waveform Morphing

Both oscillators use a single WAVE knob to continuously morph through five waveforms in this order: sine → triangle → sawtooth → square → noise. The morphing is smooth — intermediate positions blend adjacent waveforms, producing hybrid tones not available at the discrete endpoints. The noise position generates a lo-fi digital noise, not filtered white noise.

## Chip1 Filter Mode

With the FILTER knob set below maximum, the integrated filter darkens Chip1's output. It acts as a lowpass filter on whatever waveform is selected. FILTER CV modulates the cutoff in real time. Use an envelope into FILTER CV for a classic filter-sweep attack, or an LFO for cyclic timbral movement.

At maximum FILTER, the filter is fully open and Chip1 outputs the raw waveform. Turning down FILTER rolls off the high frequencies progressively.

## Chip2 Pulse Width Mode

WIDTH controls the duty cycle of Chip2's waveform. At 50% (centre) the waveform is symmetrical. As WIDTH changes, the shape becomes increasingly asymmetric — for square waves this is classic PWM; for other waveforms the effect is a more complex distortion of the cycle shape. WIDTH CV accepts positive-only voltages for live PWM control.

## LFO Cycling Mode

The LFO section operates independently of the oscillators. Set RATE and LFO WAVE to generate modulation. LFO Out1 and Out2 are always both active; Out2 is always 4× faster than Out1. This makes it natural to use both simultaneously — one for slow modulation, one for fast — with a musically coherent rate relationship.

With a trigger patched to LFO TRIGGER, the LFO resets its cycle on each trigger, locking its phase to an external clock or gate source.

## Chipz + Cellz (NiftyBUNDLE) Mode

**CHIPZ** was designed to pair with **Cellz**. Connect LFO Out1 to Cellz's LFO Trigger 1 input and LFO Out2 to Cellz's LFO Trigger 2 input. Cellz will use these signals to cycle through its pads at the two rates — Out1 as slow cycle speed and Out2 (4× faster) as fast cycle speed, giving two simultaneous programmable CV sequences at different tempos from the same LFO source.
