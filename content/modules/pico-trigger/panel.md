# Panel & I/O

## Controls

| Control | Type | Function |
| --- | --- | --- |
| ENCODER | Rotary encoder with push | Rotate to adjust tempo (internal clock) or shuffle amount. Push to toggle between tempo and shuffle adjustment. |
| LOAD | Button | Press to enter pattern selection mode. Trigger output LEDs indicate the current slot; use the encoder to select a pattern (1–8), then press to confirm. |

## LEDs

| LED | Function |
| --- | --- |
| Trigger 1–4 LEDs | Flash on each trigger output firing. During pattern selection (LOAD), they indicate the active pattern slot. |
| Encoder LED | Blinks green once to confirm a successful pattern upload. |

## Inputs

| Jack | Function |
| --- | --- |
| CLK | Dual-purpose: accepts external clock input (rising edge advances pattern) OR receives pattern data uploaded from the web interface via audio cable. |

## Outputs

| Jack | Function |
| --- | --- |
| CLK OUT | Clock output — outputs the internal or external clock signal for syncing other modules. |
| TRIG 1 | Trigger output for track 1 (5 V, 10 ms pulse). |
| TRIG 2 | Trigger output for track 2 (5 V, 10 ms pulse). |
| TRIG 3 | Trigger output for track 3 (5 V, 10 ms pulse). |
| TRIG 4 | Trigger output for track 4 (5 V, 10 ms pulse). |

## Panel Notes

- The CLK jack is shared between external clock input and pattern upload. You don't use both simultaneously — unplug the audio cable after uploading.
- When no external clock is patched, the module runs on its internal clock at the tempo set by the encoder.
- Pattern selection via LOAD is immediate and can be done during playback for live switching.
