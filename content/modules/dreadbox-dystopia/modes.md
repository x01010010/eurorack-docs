# Modes

**DYSTOPIA** has no discrete mode switches. Its behavior changes based on the active noise type and how the external input is used.

## Noise Types

| Type | Character |
|---|---|
| White | Full-spectrum broadband noise, equal energy per frequency |
| White → Pink | White noise rolled off at higher frequencies; warmer, more natural texture |
| White → Blue | White noise boosted at higher frequencies; harsher, bright hiss |
| Scatter | Irregular burst noise; random splats and pops with gaps of silence |
| Digital | Aliased digital noise; hard-edged artifacts. Also generates a random gate output |
| Pitched | Noise focused around a tuneable center frequency; resembles a detuned sine or band-pass filtered noise |

## Bit Crusher Depth

The CRUSH knob controls the effective sample rate of the crusher:

- **8 kHz** — subtle aliasing, barely audible degradation
- **1–4 kHz** — lo-fi quality, clear grain and grit
- **100–500 Hz** — heavy decimation, pitch drops, rhythmic artifacts
- **1 Hz** — extreme: individual pulses, very low repetition rate

Slower crush rates produce lower-pitched output artifacts and more distinct rhythmic elements.

## Internal Noise Mode

Without anything patched to EXT IN, the module generates noise internally. The noise type, pitch (if applicable), and crush settings determine the raw signal entering the filters.

## External Processing Mode

Patching any signal to EXT IN disables the internal noise generator and routes the external signal through the bit crusher and dual filter. This mode turns **DYSTOPIA** into:

- A creative bit crusher for drum machines, synthesizers, or feedback signals
- A dual parallel LP/HP filter for any audio source
- A combined crusher-filter for heavy sound design

## Random Gate Mode

When TYPE is set to Digital, the GATE OUT jack becomes active. The density and character of the random gates follow the digital noise behavior and are indirectly influenced by the crusher and filter settings upstream.
