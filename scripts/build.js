#!/usr/bin/env node
/**
 * Modular Field Manual — site builder
 *
 * Reads /content and emits a static site to /public.
 * Each module under content/modules/<slug>/ has a module.json and one .md per
 * section listed in module.json.sections. Standalone pages live in content/pages/.
 *
 * To add a new module: drop in a folder + manifest + markdown files, rerun.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CONTENT = path.join(ROOT, 'content');
const PUBLIC = path.join(ROOT, 'public');

function normalizeBasePath(basePath = '') {
  const raw = String(basePath).trim();
  if (!raw || raw === '/') return '';
  const withLeadingSlash = raw.startsWith('/') ? raw : `/${raw}`;
  return withLeadingSlash.replace(/\/+$/, '');
}

const BASE_PATH = normalizeBasePath(process.env.SITE_BASE_PATH || '');
const url = (pathname) => `${BASE_PATH}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;

// ---------- helpers ----------

const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const readText = (p) => fs.readFileSync(p, 'utf8');
const exists = (p) => fs.existsSync(p);

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function clean(dir) {
  if (!exists(dir)) return;
  for (const entry of fs.readdirSync(dir)) {
    if (entry === 'assets') continue; // preserve hand-curated assets
    fs.rmSync(path.join(dir, entry), { recursive: true, force: true });
  }
}

function writeFile(p, content) {
  ensureDir(path.dirname(p));
  fs.writeFileSync(p, content);
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Configure marked
const renderer = new marked.Renderer();
renderer.heading = ({ tokens, depth }) => {
  const text = tokens.map((t) => t.raw).join('');
  const slug = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  return `<h${depth} id="${slug}"><a class="anchor" href="#${slug}">#</a>${marked.parseInline(text)}</h${depth}>\n`;
};
renderer.table = ({ header, rows }) => {
  const head = header
    .map((c) => `<th>${marked.parseInline(c.text)}</th>`)
    .join('');
  const body = rows
    .map(
      (row) =>
        '<tr>' +
        row.map((c) => `<td>${marked.parseInline(c.text)}</td>`).join('') +
        '</tr>',
    )
    .join('');
  return `<div class="table-scroll"><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
};
marked.setOptions({ renderer, gfm: true, breaks: false });

function md(text) {
  return marked.parse(text);
}

// Extract first heading text (used as page title)
function extractTitle(mdText) {
  const m = mdText.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : '';
}

// Strip first heading, since we render it as the page header
function stripFirstHeading(mdText) {
  return mdText.replace(/^#\s+.+(\r?\n)+/, '');
}

// Plain-text excerpt for search
function textOnly(mdText) {
  return mdText
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
    .replace(/[#*_>~|`-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// ---------- load content ----------

const site = readJson(path.join(CONTENT, 'site.json'));

const modulesDir = path.join(CONTENT, 'modules');
const moduleSlugs = fs
  .readdirSync(modulesDir)
  .filter((f) => fs.statSync(path.join(modulesDir, f)).isDirectory())
  .sort();

const modules = moduleSlugs.flatMap((slug) => {
  const dir = path.join(modulesDir, slug);
  const manifestPath = path.join(dir, 'module.json');
  if (!exists(manifestPath)) {
    console.warn(`! ${slug}: missing module.json, skipping`);
    return [];
  }
  const manifest = readJson(manifestPath);
  manifest.slug = manifest.slug || slug;

  const sections = (manifest.sections || []).map((id) => {
    const filePath = path.join(dir, `${id}.md`);
    if (!exists(filePath)) {
      console.warn(`! ${slug}: missing ${id}.md, skipping`);
      return null;
    }
    const raw = readText(filePath);
    const sectionMeta = site.sections.find((s) => s.id === id) || { id, label: id };
    return {
      id,
      label: sectionMeta.label,
      title: extractTitle(raw) || sectionMeta.label,
      bodyMd: stripFirstHeading(raw),
      rawText: textOnly(raw),
    };
  }).filter(Boolean);

  return { ...manifest, sections };
});

const pagesDir = path.join(CONTENT, 'pages');
const pages = exists(pagesDir)
  ? fs
      .readdirSync(pagesDir)
      .filter((f) => f.endsWith('.md'))
      .map((file) => {
        const slug = path.basename(file, '.md');
        const raw = readText(path.join(pagesDir, file));
        return {
          slug,
          title: extractTitle(raw) || slug,
          bodyMd: stripFirstHeading(raw),
          rawText: textOnly(raw),
        };
      })
  : [];

// ---------- shared layout ----------

function svgLogo() {
  // A 4-segment "tidal wave" mark — subtle nod to function-generator outputs.
  return `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="square" aria-hidden="true">
  <path d="M2 22 L8 10 L14 22 L20 10 L26 22 L30 16" />
  <circle cx="2" cy="22" r="1.4" fill="currentColor" stroke="none"/>
  <circle cx="30" cy="16" r="1.4" fill="currentColor" stroke="none"/>
</svg>`;
}

function navHtml(currentPath = '') {
  const groups = site.categories.map((cat) => {
    const catModules = modules.filter((m) => m.category === cat.id);
    if (!catModules.length) return '';
    const items = catModules
      .map((m) => {
        const firstSection = m.sections[0]?.id || 'overview';
        const href = url(`/modules/${m.slug}/${firstSection}.html`);
        const active = currentPath.startsWith(url(`/modules/${m.slug}/`))
          ? ' class="active"'
          : '';
        return `<li><a${active} href="${href}"><span class="mod-name">${escapeHtml(m.name)}</span><span class="mod-meta">${m.hp} HP</span></a></li>`;
      })
      .join('');
    return `<div class="nav-group">
      <h3 class="nav-group-label">${escapeHtml(cat.label)}</h3>
      <ul role="list">${items}</ul>
    </div>`;
  }).join('');

  const pageLinks = pages
    .map((p) => {
      const href = url(`/${p.slug}.html`);
      const active = currentPath === href ? ' class="active"' : '';
      return `<li><a${active} href="${href}"><span class="mod-name">${escapeHtml(p.title)}</span></a></li>`;
    })
    .join('');

  return `<nav class="sidebar-nav" aria-label="Modules">
    ${groups}
    ${pageLinks ? `<div class="nav-group"><h3 class="nav-group-label">Reference</h3><ul role="list">${pageLinks}</ul></div>` : ''}
  </nav>`;
}

function moduleSectionTabs(mod, activeSection) {
  return `<nav class="section-tabs" aria-label="Sections of ${escapeHtml(mod.name)}">
    ${mod.sections
      .map((s) => {
        const active = s.id === activeSection ? ' aria-current="page"' : '';
        return `<a${active} href="${url(`/modules/${mod.slug}/${s.id}.html`)}">${escapeHtml(s.label)}</a>`;
      })
      .join('')}
  </nav>`;
}

function tagsHtml(tags = [], filterable = false) {
  if (!tags.length) return '';
  return `<ul class="tags" role="list">${tags
    .map((t) => filterable
      ? `<li><button class="tag-filter-btn" type="button" data-tag="${escapeHtml(t)}">${escapeHtml(t)}</button></li>`
      : `<li>${escapeHtml(t)}</li>`)
    .join('')}</ul>`;
}

function metaStrip(mod) {
  const latestFirmware = mod.firmware?.length
    ? mod.firmware[mod.firmware.length - 1]
    : null;
  const items = [
    mod.manufacturer && `<dt>Maker</dt><dd>${escapeHtml(mod.manufacturer)}</dd>`,
    mod.released && `<dt>Released</dt><dd>${escapeHtml(String(mod.released))}</dd>`,
    `<dt>Width</dt><dd>${mod.hp} HP</dd>`,
    mod.inspiration && `<dt>Based on</dt><dd>${escapeHtml(mod.inspiration)}</dd>`,
    latestFirmware && `<dt>Firmware</dt><dd>${escapeHtml(latestFirmware.version)}${latestFirmware.date ? ` <span class="meta-date">(${escapeHtml(latestFirmware.date)})</span>` : ''}</dd>`,
  ]
    .filter(Boolean)
    .join('');
  return `<dl class="meta-strip">${items}</dl>`;
}

function modulePanelGraphic(mod) {
  const accent = mod.color_accent || '#6db5c8';
  const panel = mod.panel_color || '#1a1f2e';
  // Check for a real panel image in public/assets/modules/<slug>.<ext>
  const imgExts = ['jpg', 'jpeg', 'png', 'webp', 'avif'];
  const imgExt = imgExts.find((ext) =>
    exists(path.join(PUBLIC, 'assets', 'modules', `${mod.slug}.${ext}`)),
  );
  if (imgExt) {
    return `<div class="module-graphic module-graphic--photo" aria-hidden="true" style="--mod-accent:${accent};--mod-panel:${panel};">
      <img src="${url(`/assets/modules/${mod.slug}.${imgExt}`)}" alt="${escapeHtml(mod.name)} panel" loading="lazy" decoding="async">
    </div>`;
  }
  // Simple stylized "module panel" SVG — abstract, not a literal panel render.
  // 6 jacks, 3 knob circles, 4 tiny LEDs. Fits the column.
  return `<div class="module-graphic" aria-hidden="true" style="--mod-accent:${accent};--mod-panel:${panel};">
    <svg viewBox="0 0 220 320" preserveAspectRatio="xMidYMid meet" role="presentation">
      <rect x="6" y="6" width="208" height="308" rx="6" fill="${panel}" stroke="${accent}" stroke-opacity="0.45" stroke-width="1.5"/>
      <text x="110" y="34" text-anchor="middle" fill="${accent}" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3">${escapeHtml(mod.name)}</text>
      <line x1="20" y1="46" x2="200" y2="46" stroke="${accent}" stroke-opacity="0.18"/>
      <!-- LED bar -->
      ${[0, 1, 2, 3]
        .map(
          (i) =>
            `<circle cx="${60 + i * 30}" cy="62" r="3" fill="${accent}" opacity="${0.35 + i * 0.18}"/>`,
        )
        .join('')}
      <!-- Knobs -->
      ${[
        [60, 110],
        [110, 110],
        [160, 110],
        [60, 175],
        [110, 175],
        [160, 175],
      ]
        .map(
          ([cx, cy]) => `
        <g>
          <circle cx="${cx}" cy="${cy}" r="18" fill="#0a0d12" stroke="${accent}" stroke-opacity="0.7" stroke-width="1"/>
          <circle cx="${cx}" cy="${cy}" r="14" fill="#15181f"/>
          <line x1="${cx}" y1="${cy}" x2="${cx + 8}" y2="${cy - 8}" stroke="${accent}" stroke-width="1.5" stroke-linecap="round"/>
        </g>`,
        )
        .join('')}
      <!-- Jacks -->
      ${[
        [40, 240],
        [75, 240],
        [110, 240],
        [145, 240],
        [180, 240],
        [40, 280],
        [75, 280],
        [110, 280],
        [145, 280],
        [180, 280],
      ]
        .map(
          ([cx, cy]) => `
        <circle cx="${cx}" cy="${cy}" r="7" fill="#05070a" stroke="${accent}" stroke-opacity="0.55" stroke-width="1"/>
        <circle cx="${cx}" cy="${cy}" r="2.5" fill="${accent}" opacity="0.45"/>`,
        )
        .join('')}
    </svg>
  </div>`;
}

function head(title, description, currentPath) {
  const fullTitle = title === site.title ? title : `${title} — ${site.title}`;
  return `<!doctype html>
<html lang="en" data-base-path="${escapeHtml(BASE_PATH)}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${escapeHtml(fullTitle)}</title>
  <meta name="description" content="${escapeHtml(description || site.description)}" />
  <meta property="og:title" content="${escapeHtml(fullTitle)}" />
  <meta property="og:description" content="${escapeHtml(description || site.description)}" />
  <meta property="og:type" content="website" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="${url('/base.css')}" />
  <link rel="stylesheet" href="${url('/style.css')}" />
  <link rel="icon" href="${url('/assets/favicon.svg')}" type="image/svg+xml" />
</head>
<body>`;
}

function header(currentPath) {
  return `<a class="sr-only" href="#main">Skip to content</a>
<header class="site-header">
  <a class="brand" href="${url('/')}">
    <span class="brand-mark">${svgLogo()}</span>
    <span class="brand-text">
      <strong>Modular Field Manual</strong>
      <em>Eurorack reference</em>
    </span>
  </a>
  <div class="header-tools">
    <div class="search-wrap">
      <input id="search" type="search" placeholder="Search manuals…" autocomplete="off" aria-label="Search documentation" />
      <div id="search-results" class="search-results" hidden></div>
    </div>
    <button data-theme-toggle class="theme-toggle" aria-label="Toggle theme">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
    </button>
  </div>
</header>`;
}

function shell(content, { title, description, currentPath, withSidebar = true }) {
  const sidebar = withSidebar
    ? `<aside class="sidebar" aria-label="Documentation navigation">${navHtml(currentPath)}</aside>`
    : '';
  return `${head(title, description, currentPath)}
${header(currentPath)}
<div class="layout ${withSidebar ? 'with-sidebar' : 'no-sidebar'}">
  ${sidebar}
  <main id="main" class="content">${content}</main>
</div>
<footer class="site-footer">
  <p>Unofficial documentation. Module names &amp; designs © their respective trademark holders. Text licensed CC BY 4.0.</p>
  <p>Last built ${new Date().toISOString().slice(0, 10)}.</p>
</footer>
<script src="${url('/app.js')}" defer></script>
</body></html>`;
}

// ---------- index page ----------

function renderIndex() {
  const cards = site.categories
    .map((cat) => {
      const catModules = modules.filter((m) => m.category === cat.id);
      if (!catModules.length) return '';
      return `<section class="cat-section">
        <header class="cat-header">
          <h2>${escapeHtml(cat.label)}</h2>
          <span class="cat-count">${catModules.length} ${catModules.length === 1 ? 'module' : 'modules'}</span>
        </header>
        <ul class="module-grid" role="list">
          ${catModules
            .map((m) => {
              const firstSection = m.sections[0]?.id || 'overview';
              return `<li class="module-card" style="--mod-accent:${m.color_accent || '#6db5c8'};" data-manufacturer="${escapeHtml(m.manufacturer || '')}" data-tags="${escapeHtml((m.tags || []).join(' '))}">
                <a href="${url(`/modules/${m.slug}/${firstSection}.html`)}" class="card-link">
                  <header class="card-head">
                    <h3>${escapeHtml(m.name)}</h3>
                    <span class="card-hp">${m.hp} HP</span>
                  </header>
                  <p class="card-subtitle">${escapeHtml(m.subtitle)}</p>
                  <p class="card-summary">${escapeHtml(m.summary)}</p>
                  ${tagsHtml(m.tags, true)}
                </a>
              </li>`;
            })
            .join('')}
        </ul>
      </section>`;
    })
    .join('');

  const manufacturers = [...new Set(modules.map((m) => m.manufacturer).filter(Boolean))].sort();
  const filterBar = `<div class="filter-bar" data-filter-bar aria-label="Filter by manufacturer">
    <button class="filter-pill active" data-filter="">All</button>
    ${manufacturers.map((mfr) => `<button class="filter-pill" data-filter="${escapeHtml(mfr)}">${escapeHtml(mfr)}</button>`).join('')}
    <button class="filter-pill tag-active-pill" data-tag-clear hidden aria-label="Clear tag filter"></button>
  </div>`;

  const heroBody = `
    <section class="hero">
      <div class="hero-text">
        <p class="hero-eyebrow">Modular Field Manual · v${new Date().getFullYear()}.${String(new Date().getMonth() + 1).padStart(2, '0')}</p>
        <h1>Reference manuals for the modules on your rails.</h1>
        <p class="hero-lede">${escapeHtml(site.description)}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="${url(`/modules/${modules[0]?.slug || 'skies'}/overview.html`)}">Browse modules</a>
          <a class="btn btn-ghost" href="${url('/contributing.html')}">Add a module →</a>
        </div>
      </div>
      <div class="hero-meta">
        <dl>
          <dt>Modules documented</dt><dd>${modules.length}</dd>
          <dt>Total HP catalogued</dt><dd>${modules.reduce((s, m) => s + (m.hp || 0), 0)}</dd>
          <dt>Format</dt><dd>Eurorack 3U</dd>
        </dl>
      </div>
    </section>
    <section class="catalog">
      ${filterBar}
      ${cards}
    </section>`;

  return shell(heroBody, {
    title: site.title,
    description: site.description,
    currentPath: url('/'),
    withSidebar: false,
  });
}

// ---------- module pages ----------

function renderModuleSection(mod, section) {
  const idx = mod.sections.findIndex((s) => s.id === section.id);
  const prev = idx > 0 ? mod.sections[idx - 1] : null;
  const next = idx < mod.sections.length - 1 ? mod.sections[idx + 1] : null;
  const isOverview = idx === 0;
  const isPanelSection = section.id === 'panel';

  const hero = isOverview
    ? `<header class="module-hero">
        <div class="module-hero-text">
          <p class="eyebrow">${escapeHtml(site.categories.find((c) => c.id === mod.category)?.label || 'Module')}</p>
          <h1>${escapeHtml(mod.name)}</h1>
          <p class="module-subtitle">${escapeHtml(mod.subtitle)}</p>
          ${metaStrip(mod)}
          ${tagsHtml(mod.tags)}
        </div>
        ${modulePanelGraphic(mod)}
      </header>`
    : isPanelSection
    ? `<header class="module-hero module-hero--panel">
        <div class="module-hero-text">
          <p class="eyebrow"><a href="${url(`/modules/${mod.slug}/overview.html`)}">${escapeHtml(mod.name)}</a></p>
          <h1>${escapeHtml(section.title)}</h1>
          <p class="module-subtitle">Front panel layout, controls, and I/O reference.</p>
        </div>
        ${modulePanelGraphic(mod)}
      </header>`
    : `<header class="module-mini-hero">
        <p class="eyebrow"><a href="${url(`/modules/${mod.slug}/overview.html`)}">${escapeHtml(mod.name)}</a></p>
        <h1>${escapeHtml(section.title)}</h1>
      </header>`;

  const tabs = moduleSectionTabs(mod, section.id);
  const body = md(section.bodyMd);

  const pager = `<nav class="pager" aria-label="Section navigation">
    ${prev ? `<a class="pager-prev" href="${url(`/modules/${mod.slug}/${prev.id}.html`)}"><span>← Previous</span><strong>${escapeHtml(prev.label)}</strong></a>` : '<span></span>'}
    ${next ? `<a class="pager-next" href="${url(`/modules/${mod.slug}/${next.id}.html`)}"><span>Next →</span><strong>${escapeHtml(next.label)}</strong></a>` : '<span></span>'}
  </nav>`;

  const article = `${hero}
    ${tabs}
    <article class="prose">${body}</article>
    ${pager}`;

  return shell(article, {
    title: `${mod.name} · ${section.label}`,
    description: mod.summary,
    currentPath: url(`/modules/${mod.slug}/${section.id}.html`),
  });
}

// ---------- standalone pages ----------

function renderPage(page) {
  const body = `<header class="page-hero">
    <h1>${escapeHtml(page.title)}</h1>
  </header>
  <article class="prose">${md(page.bodyMd)}</article>`;
  return shell(body, {
    title: page.title,
    description: '',
    currentPath: url(`/${page.slug}.html`),
  });
}

// ---------- search index ----------

function buildSearchIndex() {
  const docs = [];
  for (const m of modules) {
    for (const s of m.sections) {
      docs.push({
        id: `${m.slug}/${s.id}`,
        title: `${m.name} · ${s.label}`,
        module: m.name,
        manufacturer: m.manufacturer || '',
        tags: (m.tags || []).join(' '),
        section: s.label,
        url: url(`/modules/${m.slug}/${s.id}.html`),
        text: s.rawText.slice(0, 1500),
      });
    }
  }
  for (const p of pages) {
    docs.push({
      id: p.slug,
      title: p.title,
      module: '',
      manufacturer: '',
      tags: '',
      section: '',
      url: url(`/${p.slug}.html`),
      text: p.rawText.slice(0, 1500),
    });
  }
  return docs;
}

// ---------- run ----------

console.log('Building Modular Field Manual…');
ensureDir(PUBLIC);
clean(PUBLIC);

// Index
writeFile(path.join(PUBLIC, 'index.html'), renderIndex());

// Modules
for (const m of modules) {
  for (const s of m.sections) {
    const out = path.join(PUBLIC, 'modules', m.slug, `${s.id}.html`);
    writeFile(out, renderModuleSection(m, s));
  }
}

// Standalone pages
for (const p of pages) {
  writeFile(path.join(PUBLIC, `${p.slug}.html`), renderPage(p));
}

// Search index
const searchIndex = buildSearchIndex();
writeFile(
  path.join(PUBLIC, 'search-index.json'),
  JSON.stringify(searchIndex),
);

// Copy static assets
const STATIC_SRC = path.join(ROOT, 'public-static');
if (exists(STATIC_SRC)) {
  for (const f of fs.readdirSync(STATIC_SRC)) {
    const src = path.join(STATIC_SRC, f);
    const dst = path.join(PUBLIC, f);
    if (fs.statSync(src).isDirectory()) {
      fs.cpSync(src, dst, { recursive: true });
    } else {
      fs.copyFileSync(src, dst);
    }
  }
}

console.log(`✓ ${modules.length} modules, ${pages.length} pages, ${searchIndex.length} indexed.`);
