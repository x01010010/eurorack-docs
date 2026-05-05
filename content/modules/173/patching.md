# Patch Recipes

## Distributing a Clock

Patch your master clock output to MULT A IN. Patch MULT A OUT 1–4 to sequencer clock inputs, LFO reset inputs, and a drum trigger. One clock drives four destinations simultaneously without loading or voltage drop.

## V/OCT to Multiple Oscillators

Patch a single pitch CV to MULT B IN. Patch MULT B OUT 1–4 to four different VCOs. All oscillators track the same pitch sequence. Use buffered multiples (not passive Y-cables) for accurate tracking, especially over long cables.

## AND Gate for Rhythmic AND Logic

Patch a kick pattern gate to GATE A and a hi-hat pattern to GATE B. AND OUT fires only on steps where both patterns are high simultaneously — creating a tighter, less frequent gate. Use for accent or roll triggers.

## OR Gate for Merged Rhythms

Patch two different drum pattern gates to GATE A and B. OR OUT fires on any step where either one is high — combining two patterns into one denser composite rhythm. Feed to a third drum voice.

## NOT for Complementary Fills

Patch a hi-hat gate to GATE A. NOT A OUT fires on every step where the hi-hat is silent — the complementary rhythm. Patch NOT A OUT to a clave or cowbell for a complementary counter-pattern with no additional sequencing.

## Distributing Envelope CV

Patch an ADSR envelope output to MULT A IN. Send copies to VCA CV, VCF cutoff, and a reverb mix control. The single envelope governs three simultaneous parameters, creating a unified dynamic response across the patch.
