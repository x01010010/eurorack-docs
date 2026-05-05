# Panel & I/O

The SKIES panel has three zones: **buttons & status LEDs** at the top, **knobs** in the middle, and **patch points** at the bottom. The four multi-function LEDs change role depending on which button you last pressed.

## Buttons

| # | Control | Behavior |
| --- | --- | --- |
| 1 | **FREEZE** | Freezes the recording buffer and mutes incoming audio. Surrounding LED lights when active. Press again to release. |
| 3 | **PARAMETER** | Short press cycles the BLEND assignment (Wet/Dry → Stereo Spread → Feedback → Reverb). Long press (>1 s) then short press cycles audio quality. Hold 5 s to enter the operating-mode menu. |
| 4 | **SAVE / LOAD** | Hold 1 s + use PARAMETER to pick a slot to **save** the current buffer (red flashing LED). Short press + use PARAMETER to **load** a stored buffer (green flashing LED). 10 s of inactivity cancels. |

## Knobs

| # | Knob | Function |
| --- | --- | --- |
| 6 | **POSITION** | Where in the buffer grains are read from. CW = earlier in the buffer. |
| 7 | **SIZE** | Grain length. CCW = short (\~1 ms), CW = long (\~100 ms+). |
| 8 | **PITCH** | Grain pitch relative to recorded audio. Center = unison. |
| 9 | **INPUT GAIN** | -18 dB CCW → +6 dB CW. Last LED = soft clipping. |
| 10 | **DENSITY** | Center = silent. CCW = regular grains (rate increases CCW), CW = random grains (rate increases CW). |
| 11 | **TEXTURE** | Grain envelope shape: square → triangle → Hann. Past 2 o'clock grains begin smearing into one another. |
| 12 | **BLEND** | Multi-function — controls whichever parameter PARAMETER currently selects. LEDs animate green → yellow → red as value increases. |

## Patch Points

### CV Inputs (3.5 mm TS, 50 kΩ)

| # | Jack | Range | Notes |
| --- | --- | --- | --- |
| 13 | **FREEZE TRIG** | 5 Vpp | Triggers the FREEZE function. |
| 14 | **TRIG** | 5 Vpp | Triggers grain generation. With DENSITY at center, external triggers fully clock grain output. |
| 15 | **POSITION CV** | -8 V to +8 V | |
| 16 | **SIZE CV** | -8 V to +8 V | |
| 17 | **V/OCT** | 0 V to +8 V | Pitch tracking input. |
| 18 | **BLEND CV** | -8 V to +8 V | Modulates whichever parameter BLEND is assigned to. |
| 19 | **DENSITY CV** | -8 V to +8 V | |
| 20 | **TEXTURE CV** | -8 V to +8 V | |

### Audio I/O

| # | Jack | Type | Notes |
| --- | --- | --- | --- |
| 21 | **INPUTS L / R** | AC-coupled, 22 kΩ | Mono = use L only. |
| 22 | **OUTPUTS L / R** | AC-coupled, 1 kΩ | Mono = use L only. Watch stereo-spread settings when summing to mono. |

### Other

- **5. USB-C** — firmware updates via SynthTribe.

## The 4-LED Display

The four LEDs do double duty:

- **Idle / playing** — input level meter (gain set by INPUT GAIN).
- **While FREEZE is active** — output level meter.
- **PARAMETER short-press** — green LED indicates which BLEND target is selected.
- **PARAMETER long-press** — red LED indicates current buffer quality.
- **BLEND value display** — animates green → yellow → red.
- **SAVE flow** — single LED blinks to show the chosen memory slot.
