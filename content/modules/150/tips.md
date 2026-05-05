# Tips & Tricks

- **Ring mod needs AC-coupled signals for pure ring mod** — if either input has a DC offset, the output will include AM (one-sided) rather than true ring modulation. Use DC-coupled audio sources for true sidebands.
- **Self-patch the LFO into the ring mod** — patch LFO SINE to X IN and a VCO to Y IN. The LFO rate controls the tremolo/AM depth and speed simultaneously, creating an expressive single-knob modulation effect.
- **Two noise outputs = two independent random CVs** — if you need two simultaneous random sources, use WHITE 1 → S&H and WHITE 2 → another S&H (or filter). They come from the same generator but can be clocked differently for two independent random streams.
- **S&H rate for different feels** — slow S&H rate creates languid, slow wandering CVs; fast rate approaches noise. Find the sweet spot where steps are fast enough to feel alive but slow enough to hear each discrete value.
- **Pink noise for percussion** — pink noise filtered through a tight resonant VCF produces more natural-sounding snare and hi-hat than white noise, because its lower energy at high frequencies avoids a harsh, brittle character.
- **LFO SQUARE as a clock** — the SQUARE output is a clean gate/clock signal. Use it as a clock source for the S&H TRIG IN or for external modules when you need a simple, continuously running pulse without a dedicated clock module.
