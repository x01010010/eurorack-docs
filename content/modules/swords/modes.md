# Modes

SWORDS has no software modes — the panel offers four broad operating modes determined by routing, drive, and resonance.

## 1. Single (one filter only)

ROUTING fully CCW. Only filter 1 (or filter 2, depending on routing) is heard at MAIN OUT. Use this when you only need one channel of filtering and want to leave the second filter free for an unrelated patch.

## 2. Parallel

ROUTING at 12 o'clock. Filter 1 and filter 2 process the same input independently, then sum at MAIN OUT. With the two filters set to different MODES (e.g. low-pass and high-pass) you get a band-split. With matched MODES and slightly offset cutoffs, you get phasing/comb effects.

## 3. Series (24 dB cascade)

ROUTING fully CW. Filter 1 feeds into filter 2 in series. With both filters in low-pass mode, this is a 24 dB low-pass — the steeper, fatter classic synth tone.

## 4. Stereo

Patch SIG IN 1 and SIG IN 2 with the L and R of a stereo source. Take filter 1 OUT and filter 2 OUT independently as a stereo pair. The MAIN OUT becomes irrelevant — you bypass the routing matrix and use the per-filter outputs as a stereo bus.

## Drive modes (per filter)

The drive section has three regions:

| RESPONSE setting | DRIVE behavior |
| --- | --- |
| Fully CCW | Soft clipping — gentle saturation |
| 12 o'clock | Hybrid — clipping with a touch of folding |
| Fully CW | Two-stage wavefolding — aggressive harmonic generation |

At unity drive (~11 o'clock) and fully CCW response, the drive section is essentially transparent.

## Self-oscillation as VCO

With RES at maximum, each filter self-oscillates as a near-pure sine wave. V/OCT input tracks accurately enough to use SWORDS as a stereo sine VCO — patch a sequencer V/oct, take the two filter outputs separately, and you have two tracking sine sources. Modulate MODE for harmonic shifts, modulate DRIVE for wavefolded harmonics.

## SHIFT-locked stereo

SHIFT engaged + parallel routing + slight offset on filter 2 FREQ = a constantly-spaced stereo filter pair that moves together. Modulate filter 1 FREQ with an LFO; both filters sweep, but the offset between them is preserved. Beautiful for stereo pad processing.
