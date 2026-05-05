# Modes

Each of the four LFO channels has an independent mode switch. The mode determines the channel's relationship to channel 1 (the master) or to itself.

## Free

Each channel runs independently at its own RATE fader setting. All four LFOs are completely asynchronous. The default mode for four independently-varied modulation sources.

## Quadrature

Channels 2, 3, and 4 output the same waveform as channel 1, phase-shifted by 90°, 180°, and 270° respectively. All four channels share channel 1's rate. Produces phase-offset sine waves ideal for circular/vector modulation and stereo field movement.

## Phase

Channels 2–4 run at channel 1's rate, but their phase offset is set by their own RATE fader. The fader moves from 0° (fader at bottom) to 360° (fader at top) phase offset relative to channel 1. Allows precise custom phase relationships.

## Divide

The channel runs at a rate that is an integer division of channel 1's rate. The channel RATE fader selects the division ratio. Produces rhythmically related LFOs that are mathematically synced (channel 1 ÷ 2, ÷ 3, ÷ 4, etc.).

## Assignable Waveform (ASN output)

The waveform on the ASN output can be set per channel (via jumper or firmware on some versions) to triangle, sawtooth, ramp, or stepped random. Check the module documentation for the version-specific method.
