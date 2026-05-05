# Modes

## Playback Modes (MODE switch)

| Mode | Behaviour |
| --- | --- |
| Forward | Steps 1 → N → 1 → N (standard left-to-right loop) |
| Reverse | Steps N → 1 → N → 1 |
| Pendulum | Steps 1 → N → N-1 → 1 → 2 → N (bounce back and forth) |
| Random | Steps are selected randomly within the active range |

## 8-Step vs 16-Step (SERIES switch)

- **8-Step**: Both CV channels run independently in parallel, each cycling through their own 8 steps.
- **16-Step (SERIES on)**: Channel 1's 8 steps play first, then channel 2's 8 steps, producing a single 16-step melodic sequence. CV1 and CV2 share the same output on CV1.

## Internal vs External Clock

- **Internal**: Set TEMPO to desired rate. The sequencer self-clocks.
- **External**: Patch a clock signal to EXT CLOCK. The TEMPO knob is bypassed.

## Gate Time

GATE TIME adjusts the ratio of gate-on to gate-off within each step. At minimum, gates are very short (triggers). At maximum, the gate is nearly the full step length (legato). Adjust for the desired articulation.
