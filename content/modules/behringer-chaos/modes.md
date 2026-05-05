# Modes

## T Section Modes

### Clocked / Free-Running
With no external clock, the T section generates its own rhythm at the RATE-set frequency. Patch an external clock to EXT CLOCK to lock to a master tempo.

### BIAS Distribution
BIAS controls how triggers are distributed across T1, T2, and T3:
- **Low BIAS**: Triggers concentrate on T1 — T1 fires most, T3 rarely.
- **Noon BIAS**: Triggers distribute evenly across all three outputs.
- **High BIAS**: Triggers concentrate on T3 — T3 fires most, T1 rarely.

### JITTER
JITTER adds timing randomness to when triggers fire relative to the clock. At zero, triggers are perfectly in time. At maximum, trigger timing is highly irregular — polyrhythmic or completely free depending on the setting.

## X Section Modes

### SPREAD
Controls the voltage range of X outputs. Low SPREAD = all outputs near a central voltage. High SPREAD = wide voltage swings across the full range.

### STEPS (Quantisation)
- **Fully CCW**: Smooth continuous random voltages.
- **Mid-range**: Stepped random voltages (like a sample-and-hold).
- **Fully CW**: Quantised to a musical scale (chromatic or user-programmable).

### FEEDBACK
Controls correlation between X outputs. Low feedback = independent outputs. High feedback = outputs track each other closely, producing related (but not identical) voltages.

## LENGTH / Loop Mode
At minimum LENGTH (fully CCW), Chaos locks into a short repeating loop — the same pattern repeats on every cycle. Increase LENGTH to lengthen the loop (more variety before repeating). At maximum, the sequence never fully repeats. This is the "how random is random?" control.
