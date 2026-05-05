# Patching

## Basic Low-Pass Sweep

```
VCO → AUDIO IN (set LEVEL knob to taste)
LFO OUT → CV (attenuate CV knob)
LP OUT → destination
```

## Simultaneous LP and HP (Pseudo-Stereo)

```
VCO → AUDIO IN
LP OUT → left channel / chain A
HP OUT → right channel / chain B
FREQ swept slowly — opposite spectral movement in each channel
```

## Bandpass Formant Sweep

```
VCO → AUDIO IN (DRIVE switch on)
LFO TRIANGLE → CV
BP OUT → destination
RESONANCE set medium-high — emphasises the sweeping peak
```

## Self-Oscillating Sine VCO

```
V/OCT → V/OCT input
RESONANCE at maximum
LP OUT → VCA → output (or use HP for inverted phase)
No audio input needed — filter generates sine from self-oscillation
```

## Quadrature Modulation Source

```
RESONANCE at maximum
V/OCT or CV → pitch
LP OUT → Ring Modulator IN A
BP OUT → Ring Modulator IN B
Or: LP OUT → Pan CV IN of a panning VCA for auto-pan effect
```

## Driven Resonant Filter for Percussion

```
Noise / drum trigger → AUDIO IN
DRIVE on, RESONANCE high
Envelope → CV (fast attack, medium decay)
BP OUT or LP OUT → destination
Fast envelope snaps resonant peak for a 909-style tom or boing
```

## Parallel Filter Mixing

```
VCO → AUDIO IN
LP OUT → Mixer channel 1 (set to 70%)
BP OUT → Mixer channel 2 (set to 30%)
Blend for a 2-pole LP with added mid-frequency presence
```

## Self-Oscillation as Modulation Source

```
CINNAMON in self-oscillation (slow, LFO rate)
FREQ knob sets LFO speed
LP OUT → another filter's FM/CV input
Sine-wave FM from CINNAMON modulates the second filter's cutoff
```
