# Tips & Tricks

## Use Both Channels for Full Polyrhythmic Coverage

Even if you only need one divided clock, patch both OUT A and OUT B to different destinations. The second channel costs nothing extra and often reveals rhythmic combinations you wouldn't have planned deliberately.

## CV Rate Changes Are Instantaneous

**DIV** applies rate changes from CV immediately on the next clock pulse. This means abrupt CV jumps produce sudden rhythmic shifts rather than gradual transitions — useful for fill-style breaks or sudden meter changes at the turn of a phrase.

## Resetting Polyrhythms

Because channels A and B derive from the same CLK, they naturally re-sync whenever both division factors share a common multiple. If you want a controlled reset point, use a clock with a dedicated reset output to restart both counters simultaneously.

## Audio Rate Requires a Clean Clock

When using **DIV** as a frequency divider at audio rates, the quality of the output depends heavily on the stability of the input clock. A jittery or inconsistent input produces pitch instability in the output. A clean square wave from a dedicated VCO or oscillator works best.

## Map Sequencer Steps to Rhythm Variations

Assigning different CV voltages to each step of a sequencer and routing that to CV A creates a rhythmically varied sequence where the feel changes every bar — even if the notes repeat. This is a quick way to add rhythmic interest without adding complexity elsewhere in the patch.
