# Modes

**A-135-3** has no front-panel mode switching. Its behavior is determined by the CV inputs, the level knobs, and internal jumper configuration.

## Manual Gain Control

With nothing patched to the CV inputs, each channel's level knob sets a fixed gain from 0 to ~0.5. This is a conventional passive-style mix — all levels set by hand.

## Voltage-Controlled Mixing

Patching CV to one or more CV inputs allows dynamic, automated amplitude control. The CV and level knob sum together: knob sets a base offset, CV sweeps within or beyond that offset. Typical use cases include VCA-style envelope shaping, ducking, and amplitude modulation.

## CV Bus Mixing (DC-Coupled Mode)

Because the module is DC coupled, patching control voltages into the signal inputs and summing them to Out L or Out R produces a weighted CV mix. Each channel's level knob or CV input scales its contribution. This is useful for combining multiple modulation signals — envelopes, LFOs, sequencer outputs — into a single composite CV.

## Extended Channel Count (Master/Slave)

Two or more A-135-3 units can be linked via internal jumpers. One unit is designated master and its outputs carry the full combined sum. Slave units feed their internal sums to the master's summing node. The front-panel jacks on slave units operate normally; only the output routing changes internally. Consult the A135_3_jumpers.pdf factory document for jumper positions.
