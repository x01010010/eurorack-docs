# Modes

**EUDEMONIA** has no mode switch — its behavior is determined by how the mixer, filters, and VCA are patched and their controls set.

## Full Voice Channel

The intended primary use: all three sections in series. Mixer → LP Filter → HP Filter → VCA. This is the complete signal path from multiple sources to a shaped, amplitude-controlled output.

## Low-Pass Only

Set the HP CUTOFF to minimum (fully open) so the high-pass has no effect on the output. Only the LP shapes the sound — standard subtractive synthesis filter character.

## High-Pass Only

Set the LP CUTOFF to maximum (fully open) so the low-pass passes everything. Only the HP trims the lows — useful for removing rumble or DC from a signal.

## Band-Pass (Series LP + HP)

Set LP and HP cutoffs to overlap in the mid-range. The combined series response creates a band-pass characteristic — content passes only in the band between the HP floor and the LP ceiling. Narrow the band by moving the two cutoffs closer together. This configuration has no resonance peak like a dedicated BPF, but the LP resonance can add character at the top edge of the band.

## Self-Oscillating LP as Sine VCO

Push LP RESONANCE to maximum. The filter self-oscillates, producing a sine wave at the cutoff frequency. Track pitch with a V/oct signal into the LP CUTOFF CV. Used as a sound source rather than a filter.

## VCA as Drone Gate

Set GAIN above zero with no CV input. The VCA passes signal continuously at the level set by GAIN, functioning as a passive attenuator rather than a dynamic controller. Patch CV in to modulate from this base level.
