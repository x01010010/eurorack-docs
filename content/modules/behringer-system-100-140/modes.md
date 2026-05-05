# Modes

The 140 has no software modes — it's pure analog. The "modes" here are the working configurations the panel encourages.

## Standard ADSR

The default. Patch a gate into EXT GATE, take ENV OUT to a VCA or filter cutoff. Slider positions set the shape directly.

## Manual envelope

Press MANUAL GATE while EXT GATE is unpatched. Useful for sound design, soundcheck, or playing a pad live with one hand on the slider.

## Inverted envelope

Use ENV INV OUT for the inverse of the envelope shape — falling on attack, rising on release. Patch this to a filter cutoff for "ducking" sweeps, or to a VCA for sidechain-style ducking effects.

## LFO ranges

The frequency range switch divides the LFO into three usable ranges:

| Range | Frequency span | Use |
| --- | --- | --- |
| LOW | 0.05–1.8 Hz | Slow filter sweeps, evolving pads |
| MID | ~1–10 Hz | Vibrato, tremolo, wobbles |
| HIGH | up to ~30 Hz | Audio-rate FM source for VCO mod inputs |

## Delayed LFO

Patch a trigger or gate into TRIGGER IN, push the DELAY slider up. The LFO mutes when the trigger arrives and recovers gradually over the delay time. With FREQ RANGE on LOW and DELAY at maximum (~7 s), you get a vibrato that fades in slowly after each note — the classic 100M trick for emulating expressive playing.

## LFO output level

The 1/10 setting is for fine vibrato and subtle modulation depth where ±5 V would be too aggressive. Use it when patching to V/oct inputs for vibrato — full level will detune by an entire octave, which is rarely musical.

## Inverted LFO output

The lower LFO out is always inverted relative to the upper. Patch both to two different destinations for symmetrical opposite modulations — for example, one to filter 1 cutoff and the inverted to filter 2 cutoff, for stereo-spread filter motion.
