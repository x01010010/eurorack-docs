# Modes

**ELMYRA 2** is controlled primarily through firmware-defined modes selectable via panel controls. The main operational axes are oscillator/voice mode, filter mode, scale mode, and LFO mode.

## Voice & Oscillator Modes

Each voice runs a wavetable-based complex oscillator. Per-voice effects can be enabled independently:

| Per-Voice Effect | Description |
|---|---|
| Unison detune | Spreads multiple oscillators slightly off-pitch for a chorused, thick tone |
| Dual sub-oscillators | Adds two sub-octave oscillators beneath the main voice |
| Chord mode | Voice plays multiple notes simultaneously (polyphonic chords per voice) |
| Waveshaper | Applies harmonic waveshaping to the oscillator output |
| Saturation | Analog-style soft saturation |
| Bitmangler | Bit reduction / digital distortion |
| Sample rate reduction | Lo-fi aliasing effect |
| Noise | Adds noise to the voice |
| High-pass filter | Per-voice HPF |
| Low-pass filter | Per-voice LPF |

## Filter Modes

The main filter is switchable between several configurations:

| Filter Mode | Description |
|---|---|
| 2-pole SVF Low-Pass | Smooth, resonant low-pass character — boomy and aggressive |
| 2-pole SVF Band-Pass | Resonant bandpass for nasal, formant-like tones |
| 2-pole SVF High-Pass | High-pass for thinning and brightening |
| 4-pole Ladder LP | Creamy, classic Moog-style low-pass with self-oscillation potential |
| HP + LP in series | Wide notch/band-reject effect |
| HP + LP in parallel | Band-pass approximation with separate control over each pole |
| Base-width bandpass | Variable-width bandpass |
| Base-width notch | Variable-width notch filter |

## Scale / Tuning Modes

The chromatic mode locks voices to discrete pitches from a selectable scale:

| Scale | Steps |
|---|---|
| Chromatic | 12 (standard equal temperament) |
| 7-tone | Custom 7-note microtonal scale |
| 9-tone | 9-note microtonal |
| 15-tone | 15-note microtonal |
| 17-tone | 17-note microtonal |

When chromatic mode is off, voices tune freely across a continuous range — suitable for drone and non-pitched textures.

## LFO Modes

Each of the 2 LFOs can operate in:

| LFO Mode | Description |
|---|---|
| Free | Free-running at any rate |
| Clock sync | LFO rate locked to incoming clock or tap tempo |
| Sample & Hold | LFO output is sampled and held at each clock step — stepped random or rhythmic |
| Sample & Glide | Like S&H but with glide between samples — smoothed random |

## Sequencer

Each voice has an independent polymetric sequencer:

- Up to **128 steps** per voice
- Each voice can run a different step count simultaneously (e.g., 3, 5, 7, 11) for evolving polymetric patterns
- Delay time can be clock-synced to sequencer clock
- Tap tempo supported

## Effects

| Effect | Notes |
|---|---|
| Delay | Long feedback loop capable of self-oscillation; time is clock-syncable |
| Lo-fi reverb | Short, lo-fi reverb texture — not a pristine algorithmic reverb |
| OUCH | Analog circuit combining destructive distortion, waveshaping, and filtering; character changes with preset cards |
