# Tips & Tricks

## Use the accent outputs as a second trigger lane

Each accent jack fires independently. Patch ACCENT 1 to a hi-hat on a different voice and TRIG 1 to a kick — same step grid, two different parts. You effectively get **20 trigger lanes** out of 10 tracks.

## Polyrhythm without the math

Set every track to a different prime length (5, 7, 11, 13, 17, 19, 23). The combined cycle will not repeat in any reasonable performance window. Useful for ambient or generative sets where you want sustained novelty.

## Probability for groove humanization

Drop a few hi-hat steps to 80–90% probability instead of muting them. Patterns feel hand-played without the swing knob.

## Save your scenes before live use

256 patterns sounds like a lot until you start composing. Use the song mode to lock down the patterns you actually need for a set, and back up the device over USB SynthTribe.

## Watch the +12 V budget

350 mA on +12 V is real. If your case is already loaded, run a power check before installing — most low-end Eurorack PSUs are 1 A or 1.5 A on +12 V, and a busy rack with RS-9 will consume a meaningful chunk.

## Clock from a DAW for tight timing

RS-9 sounds noticeably tighter when slaved to a DAW MIDI clock over USB-C than running on its internal clock for studio recording. For live use, internal clock with TAP is fine.

## Gate the LFO with the RESET input

Patch a long gate into RESET IN to mute the rack on cue — RS-9 stops outputting triggers while the gate is held high (depending on configuration). Good for breaks.

## Combine with WAVES looping LFO

Patch a TRIG OUT to **WAVES** TRIG, then take WAVES UNI OUT to a CV destination. RS-9 acts as a beat-quantized re-trigger source for slowly evolving modulations.
