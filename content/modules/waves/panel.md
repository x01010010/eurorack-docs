# Panel & I/O

The WAVES panel is organized around three buttons (top), five large knobs with attenuverters (middle), and a row of patch points (bottom). The button LEDs are bicolor and indicate the current mode/range/relationship state at a glance.

## Buttons

| # | Control | Behavior |
| --- | --- | --- |
| 1 | **FREQUENCY RANGE** | Cycles the central frequency range of the FREQUENCY knob. Green = ⅛ Hz · Orange = 2 Hz · Red = 131 Hz. |
| 2 | **MODE** | Cycles the working mode. Green = unipolar one-shot AD envelope (0 V to +8 V) · Orange = bipolar cyclic LFO/VCO (±5 V) · Red = unipolar one-shot ASR envelope (0 V to +8 V). |
| 3 | **RELATIONSHIP** | Sets how the four outputs relate to each other and what the SHIFT/LEVEL knob controls. Green = output crossfade · Orange = peak phase offset · Red = frequency ratio between outputs. |

## Knobs (with Attenuverters)

Each of these knobs has an attenuverter that scales (CW) or inverts (CCW) the corresponding CV input.

| # | Knob | Function |
| --- | --- | --- |
| 4 | **SLOPE** | Adjusts the rise/fall ratio of the waveform. Fully CCW = sawtooth · 12 o'clock = triangle · fully CW = ramp. |
| 7 | **FREQUENCY** | Sets the base frequency, ±4 octaves around the chosen RANGE. |
| 10 | **SMOOTHNESS** | CCW applies a low-pass filter (smoother). CW engages a wavefolder (sharper, harmonically richer). |
| 13 | **SHAPE** | Curvature of the segments. CCW = smoothed long-attack/short-release · 12 o'clock = clean wave · CW = smoothed short-attack/long-release. |
| 16 | **SHIFT / LEVEL** | When MODE is OFF, sets amplitude and polarity of output 22 (main). Otherwise behaves per the active RELATIONSHIP. |

The single FM input has its own attenuverter (5). When nothing is patched into the FM jack, the attenuverter doubles as a fine-tune control via an internal 0.1 V reference.

## Patch Points

### CV Inputs (3.5 mm TS, 50 kΩ)

| Input | Range |
| --- | --- |
| 6 **SLOPE CV** | -8 V to +8 V |
| 9 **FREQUENCY CV** | -8 V to +8 V |
| 12 **SMOOTHNESS CV** | -8 V to +8 V |
| 15 **SHAPE CV** | -8 V to +8 V |
| 18 **SHIFT/LEVEL CV** | -8 V to +8 V |
| 19 **V/OCT** | -3 V to +5 V |
| 20 **TRIG** | 5 Vpp |
| 21 **CLOCK** | 5 Vpp |

### Outputs (3.5 mm TS, DC-coupled, 1 kΩ)

| # | Output | Notes |
| --- | --- | --- |
| 22 | **OUT 1** | Main output. The signal you'd expect from the SLOPE / SHAPE / FREQUENCY settings. |
| 23 | **OUT 2** | Derived from OUT 1 according to RELATIONSHIP setting. |
| 24 | **OUT 3** | Pulse wave with PWM coming from SLOPE. |
| 25 | **OUT 4** | Square wave. |

## RELATIONSHIP in Detail

The RELATIONSHIP button decides what SHIFT/LEVEL (16) does to the four outputs:

- **Green — Crossfade**. SHIFT/LEVEL morphs continuously across the four outputs. CCW favors output 1, CW favors output 4.
- **Orange — Phase**. SHIFT/LEVEL offsets the peak phases of the outputs against each other. Outputs share a frequency but fire at different times — a built-in polyrhythm generator.
- **Red — Ratio**. SHIFT/LEVEL adjusts the frequency ratios. At 12 o'clock all four outputs follow FREQUENCY; CW raises the frequency of outputs 2–4, CCW lowers them. Useful as a chord/sub-harmonic generator at audio rates.

## Triggering Behavior

The TRIG input behaves differently per mode:

- **Green (AD)** — pulse triggers the envelope, which runs through its full cycle.
- **Orange (LFO/VCO)** — pulse resets the waveshape phase.
- **Red (ASR)** — attack initiates with the trigger edge, holds while the trigger is high, then releases.

When CLOCK is patched, FREQUENCY (7) becomes a clock division/multiplication ratio rather than absolute pitch.
