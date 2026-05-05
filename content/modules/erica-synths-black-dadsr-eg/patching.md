# Patching

## Standard Voice Envelope

```
Sequencer GATE → GATE IN (DELAY at 0)
ENV OUT → VCA CV
ENV OUT → VCF cutoff CV (attenuate at VCF)
```

Classic amplitude and filter envelope from a single module.

## Delayed Filter Sweep

```
Sequencer GATE → GATE IN
DELAY knob set to 200–500 ms
ENV OUT → VCF cutoff CV
VCA gated directly from GATE OUT or sequencer
```

The note sounds immediately (VCA opens with direct gate) but the filter sweep begins after the delay — giving the attack of the raw sound before the envelope reshapes the timbre.

## Staggered Dual Voice

```
Sequencer GATE → GATE IN on DADSR 1 (delay = 0)
DADSR 1 ENV OUT → Voice A VCA CV
DADSR 1 DELAYED GATE OUT → GATE IN on DADSR 2 (or second envelope)
DADSR 2 ENV OUT → Voice B VCA CV
```

Voice B fires after Voice A by the amount of delay set on DADSR 1. Creates a staggered, call-and-response layering.

## Looping Complex LFO

```
LOOP switch ON
No gate needed
ENV OUT → any modulation destination (filter, pitch, PWM, etc.)
```

Set Attack, Decay, Sustain, Release to taste for an asymmetric cycling shape. Use CV inputs to modulate loop character in real time.

## Rhythmically Modulated Envelope Times

```
Sequencer GATE → GATE IN
LFO → ATTACK CV IN (attenuate to taste)
LFO (different rate) → DECAY CV IN
ENV OUT → VCF
```

The envelope shape changes with each gate — slow attacks on some hits, fast on others, depending on LFO phase alignment.

## Percussion with CV-Shortened Decay

```
Trigger → GATE IN (short trigger, DELAY = 0)
Negative CV or low voltage → DECAY CV IN (trimmed short)
ATTACK short, SUSTAIN 0, RELEASE short
ENV OUT → drum VCA and drum VCF
```

CV shortening of decay creates snappy, velocity-feel percussion responses.

## Gate Delay as Trigger Offset

```
Master GATE → GATE IN
DELAYED GATE OUT → second module (sequencer reset, clock divider trigger, second voice)
DELAY sets offset time
```

The delayed gate can drive any module that accepts gates — use the delay section as a general-purpose timing offset without using the envelope output at all.

## Envelope-From-Envelope Shaping

```
Main envelope ENV OUT → BLACK DADSR ATTACK CV IN
Sequencer GATE → BLACK DADSR GATE IN
```

The main envelope modulates the attack time of the **BLACK DADSR EG**, shortening it when the primary envelope is in decay — creates a self-compressing attack character that responds dynamically to the playing context.
