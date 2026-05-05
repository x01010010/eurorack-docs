# Modes

## Normal Mode (NORM)

The standard ADSR mode. On each rising gate edge, the envelope rises through the Attack stage to peak, falls through Decay to the Sustain level, and holds there as long as the gate remains high. When the gate closes, the Release stage runs to zero. One complete shape per gate event.

This is the go-to mode for melodic patches, filter sweeps, and amplitude shaping where the envelope is directly tied to a keyboard or sequencer gate.

## Gated Loop Mode (GATE)

The envelope loops continuously — cycling through Attack, Decay, Sustain, Release — but **only while a gate signal is present**. When no gate is received, the envelope stops and holds at zero. As soon as a gate arrives, it starts looping.

Gated loop is useful for rhythmic modulation tied to a specific event: a pad that throbs during a held note, a filter that pulses only while a sequencer step is active, or an accent that sweeps only on the downbeat.

## Loop Mode (LOOP)

The envelope cycles freely regardless of any gate input. In Loop mode the ENV output becomes a continuously running LFO whose shape is defined by the ADSR knobs. At slow TIME settings this produces smooth modulation waves; at fast TIME settings the output enters audio rate and becomes an audible waveform — useful as an unusual oscillator or noise/waveshaping source.

Use ATTACK and RELEASE to set the rise and fall; use DECAY and SUSTAIN to shape the plateau. Asymmetric settings produce sawtooth-like or spike-like waveforms.

## Punch Mode

Available in any of the three main modes via the Punch switch. When engaged, a brief high-voltage spike is prepended to the start of the attack — this creates a sharp transient "click" or "snap" at the note onset without affecting the rest of the envelope shape.

Punch is particularly effective on:
- Bass synth patches that need tight initial articulation
- Percussion envelopes for kick or tom transients
- Any sound where the attack shapes how the note cuts through a mix

Punch mode can be combined with a fast Attack for a softer envelope with a hard initial edge.
