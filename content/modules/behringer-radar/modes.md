# Modes

## Envelope Follower

The ENV OUT tracks the amplitude of the contact mic signal as a continuous CV. The ATTACK switch sets how quickly the envelope rises to follow a transient; the DECAY switch sets how quickly it falls after the sound subsides.

- **Fast attack / fast decay**: Follows every individual transient — useful for percussive rhythm-locked modulation.
- **Fast attack / slow decay**: Captures each hit and holds a long tail — useful for sustained modulation from sparse hits.
- **Slow attack / slow decay**: Smoothed overall amplitude — useful for macro-level dynamic modulation.

## Gate Detection

GATE OUT goes high when the input amplitude exceeds the threshold set by the SENSITIVITY switch. The resulting gate signal can trigger envelopes, advance sequencers, or clock other modules — turning any physical tap or drum hit into a Eurorack gate.

- **Low sensitivity**: Only loud impacts trigger the gate — ignores background vibration.
- **High sensitivity**: Very light touches trigger the gate — useful for soft instruments or quiet surfaces.

## Audio Passthrough

AUDIO OUT delivers the contact mic signal amplified and conditioned for Eurorack levels. Use it as a raw audio input to a VCF, effects chain, or mixer to process the physical sound alongside the CV outputs.
