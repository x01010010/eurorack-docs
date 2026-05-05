# Patching

## Default Internal Signal Flow

```
Oscillator → Wavefolder → Dynamics Controller → OUT
```

The instrument plays as a complete voice with no cables. Patch points break normals.

## External Filter Instead of Dynamics Controller

```
FOLD OUT → External VCF → External VCA → Output
GATE OUT → External VCA ENV
```

Replace the Dynamics Controller with a conventional east-coast signal path.

## Wavefold External Audio

```
External OSC → AUDIO IN (Dynamics Controller input)
West Pest OSC → FOLD IN (Wavefolder)
FOLD OUT → Mixer
```

Use the wavefolder on an external oscillator while repurposing the Dynamics Controller for the West Pest's own oscillator.

## LFO Modulating External Module

```
LFO OUT → External VCF cutoff CV
```

The West Pest's LFO can freely modulate any external module while the internal sequencer runs the voice.

## External Sequencer via CV/Gate

```
External sequencer 1V/oct → 1V/OCT in
External sequencer gate   → TRIGGER IN
```

Bypass the internal sequencer and keyboard entirely; drive pitch and triggering from any Eurorack sequencer.

## Multi-Mod Random to External Pitch

```
TRIGGER (clock) → Multi-mod trigger
Multi-mod OUT (Random mode) → External VCO 1V/oct
```

Clock-stepped random voltages for external pitch randomisation. Quantise downstream if needed.
