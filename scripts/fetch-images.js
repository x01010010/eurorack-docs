#!/usr/bin/env node
/**
 * fetch-images.js — download module panel images from ModularGrid.
 *
 * Reads modulargrid_id from each module.json and downloads the front-panel
 * image to public/assets/modules/<slug>.jpg.
 *
 * Usage:
 *   node scripts/fetch-images.js          # fetch all missing images
 *   node scripts/fetch-images.js --force  # re-download even if image exists
 */

import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const MODULES_DIR = path.join(ROOT, 'content', 'modules');
const OUT_DIR = path.join(ROOT, 'public', 'assets', 'modules');
const FORCE = process.argv.includes('--force');

const IMAGE_URL = (id) => `https://modulargrid.net/img/modcache/${id}.f.jpg`;

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const req = https.get(url, { headers: { 'User-Agent': 'ModularFieldManual/1.0' } }, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => file.close(resolve));
      } else {
        file.close();
        fs.unlink(dest, () => {});
        reject(new Error(`HTTP ${res.statusCode}`));
      }
    });
    req.on('error', (err) => {
      file.close();
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const slugs = fs.readdirSync(MODULES_DIR).filter((d) =>
  fs.statSync(path.join(MODULES_DIR, d)).isDirectory(),
);

const tasks = [];
for (const folder of slugs) {
  const jsonPath = path.join(MODULES_DIR, folder, 'module.json');
  if (!fs.existsSync(jsonPath)) continue;
  const mod = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  if (!mod.modulargrid_id) continue;
  const dest = path.join(OUT_DIR, `${mod.slug}.jpg`);
  if (!FORCE && fs.existsSync(dest)) {
    console.log(`  skip  ${mod.slug} (already exists)`);
    continue;
  }
  tasks.push({ slug: mod.slug, id: mod.modulargrid_id, dest });
}

if (!tasks.length) {
  console.log('Nothing to download.');
  process.exit(0);
}

// Download with concurrency limit of 4
const CONCURRENCY = 4;
let i = 0;
let done = 0;
const total = tasks.length;

async function worker() {
  while (i < tasks.length) {
    const task = tasks[i++];
    const url = IMAGE_URL(task.id);
    try {
      await download(url, task.dest);
      console.log(`  ✓  ${task.slug}`);
    } catch (e) {
      console.error(`  ✗  ${task.slug}: ${e.message}`);
    }
    done++;
  }
}

const workers = Array.from({ length: CONCURRENCY }, () => worker());
Promise.all(workers).then(() => {
  console.log(`\nDone. ${done}/${total} images processed.`);
});
