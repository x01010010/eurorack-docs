# Patching

**ELMYRA 2**'s 41 patch points make it a semi-modular system in itself. It can be used entirely without patching (touch pads + internal sequencers), but patching transforms it into a complex modular hub.

## Drone Layers with Internal Sequencer

The simplest setup — no external patching needed. Each voice runs its own sequence, tuned independently, with the shared filter, delay, and reverb binding everything together.

- Activate touch pads to launch voice envelopes
- Set each voice to a different sequencer step count for evolving polymetric drift
- Enable sub-oscillators on some voices for bass support
- Route the OUCH circuit for gritty texture on selected voices

## External CV Pitch Control (1 V/Oct)

All four voices accept 1 V/oct pitch input. Drive **ELMYRA 2** from any sequencer or keyboard CV.

```
Sequencer CV Out → ELMYRA 2 Voice 1 V/oct In
Sequencer Gate Out → ELMYRA 2 Voice 1 Gate In
```

Voices not patched from external CV continue running their internal sequencers independently — so you can have two externally controlled melodic voices and two free-running drone voices simultaneously.

## Using Envelopes as Modulation Sources

The four touch-pad envelopes are patchable as modulation sources. This turns finger pressure events into modulation triggers for any target.

```
Touch Pad 1 → tap → Envelope 1 Out → Filter Cutoff CV In
```
Each time you touch pad 1, the filter envelope opens — organic, performance-driven filtering.

## LFO → Filter Cutoff

```
LFO 1 Out → Filter Cutoff CV In
```
Set LFO 1 to slow rate for gentle filter sweeps. Switch to S&H mode for stepped filter movement. Clock-sync the LFO to the sequencer for rhythmically locked filter patterns.

## LFO Cross-Modulation

```
LFO 1 Out → LFO 2 Rate CV In
```
LFO 1 controls LFO 2's speed, creating accelerating and decelerating modulation patterns. Patch LFO 2 to pitch or delay time for animated textures.

## External Audio Processing

**ELMYRA 2** can process any external audio source through its filter, OUCH, delay, and reverb.

```
Drum Machine Out → ELMYRA 2 Audio In
ELMYRA 2 Out → Mixer
```
Use OUCH on drum loops, run a VCO through the ladder filter, or feed a field recording into the delay and reverb. The internal voices mix with the external audio.

## Delay as a Feedback Oscillator

Push the delay feedback to extremes. The delay can self-oscillate, turning into a resonant pitch-shifted loop. Patch delay time CV from an LFO to sweep the delay pitch while it self-oscillates.

```
LFO 1 Out → Delay Time CV In
Delay Feedback: maximum
```

## CV Summing for Complex Modulation

Use the onboard CV summing circuit to combine two modulation sources before a target.

```
LFO 1 Out → Sum Input A
Envelope 2 Out → Sum Input B
Sum Out → Voice 2 V/oct In
```
Both LFO and envelope contribute to pitch modulation simultaneously.

## Clock Sync from External Source

Patch an external clock into the clock input to sync the sequencers, LFOs, and delay.

```
External Clock → ELMYRA 2 Clock In
```
All voices' sequencers, the delay time, and the LFOs (if set to sync mode) lock to the same tempo. Use different step lengths per voice (3, 5, 7, 11 steps) over the same clock for polymetric evolution.

## Integrating with the Rest of the Rack

**ELMYRA 2** works well as:

- **A self-contained voice** — 4 voices → out to the rack mixer
- **A CV source** — envelope and LFO outputs feed other modules' parameters
- **An effects unit** — Audio In processes external rack signals
- **A clock divider / polymetric source** — sequencer outputs drive external modules
