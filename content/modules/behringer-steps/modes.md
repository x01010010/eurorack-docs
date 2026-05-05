# Modes

**STEPS** has no mode switch. Configuration emerges entirely from patching and segment type selection. Each segment operates in one of three types, set by pressing its button while turning the knob.

---

## Segment Types

### Ramp (Orange LED)

The segment rises or falls linearly from the previous level to the knob's target value over the time set by the knob. This is the envelope-style segment — the backbone of attack and decay stages.

### Step (Green LED)

In a triggered group: the segment advances to the knob's level immediately when reached, holding that value until the next stage begins. Used for step sequencer stages and instant voltage jumps.

In a free-running (ungated) context: the segment cycles and its knob controls the loop rate, producing an LFO.

### Hold (Red LED)

The segment holds its current output level for the duration set by the knob. The level is whatever the previous segment left off at. Equivalent to a sustain stage — output stays constant while the gate is high.

---

## Configurations by Patching

### Multi-Stage Envelope

Patch one gate input and leave all others empty. All six segments form a single envelope with up to six stages. Segment types determine the shape: ramp → ramp → hold → ramp = ADSR-equivalent.

### Independent Single-Segment Outputs

Patch all six gate inputs. Each segment is its own independent generator. Ramp segments become one-shot slews; step segments become triggered voltage steps; ungated step segments become LFOs.

### Step Sequencer

Set all segments to step type. Patch a clock into each gate input. Each segment fires in sequence (or simultaneously — depending on clock routing). Each knob sets the output voltage for that step.

### LFO Bank

Leave all gate inputs unpatched. Set all segments to step or ramp type. The module produces up to one free-running LFO per group (with one gate patched), or a single complex cycling waveform across all six stages.

### Mixed

Any combination of the above — for example, segments 1–3 as a 3-stage envelope and segments 4–6 as three independent LFOs.
