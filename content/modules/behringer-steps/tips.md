# Tips & Tricks

## Start Simple — One Gate, One Output

The module's flexibility can be overwhelming. Begin with the simplest configuration: one cable into GATE IN 1, no other gate inputs patched. You now have a single six-stage function generator. Get comfortable with segment types and timing before splitting into multiple groups.

## LED Colors Are Your Map

At a glance the LEDs tell you the full configuration: colors show segment types, brightness shows the current output level or phase within a cycle. Before troubleshooting unexpected behavior, look at the LED colors to confirm segment types are set as you intended.

## The Rightmost Patched Gate Owns the Output

The output jack for a group is at the rightmost segment of that group. If you patch gates into segments 1 and 4, you get two groups: segments 1–3 (output at segment 3's jack) and segments 4–6 (output at segment 6's jack).

## Ramp + Hold = Smooth Attack/Sustain

A ramp segment followed by a hold segment gives you an attack-sustain pair with smooth rise. Use this as the beginning of an envelope and follow with another ramp for the release. This three-segment combination covers most basic envelope shapes without using all six stages.

## Use Mutable Instruments Stages Resources

**STEPS** is functionally a clone of Mutable Instruments Stages. The Stages manual, patch ideas, and community documentation on mutable-instruments.net apply directly. The community-developed alternative firmware for Stages also works on **STEPS**.

## Chain for Long, Slow Sequences

Six chained modules give you 36 individually tunable voltage steps with independent segment type per step — all advancing from a single clock. This is a cost-effective way to build a very long generative sequence without a dedicated large-format sequencer.
