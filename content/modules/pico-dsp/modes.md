# Modes

The EFFECT selector determines the active processing mode. Each mode uses PARAM 1 and PARAM 2 for effect-specific parameters.

## 1 — Mono Delay

Single-tap delay with the output mixed to both outputs.

| Parameter | Function |
|---|---|
| PARAM 1 | Delay time |
| PARAM 2 | Feedback (number of repeats) |

## 2 — Pitch Shift Delay

Delay with pitch shifting applied to the delayed signal.

| Parameter | Function |
|---|---|
| PARAM 1 | Pitch shift amount |
| PARAM 2 | Delay time / feedback |

Useful for harmoniser-like effects, cascading pitch shifts, or subtle detuning on repeats.

## 3 — Stereo Delay

Delay with separate timing for left and right channels, creating a wide stereo image from a mono source.

| Parameter | Function |
|---|---|
| PARAM 1 | Delay time |
| PARAM 2 | Feedback |

## 4 — Granular Delay

Granular processing applied to a delay signal — input audio is fragmented into grains and scattered.

| Parameter | Function |
|---|---|
| PARAM 1 | Grain size / scatter |
| PARAM 2 | Feedback / density |

Produces glitchy, fragmented, cloud-like textures from any input.

## 5 — Reverb

Algorithmic reverb for natural room and hall sounds.

| Parameter | Function |
|---|---|
| PARAM 1 | Reverb size (room size) |
| PARAM 2 | Decay time |

## 6 — Saturated Reverb

Reverb with saturation applied to the wet signal for a denser, warmer, more coloured reverb tail.

| Parameter | Function |
|---|---|
| PARAM 1 | Reverb size |
| PARAM 2 | Saturation amount / decay |

## 7 — Leslie Speaker

Simulation of a Leslie rotary speaker cabinet — a tremolo/vibrato effect with Doppler characteristics.

| Parameter | Function |
|---|---|
| PARAM 1 | Rotation speed (slow to fast) |
| PARAM 2 | Depth / cabinet character |

Stereo output gives the characteristic left-right rotation sweep.

## 8 — Overdrive / Bitcrush

Distortion combined with digital bit reduction for lo-fi and aggressive textures.

| Parameter | Function |
|---|---|
| PARAM 1 | Drive / crush amount |
| PARAM 2 | Tone / character |
