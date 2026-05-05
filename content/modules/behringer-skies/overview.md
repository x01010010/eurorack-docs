# Overview

**SKIES** is an 18 HP stereo granular audio processor designed for real-time manipulation of audio sources from elsewhere in your modular system. Unlike sample-playback granular modules, SKIES has no SD card or pre-recorded sample memory — it captures whatever you patch into its inputs and immediately becomes a live granular instrument built from that material.

The module continuously fills a circular buffer with incoming audio, then synthesizes new sound by chopping that buffer into overlapping, pitched, and enveloped grains. A FREEZE button (and trigger input) locks the buffer, turning it into a frozen sonic photograph you can scrub, smear, pitch, and texture indefinitely.

## Sonic Territory

- **Shimmering ambient pads** — freeze a held chord, slow the grains, increase texture, blend in reverb.
- **Glitchy stutters and rhythms** — clock the TRIG input, set DENSITY to center, modulate POSITION.
- **Pitch shifting and time stretching** — switch out of granular mode for less granular-sounding repitching.
- **Spectral pads** — mode 4 resynthesizes the buffer's frequency content rather than its time domain.
- **Looping delay with infinite feedback** — mode 3 turns the buffer into a controllable tape loop.

## Buffer Resolution Trade-Off

SKIES lets you trade audio fidelity for buffer length. The shortest, highest-quality buffer is 1 second of 16-bit / 32 kHz stereo. The longest is 8 seconds of 8-bit / 16 kHz mono — perfect for lo-fi textures and longer captures.

| Quality | Buffer | Use For |
| --- | --- | --- |
| 32 kHz / 16 bit stereo | 1 s | Tight rhythmic granular, short pads |
| 32 kHz / 16 bit mono | 2 s | Longer pads with full fidelity |
| 16 kHz / 8 bit stereo (companded) | 4 s | Dirty, bit-crushed textures |
| 16 kHz / 8 bit mono (companded) | 8 s | Tape-style looping, lo-fi soundscapes |

## At a Glance

- **18 HP** Eurorack module
- **Stereo input + stereo output**
- **8 CV inputs** (POSITION, SIZE, V/Oct, BLEND, DENSITY, TEXTURE, plus 2 trigger inputs)
- **Save / load** of buffer contents to internal memory slots
- **USB-C** for firmware updates via Behringer SynthTribe
- **Power**: 120 mA (+12 V) / 10 mA (-12 V)
