# Modes

## Passthrough / Waveshaping Mode

With no carrier patched (or CARRIER LEVEL at zero), the signal passes through the ring modulator unaltered. As the carrier level increases from zero, the circuit begins waveshaping the signal before transitioning to full ring modulation. This intermediate range — partial carrier — is where the most unusual timbral effects occur: asymmetric harmonic saturation, waveform bending, and formant-like distortion that changes with carrier level.

## Full Ring Modulation Mode

With a carrier at full level, the module operates as a classic ring (balanced) modulator, outputting the sum and difference frequencies of signal and carrier. The original signal and carrier frequencies are suppressed; only their sidebands appear. This produces the familiar metallic, inharmonic ring-mod timbres when signal and carrier are pitched differently.

## Crossfader: Audio Mode (AC Coupling)

With the AC/DC switch in the AC position, the crossfader is capacitor-coupled. Use this for blending between two audio signals. AC coupling prevents DC offset from accumulating in the output and is appropriate for signals fed to speakers or further audio processing.

## Crossfader: CV Morphing Mode (DC Coupling)

With the switch in the DC position, the crossfader is DC-coupled and can morph between two CV sources without losing offset information. Use this to interpolate between two envelope shapes, LFO waveforms, or CV sequences.

## VCA: Closed Mode (Zero Bias)

With the bias switch in the zero-bias position, the VCA is fully closed at 0 V CV and opens proportionally as CV rises. Standard gating/amplitude behaviour.

## VCA: Amplitude Modulation Mode (Positive Bias)

With a positive bias selected, the VCA has an initial opening even at 0 V CV. An AC-coupled signal (e.g., an LFO or audio-rate carrier) modulates the level up and down around the bias point, producing amplitude modulation rather than gating. This is classical AM synthesis: the carrier frequency appears in the output alongside the sidebands.

## Standalone Blocks

All four units (RM1, RM2, crossfader, VCA) can operate independently by breaking the inter-module normalizations with patch cables:
- Use RM1 alone as a ring modulator/waveshaper
- Use RM2 alone as a ring modulator/waveshaper  
- Use the crossfader independently with external inputs
- Use the VCA independently with any source
