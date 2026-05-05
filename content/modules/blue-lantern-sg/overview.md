# Overview

**SG** (Subharmonics Generator) is a 4 HP analog VCO add-on from Blue Lantern. It takes any waveform from a VCO — saw, square, triangle, or sine — and uses a CD4013 flip-flop IC to divide it into four sub-harmonic layers, each one mixed independently with its own knob.

The four divisions are musically meaningful rather than arbitrary octaves: a 7th below the input, a 7th one octave below, one octave below, and two octaves below. Blending these layers produces the thick, harmonically dense character associated with classic organ bass, fat Moog-style low end, and analogue sub oscillator textures.

Because **SG** uses purely analog flip-flop division with no microcontroller or digital signal processing, there is no latency and no digital artefacts. The circuit responds instantly across the full audio spectrum.

The module outputs the blended sub mix. To combine this with the original VCO signal, patch both the SG output and the VCO output into a mixer. The original VCO signal is not passed through or summed internally.

## At a Glance

- **4 HP**, analog CD4013 flip-flop sub-harmonic division
- **4 mix knobs** — one per sub-harmonic layer
- **4 divisions**: −7th, −7th (−1 oct), −1 oct, −2 oct from input
- Works with saw, square, triangle, or sine wave input
- No latency — pure analog, no microcontroller
- Input: any VCO waveform
- Output: blended sub-harmonic mix
