# Modes

## Vector Synthesis

The four oscillators occupy corners of a 2D vector space:

```
    A ─────── B
    |         |
    |  [XY]   |
    |         |
    C ─────── D
```

The joystick (or X IN / Y IN CV) positions a point in this space. The blend ratio of the four oscillators is determined by proximity to each corner. Centre position produces an equal mix of all four.

- **Corner positions**: Only one oscillator is fully active.
- **Edge positions**: Two adjacent oscillators blend equally.
- **Centre position**: All four blend equally.

## Waveform Selection

Each oscillator has 128 waveforms including sine, triangle, sawtooth, pulse/square, and a large library of sampled and synthesised waveforms. The OLED display names the selected waveform for each oscillator as you adjust the encoder.

## CV-Controlled Vector Position

Patching CV to X IN and Y IN allows automated, rhythmic, or expression-controlled vector movement. This is the primary expressive technique — LFOs, envelopes, or joystick automation sweeping through the vector space while the oscillators sustain a pitch.

## Polyphony

Victor supports internal polyphony (voice count depends on firmware/model). Multiple simultaneous GATE + V/OCT pairs allow chords. The OLED display shows voice allocation.
