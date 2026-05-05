# Tips

## Programme a Scale, Not Random Pitches

CELLZ's 16 pads can hold any CV values you like — but you will get the most musical use out of it by programming a specific scale or mode across the pads. A pentatonic scale (5 notes) repeated across rows lets you play runs without hitting wrong notes. A chromatic octave is useful for transposing in semitone steps. Decide the musical purpose of each pad before programming.

## Use Both Outputs for Musically Coherent Pairs

The two outputs fire simultaneously. If Out 1 is a pitch (V/Oct), programme Out 2 as a musically related parameter for the same note — e.g. a velocity-equivalent filter cutoff, a short envelope time for high notes vs. a long one for low notes, or a wet/dry value for reverb. This gives you expressive per-note variation without any additional modules.

## Free-Scale Mode for Non-Pitch Applications

Quantized mode is great for pitch, but free-scale mode opens CELLZ to parameter control tasks. Programme 16 different reverb times, or 16 delay feedback values, or 16 filter sweep positions, and touch pads during a performance to recall them. Think of it as a CV preset bank with instant tactile recall.

## The Arpeggiator Needs Held Pads

The arpeggiator only runs while you are physically touching the pads. To free up your hands, patch LFO TRIG 1 (or a clock) to cycle through all 16 pads automatically — then you can remove your hands and let the sequence run.

## Set Speed Before Performing

The SPEED knob controls how fast the arpeggiator steps between pads. Set this before you start holding pads in a performance — the arpeggiator engages the moment you hold two pads, so an unset SPEED knob can produce unexpectedly fast or slow steps when you pick up the performance.

## The +5 V Rail Is the Highest Draw — Check Your Rack

CELLZ draws 27 mA on the +5 V rail. Many Eurorack power supplies have limited +5 V headroom (some provide only 50–100 mA on that rail). Check your case's +5 V capacity before installing. When paired with Chipz (which also draws +5 V), the combined 5 V draw is 27 mA (Cellz) + 27 mA (Chipz) = 54 mA — significant for smaller PSUs.

## LFO Trigger Minimum Is 0.8 V

The LFO trigger inputs require at least 0.8 V to register a trigger. Most LFO square outputs are 5 V or 10 V peak, so this is rarely a problem — but be aware if you are using a very low-level trigger source or attenuating a signal before sending it to the trigger input.
