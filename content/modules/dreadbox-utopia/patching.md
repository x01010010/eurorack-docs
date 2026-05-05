# Patching

## Scale and Offset a CV

Use an attenuverter to reduce a modulation range, then add an offset to shift its center point.

```
LFO OUT → Attenuverter IN → Attenuverter OUT → Filter Cutoff
          Offset OUT ──────────────────────────↗ (sum in mixer)
```

Scale the LFO amplitude with the attenuverter knob, then add a fixed offset to keep the CV in the desired target range.

## Buffered Multiple

Patch one CV or audio source into the splitter to distribute it to three destinations without signal degradation.

```
V/oct source → Mixer IN 1 → Mixer OUT 1 → VCO 1
                           → Mixer OUT 2 → VCO 2
                           → Mixer OUT 3 → VCO 3
```

Each output is buffered — adding more destinations does not degrade pitch tracking.

## LFO to Clock

Use the LFO and Pulserizer together to generate a square-wave clock at any rate from extremely slow to audio.

```
LFO OUT → Pulserizer IN → Pulserizer OUT → Clock destination
```

Set the Pulserizer threshold at midpoint. Adjust LFO rate for tempo. The LFO CV input allows tempo modulation.

## Invert and Mix Modulation

Route two modulation sources through two attenuverters — one inverted, one not — and sum them in the mixer.

```
ENV OUT  → Attenuverter 1 (CW, +1×)  → Mixer IN 1
ENV OUT  → Attenuverter 2 (CCW, −1×) → Mixer IN 2
Mixer OUT 1 → VCA CV (normal)
Mixer OUT 2 → Filter CV (inverted — filter closes as VCA opens)
```

## Arpeggiator (Self-Patch)

The Pulserizer's clock output can re-trigger a sample-and-hold or step sequencer, creating self-generating arpeggios from a held V/oct input.

```
LFO OUT → Pulserizer IN → Pulserizer OUT → S&H Trigger
Attenuverter + Offset → S&H IN (quantized pitch range)
S&H OUT → VCO V/oct
VCO OUT → GATE from Pulserizer OUT
```

## DC Offset for Envelope Bias

Add the offset generator to an envelope output to lift the minimum voltage above 0 V — useful when a downstream module needs a minimum operating voltage.

```
ENV OUT → Attenuverter IN → Attenuverter OUT → Mixer IN 1
Offset (e.g. +2 V)         → Mixer IN 2
Mixer OUT → VCF cutoff CV
```
