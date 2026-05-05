# Modes

## Phase Comparator Selection

The single most significant parameter in the **A-196** is the choice of phase comparator, selected with the PHASE COMP. switch.

### PC1 — XOR (Exclusive OR)

PC1 locks not only at the fundamental frequency of the external signal but also at its harmonics (integer multiples and sub-multiples). This means the PLL may "snap" to a frequency that is 2×, 3×, 4× the external frequency, or 1/2, 1/3, etc. — depending on where the internal VCO is initially set. This is a limitation in conventional PLL applications but in a musical context it is a feature: it allows the internal VCO to lock at pseudo-harmonic relationships with a master signal. The output waveform and locking behaviour depend on the waveform of the external signal.

### PC2 — RS Flip-Flop

PC2 tends toward cleaner frequency locking with less tendency to snap to harmonics. When PC2 is selected, the LOCK LED illuminates when the internal VCO has locked to the external frequency. PC2 is particularly suited for sound effects where a clear pitch-tracking relationship is desirable. Response to input waveform changes is sensitive — square waves at 50% duty cycle give the most predictable results.

### PC3 — Digital Memory Network

PC3 is technically the best-performing comparator: it does not lock at harmonics and shows the most stable and selective locking behaviour. It is Doepfer's recommended starting point for exploring the module. PC3 gives the clearest example of classical PLL behaviour — the internal VCO follows the external frequency once within range, then holds lock cleanly.

## LPF Frequency Mode

The LOW PASS FREQ control determines the character of the locking behaviour:

- **Low setting (CCW)**: LPF frequency is very low, output is smooth, VCO lag is high — PLL sounds like a slow portamento-pitch-follower. Takes up to ~0.1 s to settle on a new frequency.
- **High setting (CW)**: LPF frequency is higher, VCO tracks faster but wobbles — audible frequency jitter around the target pitch. Can sound like a detuning/vibrato effect at moderate settings.
- **Very high setting**: LPF frequency approaches audio range. The VCO modulates within a single cycle of the external signal — produces entirely new timbral effects, not pitch tracking.

## Standalone VCO Mode

With a cable inserted into the VCO CV input (breaking the LPF → VCO normalization) and the VCO RECT OUT patched to other modules, the internal VCO functions as an independent rectangle-wave VCO with a linear CV response. Use OFFSET to set the base frequency and RANGE to select the frequency decade.

## Standalone LPF Mode

With cables inserted to break normalizations, the LPF block can be used as a very slow low-pass CV filter (slew limiter / lag processor) suitable for smoothing control voltages. The frequency range goes below audio down to near-DC. Not suitable for audio filtering due to DC coupling requirements.
