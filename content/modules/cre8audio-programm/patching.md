# Patching

**PROGRAMM** as a Eurorack module interfaces with other gear via MIDI and CV, and as a performance instrument via USB.

## MIDI Routing Examples

### PROGRAMM → External Synth
```
PROGRAMM MIDI Out → Your Synth's MIDI In
(Sequence notes on channel 1 MIDI mode, 
 control filter cutoff with channel 2 CC mode)
```

### PROGRAMM + Eurorack Hybrid
```
PROGRAMM CH 1 CV Gate → Eurorack Voice Gate In
PROGRAMM CH 1 CV Pitch → Eurorack Voice 1V/oct In
PROGRAMM CH 2 CV Gate → Eurorack Voice Gate In (different note)
(Polyrhythmic sequence across multiple Eurorack synth voices)
```

### Clock Sync
```
Your Clock Source (modular or MIDI) → PROGRAMM Sync In
(Keeps PROGRAMM tempo locked to master clock)
```

### DAW Integration
```
USB Host (computer DAW) → PROGRAMM USB
(Control PROGRAMM patterns from a MIDI CC or note track)
```

## Typical Patch Flow

1. Set **PROGRAMM** tempo or sync to external clock
2. Select a **channel**, tap in a 4- or 8-step pattern
3. Route that **channel** to either **MIDI or CV**
4. Repeat for additional **channels** (polyrhythmic layers)
5. Modulate **channel parameters** in real-time via knobs or MIDI CC
