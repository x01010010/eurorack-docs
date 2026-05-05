# Modes

## Monophonic (Default)

Both VCOs track the same MIDI note / CV pitch. VCO 2 can be detuned for classic unison or set to a fixed interval for parallel harmony.

## Paraphonic

Each VCO responds to a different MIDI note independently. Both still share the VCF and VCA, so envelopes affect both voices together — the classic paraphonic compromise. Works best for slow, legato parts or drone-plus-melody textures where shared filtering is acceptable.

## VCF Filter Modes

The MODE switch selects:
- **LP** — 12 dB/oct low-pass (normalled output)
- **HP** — 12 dB/oct high-pass (normalled output)
- **LP+HP** — simultaneous LP and HP on separate jacks for band-split processing

## LFO Sync Modes

- **Free** — LFO runs at its own rate set by the RATE knob
- **MIDI Clock** — LFO rate locks to incoming MIDI clock divisions
- **Key Sync** — LFO resets on each new note trigger

## Sample & Hold

The S&H samples its SIGNAL IN on each rising edge of CLOCK IN. Without a patch cable, it samples the internal noise generator, producing random stepped voltages. With GLIDE applied, the output slews between steps for smooth random modulation.
