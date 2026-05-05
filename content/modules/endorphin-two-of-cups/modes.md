# Modes

**TWO OF CUPS** has no modal switch — behavior is determined by per-voice PARAM settings and how samples are organized on the microSD card.

## One-Shot Playback

With Loop off, each gate trigger fires the sample once from start to finish (or until the ASR envelope's decay phase ends). The sample plays regardless of gate length. Use for drum hits, percussive stabs, and single-strike melodic notes.

## Looping Playback

With Loop on, the sample loops continuously while the gate is held. When the gate is released, the ASR envelope enters its decay phase and the sample fades out over the set decay time. Use for sustained textures, drone beds, and rhythmic loops.

## Reverse Playback

With Reverse on, the sample plays from end to start. Works in both one-shot and loop mode. Useful for reverse hits, backward swells, and unusual timbres from familiar sounds.

## Pitched Playback (1 V/oct)

With a V/oct signal patched to PITCH, the sample's playback speed shifts proportionally, tracking pitch across the keyboard. The Pitch Offset PARAM page sets the root pitch offset so a particular note plays the sample at its original speed. Use for melodic sample playback, tuned percussion, and sampled chords.

## META Scanning

The META CV input sweeps through samples in the current bank as voltage rises. At 0 V the first sample is selected; at maximum CV the last sample in the bank is selected. Intermediate voltages select intermediate samples. This enables CV-controlled timbre morphing across a curated set of sounds, or per-step sample selection from a sequencer.

## ASR Envelope

The internal ASR (Attack–Sustain–Release) envelope shapes the amplitude of each voice. Attack is near-instant; sustain is held for the gate duration; release (decay) is set by the Decay PARAM page. At minimum decay (10 ms) the envelope is essentially a gate; at maximum (10 s) the voice fades out slowly after the gate closes.
