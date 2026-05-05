# Patch Recipes

## Stereo Slapback from a Mono Source

Use TAP 1 OUT and OUT to generate a simple stereo spread. TAP 1 OUT carries an earlier echo, OUT carries a longer one. Pan them left and right in a mixer for a wide stereo image from any mono source.

```
VCO/instrument → IN
TAP 1 OUT → mixer channel L (panned left)
OUT       → mixer channel R (panned right)
```

Set TIME to a short-to-medium value (9–12 o'clock). Keep both FEEDBACK controls low for clean, non-regenerating echoes.

## Ping-Pong Delay

Route TAP 2 OUT back into IN (or EXT IN) alongside the original source to approximate a ping-pong effect. The re-fed signal travels through the stages again, offset in time, before exiting OUT.

```
source → IN
TAP 2 OUT → VCA → IN (attenuated to taste)
OUT → final mix
```

Keep FEEDBACK 2 low to avoid runaway buildup from the external re-injection.

## CV-Synced Delay Taps

Patch a clock-divided gate through a slew limiter as a smooth CV into the CV input to keep delay time locked to tempo. The slew prevents zipper noise as the time changes.

```
clock → clock divider → slew/portamento → CV jack
audio source → IN
OUT → mix
```

Tune TIME knob so that the CV range covers the desired beat subdivision.

## Runaway Self-Oscillation Drone

Raise FEEDBACK 2 past 3 o'clock with no input patched. **NOSTALGIA** will begin self-oscillating, producing a sustained pitched tone whose pitch is set by TIME. Modulate TIME with an LFO or S&H for evolving drone textures.

```
(no audio input)
CV LFO → CV jack (slow, wide swing)
OUT → VCA → mix
```

The internal LFO can stack on top of the external CV for additional complexity.

## Guitar Through Eurorack

Plug guitar directly into EXT IN. Patch OUT to a VCA or your final output stage. Use TIME and FEEDBACK 2 for classic tape-echo sounds; engage LFO DEPTH slightly for subtle warble.

```
guitar → EXT IN
OUT → output module or mixer
```
