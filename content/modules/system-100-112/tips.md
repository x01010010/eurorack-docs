# Tips & Tricks

## Warm up before tuning

The 112 will drift several cents over the first 10–15 minutes after power-on. Warm up the rack before fine-tuning. If you're tracking, retune between takes.

## The TUNE knob is too sensitive

Each tune knob spans roughly **2 octaves**, so brushing it with a cable will detune a song noticeably. If you can, route patch cables away from the tune knobs, or fit small cap covers. The original 100M had a 1-octave span; some hardware modders swap resistors to restore that range.

## Use SYNC OUT as a third audio out

The SYNC OUT jack is always live, carrying the pulse waveform. If you're not using sync, you have a third pulse output per VCO essentially for free. Use it as a sub or as a noise/percussion source on its own.

## Mind the unipolar outputs

Sawtooth and pulse are 0 V to +10 V — that's a hot signal with DC offset. Two saws summed directly into a DC-coupled mixer will easily clip. Use AC-coupled inputs (most filters) or pad the level with an attenuator first.

## Audio-rate FM with TRI

Triangle is symmetric and bipolar, making it the cleanest source for audio-rate frequency modulation. Saw and pulse give bell-like inharmonic sidebands — useful, but harder to keep musical.

## Layer with WAVES for monophonic depth

Patch one V/oct to both **112** VCOs and to **WAVES** in VCO mode. Three oscillators slightly detuned, all responding to the same gate, gives massive monophonic leads. Use WAVES SHAPE to add wavefolded harmonics on top of the analog cores.

## Cross-mod drones

Patch VCO 1 audio into VCO 2 MOD CV IN, then slowly open MOD MANUAL while a long note is held. The drone gains inharmonic motion that evolves with the modulation depth — particularly nice with the strong sync engaged.
