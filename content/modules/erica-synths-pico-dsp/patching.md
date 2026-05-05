# Patching

## Basic Insert Effect

Patch any mono audio source through the DSP before your output or mixer.

```
VCO OUT → PICO DSP IN → OUT L/R → Stereo Mixer
```

Set DRY/WET fully wet for full processing, or blend back for parallel effect.

## CV-Modulated Reverb Size

Use an LFO or envelope to sweep reverb size in real time.

```
VCO OUT → PICO DSP IN (Effect: Reverb)
LFO OUT → PICO DSP CV       (sweeps PARAM 1 = room size)
PICO DSP OUT L/R → Mixer
```

A slow sine LFO on the CV input creates gradually evolving reverb character.

## Self-Oscillating Reverb

Set Effect to Reverb, DRY/WET to fully wet, and PARAM 2 (decay) to maximum. Feed a short trigger or burst; the reverb tail sustains indefinitely. Use CV over PARAM 1 to vary the space.

## Granular Textures from Noise

Route a noise source into granular delay for shifting, fragmented clouds.

```
Noise OUT → PICO DSP IN (Effect: Granular Delay)
LFO (slow) → PICO DSP CV (grain scatter)
PICO DSP OUT L/R → Reverb → Mixer
```

## Pitch Shift Delay Harmoniser

Use pitch-shift delay to layer a pitched harmony above a melodic line.

```
VCO OUT → PICO DSP IN (Effect: Pitch Shift Delay)
PICO DSP OUT L/R → Mixer (blend with dry VCO output)
```

Set PARAM 1 to a musical interval (fifth, third). Adjust DRY/WET to control the harmony level against the fundamental.

## Leslie on a Pad

Add rotary speaker movement to a sustained pad or drone.

```
Drone/Pad OUT → PICO DSP IN (Effect: Leslie)
Slow LFO → PICO DSP CV (modulates rotation speed)
PICO DSP OUT L/R → Stereo Mixer
```

## Envelope-Controlled Drive

Use a percussive envelope to push overdrive on attack and decay naturally.

```
VCO or Sample OUT → PICO DSP IN (Effect: Overdrive/Bitcrush)
ENV OUT → PICO DSP CV (drives PARAM 1)
PICO DSP OUT L/R → Mixer
```

The envelope hits hardest on attack, then the drive recedes — mimicking natural amp distortion behaviour.
