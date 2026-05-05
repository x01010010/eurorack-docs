# Modes

Halos has two hidden mode selectors (accessed via button presses or toggle combinations): resonator type and polyphony count.

## Resonator Types

| Type | Character |
| --- | --- |
| Modal resonator | Simulates a metallic plate or bowl — sustained, shimmery resonance |
| Sympathetic strings | Simulates a set of tuned strings that vibrate sympathetically — lush, harp-like |
| String with reverb | A bowed/plucked string model with built-in reverb tail |
| Karplusian network | Karplus-Strong inspired string — tighter, more attack-focused |
| FM voice | Frequency-modulated voice — adds FM-style harmonic distortion to modal resonance |

## Polyphony

Halos supports 1, 2, or 4 simultaneous voices. In polyphonic modes, each trigger/strum starts a new voice until the maximum is reached (oldest voice is stolen).

- **Mono**: Single resonator, longest sustainable resonance.
- **2-voice**: Two overlapping voices — suitable for chords.
- **4-voice**: Four simultaneous voices — chords and pads, but shorter individual decay.

## Stereo vs Mono

In stereo mode (2 or 4 voices), ODD and EVEN outputs carry different voices/partials for a wide stereo image. In mono mode, OUT carries the full signal and ODD/EVEN carry spectral splits.
