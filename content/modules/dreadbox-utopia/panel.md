# Panel & I/O

## Attenuverters (×4)

Four identical channels, each with:

| Control/Jack | Description |
|---|---|
| IN | Signal input (CV or audio) |
| KNOB | Attenuverter — full CCW is full negative (−1×), center is zero (mute), full CW is full positive (+1×) |
| OUT | Scaled/inverted output |

At center the signal is muted; rotating CW increases positive gain to unity; rotating CCW increases negative (inverted) gain to unity.

## Offset Generator

| Control/Jack | Description |
|---|---|
| KNOB | Sets a DC offset from −10 V to +10 V |
| OUT | Outputs the offset voltage |

The offset output can be summed into the mixer or patched independently. Use it to shift a CV range up or down, set a bias voltage, or provide a static modulation value.

## 4-to-3 Mixer / Buffered Splitter

| Jack | Description |
|---|---|
| IN 1–4 | Signal inputs (normalled for splitter use) |
| OUT 1–3 | Mix outputs |

When signals are patched to IN 1–4, the section sums them. When only one input is patched, the signal appears at all three outputs (buffered splitter behavior). Mix amounts are determined by the attenuverters when routed through them.

## Voltage-Controlled LFO

| Control/Jack | Description |
|---|---|
| RATE | Rate knob — sets base LFO speed from 30 s to 440 Hz |
| CV IN | CV input for rate control |
| OUT | LFO output |

LFO waveform is variable (sine-like at low rates, approaching square at extremes depending on the Pulserizer state). Patching the LFO output into the Pulserizer can produce clocked square waves.

## Pulserizer

| Control/Jack | Description |
|---|---|
| IN | Signal input |
| THRESHOLD | Sets the threshold at which the input is converted to a square wave |
| OUT | Square wave output |

Any signal exceeding the threshold produces a high output; below produces low. Distorts audio into aggressive bitcrush-like tones and converts LFOs or slow CVs into gates or clocks.
