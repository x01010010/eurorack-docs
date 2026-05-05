# Patch Recipes

## Chiptune Drum Voice

Set Code Source to Mode 3 (ZX), RATE at about 10 o'clock. On the Expander, set AUTOBEND DEPTH to 2–3 o'clock and AUTOBEND TIME short. Trigger via TRIG IN from a sequencer or clock. Each trigger produces a pitched noise burst that decays in pitch — an 8-bit kick or snare depending on base RATE and X/Y selection.

## Autobend Envelope as Filter Modulation

Patch ENV OUT to a filter cutoff CV input. Each autobend trigger simultaneously shapes the Code Source's internal pitch and opens the filter on your other voices. The envelope contour tracks the pitch bend — long AUTOBEND TIME = long filter sweep. Useful for building a cohesive percussive + tonal patch from one trigger source.

## Clocked Noise Bursts

Patch CLOCK OUT to a VCA's CV input (or a sample-and-hold trigger). At low Code Source RATE, CLOCK OUT pulses slowly — each pulse opens the VCA briefly. Triggering autobend from the same source makes each burst also pitch-sweep, building rhythmic, articulated noise stabs.

## Two-Voice Chiptune Kit

Use the two Code Source outputs for different voices: OUT A through a short VCA envelope for the "snare" character, OUT B through a longer envelope for a "bass drum" character. Trigger autobend for attack shape on both, using AUTOBEND DEPTH and TIME to differentiate. Adjust X vs. Y to give each voice a distinct polynomial character.

## Autobend Depth CV Modulation

The AUTOBEND DEPTH knob is an attenuverter — patch a slow LFO into it (via a mult into the attenuverter's CV if available) to slowly vary how dramatic the pitch sweep is. Subtle sweeps during verses, full sweeps for fills and drops.
