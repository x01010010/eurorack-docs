# Overview

**A-196** is a Phase Locked Loop (PLL) module. A PLL is a closed-loop frequency feedback system in which an internal oscillator tracks the frequency of an external signal. The module contains all three PLL building blocks as discrete, independently accessible units: an internal VCO, a phase comparator (PC), and a low-pass filter (LPF). All three are pre-wired in the standard PLL configuration via normalized sockets, but each connection can be broken and replaced by external signals or modules.

## How a PLL Works

The internal VCO output is compared with an external input signal in the phase comparator. The PC outputs a digital signal (low/high/tristate) representing whether the two signals are in phase, ahead, or behind. The LPF smooths that output into a steady control voltage, which is fed back into the internal VCO's CV input. This creates a feedback loop that drives the internal VCO to match the external signal's frequency.

Three "stumbling blocks" make PLL behaviour musically interesting:

1. **Phase comparator type** — each of the three PC options locks differently. Some lock at harmonics; some are sensitive to waveform shape.
2. **LPF frequency** — too high causes jitter (the VCO wobbles around the target); too low causes portamento-like lag. Neither is wrong — both are musical.
3. **Frequency range** — the VCO must be set close enough to the external frequency to capture and hold lock.

## At a Glance

- **8 HP**, 40 mm deep
- **Three phase comparators**: PC1 XOR, PC2 RS flip-flop (with lock LED), PC3 digital memory network
- **Internal VCO**: linear CV response, rectangle output, Offset + Range (3 positions)
- **Low-pass filter**: manual frequency control for smoothing PC output
- **Normalized sockets** — standard PLL patch pre-wired, breakable
- **Applications**: frequency tracking, frequency multiplication, clock generation, portamento effects, experimental sound design
- **Power**: 40 mA (+12 V) / 10 mA (−12 V)
