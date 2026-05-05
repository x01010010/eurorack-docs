/* Modular Field Manual — interactive bits */

// --- Theme toggle ---
(function () {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  const stored = (() => { try { return localStorage.getItem('theme'); } catch { return null; } })();
  let mode = stored || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  root.setAttribute('data-theme', mode);

  function setIcon() {
    if (!toggle) return;
    toggle.innerHTML =
      mode === 'dark'
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    toggle.setAttribute('aria-label', 'Switch to ' + (mode === 'dark' ? 'light' : 'dark') + ' mode');
  }
  setIcon();

  if (toggle) {
    toggle.addEventListener('click', () => {
      mode = mode === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', mode);
      try { localStorage.setItem('theme', mode); } catch {}
      setIcon();
    });
  }
})();

// --- Search ---
(function () {
  const input = document.getElementById('search');
  const results = document.getElementById('search-results');
  if (!input || !results) return;

  let docs = null;
  let activeIndex = -1;
  let lastQuery = '';

  async function loadIndex() {
    if (docs) return docs;
    try {
      const basePath = document.documentElement.dataset.basePath || '';
      const res = await fetch(`${basePath}/search-index.json`);
      docs = await res.json();
    } catch (e) {
      docs = [];
    }
    return docs;
  }

  function escapeRe(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function score(doc, terms) {
    let s = 0;
    for (const t of terms) {
      const re = new RegExp('\\b' + escapeRe(t), 'g');
      const titleHits = (doc.title.toLowerCase().match(re) || []).length;
      const bodyHits = (doc.text.toLowerCase().match(re) || []).length;
      const mfrHits = (doc.manufacturer || '').toLowerCase().match(re) ? 8 : 0;
      const tagHits = ((doc.tags || '').toLowerCase().match(re) || []).length * 6;
      if (titleHits === 0 && bodyHits === 0 && mfrHits === 0 && tagHits === 0) return 0;
      s += titleHits * 10 + bodyHits + mfrHits + tagHits;
    }
    return s;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function snippet(text, terms) {
    const lower = text.toLowerCase();
    let idx = -1;
    for (const t of terms) {
      const i = lower.indexOf(t);
      if (i >= 0 && (idx === -1 || i < idx)) idx = i;
    }
    if (idx < 0) return escapeHtml(text.slice(0, 140));
    const start = Math.max(0, idx - 40);
    let snip = escapeHtml((start > 0 ? '… ' : '') + text.slice(start, start + 160));
    for (const t of terms) {
      snip = snip.replace(new RegExp(escapeRe(escapeHtml(t)), 'gi'), (m) => `<mark>${m}</mark>`);
    }
    return snip;
  }

  function render(matches, terms) {
    if (!matches.length) {
      results.innerHTML = `<div class="sr-empty">No matches for &ldquo;${escapeHtml(lastQuery)}&rdquo;</div>`;
      results.hidden = false;
      return;
    }
    results.innerHTML = matches
      .slice(0, 8)
      .map(
        (m, i) => `
        <a href="${escapeHtml(m.url)}" data-i="${i}" class="${i === activeIndex ? 'active' : ''}">
          <div class="sr-title">${escapeHtml(m.title)}</div>
          <div class="sr-snippet">${snippet(m.text, terms)}</div>
        </a>`,
      )
      .join('');
    results.hidden = false;
  }

  async function run() {
    const q = input.value.trim();
    lastQuery = q;
    if (q.length < 2) {
      results.hidden = true;
      results.innerHTML = '';
      return;
    }
    const all = await loadIndex();
    const terms = q
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);
    const scored = all
      .map((d) => ({ doc: d, s: score(d, terms) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .map((x) => x.doc);
    activeIndex = -1;
    render(scored, terms);
  }

  let t;
  input.addEventListener('input', () => {
    clearTimeout(t);
    t = setTimeout(run, 80);
  });
  input.addEventListener('focus', () => {
    if (input.value.trim().length >= 2) run();
  });

  document.addEventListener('click', (e) => {
    if (!results.contains(e.target) && e.target !== input) {
      results.hidden = true;
    }
  });

  input.addEventListener('keydown', (e) => {
    const items = Array.from(results.querySelectorAll('a'));
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = Math.min(items.length - 1, activeIndex + 1);
      items.forEach((it, i) => it.classList.toggle('active', i === activeIndex));
      items[activeIndex]?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = Math.max(0, activeIndex - 1);
      items.forEach((it, i) => it.classList.toggle('active', i === activeIndex));
      items[activeIndex]?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0 && items[activeIndex]) {
        e.preventDefault();
        window.location.href = items[activeIndex].getAttribute('href');
      }
    } else if (e.key === 'Escape') {
      results.hidden = true;
      input.blur();
    }
  });

  // Cmd/Ctrl + K focuses search
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      input.focus();
      input.select();
    }
  });
})();

// Add prose mark styles for search highlights inside snippets
const style = document.createElement('style');
style.textContent = `.search-results mark { background: color-mix(in oklab, var(--color-primary) 30%, transparent); color: var(--color-text); padding: 0 2px; border-radius: 2px; }`;
document.head.appendChild(style);

// --- Filter bar (index page only) ---
(function () {
  const bar = document.querySelector('[data-filter-bar]');
  if (!bar) return;

  const mfrPills = Array.from(bar.querySelectorAll('.filter-pill:not([data-tag-clear])'));
  const tagClearBtn = bar.querySelector('[data-tag-clear]');
  const cards = Array.from(document.querySelectorAll('.module-card'));
  const sections = Array.from(document.querySelectorAll('.cat-section'));
  let currentMfr = '';
  let selectedTags = [];

  function apply() {
    cards.forEach((card) => {
      const mfrOk = !currentMfr || card.dataset.manufacturer === currentMfr;
      const cardTags = card.dataset.tags.split(' ');
      const tagOk = selectedTags.length === 0 || selectedTags.every((t) => cardTags.includes(t));
      card.hidden = !(mfrOk && tagOk);
    });
    sections.forEach((sec) => {
      sec.hidden = !sec.querySelectorAll('.module-card:not([hidden])').length;
    });
  }

  function updateTagButtons() {
    document.querySelectorAll('.tag-filter-btn').forEach((b) => {
      b.classList.toggle('active', selectedTags.includes(b.dataset.tag));
    });
    if (selectedTags.length > 0) {
      tagClearBtn.textContent = `× ${selectedTags.join(', ')}`;
      tagClearBtn.hidden = false;
    } else {
      tagClearBtn.hidden = true;
    }
  }

  // Manufacturer pills — tag filter is preserved across manufacturer changes
  mfrPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      currentMfr = pill.dataset.filter;
      mfrPills.forEach((p) => p.classList.toggle('active', p === pill));
      apply();
    });
  });

  // Global tag clear chip
  tagClearBtn.addEventListener('click', () => {
    selectedTags = [];
    updateTagButtons();
    apply();
  });

  // Tag buttons — manufacturer filter is preserved; multiple tags can be selected with AND logic
  document.querySelectorAll('.tag-filter-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const tag = btn.dataset.tag;
      if (selectedTags.includes(tag)) {
        selectedTags = selectedTags.filter((t) => t !== tag);
      } else {
        selectedTags.push(tag);
      }
      updateTagButtons();
      apply();
    });
  });
})();

// --- Panel image magnifier (panel section pages) ---
(function () {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const images = Array.from(document.querySelectorAll('.panel-content-media .module-graphic--photo img'));
  if (!images.length) return;

  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  images.forEach((img) => {
    const host = img.closest('.panel-content-media');
    if (!host) return;

    const zoom = 2.0;
    const lens = document.createElement('div');
    lens.className = 'panel-image-magnifier';
    lens.setAttribute('aria-hidden', 'true');
    host.appendChild(lens);

    function syncBackgroundSize() {
      const w = img.naturalWidth || img.clientWidth;
      const h = img.naturalHeight || img.clientHeight;
      lens.style.backgroundImage = `url("${img.currentSrc || img.src}")`;
      lens.style.backgroundSize = `${Math.max(1, w * zoom)}px ${Math.max(1, h * zoom)}px`;
    }

    function move(e) {
      const rect = img.getBoundingClientRect();
      const x = clamp((e.clientX - rect.left) / rect.width, 0, 1);
      const y = clamp((e.clientY - rect.top) / rect.height, 0, 1);
      lens.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
    }

    img.addEventListener('mouseenter', () => {
      syncBackgroundSize();
      lens.classList.add('is-visible');
    });

    img.addEventListener('mousemove', move);
    img.addEventListener('mouseleave', () => lens.classList.remove('is-visible'));

    if (img.complete) syncBackgroundSize();
    img.addEventListener('load', syncBackgroundSize);
  });
})();
