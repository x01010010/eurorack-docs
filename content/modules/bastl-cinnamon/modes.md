# Modes

## Filter Mode (Normal Operation)

With resonance below self-oscillation threshold, **CINNAMON** operates as a classic state variable filter. All three outputs — LP, BP, HP — are available simultaneously. The cutoff frequency responds to the FREQ knob, the CV input (attenuated by the CV knob), and the V/OCT input.

Use the output that suits the source material:
- LP: darkens the sound, rolls off highs
- BP: narrows the spectrum to a band around the cutoff frequency
- HP: removes low-frequency content, emphasises transients and upper harmonics

## Drive Mode

Engaging the DRIVE switch overdrives the input stage of the filter, adding harmonic saturation before the filtering occurs. The character changes depending on input level: at moderate input levels drive adds warmth; at high input levels it introduces more aggressive clipping and odd harmonics.

## Character Variations

The two character switches change the internal resonance feedback routing. Each combination gives a distinct sonic flavour:

- **Both off**: standard SVF response, cleanest resonance
- **Character 1 on**: altered resonance shape — changes the peak character and harmonic content at resonance
- **Character 2 on**: different modification to feedback path
- **Both on**: combined effect; typically the most extreme deviation from standard SVF behaviour

Exact tonal differences depend on the specific circuit configuration. Experimentation is the best guide. Note that character switches can interfere with V/Oct tracking accuracy at high resonance.

## Self-Oscillation Mode

At maximum RESONANCE the filter self-oscillates, producing a sine wave regardless of audio input. The three outputs carry the same sine wave at different phase offsets:

- **LP OUT**: 0° phase (reference)
- **BP OUT**: 90° phase (quadrature)
- **HP OUT**: 180° phase (inverted)

Frequency is controlled by FREQ, CV, and V/OCT. The V/OCT input allows melodic playing and sequencing. Character switches change the waveform during self-oscillation — at some settings the sine becomes more complex or shifts toward triangle, affecting timbre and phase relationships.

## Quadrature / Phase Source

In self-oscillation, the 90° phase relationship between LP and BP makes **CINNAMON** usable as a quadrature sine source. Feed both outputs to a ring modulator, panner, or phaser for classic quadrature-based effects (rotating speaker simulation, phasing, etc.).
