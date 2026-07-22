/* AgencyTech site motion helpers — scroll reveals, count-ups, parallax, testimonial crossfade,
   and cross-page wipe transitions. All effects mutate the DOM directly (no React state) so
   ambient CSS animations never restart. Single entry point: initMotion(document) per page. */

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

export function initMotion(root) {
  root = root || document;
  initReveals(root);
  initCountUps(root);
  initParallax(root);
  initTestimonials(root);
  initStackScroll(root);
  initStickyCategories(root);
  initLoopCarousel(root);
  initCursor();
  initIcons();
  initPageWipe(root.nodeType === 9 ? root : document);
}

/* Manually-scrolled carousel that feels infinite. Markup: a flex row with
   data-loop-carousel, containing the item list rendered TWICE back to back.
   We start scrolled to the seam between the two copies, then silently wrap
   scrollLeft by half the track width whenever the user nears either end —
   since both halves are identical, the wrap is invisible. */
function initLoopCarousel(root) {
  root.querySelectorAll('[data-loop-carousel]').forEach((el) => {
    const half = () => el.scrollWidth / 2;
    const max = () => el.scrollWidth - el.clientWidth;
    const h = half();
    if (!h) return;
    el.scrollLeft = h / 2;
    el.addEventListener('scroll', () => {
      const hw = half();
      if (!hw) return;
      if (el.scrollLeft < 4) el.scrollLeft += hw;
      else if (el.scrollLeft > max() - 4) el.scrollLeft -= hw;
    }, { passive: true });
  });
}

/* Fade + slide-up on enter, once. Stagger via data-reveal-delay (ms).
   Uses a scroll-driven viewport check (IntersectionObserver is unreliable in some hosts). */
function initReveals(root) {
  const els = Array.from(root.querySelectorAll('[data-reveal]'));
  if (!els.length) return;
  let pending = [];
  els.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.9) return; // already visible — never hide
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    pending.push(el);
  });
  if (!pending.length) return;

  function reveal(el) {
    const delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
    el.style.transition = 'opacity 650ms ' + EASE + ' ' + delay + 'ms, transform 650ms ' + EASE + ' ' + delay + 'ms';
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }
  function check() {
    if (!pending.length) return;
    const vh = window.innerHeight;
    pending = pending.filter((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.88 || r.bottom < vh) { reveal(el); return false; }
      return true;
    });
    if (!pending.length) window.removeEventListener('scroll', onScroll);
  }
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; check(); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  check();
}

/* Breathing-room stats: count 0 → data-countup when scrolled into view. ~1.1s ease-out. */
function initCountUps(root) {
  let pending = Array.from(root.querySelectorAll('[data-countup]'));
  if (!pending.length) return;
  function check() {
    if (!pending.length) return;
    const vh = window.innerHeight;
    pending = pending.filter((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom > 0 && r.top < vh * 0.92) { runCount(el); return false; }
      return true;
    });
    if (!pending.length) window.removeEventListener('scroll', onScroll);
  }
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; check(); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  check();
}

function runCount(el) {
  const target = parseFloat(el.getAttribute('data-countup'));
  const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
  const dur = 1100;
  const t0 = performance.now();
  function tick(now) {
    const p = Math.min(1, (now - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = (target * eased).toFixed(decimals);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toFixed(decimals);
  }
  requestAnimationFrame(tick);
}

/* Hero photo parallax — moves at ~0.3x scroll speed (i.e. lags by 0.3 * scrollY). Subtle. */
function initParallax(root) {
  const els = Array.from(root.querySelectorAll('[data-parallax]'));
  if (!els.length) return;
  let ticking = false;
  function update() {
    ticking = false;
    const y = window.scrollY;
    if (y > window.innerHeight * 1.5) return;
    els.forEach((el) => {
      const f = parseFloat(el.getAttribute('data-parallax') || '0.3');
      el.style.transform = 'translateY(' + (y * f).toFixed(1) + 'px)';
    });
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
}

/* Testimonial crossfade: container [data-quotes] with children [data-quote]; dots [data-quote-dot]. */
function initTestimonials(root) {
  root.querySelectorAll('[data-quotes]').forEach((wrap) => {
    const quotes = Array.from(wrap.querySelectorAll('[data-quote]'));
    const dots = Array.from(wrap.querySelectorAll('[data-quote-dot]'));
    if (quotes.length < 2) return;
    let i = 0, timer = null;
    function show(n) {
      i = (n + quotes.length) % quotes.length;
      quotes.forEach((q, k) => {
        q.style.transition = 'opacity 500ms ease';
        q.style.opacity = k === i ? '1' : '0';
        q.style.pointerEvents = k === i ? 'auto' : 'none';
      });
      dots.forEach((d, k) => {
        d.style.background = k === i ? 'var(--accent, #069A98)' : 'rgba(0,64,64,0.18)';
      });
    }
    function arm() { clearInterval(timer); timer = setInterval(() => show(i + 1), 6500); }
    dots.forEach((d, k) => d.addEventListener('click', () => { show(k); arm(); }));
    show(0); arm();
  });
}

/* Lucide icons (loaded from CDN in helmet). Retry briefly in case the CDN script lands late. */
function initIcons() {
  let tries = 0;
  (function attempt() {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    } else if (tries++ < 20) {
      setTimeout(attempt, 250);
    }
  })();
}

/* ----------------------------------------------------------------------------
   Pinned stacked-scroll testimonials.
   Markup: <section data-stack> containing <div data-stack-pin> (position:sticky)
   with N <div data-tcard> children. The section is made tall; as the user scrolls
   through it the pin stays fixed and the cards cross-fade one to the next. Last
   card holds, then the pin releases and normal scroll resumes.
------------------------------------------------------------------------------ */
function initStackScroll(root) {
  root.querySelectorAll('[data-stack]').forEach((section) => {
    const cards = Array.from(section.querySelectorAll('[data-tcard]'));
    const n = cards.length;
    if (!n) return;
    const PER = 0.58;   // scroll distance per card, in viewport heights (tightened)

    // The crossfade is CSS-driven, NOT scroll-scrubbed: the active card index is
    // snapped to the nearest discrete step from scroll position, and the transition
    // animates the rest of the way on its own. So the user can stop anywhere and it
    // always settles cleanly on one card — never a blended half-state.
    cards.forEach((c) => {
      c.style.transition = 'opacity 480ms cubic-bezier(0.16,1,0.3,1), transform 480ms cubic-bezier(0.16,1,0.3,1)';
      c.style.willChange = 'opacity, transform';
    });

    function sizeSection() {
      // Only (n-1) travel segments are needed — the first card is shown on arrival.
      section.style.height = (window.innerHeight * (1 + (n - 1) * PER)) + 'px';
    }

    let current = -1;
    function setCard(idx) {
      if (idx === current) return;
      current = idx;
      cards.forEach((el, i) => {
        const active = i === idx;
        el.style.opacity = active ? '1' : '0';
        el.style.transform = active ? 'translateY(0)' : 'translateY(' + (i < idx ? -46 : 46) + 'px)';
        el.style.pointerEvents = active ? 'auto' : 'none';
        el.style.zIndex = active ? '3' : '1';
      });
    }

    function update() {
      const vh = window.innerHeight;
      const rect = section.getBoundingClientRect();
      const span = section.offsetHeight - vh;
      const p = span > 0 ? Math.min(1, Math.max(0, -rect.top / span)) : 0;
      // Snap to nearest card: the flip happens at the midpoint between two states.
      setCard(Math.round(p * (n - 1)));
    }

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { ticking = false; update(); });
    }
    sizeSection();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => { sizeSection(); update(); }, { passive: true });
  });
}

/* ----------------------------------------------------------------------------
   Sticky-panel categories (Ford-style). Left column visuals stay pinned while
   the right column's category blocks scroll; the active block's visual is shown.
   Markup: <div data-sticky-cats> with [data-cat-visual] visuals (stacked) and
   [data-cat-block] text blocks in matching order.
------------------------------------------------------------------------------ */
function initStickyCategories(root) {
  root.querySelectorAll('[data-sticky-cats]').forEach((wrap) => {
    const visuals = Array.from(wrap.querySelectorAll('[data-cat-visual]'));
    const blocks = Array.from(wrap.querySelectorAll('[data-cat-block]'));
    if (!visuals.length || !blocks.length) return;
    visuals.forEach((v) => { v.style.transition = 'opacity 450ms ease, transform 450ms ease'; });
    let active = -1;
    function setActive(i) {
      if (i === active) return;
      active = i;
      visuals.forEach((v, k) => {
        v.style.opacity = k === i ? '1' : '0';
        v.style.transform = k === i ? 'scale(1)' : 'scale(0.97)';
        v.style.pointerEvents = k === i ? 'auto' : 'none';
      });
      blocks.forEach((b, k) => {
        b.style.transition = 'opacity 350ms ease';
        b.style.opacity = k === i ? '1' : '0.4';
      });
    }
    function update() {
      const line = window.innerHeight * 0.42;
      let idx = 0;
      blocks.forEach((b, k) => {
        const r = b.getBoundingClientRect();
        if (r.top <= line) idx = k;
      });
      setActive(idx);
    }
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { ticking = false; update(); });
    }
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
  });
}

/* ----------------------------------------------------------------------------
   Branded custom cursor — a filled "blob": a dark-green disc with a lighter-green
   disc nested inside. On hover over any clickable it grows 50% and reveals two
   intermediate green tones between the two, stepping through the blob-scene ramp.
   Position is set instantly (no trailing lag); only scale + reveal are animated.
   Skipped on touch / coarse pointers.
------------------------------------------------------------------------------ */
function initCursor() {
  if (window.__atCursor) return;
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;
  window.__atCursor = true;

  const style = document.createElement('style');
  style.textContent = '*{cursor:none !important;}';
  document.head.appendChild(style);

  // Blob-scene "brandTeal" ramp: dark (outer/bottom) -> light (inner/top).
  // hoverOnly discs are hidden at rest and fade in on hover.
  const DISCS = [
    { size: 22, color: '#004040', hoverOnly: false }, // outer — dark green
    { size: 17, color: '#016B6B', hoverOnly: true },  // intermediate
    { size: 12, color: '#069A98', hoverOnly: true },  // intermediate
    { size: 7,  color: '#2BBCBA', hoverOnly: false }, // inner — light green
  ];

  // pos = outer wrapper, translated to the pointer every mousemove (instant).
  const pos = document.createElement('div');
  pos.style.cssText = 'position:fixed;top:0;left:0;width:0;height:0;pointer-events:none;z-index:2147483647;opacity:0;transition:opacity 180ms ease;will-change:transform;';
  // scaler = inner wrapper, animates scale for the grow-on-hover.
  const scaler = document.createElement('div');
  scaler.style.cssText = 'position:absolute;left:0;top:0;width:0;height:0;transform:scale(1);transition:transform 200ms cubic-bezier(0.16,1,0.3,1);';
  DISCS.forEach((d) => {
    const el = document.createElement('div');
    el.style.cssText = 'position:absolute;left:' + (-d.size / 2) + 'px;top:' + (-d.size / 2) + 'px;width:' + d.size + 'px;height:' + d.size + 'px;background:' + d.color + ';border-radius:50%;' + (d.hoverOnly ? 'opacity:0;transition:opacity 200ms ease;' : '');
    el._hoverOnly = d.hoverOnly;
    scaler.appendChild(el);
  });
  pos.appendChild(scaler);
  document.body.appendChild(pos);

  let visible = false, hover = false, outT = null;
  const CLICKABLE = 'a,button,[role=button],input,select,textarea,label,summary,[data-cursor],[data-quote-dot]';

  function applyHover() {
    scaler.style.transform = hover ? 'scale(1.5)' : 'scale(1)';
    Array.prototype.forEach.call(scaler.children, (el) => {
      if (el._hoverOnly) el.style.opacity = hover ? '1' : '0';
    });
  }

  window.addEventListener('mousemove', (e) => {
    pos.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
    if (!visible) { visible = true; pos.style.opacity = '1'; }
  }, { passive: true });
  window.addEventListener('mouseout', (e) => {
    if (!e.relatedTarget) { visible = false; pos.style.opacity = '0'; }
  });
  document.addEventListener('mouseover', (e) => {
    const hit = e.target.closest && e.target.closest(CLICKABLE);
    if (hit) {
      clearTimeout(outT);           // hover-in is instant
      if (!hover) { hover = true; applyHover(); }
    }
  });
  document.addEventListener('mouseout', (e) => {
    const hit = e.target.closest && e.target.closest(CLICKABLE);
    if (hit && !(e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest(CLICKABLE))) {
      // ~150ms delay before reverting avoids flicker when darting between
      // adjacent clickable elements.
      clearTimeout(outT);
      outT = setTimeout(() => { hover = false; applyHover(); }, 150);
    }
  });
}

/* ----------------------------------------------------------------------------
   Page-wipe transition. Intercepts clicks on internal <a href="*.dc.html">
   links: two organic brand blobs grow from the bottom-left and top-right
   corners until they meet and fully cover the viewport, the browser navigates,
   then both blobs shrink back into their corners to reveal the new page.
   Colors step through the same Cyprus -> Turquoise tone ramp used by
   blobscene.js.
------------------------------------------------------------------------------ */
const WIPE_STORE_KEY = 'at_wipe_pending';
const WIPE_WRAP_ID = 'at-page-wipe';
const WIPE_R0 = 470;          // outer blob radius in its own 1000x1000 local box
const WIPE_JITTER = 0.24;     // big organic lobes, not fine waviness
const WIPE_POINTS = 7;        // fewer points -> chunkier "blob" silhouette
const WIPE_COVER_MS = 560;
const WIPE_REVEAL_MS = 600;
const WIPE_EASE = 'cubic-bezier(0.22,0.61,0.36,1)';
const WIPE_ROT_MID = 6;       // deg, subtle drift while covered
const WIPE_FONT_WAIT_CAP_MS = 150;

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function wr(n) { return Math.round(n * 10) / 10; }

// Closed Catmull-Rom loop through a ring of points (wraps around, no open ends).
function wipeSmoothClosedPath(pts) {
  const n = pts.length;
  let d = 'M ' + wr(pts[0].x) + ' ' + wr(pts[0].y);
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1x = p1.x + (p2.x - p0.x) / 6, c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6, c2y = p2.y - (p3.y - p1.y) / 6;
    d += ' C ' + wr(c1x) + ' ' + wr(c1y) + ' ' + wr(c2x) + ' ' + wr(c2y) + ' ' + wr(p2.x) + ' ' + wr(p2.y);
  }
  return d + ' Z';
}

function getRamp() {
  try {
    const pal = window.BlobScene && window.BlobScene.PALETTES && window.BlobScene.PALETTES.brandTeal;
    if (pal && pal.ramp && pal.ramp.length >= 5) return pal.ramp;
  } catch (e) {}
  return ['#004040', '#016B6B', '#038281', '#069A98', '#2BBCBA']; // brandTeal fallback
}

// Two nested closed blobs (a corner's own tone-stepped silhouette).
function buildBlobSvg(seed, layers) {
  const size = 1000, cx = 500, cy = 500;
  const rng = mulberry32(Math.floor(seed) + 7);
  const prof = [];
  for (let k = 0; k < WIPE_POINTS; k++) prof.push(1 + (rng() * 2 - 1) * WIPE_JITTER);

  let paths = '';
  layers.forEach((layer) => {
    const pts = [];
    for (let k = 0; k < WIPE_POINTS; k++) {
      const th = (k / WIPE_POINTS) * Math.PI * 2;
      const rad = layer.r * prof[k];
      pts.push({ x: cx + Math.cos(th) * rad, y: cy + Math.sin(th) * rad });
    }
    paths += '<path d="' + wipeSmoothClosedPath(pts) + '" fill="' + layer.color + '"></path>';
  });
  return '<svg viewBox="0 0 ' + size + ' ' + size + '" width="' + size + '" height="' + size +
    '" xmlns="http://www.w3.org/2000/svg" style="display:block;">' + paths + '</svg>';
}

// Minimum guaranteed radius across all angles (worst-case dent), used so each
// blob fully covers its half of the viewport no matter how it's rotated.
function minGuaranteedRadius() { return WIPE_R0 * (1 - WIPE_JITTER); }

function finalScaleFor(x, y) {
  const w = window.innerWidth, h = window.innerHeight;
  const corners = [[0, 0], [w, 0], [0, h], [w, h]];
  let maxD = 0;
  corners.forEach(([cx, cy]) => {
    const d = Math.hypot(cx - x, cy - y);
    if (d > maxD) maxD = d;
  });
  return (maxD * 0.40) / minGuaranteedRadius();
}

function removeExistingWipe(doc) {
  const existing = doc.getElementById(WIPE_WRAP_ID);
  if (existing) existing.remove();
}

function makeBlobEl(doc, x, y, seed, layers, scale, rotate) {
  const el = doc.createElement('div');
  el.style.cssText = 'position:fixed;left:' + x + 'px;top:' + y + 'px;width:1000px;height:1000px;' +
    'transform:translate(-50%,-50%) scale(' + scale + ') rotate(' + rotate + 'deg);transform-origin:center center;will-change:transform;';
  el.innerHTML = buildBlobSvg(seed, layers);
  return el;
}

// scaleFrac: 0 = collapsed into the corner, 1 = fully covering the viewport.
function buildWipeContainer(doc, seed, scaleFrac, rot) {
  removeExistingWipe(doc);
  const ramp = getRamp();
  const w = window.innerWidth, h = window.innerHeight;
  const blFull = finalScaleFor(0, h), trFull = finalScaleFor(w, 0);
  const blScale = 0.03 + (blFull - 0.03) * scaleFrac;
  const trScale = 0.03 + (trFull - 0.03) * scaleFrac;

  const wrap = doc.createElement('div');
  wrap.id = WIPE_WRAP_ID;
  wrap.setAttribute('aria-hidden', 'true');
  wrap.style.cssText = 'position:fixed;inset:0;z-index:2147483647;pointer-events:none;overflow:hidden;';

  // Solid Cyprus field: appears instantly so the viewport is fully covered
  // the moment the wipe starts (guarantees coverage regardless of how far
  // apart the two corner blobs are), while the blobs add organic color
  // blooms near the corners on top of it.
  const bg = doc.createElement('div');
  bg.style.cssText = 'position:absolute;inset:0;background:' + ramp[0] + ';opacity:1;';
  wrap.appendChild(bg);

  const bl = makeBlobEl(doc, 0, h, seed, [
    { r: WIPE_R0, color: ramp[0] },
    { r: WIPE_R0 * 0.6, color: ramp[2] }
  ], blScale, rot);
  const tr = makeBlobEl(doc, w, 0, seed + 1, [
    { r: WIPE_R0, color: ramp[4] },
    { r: WIPE_R0 * 0.6, color: ramp[3] }
  ], trScale, -rot);

  wrap.appendChild(bl);
  wrap.appendChild(tr);
  (doc.body || doc.documentElement).appendChild(wrap);

  return { bg, bl, tr, blFull, trFull };
}

function waitForPaint(doc, cb) {
  const run = () => {
    const fontsReady = (doc.fonts && doc.fonts.ready) || Promise.resolve();
    Promise.race([fontsReady, new Promise((res) => setTimeout(res, WIPE_FONT_WAIT_CAP_MS))])
      .catch(() => {})
      .then(() => requestAnimationFrame(() => requestAnimationFrame(cb)));
  };
  if (doc.readyState === 'complete') run();
  else window.addEventListener('load', run, { once: true });
}

function animatePair(pair, fromRot, toRot, fromFrac, toFrac, duration, onDone, fadeBg) {
  if (!pair.bl.animate || !pair.tr.animate) { onDone(); return; }
  const blFrom = 0.03 + (pair.blFull - 0.03) * fromFrac, blTo = 0.03 + (pair.blFull - 0.03) * toFrac;
  const trFrom = 0.03 + (pair.trFull - 0.03) * fromFrac, trTo = 0.03 + (pair.trFull - 0.03) * toFrac;
  const a1 = pair.bl.animate(
    [
      { transform: 'translate(-50%,-50%) scale(' + blFrom + ') rotate(' + fromRot + 'deg)' },
      { transform: 'translate(-50%,-50%) scale(' + blTo + ') rotate(' + toRot + 'deg)' }
    ],
    { duration, easing: WIPE_EASE, fill: 'forwards' }
  );
  const a2 = pair.tr.animate(
    [
      { transform: 'translate(-50%,-50%) scale(' + trFrom + ') rotate(' + (-fromRot) + 'deg)' },
      { transform: 'translate(-50%,-50%) scale(' + trTo + ') rotate(' + (-toRot) + 'deg)' }
    ],
    { duration, easing: WIPE_EASE, fill: 'forwards' }
  );
  const anims = [a1.finished, a2.finished];
  if (fadeBg && pair.bg.animate) {
    const a3 = pair.bg.animate(
      [{ opacity: fadeBg[0] }, { opacity: fadeBg[1] }],
      { duration, easing: 'linear', fill: 'forwards' }
    );
    anims.push(a3.finished);
  } else if (fadeBg) {
    pair.bg.style.opacity = String(fadeBg[1]);
  }
  Promise.all(anims).then(onDone).catch(onDone);
}

function handlePendingWipeReveal(doc) {
  let pending;
  try { pending = JSON.parse(sessionStorage.getItem(WIPE_STORE_KEY) || 'null'); } catch (e) { pending = null; }
  if (!pending) return;
  try { sessionStorage.removeItem(WIPE_STORE_KEY); } catch (e) {}

  // Cover instantly (no transition) so nothing unstyled ever shows, then wait
  // for full paint before shrinking the blobs back into their corners.
  const pair = buildWipeContainer(doc, pending.seed, 1, WIPE_ROT_MID);

  waitForPaint(doc, () => {
    animatePair(pair, WIPE_ROT_MID, 0, 1, 0, WIPE_REVEAL_MS, () => removeExistingWipe(doc), [1, 0]);
  });
}

function runWipeCover(doc, seed, onDone) {
  const pair = buildWipeContainer(doc, seed, 0, 0);
  animatePair(pair, 0, WIPE_ROT_MID, 0, 1, WIPE_COVER_MS, onDone);
}

function isPlainLeftClick(e) {
  return e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
}

function matchInternalWipeLink(a, doc) {
  if (!a || !a.getAttribute) return null;
  if (a.hasAttribute('download') || a.hasAttribute('data-no-wipe')) return null;
  const target = a.getAttribute('target');
  if (target && target !== '_self') return null;
  const href = a.getAttribute('href') || '';
  if (!/\.dc\.html(?:[?#].*)?$/i.test(href)) return null;
  let url;
  try { url = new URL(href, doc.baseURI); } catch (e) { return null; }
  if (url.origin !== window.location.origin) return null;
  return url;
}

let wipeBusy = false;

function onWipeClick(e, doc, reduce) {
  if (wipeBusy || e.defaultPrevented || !isPlainLeftClick(e)) return;
  const a = e.target && e.target.closest && e.target.closest('a[href]');
  const url = matchInternalWipeLink(a, doc);
  if (!url) return;

  e.preventDefault();
  if (reduce) { window.location.href = url.href; return; }

  wipeBusy = true;
  const seed = Math.floor(Math.random() * 100000);
  runWipeCover(doc, seed, () => {
    try { sessionStorage.setItem(WIPE_STORE_KEY, JSON.stringify({ seed })); } catch (err) {}
    window.location.href = url.href;
  });
}

function initPageWipe(doc) {
  doc = doc || document;
  if (doc.__atMotionWipeInit) return;
  doc.__atMotionWipeInit = true;

  const reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  if (!reduce) handlePendingWipeReveal(doc);
  else { try { sessionStorage.removeItem(WIPE_STORE_KEY); } catch (e) {} }

  doc.addEventListener('click', (e) => onWipeClick(e, doc, reduce), true);

  // bfcache restores can bring back a mid-wipe DOM snapshot; make sure a
  // stale overlay never gets stuck covering the page.
  window.addEventListener('pageshow', (e) => { if (e.persisted) removeExistingWipe(doc); });
}
