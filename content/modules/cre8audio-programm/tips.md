# Tips

## Performance & Workflow

**Start with one channel**  
Load a simple 4-step pattern on channel 1, route it to **MIDI or CV**, and tap along with your master clock. Once comfortable, add layers.

**Use polyrhythmic channel lengths**  
Set channel 1 to 4 steps, channel 2 to 6 steps, channel 3 to 8 steps. They'll create emergent polyrhythmic patterns that loop at different rates (LCM = 24 steps total).

**Save patterns**  
**PROGRAMM** likely includes a pattern memory—save your work so you can recall setups during performances.

## Modulation Tips

**Modulate via CC**  
Don't just use **PROGRAMM** for note sequences. Assign channel 2, 3, or 4 to MIDI CC out and modulate external synth parameters (cutoff, reverb mix, etc.) in rhythm with your melody.

**Tempo Sync**  
If jamming with other gear, always sync **PROGRAMM** to a shared clock—either Eurorack Euclidean rhythm or MIDI beat clock from your DAW. This keeps everything locked.

**Random + Constraints**  
Use random mode with seed and scale constraints to generate variations on your pattern without complete chaos.

## Integration Best Practices

- **Always label your MIDI channel assignments** — it's easy to lose track of what each **PROGRAMM** channel routes to
- **Test MIDI velocity response** with your external synth; adjust **PROGRAMM** velocity curve if needed
- **Clock jitter tolerance**: If your Eurorack clock is noisy, consider adding a clock divider or sync multiplier before **PROGRAMM** Sync IN
