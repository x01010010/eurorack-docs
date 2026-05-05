# Patching

## Drum Voice Pair

Route two drum hits — kick and snare — to Voice 1 and Voice 2. Trigger each from separate gate outputs on a sequencer.

```
Sequencer Gate 1 → Voice 1 GATE   (kick)
Sequencer Gate 2 → Voice 2 GATE   (snare)
Voice 1 OUT → Mixer channel 1
Voice 2 OUT → Mixer channel 2
```

Set Decay short (10–30 ms) per voice for clean one-shots. Leave Loop and Reverse off.

## Pitched Melodic Sample

Play a tuned instrument sample chromatically from a keyboard or sequencer.

```
Sequencer CV  → Voice 1 PITCH
Sequencer Gate → Voice 1 GATE
Voice 1 OUT  → VCA → Mixer
```

Set Pitch Offset to match the sample's root note. Adjust Decay to taste — shorter for plucked sounds, longer for pads.

## CV-Scanned Timbre Sequence

Use a sequencer or LFO to continuously scan across a bank of related samples per step.

```
Sequencer CV (stepped) → Voice 1 META
Envelope or Clock       → Voice 1 GATE
Voice 1 OUT → Mixer
```

Fill one bank with variants of a single sound (different timbres, layers, or articulations). Each CV step selects a new sample, giving rhythmic timbral variation without manual intervention.

## Layered Stereo Pair

Load complementary sounds on Voice 1 and Voice 2 and trigger simultaneously for a layered, wider sound.

```
Same Gate → Voice 1 GATE + Voice 2 GATE
Voice 1 OUT → Mixer (panned left)
Voice 2 OUT → Mixer (panned right)
```

Set slight Pitch Offset differences between voices for detuned layering. Use the Volume PARAM page to balance levels.

## Ambient Loop with Reverse

Trigger a long texture sample on one voice in Loop mode with Reverse on, and a forward version on the second voice for shimmering pad-like results.

```
LFO (slow ramp) → Voice 1 META    (slowly scan through textures)
Gate or S&H     → Voice 2 GATE
Voice 1 OUT + Voice 2 OUT → Reverb → Mixer
```

Modulate META slowly to drift between sounds in the bank over time.

## Modulated Decay with Envelope

Route a CV source to the META input to modulate sample selection while a separate CV controls gate timing, creating expressive rhythmic variation.

```
Random CV → Voice 1 META    (randomize sample per hit)
Sequencer Gate → Voice 1 GATE
Voice 1 OUT → Filter → Mixer
```
