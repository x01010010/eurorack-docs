# Patch Recipes

## CV-Triggered One-Shot Samples

Assign CV 1–4 to four clip slots as triggers. Patch gates from a sequencer or drum trigger module into those CV inputs. Each rising gate edge fires the corresponding one-shot sample — kick, snare, hat, and clap from a single four-output trigger sequencer.

```
trigger sequencer out 1 → CV 1  (kick clip)
trigger sequencer out 2 → CV 2  (snare clip)
trigger sequencer out 3 → CV 3  (hi-hat clip)
trigger sequencer out 4 → CV 4  (clap clip)
OUT L / OUT R → mixer
```

## Live Loop Recording and Overdub

Set a clip to record mode, gated by a clock-divided gate (e.g., one pulse every 4 bars). The module captures exactly that length of audio. Switch to overdub to layer additional takes on top.

```
audio source → IN L (or IN L + R for stereo)
÷16 clock → record gate CV
OUT L / OUT R → monitor
```

## Granular Texture from a Drone

Load a long sustained pad or drone sample into a clip and switch it to granular mode. Assign CV 1 to grain position and CV 2 to grain size. Patch slow LFOs into both to produce a continuously evolving, shimmering texture.

```
LFO 1 (slow, triangle) → CV 1  (grain position)
LFO 2 (slower, sine) → CV 2    (grain size)
OUT L / OUT R → reverb → mix
```

## 1 V/Oct Pitched Playback

Assign CV 1 to pitch on a melodic sample clip, configure 1 V/oct scaling on the touchscreen. Patch a sequencer's V/oct output. The sample plays back at the correct pitch for each sequencer note — useful for melodic one-shots, bass lines, or tuned loops.

```
sequencer V/oct → CV 1 (pitch)
sequencer gate → CV 2 (trigger)
OUT L / OUT R → VCA → mix
```

## MIDI-Controlled Clip Launching

Connect a MIDI controller or DAW via MIDI IN (TRS). Map incoming MIDI notes to clip slots on the touchscreen. Each note triggers its corresponding clip, effectively turning **BITBOX MK2** into a clip-launch performance pad controllable from a keyboard or pad controller.

```
MIDI controller → MIDI IN (TRS adapter)
OUT L / OUT R → output stage
```
