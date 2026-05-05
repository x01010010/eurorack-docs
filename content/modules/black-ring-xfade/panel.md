# Panel & I/O

## Ring Modulator 1

| Element | Description |
|---|---|
| SIGNAL 1 IN | Audio or CV signal input for ring modulator 1 |
| CARRIER 1 IN | Carrier input for ring modulator 1 |
| CARRIER 1 LEVEL | Attenuator for carrier 1 — controls depth from clean passthrough to full ring mod |
| RM1 OUT | Output of ring modulator 1 (normalled into crossfader input A) |

## Ring Modulator 2

| Element | Description |
|---|---|
| SIGNAL 2 IN | Audio or CV signal input for ring modulator 2 |
| CARRIER 2 IN | Carrier input for ring modulator 2 |
| CARRIER 2 LEVEL | Attenuator for carrier 2 |
| RM2 OUT | Output of ring modulator 2 (normalled into crossfader input B) |

## Crossfader

| Element | Description |
|---|---|
| XFADE IN A | Crossfader input A (normalled from RM1 OUT) |
| XFADE IN B | Crossfader input B (normalled from RM2 OUT) |
| XFADE | Manual crossfade position control — CCW = full A, CW = full B |
| XFADE CV IN | CV input for crossfade position |
| AC/DC switch | Selects AC coupling (audio use) or DC coupling (CV morphing) |
| XFADE OUT | Crossfader output (normalled to VCA input) |

## VCA

| Element | Description |
|---|---|
| VCA IN | VCA input (normalled from crossfader output) |
| VCA CV IN | CV input for VCA level |
| BIAS switch | Selects VCA bias: zero bias (standard VCA, closed at 0 V) or positive bias (open at 0 V for AM) |
| VCA OUT | Final output |

## Notes

- RM1 OUT and RM2 OUT are normalled into the crossfader inputs — inserting cables breaks the normalization and allows external signals into the crossfader.
- XFADE OUT is normalled to the VCA input — inserting a cable into VCA IN breaks this and allows an external signal into the VCA independently.
- The module can be used as entirely separate blocks if all normalization jacks are patched.
