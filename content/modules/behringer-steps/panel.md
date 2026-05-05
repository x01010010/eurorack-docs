# Panel & I/O

**STEPS** has six identical segment sections arranged horizontally, plus a single output per group and a chain I/O pair.

## Per-Segment Controls & I/O (×6)

| Element | Description |
|---|---|
| Knob | Sets the segment's time (for ramp/step) or level (for hold/step). The meaning depends on segment type and group context. |
| Button | Press while turning the knob to cycle through segment types: **ramp** (orange), **step** (green), **hold** (red). |
| LED | Color indicates segment type; brightness indicates current output level or phase position. |
| GATE IN | Patching a signal here starts a new independent group at this segment. Without a patch cable, this segment joins the group to its right. Rising edge triggers; high level sustains hold stages. |

## Outputs

| Jack | Description |
|---|---|
| OUT (per group) | Each independent group has one output. With all gates unpatched except segment 1, there is one output. With all six gates patched, there are six outputs. The output is a 0–8 V signal shaped by the group's segment types. |

## Chain I/O

| Jack | Description |
|---|---|
| CHAIN IN | Receives the chain signal from another **STEPS** module to the left, extending the number of stages. |
| CHAIN OUT | Sends the chain signal to another **STEPS** module to the right. |

## Panel Notes

- Plugging into a GATE IN jack splits the module at that point; all segments from that jack rightward (until the next patched gate) form a new group.
- Patching all six GATE IN jacks produces six independent single-segment outputs.
- Patching only GATE IN 1 produces one 6-stage envelope/sequence using all segments.
- The output jack for a group appears at the rightmost segment of that group.
