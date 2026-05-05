# Modes

Each channel has one mode selector: the LIN/EXP switch.

## Linear Mode

The VCA gain responds proportionally to the control voltage — doubling the CV doubles the gain.

- Produces a more "mechanical" volume curve.
- Better suited for tremolo, AM effects, and panning where equal CV steps should produce equal perceived gain changes at the output level.
- More predictable for precise gain-staging and CV-controlled mixing.

## Exponential Mode

The VCA gain responds logarithmically to the control voltage — approximately 1 V per 10 dB.

- Matches human hearing's logarithmic perception of loudness, so envelopes and LFOs sound more natural.
- The standard choice for envelope-controlled amplitude shaping (i.e., a typical synth voice VCA).
- Self-oscillating envelopes, fast attacks, and subtle fades all benefit from exponential response.

## Which to Use

| Situation | Recommended Mode |
| --- | --- |
| Envelope on a synth voice | Exponential |
| Tremolo / LFO AM | Linear |
| CV-controlled mix level | Linear |
| Percussive amplitude shaping | Exponential |
| Ring modulation-style AM | Linear |
