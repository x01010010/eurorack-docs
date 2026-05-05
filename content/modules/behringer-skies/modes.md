# Operating Modes

SKIES has four global operating modes. Switch by **holding PARAMETER for 5 seconds** — one of the four LEDs lights red to show the current mode. Press PARAMETER repeatedly to cycle.

## 1. Granular Synthesis & Processing (default)

The classic Clouds workflow. Audio is captured, sliced into grains, and re-synthesized live.

- **POSITION, SIZE, PITCH, DENSITY, TEXTURE** behave as labelled.
- **TRIG** input fires individual grains. With DENSITY at center, external triggers fully control grain rate.
- **BLEND** assignment (via PARAMETER short-press): Wet/Dry, Stereo Spread, Feedback, Reverb.

## 2. Pitch Shifting & Time Stretching

A less-grainy way to shift pitch and speed independently.

- **DENSITY** → diffusion via internal filtering rather than grain rate.
- **TEXTURE** → low-pass / high-pass filter on the output.
- **SIZE** → overlap of pitch-shifted grains. CCW = glitchy, CW = smooth loops.
- **TRIG** → timed glitches; combined with FREEZE → synchronized loop slices.

## 3. Looping Delay

The buffer becomes a controllable tape loop.

- **POSITION** sets delay time. Sweeping it (knob or CV) sounds like vinyl scratching.
- **FREEZE** captures a loop. POSITION = loop start, SIZE = loop length. TRIG stutters the loop.
- **Without FREEZE**, SIZE controls how pitch is shifted — CCW = ring-mod-like, CW = smooth.
- **DENSITY** and **TEXTURE** behave as in Pitch Shift / Time Stretch mode.

## 4. Spectral Processing

Audio is broken into spectral components and resynthesized rather than time-sliced.

- **POSITION** selects which buffer audio is recorded into (2–7 buffers depending on quality). With FREEZE active, POSITION selects the buffer to resynthesize.
- **SIZE** controls how buffers interact — spectral shifting through to spectral reverse.
- **PITCH** sets the amount of spectral pitch transposition.
- **DENSITY** affects how the buffers are re-synthesized.
- **TEXTURE** quantizes spectral components CCW to center, then amplifies weaker partials / attenuates stronger ones above center.
- **TRIG** glitches the audio.

## Calibration

For accurate V/Oct tracking:

1. Disconnect every CV input except V/OCT — patch a calibrated keyboard there.
2. Hold **SAVE/LOAD**, then press **PARAMETER**. The first two LEDs flash orange.
3. Play **C2** (1 V) and press SAVE/LOAD. All four LEDs flash orange.
4. Play **C4** (3 V) and press SAVE/LOAD. The module returns to normal operation.
