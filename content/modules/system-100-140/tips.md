# Tips & Tricks

## Two snappy envelopes for the price of one big one

For percussion-heavy patches, the 140's envelopes are fast enough for kicks, snares, and hi-hats. Use one for amp and one for filter, or split them across two voices.

## INV OUT for sidechain compression

Patch a trigger from your kick drum into ENV 1 EXT GATE, set ENV 1 to short A / short D / 0 sustain / medium R, then patch INV OUT to a VCA on your bass or pad bus. Every kick ducks the bus by the envelope amount. Pure analog sidechain.

## The two ENV OUT jacks are buffered copies

You don't need a multiple to send the envelope to two destinations. The two outputs per envelope are independently buffered — patch one to the VCA and one to the filter directly.

## DELAYED LFO for expressive vibrato

The single most useful trick on this module. With LFO RANGE on LOW, OUTPUT LEVEL on 1/10, DELAY ~3 o'clock, and TRIGGER IN patched to your gate source, vibrato fades in over a few seconds after each note. Sounds like a string player leaning into a long note.

## Reverse saw LFO for "wind-down" sweeps

Set LFO WAVEFORM to reverse sawtooth, range to LOW. Patch to filter cutoff. Each cycle ramps cutoff down slowly then resets — a slow descending sweep that loops automatically.

## Frequency range vs CV

The FREQ CV IN responds within the currently selected RANGE switch position. To get audio-rate FM from the LFO, set RANGE to HIGH and modulate with another LFO or envelope into FREQ CV.

## Pair with WAVES for envelope CV

If you need a voltage-controlled envelope shape (CV over A/D/R), patch a WAVES envelope alongside the 140. Use the 140 for the snappy utility envelope, WAVES for the CV-able expressive one.

## Disable LFO re-trigger if it surprises you

The LFO mutes whenever a gate arrives at TRIGGER IN — useful for the delayed-vibrato trick, confusing if you patch a gate by accident. Pull the rear-panel jumper to disable re-triggering entirely.
