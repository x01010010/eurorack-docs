import fs from 'node:fs';
import path from 'node:path';

const ids = {
  '1010music-bitbox-mk2': 33818,
  '2hp-div': 10079,
  '2hp-out': 53447,
  'bastl-cinnamon': 6002,
  'behringer-abacus': 43925,
  'behringer-brains': 33658,
  'behringer-chaos': 45229,
  'behringer-four-lfo': 44161,
  'behringer-four-play': 33880,
  'behringer-halos': 55145,
  'behringer-radar': 45211,
  'behringer-rs-9': 30555,
  'behringer-skies': 54468,
  'behringer-space-fx': 38503,
  'behringer-steps': 52511,
  'behringer-surges': 45228,
  'behringer-swords': 51773,
  'behringer-system-100-112': 16876,
  'behringer-system-100-121': 16877,
  'behringer-system-100-130': 16878,
  'behringer-system-100-140': 16874,
  'behringer-system-100-150': 16881,
  'behringer-system-100-172': 16883,
  'behringer-system-100-173': 16884,
  'behringer-system-100-182': 16875,
  'behringer-victor': 38315,
  'behringer-waves': 51631,
  'blue-lantern-env': 57702,
  'blue-lantern-sg': 44381,
  'cre8audio-cellz': 24470,
  'cre8audio-chipz': 24497,
  'doepfer-a-124-2': 49100,
  'doepfer-a-135-3': 27510,
  'doepfer-a-196': 136,
  'dreadbox-dystopia': 23987,
  'dreadbox-eudemonia': 23982,
  'dreadbox-hysteria': 23981,
  'dreadbox-nostalgia': 23985,
  'dreadbox-utopia': 23980,
  'endorphin-ghost': 41623,
  'endorphin-queen-of-pentacles': 29472,
  'endorphin-two-of-cups': 33790,
  'erica-synths-black-code-source': 16655,
  'erica-synths-black-cs-expander': 16656,
  'erica-synths-black-dadsr-eg': 43923,
  'erica-synths-black-eg2': 43924,
  'erica-synths-black-hole-dsp-2': 16020,
  'erica-synths-black-lpg': 30585,
  'erica-synths-black-octasource': 10361,
  'erica-synths-black-ring-xfade': 33255,
  'erica-synths-black-stereo-mixer': 9450,
  'erica-synths-black-stereo-reverb': 45930,
  'erica-synths-pico-dsp': 9886,
  'erica-synths-pico-trigger': 8468,
  'feedback-modules-punk': 38061,
  'neutral-labs-elmyra-2': 42270,
};

const modulesDir = 'content/modules';
let count = 0;
for (const [slug, id] of Object.entries(ids)) {
  const p = path.join(modulesDir, slug, 'module.json');
  if (!fs.existsSync(p)) { console.log('MISSING:', slug); continue; }
  const mod = JSON.parse(fs.readFileSync(p, 'utf8'));
  mod.modulargrid_id = id;
  fs.writeFileSync(p, JSON.stringify(mod, null, 2) + '\n');
  count++;
}
console.log('Updated', count, 'module.json files');
