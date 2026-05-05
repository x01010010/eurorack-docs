# Modes

## Envelope Mode (CYCLE off)

With CYCLE disabled, each channel behaves as an AR (attack-release) envelope triggered by gates or triggers at the IN jack. The output rises when the gate is high and falls when the gate goes low. RISE sets attack time; FALL sets release time.

## LFO Mode (CYCLE on)

With CYCLE enabled, the function generator runs continuously, looping through its rise and fall segments. RISE sets the time for the rising half-cycle; FALL sets the time for the falling half-cycle. The LFO produces a triangle wave (in LIN mode) or curved variants (LOG/EXP modes).

## Slew / Portamento

Patch a CV signal — a pitch sequence, for example — directly to CH IN. With CYCLE off the function generator acts as a slew limiter, smoothing steps in the incoming signal. RISE controls the rate of upward slews; FALL controls downward slews. Set to LOG mode for natural-sounding glide.

## Curve Shapes (LIN / LOG / EXP switch)

| Setting | Character |
| --- | --- |
| LIN | Linear — straight ramp up and down |
| LOG | Logarithmic — fast initial movement, slow finish (natural-sounding) |
| EXP | Exponential — slow initial movement, fast finish (snappy release) |
