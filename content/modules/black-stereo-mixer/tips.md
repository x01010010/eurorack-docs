# Tips & Tricks

## Use MERGE to Double a Mono Signal

If you only have a mono signal but want it to fill the stereo field, patch it into IN1 L only and engage MERGE. The signal appears on both L and R buses without needing a mult or a separate unity gain copy.

## Use BOOST to Compensate for Quiet Modules

Some modules — particularly older or lower-headroom designs — output at noticeably lower levels than modern Eurorack standards. The +6 dB boost on IN1 and IN2 compensates for this without needing an inline amplifier.

## Keep the PAN CV Center for a Stable Mono Sum

If you send OUT L and OUT R to a mono destination (e.g., a filter or compressor), keep IN4's PAN at center (12 o'clock) with no CV. The signal appears equally on both buses, effectively doubling its level — useful before a utility that expects a louder input.

## LED Clipping Indication

The signal LEDs are more than cosmetic — they let you know when the bus is getting hot. If an LED appears constantly bright rather than pulsing with the signal, you likely have too much gain on one or more channels. Pull the levels down to preserve headroom.

## Leave IN3 for Last-Minute Additions

Because IN3 has no boost or merge options, it is the most basic of the stereo inputs. Reserve it for sources that are always present at consistent levels — a main oscillator pair, a drum machine — and use IN1/IN2 for the variable-level, performance-oriented channels where boost and merge are useful.
