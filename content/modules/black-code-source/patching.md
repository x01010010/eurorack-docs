# Patch Recipes

## Dual Generative CV for Pitch and Filter

Set RATE slow (8–9 o'clock). Patch OUT A to a VCO 1V/oct input and OUT B to a filter cutoff. Select an X/Y combination where the two outputs feel musically related. S sets where in the sequence you start — find a section with an interval range you like, then use S TRIG to lock that phrase in.

## Digital Percussion (Hi-Hats / Snare)

Set RATE high (3–4 o'clock) for noise output. Patch OUT A through a VCA opened by a trigger envelope for click-free noise bursts. Try different X/Y values — some produce bright white noise, others darker or more tonal bursts. Route through a high-pass filter for hi-hat character or a band-pass for snare body.

## ZX Spectrum Chip Percussion

Switch to Mode 3. Set RATE to about 2 o'clock. Patch OUT A and OUT B through separate envelope-controlled VCAs. The biphase-encoded output produces tonal, pitchy blips reminiscent of 8-bit game sounds. CV over Y changes "pitch" of the encoded data; S TRIG fires new phrases.

## Repeatable Random Melody

Set RATE slow, S to a musically useful sequence region (audition by ear). Send S TRIG from a slow clock (e.g. every 4 bars). The sequence plays pseudo-randomly most of the time, then resets to the same starting point — creating a long variation followed by a recognisable anchor phrase.

## Audio Bitcrusher

Patch a VCO or other audio source into S TRIG. Set RATE to mid-high. The incoming audio clocks the polynomial at audio rate, interacting with the X/Y calculation to produce bitcrushed, ring-modulated, and digital-mangled output at OUT A/B. Extreme results; try lower RATE values for more controlled crushing.

## Correlated Modulation Pair

OUT A and OUT B derive from the same polynomial but produce different sequences — they're correlated, not independent. Patch them to two parameters that should move together but not identically (e.g. filter cutoff + resonance, or panning L/R). The relationship between the two outputs shifts subtly as X, Y, or S changes.
