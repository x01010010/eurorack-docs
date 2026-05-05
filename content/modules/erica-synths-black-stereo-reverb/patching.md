# Patching

## Standard Stereo Send

Insert the reverb as a stereo effects send from a mixer.

```
Mixer Aux Send L → IN L
Mixer Aux Send R → IN R
OUT L → Mixer Return L
OUT R → Mixer Return R
```

Set DRY/WET to fully wet. Control the reverb amount at the mixer aux send level.

## Mono Source, Stereo Spread

Feed a single mono source and use stereo spin to create width.

```
VCO or Drum OUT → IN L
OUT L → Stereo Mixer L
OUT R → Stereo Mixer R
```

Adjust SPIN to set the stereo image width. With SPIN at zero both outputs carry the same signal; higher SPIN values create a rotating stereo field.

## CV-Controlled Reverb Swell

Use an envelope to automate the dry/wet mix — short, dry hits bloom into reverb on release.

```
Sound source → IN L
ENV OUT → DRY/WET CV
OUT L/R → Mixer
```

Set DRY/WET knob to minimum. The envelope rises on each trigger, pushing the mix toward wet and then receding. Set decay/release on the envelope to control how long the bloom lasts.

## Freeze as an Instant Pad

Trigger Freeze on a melodic note to hold the reverb indefinitely as a pad while you play other parts.

```
VCO → IN L
Gate (manual or sequencer) → FREEZE CV
OUT L/R → Mixer
```

Play a chord or melodic phrase, then raise the FREEZE gate to capture and sustain it. Release to return to live reverb.

## Sequenced Preset Changes

Use a stepped CV from a sequencer to cycle through saved reverb presets in time with the music.

```
Sequencer CV (stepped) → PRESET CV
```

Pre-save matched reverb characters in each preset slot (e.g., Room → Hall → Cathedral → Dirty BBD Hall), then let the sequencer drive the transitions.

## Feedback Modulation for Motion

Route a slow LFO to FEEDBACK CV to gently push and pull the reverb tail length.

```
LFO (slow sine) → FEEDBACK CV
Sound source → IN L
OUT L/R → Mixer
```

Set the FEEDBACK knob at midpoint so the LFO moves both above and below for dynamic range. This creates a breathing, living quality to sustained reverb.

## Texture Layer with Long Cathedral Freeze

Freeze a granular or noise source in Cathedral mode to build an evolving background texture.

```
Noise/Granular OUT → IN L (Source: Dirty BBD, Mode: Cathedral)
Trigger → FREEZE CV (hold for duration of texture)
OUT L/R → Mixer (low in the mix)
SIZE CV → Slow LFO (subtle movement while frozen)
```
