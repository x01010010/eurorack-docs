# Modes

## Standard DADSR Mode

A gate at GATE IN waits for the DELAY time before triggering the ADSR section. With DELAY at zero the module behaves like a standard ADSR. As DELAY increases, the envelope fires progressively later than the incoming gate — useful for staggered events, delayed modulation, or letting a note sound before a filter sweep begins.

The envelope follows standard ADSR behaviour after the delay:
- **Attack**: rises from 0 V to peak (10 V) over the Attack time
- **Decay**: falls to the Sustain level over the Decay time
- **Sustain**: holds at the Sustain level while the gate remains high
- **Release**: falls from current level to 0 V after the gate goes low

The response is **exponential** throughout — a faster initial rate that tapers, giving a natural, snappy character.

## Re-Trigger Mode

If a new gate arrives while the envelope is active, the envelope resets immediately and begins a new Attack from its current level. This allows rhythmic retriggering to keep the envelope in its early Attack/Decay shape continuously, useful for percussive effects.

## Looping Mode

With the LOOP switch engaged, the envelope automatically re-gates itself at the end of each Release stage. This produces continuous cycling through A–D–S–R at the set stage times. The result is a complex, asymmetric LFO shape. Voltage control over all stages lets you modulate the loop rate and shape in real time.

In looping mode the Sustain level determines how long the envelope holds at the top before Decay begins (since there is no external gate to sustain it, the Sustain stage passes through at a rate set by the Decay time as decay continues — in standard looping the Sustain stage is minimal or shaped by the knob).

## CV Modulation Mode

All four ADSR stages accept bipolar CV (±5 V) with per-stage attenuators. Positive CV extends the stage time (or raises Sustain level); negative CV shortens it. This allows:
- LFO modulation of Attack time for swelling envelopes
- Sequencer control of Decay for rhythmically varying envelope lengths
- CV control of Sustain level for dynamic amplitude shifts during held notes
- Envelope-from-envelope patching where one envelope shapes the timing of another

## Gate Delay as Standalone Utility

The DELAYED GATE OUT jack can be used independently. Patch a gate in and take the delayed gate out to other modules — the delay section functions as a gate delay utility for any purpose regardless of whether the ADSR section is in use.
