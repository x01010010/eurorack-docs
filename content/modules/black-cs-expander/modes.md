# Modes

## Autobend Off

With AUTOBEND DEPTH fully CCW (or no trigger patched), the Expander adds no modulation to the Code Source. The ALT MODE switch and clock/envelope outputs are still active.

## Autobend Active

When triggered (via TRIG button or TRIG IN jack), the autobend fires:

1. The Code Source's internal clock immediately jumps to a high rate (dense noise / high-pitch region).
2. The rate then decays back toward the base RATE knob position according to the AUTOBEND TIME setting.
3. The ENV OUT jack tracks this decay as a CV signal.

The result is a percussive "pitch drop" — characteristic of 8-bit drum machines, chiptune snares, and classic digital percussion. AUTOBEND TIME controls how fast the decay falls (short = snappy click, long = swooping pitch bend). AUTOBEND DEPTH controls the intensity of the initial leap.

Combined with the Code Source's RATE (which sets the resting pitch after the bend completes), a full percussive voice is defined by four parameters: base RATE, AUTOBEND DEPTH, AUTOBEND TIME, and X/Y polynomial character.

## ALT MODE

The ALT MODE switch on the Expander provides additional generation modes beyond the three on the Code Source's own MODE switch. These alter the polynomial feedback algorithm for different noise and CV textures not accessible from the main module alone. The exact character varies with X/Y selection — explore systematically to map the expanded palette.

## CLOCK OUT

The CLOCK OUT jack always reflects the Code Source's current internal clock rate — including any autobend modulation. At low base RATE settings the clock is a slow gate; at high RATE it becomes an audio-rate signal. This makes CLOCK OUT a useful, rate-synced modulation or trigger source for other modules.
