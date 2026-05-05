# Modes

## Buffered Multiple Mode

Each multiple section buffers (actively drives) its input signal to four outputs. Unlike passive multiples (a simple Y-cable), buffered multiples maintain signal voltage accurately regardless of how many outputs are loaded. Use for V/OCT pitch signals where loading errors could detune oscillators.

## Gate Logic Mode

The gate section performs Boolean logic on two gate or trigger inputs:

| Output | Logic |
| --- | --- |
| AND | High only when both inputs are simultaneously high |
| OR | High when at least one input is high |
| NOT A | Inverted output of input A (high when A is low) |
| NOT B | Inverted output of input B (high when B is low) |

These four functions cover all basic Boolean gate combinations and allow complex rhythmic patterns to be derived from two simple inputs.

## Usage Notes

- The multiples and gate sections are independent — both can be used simultaneously.
- Multiple inputs accept any signal type (CV, audio, gate, clock); the buffers are not frequency-limited.
- Gate logic inputs and outputs are standard Eurorack gate levels (0V / +5V or 0V / +8V depending on source).
