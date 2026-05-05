# Tips & Tricks

- **Always buffer V/OCT signals** — passive multiples (Y-cables or stackables) introduce voltage drop when loaded by multiple oscillators. The buffered multiples maintain accurate voltage, which is critical for pitch CV. Use the 173 for any signal you need to split to 3+ destinations.
- **Multiples double as a simple sequential distributor** — patch the same gate to GATE A and to MULT IN. The MULT outputs distribute the gate, and the logic outputs derive related patterns, all from one input signal.
- **AND for accent triggers** — when you have a dense rhythmic pattern in GATE A and a sparser pattern in GATE B, AND gives you only the most "important" beats — where both patterns align. Use as an accent or fill trigger.
- **NOT creates instant counter-rhythm** — the NOT outputs are the rhythmic "negative space" of each input pattern. Two complementary patterns from one source pattern.
- **Multiple section works for audio** — the buffers are wideband. Splitting an audio signal to multiple VCFs or effects chains is valid; the buffer prevents loading issues that might affect signal level or frequency response.
- **Combine AND + OR for complex logic** — feed an OR output back into one of the gate inputs alongside a third pattern. Build multi-stage Boolean logic chains for complex rhythmic derivation that isn't achievable with a single logic module.
