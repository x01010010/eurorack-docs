# Modes

## Multi-Mod Modes

The multi-mod tool switches between four behaviours:

**LFO Sync** — a second LFO that can be synced to the internal sequencer clock or an external clock signal. Useful for rhythmically-locked modulation.

**Decay Envelope** — a triggered decay envelope output. Pair with TRIGGER IN patched to a gate source for percussive CV modulation.

**MIDI Mod** — maps incoming MIDI modulation wheel (CC1) to the output. Requires a MIDI connection and allows expressive real-time control from a keyboard.

**Random** — outputs a new random voltage on each gate trigger. Use for unpredictable pitch or filter variation.

## Sequencer / Arpeggiator

The 8-step sequencer records pitches from the keyboard buttons and plays them back at the TEMPO rate. Holding a key programs that step. Steps can be skipped or repeated.

The sequencer can also run in arpeggiator mode, cycling through held notes automatically. Clock input accepts Eurorack-standard pulse signals for external sync.

## Standalone vs. Eurorack

Internally, all modules are normalled into a complete voice: OSC → Wavefolder → Dynamics Controller → OUT. Patching a cable into an input breaks the internal normal at that point, allowing individual sections to be rerouted or replaced with external modules.
