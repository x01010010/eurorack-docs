# Patch Recipes

## Full ADSR from a Trigger Sequencer

Patch your trigger sequencer into GATE IN. Turn GATE LENGTH up until the sustain stage is audible (try 12 o'clock as a starting point). Now you get complete ADSR contours — attack, sustain plateau, and release — even though your sequencer only outputs short triggers.

## Per-Step Sustain Variation

Patch a stepped CV source (sequencer, sample-and-hold) into GL CV. Each trigger now produces a different sustain duration — short staccato on some steps, long legato-like holds on others. Use with a VCA or filter for expressive, sequenced dynamics.

## Complex LFO

Engage LOOP on one channel. Set ATTACK and RELEASE to different medium values, DECAY short, SUSTAIN at about 60%. The output is an asymmetric waveform with a different character than triangle or saw LFOs. Patch it into a filter cutoff or oscillator pitch for organic modulation.

## Split Envelope Duties with a Second Module

Pair **BLACK EG2** with a second envelope generator. Use this module as a VCA envelope (short attack, moderate decay, medium sustain, moderate release) and the second as a filter envelope (longer attack, longer decay, low sustain, long release). Trigger both from the same gate. The voice gets a natural feel — amplitude is snappy while the filter opens slowly.

## Rhythmic Retriggering

Patch a fast clock (16th notes) into GATE IN. Set a long ATTACK and medium RELEASE. Because the envelope retriggers on every pulse, the output creates a stepping/ratcheting pattern — useful as a rhythmic modulation source for panning, waveshaping, or granular density.

## Pseudo-Sidechain Pump

Engage LOOP. Set very short ATTACK, zero SUSTAIN, and moderate RELEASE. The output produces a repeating spike-and-fall. Invert it (via attenuverter) and patch to a VCA controlling your pad. The pad pumps rhythmically at the loop rate.
