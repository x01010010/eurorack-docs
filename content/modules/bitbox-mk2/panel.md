# Panel & I/O

## Interface

| Element | Description |
|---|---|
| Touchscreen (3.5") | Primary interface. Tap clips to launch/stop, navigate menus, set parameters, and edit samples. |
| Encoder | Rotary encoder for parameter adjustment and menu navigation when finer control than touch is preferred. |

## Audio I/O

| Jack | Description |
|---|---|
| IN L / IN R | Stereo audio input for live recording into the sampler. Accepts modular-level signals. |
| OUT L / OUT R | Stereo audio output. Carries the mixed output of all active clips. |

## CV Inputs

Eight CV input jacks (labeled CV 1–8) are freely assignable to module parameters via the touchscreen. Common assignments include:

| Assignment | Description |
|---|---|
| Clip trigger | Rising edge launches or stops a clip slot. |
| Pitch | Shifts sample playback pitch (1 V/oct tracking when configured). |
| Start / end point | CV-controlled playback region within the sample. |
| Volume | Per-clip amplitude control. |
| Granular parameters | Grain size, position, density when in granular mode. |
| Loop points | Dynamically resize loop boundaries. |

CV inputs accept standard Eurorack signal levels (±5 V / 0–5 V depending on assignment).

## MIDI

| Jack | Description |
|---|---|
| MIDI IN (TRS) | Receives MIDI note, CC, and clock messages. Use a TRS-to-DIN adapter for standard 5-pin MIDI. |
| MIDI OUT (TRS) | Sends MIDI messages. Enables **BITBOX MK2** to sync or control external MIDI gear. |

## Storage

| Element | Description |
|---|---|
| microSD slot | Holds sample files and preset configurations. Supports streaming of files up to 4 GB directly from card. |

## Panel Notes

- Audio inputs are for recording; the stereo outputs carry the playback mix — these are separate signal paths.
- CV assignments are configured per preset, not globally — different presets can have completely different CV mappings.
- MIDI jacks use TRS Type A (same as Arturia, Polyend); a TRS-to-DIN adapter is required for 5-pin MIDI devices.
