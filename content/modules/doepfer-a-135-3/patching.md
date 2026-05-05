# Patch Recipes

## Four-Voice Stereo Mix with Envelopes

Each voice gets a VCA envelope on its CV input and a fixed level offset from the level knob. The envelope shapes the dynamics; the knob sets the relative balance.

```
VCO 1 L/R → InL1 / InR1 ;  EG 1 → CV1
VCO 2 L/R → InL2 / InR2 ;  EG 2 → CV2
VCO 3 L/R → InL3 / InR3 ;  EG 3 → CV3
VCO 4 L/R → InL4 / InR4 ;  EG 4 → CV4
Out L / Out R → output module
```

## Voltage-Controlled Crossfade

Patch the same stereo source into channels 1 and 2. Send an inverted copy of the same CV to CV1 and the uninverted copy to CV2. As CV rises, channel 1 fades out while channel 2 fades in — a smooth crossfade between identical signals processed differently (e.g., dry on channel 1, wet on channel 2).

```
source L/R → InL1/InR1 and InL2/InR2
CV → CV2
CV (inverted via attenuverter) → CV1
Out L / Out R → output module
```

## CV Signal Combiner (DC-Coupled Use)

Use A-135-3 as a weighted CV summer. Patch up to four modulation sources into InL1–InL4 (mono; leave R inputs unpatched). Set each level knob to scale the contribution. Out L carries the weighted sum.

```
LFO → InL1 (L1 knob = 50%)
envelope → InL2 (L2 knob = 100%)
sequencer CV → InL3 (L3 knob = 75%)
Out L → oscillator FM input
```

## Expanding to 8 Channels

Configure a second A-135-3 as slave via internal jumpers. Connect the slave's internal bus to the master's summing node per the factory jumper document. Both units' front-panel level knobs and CV inputs remain active; Out L/R on the master carries all eight channels.
