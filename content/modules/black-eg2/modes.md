# Modes

Each channel of the Black EG2 operates independently in one of two modes, selected by the LOOP switch.

## Standard Mode (LOOP off)

The envelope fires once per gate event and follows the classic ADSR cycle:

1. **Attack** — on gate rising edge, output rises exponentially from 0 to peak.
2. **Decay** — output falls from peak toward the sustain level.
3. **Sustain** — output holds at the sustain level as long as the gate remains high (or until the internal gate length expires).
4. **Release** — on gate falling edge, output falls from the current level to 0.

Re-triggering: if a new gate arrives during an active envelope, the attack restarts immediately from the current output level.

## Loop Mode (LOOP on)

The envelope cycles continuously through all four ADSR stages without stopping:

1. Attack rises to peak.
2. Decay falls to sustain level.
3. Sustain holds for the gate length duration.
4. Release falls to zero.
5. Cycle repeats from attack.

This produces a complex, asymmetric periodic waveform — effectively a multi-segment LFO whose shape is defined by the four ADSR knobs. Adjusting any knob changes the waveshape and period in real time.

In loop mode, the overall cycle speed is determined by the sum of all stage times plus the gate length. Shorter times = faster cycling.

## Gate Length Behavior

The internal gate generator interacts with both modes:

- **Standard mode** — extends short triggers so the envelope reaches sustain before releasing. A trigger sequencer outputting 1 ms pulses can still produce full ADSR shapes.
- **Loop mode** — the gate length sets the sustain hold duration within each cycle, affecting the overall loop period and waveform duty cycle.
