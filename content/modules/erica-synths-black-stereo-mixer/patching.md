# Patch Recipes

## Stereo Effects Return

Route a stereo effect (reverb, delay, chorus) into IN1 L and IN1 R. Blend it into a dry signal on IN2 L/R. Use IN1 LEVEL to ride the wet return.

```
dry signal (L/R) → IN2 L / IN2 R
effect send ← tap from dry path
effect return (L/R) → IN1 L / IN1 R
OUT L / OUT R → output module
```

## Auto-Panning Mono Voice

Patch a mono oscillator or drum module into IN4. Send a slow LFO to PAN CV. The voice sweeps across the stereo field at the LFO rate.

```
mono source → IN4
LFO → PAN CV
OUT L / OUT R → output module
```

For ping-pong style panning, use a square LFO at audio or sub-audio rate.

## Merging a Dual-Output Oscillator

If a module outputs two independent signals on its L and R jacks (rather than true stereo), patch them into IN1 L and IN1 R and engage MERGE. Both voices appear centered, summed, rather than hard-panned.

```
VCO out 1 → IN1 L
VCO out 2 → IN1 R
MERGE switch → on
```

## Three Stereo Modules + One Mono Lead

Use IN1–IN3 for three stereo modules (e.g., a stereo reverb, a granular cloud, and a stereo delay). Route your mono lead voice into IN4 and position it with PAN. The lead sits in a defined place in the stereo image while the three layers fill the field.

## Pre-fade Monitoring with PFL Expander

Connect the optional Black PFL expander to the rear header. It allows soloing any channel through headphones without affecting the main mix — useful for troubleshooting signal flow or cueing a channel before bringing it up.
