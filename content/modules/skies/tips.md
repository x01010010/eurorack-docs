# Tips & Tricks

## Practical

- **Always check what BLEND is doing.** It's silently re-assignable, and many "broken" patches are just BLEND set to Stereo Spread when you expected Wet/Dry. Press PARAMETER once and watch the green LEDs.
- **Soft clipping is fine, hard clipping is not.** The top input-meter LED indicates soft clipping — slightly hot input is musical. Sustained top-LED activity isn't.
- **Mono inputs** — patch only the LEFT input jack. Same for outputs.
- **Stereo summing trap** — when collapsing the stereo output to mono, BLEND set to extreme stereo-spread values can phase-cancel grains. Pull the spread back toward center first.

## Sonic

- **For dense grain clouds, modulate at least one parameter.** Static dense grains tend to sound static; even a slow LFO on POSITION or PITCH gives motion.
- **Start with the buffer empty.** Open the input gain, play a few notes, then engage FREEZE. Empty-buffer freezing is silent — and confusing the first time.
- **Feedback + reverb is a trap.** Both BLEND assignments at high levels build into chaos very quickly. Pick one, keep the other modest.
- **Mode 2 (Pitch / Time) is the secret weapon for vocals.** It sounds far less granular than mode 1 — useful for tasteful pitch shifting on melodic material.
- **Spectral mode (4) needs longer captures.** Switch to a lower-quality / longer buffer first so there's enough audio to resynthesize.

## Hardware

- **Behringer Radar contact mic** is a fun TRIG source — tap any surface to fire grains.
- **The USB-C port** only does firmware updates. It does not pass audio.
- **Save your buffers.** SAVE/LOAD persists across power cycles and is the quickest way to keep a captured texture around for a future patch.

## Workflow

- **Use POSITION CV for "scratch" effects in mode 3.** A slow envelope or hand-drawn CV ramp gives tape-rewind sounds.
- **Quantize V/OCT before it reaches SKIES** if you want pitched grains in tune — internal pitch tracking is good but ungated CV will bend off-grid.
- **TEXTURE around 2 o'clock is the sweet spot for evolving pads.** Just past the smearing threshold the grains start blurring without losing all definition.
