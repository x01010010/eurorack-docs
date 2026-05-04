# Modes

## Internal Clock Mode

When nothing is patched to the CLK input, the module runs on its internal clock.

- **Tempo range**: 20–420 BPM, adjusted with the encoder.
- The CLK OUT jack outputs the internal clock for syncing other modules.
- Shuffle is applied relative to the internal tempo.

## External Clock Mode

When a clock signal is patched into the CLK input, the module syncs to the external source.

- Each rising edge on CLK advances the pattern by one step.
- The internal tempo setting is ignored.
- CLK OUT passes through the external clock.
- Shuffle is applied relative to the incoming clock rate.

## Pattern Playback

The module cycles through the active pattern continuously. Each of the 4 tracks can have a different step length (1–16 steps), creating polyrhythmic relationships:

- Track 1: e.g., 4 steps
- Track 2: e.g., 5 steps
- Track 3: e.g., 7 steps
- Track 4: e.g., 16 steps

Each track loops independently at its own length, producing patterns that don't fully repeat until the lowest common multiple of all track lengths.

## Pattern Selection

Press LOAD to enter selection mode. The trigger LEDs stop flashing the pattern and instead indicate the current slot (1–8). Rotate the encoder to choose a slot, press to confirm. Playback switches immediately.

## Pattern Upload

Patterns are created in the Erica Synths web-based pattern designer:

1. Open the pattern creator at the Erica Synths website.
2. Set step length per track (1–16) and tick active steps.
3. Select a memory slot (1–8) for storage.
4. Connect your device's audio output to the CLK jack via a 3.5 mm cable.
5. Press UPLOAD in the web interface.
6. The encoder LED blinks green to confirm success.

The upload uses an encoded audio signal — it takes about one second.
