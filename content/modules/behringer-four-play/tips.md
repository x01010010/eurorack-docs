# Tips & Tricks

- **EXP for audio, LIN for CV mixing** — this rule holds in almost every case. The human ear perceives exponential voltage changes as linear volume changes; CV destinations usually want predictable linear scaling.
- **CV normalisation is powerful for polyphony** — patch just one envelope to channel 1 and leave 2–4 open. All four channels follow the same envelope — instant polyphonic VCA from one patch cable. Only override when voices need independent dynamics.
- **MIX as your master output summing point** — use Four Play as the final stage before the rack output. Each channel receives a voice; MIX goes to the output module. Level knobs set the static mix; CVs allow dynamic automation of each voice level.
- **BOOST for modular-to-line level bridging** — Eurorack signals are hotter than line level, but if your input signal is weak (e.g., from a passive source or after heavy attenuation), BOOST restores headroom without needing a dedicated preamp.
- **Audio-rate CV AM** — push an audio-frequency oscillator into the CV input. The VCA amplitude-modulates the input signal, producing ring-mod-like sidebands. Use LIN curve for cleaner AM (more sidebands); EXP adds harmonics to the AM character.
- **LEVEL knob at noon ≠ unity** — the LEVEL knob sets the base gain that is then multiplied by the CV. With no CV patched and LEVEL at noon, you get approximately half amplitude. Full CV + full LEVEL = maximum gain. Account for this when calibrating a mix.
