# Patching

## Basic Ring Modulation

```
VCO 1 → SIGNAL 1 IN
VCO 2 → CARRIER 1 IN
CARRIER 1 LEVEL at maximum
VCA CV IN ← Gate or envelope
VCA OUT → destination
```

Classic ring modulation: metallic inharmonic sum/difference tones from two oscillators.

## Waveshaping with Partial Carrier

```
VCO SAW → SIGNAL 1 IN
VCO 2 (or LFO) → CARRIER 1 IN
CARRIER 1 LEVEL at 30–50% — explore the waveshaping range
RM1 OUT or VCA OUT → destination
```

Partial carrier level produces waveshaping effects not available with full ring modulation. Sweep CARRIER 1 LEVEL manually or with a CV for a continuously morphing timbre.

## Crossfade Between Two Ring Mod Flavours

```
VCO 1 → SIGNAL 1 IN
VCO 2 → CARRIER 1 IN  (pitched interval above VCO 1)
VCO 1 → SIGNAL 2 IN
VCO 3 → CARRIER 2 IN  (different interval)
LFO → XFADE CV IN (AC mode)
VCA OUT → destination
```

Both ring modulators produce different harmonic combinations. The crossfader morphs between them under LFO control — a continuously shifting metallic timbre.

## Crossfade Between Dry and Ring-Modulated Signal (External)

```
VCO → XFADE IN A (break normalization)
VCO → SIGNAL 1 IN — RM1 OUT → XFADE IN B (break B normalization)
LFO → XFADE CV IN
VCA OUT → destination
```

Crossfades between the original dry signal and the ring-modulated version — a clean-to-metallic morph.

## AM Synthesis (Amplitude Modulation)

```
Audio carrier oscillator → SIGNAL 1 IN
LFO or slow oscillator → CARRIER 1 IN
CARRIER 1 LEVEL to taste
Crossfader and VCA in line; VCA BIAS = positive
No VCA CV needed (or add envelope for phrasing)
VCA OUT → destination
```

The partial carrier levels create AM rather than full RM, and the positive VCA bias lets the modulator amplitude ride above zero.

## CV Morphing Between Envelopes

```
Envelope 1 → XFADE IN A
Envelope 2 → XFADE IN B
XFADE switch to DC coupling
Knob or CV → XFADE control
XFADE OUT → VCA CV IN or filter cutoff
```

Morphs between two envelope shapes for a blended, variable-rate response.

## VCA with Envelope Gating

```
XFADE OUT (audio) → VCA IN (break VCA normalization if patching externally)
ADSR ENV → VCA CV IN
VCA BIAS = zero bias
VCA OUT → destination
```

Standard envelope-gated amplitude control after the ring mod / crossfade processing.

## Carrier as Audio-Rate Waveshaper Source

```
Noise → SIGNAL 1 IN
Oscillator at audio rate → CARRIER 1 IN
CARRIER 1 LEVEL at 20–70%
RM1 OUT → filter → destination
```

The partial-carrier waveshaping adds complex harmonic content to noise, producing a tonal/gritty hybrid useful for percussion and industrial textures.
