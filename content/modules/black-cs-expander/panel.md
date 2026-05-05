# Panel & I/O

The CS Expander connects to the Black Code Source via a ribbon cable on the rear of both modules. All power is supplied through the ribbon — do not connect the Eurorack power header to the Expander.

## Controls

| Control | Type | Function |
| --- | --- | --- |
| AUTOBEND TIME | Knob | Sets the duration of the autobend envelope — how quickly the Code Source's internal clock rate decays from its peak value back to the base RATE setting. |
| AUTOBEND DEPTH | Knob (attenuverter) | Controls how far above the base rate the autobend jumps on trigger. Fully CCW = no bend; fully CW = maximum pitch sweep. |
| ALT MODE | Switch | Engages alternative polynomial/generation modes not available on the Code Source's own MODE switch. Adds additional noise and CV flavours. |
| TRIG | Button | Manual trigger button — fires the autobend envelope without an external signal. |

## Inputs

| Jack | Function |
| --- | --- |
| TRIG IN | External trigger input for the autobend envelope. Rising edge fires the bend. Accepts gate or trigger signals. |

## Outputs

| Jack | Function |
| --- | --- |
| ENV OUT | Autobend envelope output — the CV shape of the pitch bend as a patchable signal (0–+5 V). Use to modulate other modules in sync with each percussion hit. |
| CLOCK OUT | The Code Source's internal clock, exposed as a Eurorack jack. Useful for syncing other modules to the Code Source's rate. |

## Connection Notes

- Connect using only the ribbon cable supplied with the module.
- Before connecting, remove the security jumper from the ribbon socket on the Code Source's rear PCB.
- Match the cable orientation carefully — the ribbon connector on the Code Source is near the Eurorack power header; do not confuse them.
- The Expander must be mounted adjacent to (or near) the Code Source due to ribbon cable length.
