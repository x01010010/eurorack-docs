# Tips

## Start With PC3 and Low LPF

The recommended initial patch (Doepfer's own suggestion) uses PC3 with LOW PASS FREQ at minimum. This gives the cleanest, most predictable tracking behaviour and is the best way to understand the module before exploring its stranger edges.

## The LPF Frequency Is the Character Knob

More so than the phase comparator choice, LOW PASS FREQ defines how the module sounds in practice. A very low setting gives portamento; a moderate setting gives jitter/wobble; a high setting gives new timbral territory. Think of it as the primary expressive control.

## Buffer Before IN 2 if Sharing the Signal

The IN 2 (Signal In) jack is protected by a 5 V Zener diode. If the same signal is going elsewhere in the patch, clip that source with a buffer first. Without buffering, the Zener may round or distort the signal as seen by other modules.

## DC Coupling for Sub-Audio and LFO Sources

JP3 and JP4 are set to DC-coupled by default (jumpers installed). Leave them installed when feeding LFOs or slow CVs into the signal inputs. AC coupling (jumpers removed) is mainly useful to strip DC offset from audio signals that might bias the phase comparator.

## Use the Standalone VCO for Linear-Response Sequences

The internal VCO has a linear (not exponential) 1 V/oct response. Plugging into VCO CV breaks the LPF normalization and gives you a standalone linear-response rectangle VCO. Useful for driving the A-171 (slew limiter), audio-rate modulation, or as a clock.

## Frequency Multiplication is the Killer App

The combination of **A-196** with a voltage-controlled frequency divider (A-163, or A-160+A-161) for feedback is the most musically powerful use case. The PLL output becomes a pitch-tracking frequency multiplier. With VC division the multiplier ratio changes with CV, letting you sweep through harmonic relationships in sync with a master pitch.

## PC1 for Harmonic Drift Effects

PC1's tendency to lock at harmonics is a nuisance in conventional PLL design but a source of interesting instability musically. Set the internal VCO near (but not exactly at) the expected harmonic — the PLL will hover at the edge of lock, producing unstable quasi-harmonic beating effects.

## The Module Rewards Patience

This is one of Doepfer's own characterisations: the **A-196** does not reveal its behaviour straightforwardly. Spend time at each setting before moving on. Many of the most interesting sounds come from slightly mismatched settings — near-lock rather than locked.
