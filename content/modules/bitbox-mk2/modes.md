# Modes

**BITBOX MK2** supports three distinct firmware modes. Only one firmware is active at a time; switching requires loading a new firmware file onto the microSD card and rebooting.

---

## Bitbox Firmware (Sampler)

The default and most feature-rich mode. The touchscreen shows a 4×4 grid of clip slots.

### Clip Playback

Each slot holds an audio file loaded from microSD. Tapping a slot launches or stops the clip. Clips can be set to one-shot, looping, or gated playback. The entire grid can be triggered and stopped via CV or MIDI for hands-free performance.

### Recording

Audio arriving at IN L/R can be recorded into any clip slot in real time. Recording can be triggered manually or via gate/CV. Loop recording (overdub) is also supported.

### Loop Mode

Samples can be looped with configurable loop start and end points. Loop points are CV-controllable for live loop manipulation. Musically intelligent looping attempts to snap to zero-crossings or beat boundaries depending on the configured mode.

### Slicing

Long samples can be automatically or manually sliced into segments. Each slice can be triggered independently via the grid, CV input, or MIDI note. Useful for chopping up drum loops or breaking a long sample into individually playable phrases.

### Granular Mode

Individual clips can be placed into granular mode. Parameters include grain size, position, density, pitch, and randomness. CV inputs can modulate any granular parameter for evolving, morphing textures.

### Effects & Mixing

Each clip has access to per-clip effects (reverb, delay, filter). A master mix section controls overall output level and applies global effects.

---

## Fxbox Firmware (Effects Processor)

Transforms **BITBOX MK2** into a stereo effects processor. The stereo inputs are processed through a selection of effects — reverb, delay, chorus, phaser, and others — with parameters controllable via the touchscreen and CV inputs. This firmware turns the module into a send/return effect or an inline processor for a stereo signal chain.

---

## Synthbox Firmware (Wavetable Synthesizer)

Transforms **BITBOX MK2** into a polyphonic wavetable synthesizer. MIDI notes and CV pitch inputs drive voices across wavetable oscillators with onboard filter, amplitude envelope, and modulation options. Custom wavetables can be loaded from microSD.
