'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import ImageSlot from './ImageSlot';
import { photoUrl } from '@/lib/media';

/* Scroll-driven "From review → to implementation → and training" reveal. A tall
   wrapper pins a full-viewport stage; scroll progress swaps the headline phrase
   and floats case-study cards up. Ported from the ReviewToTrainingReveal prototype.

   Animation is written straight to the DOM inside requestAnimationFrame — never
   through React state — so the image-heavy card subtree is never reconciled on
   the scroll path. Cards are promoted to their own compositor layers
   (will-change) so moving them re-composites rather than repainting the photo +
   large drop-shadow every frame. Both matter most once real card imagery is in. */

// `img` is a path in the media bucket (via photoUrl). Cards without one show
// the placeholder — populate as real card images are uploaded (card-1..6).
const CARDS: { left: number; top: number; w: number; h: number; rot: number; img?: string }[] = [
  { left: 4, top: 66, w: 299, h: 390, rot: -4 },
  { left: 23, top: 61, w: 325, h: 299, rot: 3, img: 'fpp-cards/card-2.jpg' },
  { left: 42, top: 69, w: 273, h: 351, rot: -3, img: 'fpp-cards/card-3.jpg' },
  { left: 60, top: 60, w: 338, h: 273, rot: 5 },
  { left: 79, top: 68, w: 286, h: 377, rot: -5 },
  { left: 97, top: 62, w: 260, h: 338, rot: 4 },
];
const GROUP_STARTS = [0.0, 0.2, 0.5];

const ease = (t: number) => 1 - (1 - t) * (1 - t);
const winT = (p: number, a: number, b: number) => (b <= a ? (p >= b ? 1 : 0) : Math.max(0, Math.min(1, (p - a) / (b - a))));

// Pure geometry: a card's transform + opacity at scroll progress p.
function cardAt(i: number, p: number): { opacity: number; transform: string } {
  const c = CARDS[i];
  const group = Math.floor(i / 2);
  const within = i % 2;
  const start = GROUP_STARTS[group] + within * 0.05;
  const end = start + 0.16;
  const tIn = ease(winT(p, start, end));
  const ty = (1 - tIn) * 60; // vh
  return { opacity: tIn, transform: `translate(-50%,-50%) translateY(${ty}vh) rotate(${c.rot}deg)` };
}

// Headline phrase opacities at scroll progress p.
function phrasesAt(p: number): { review: number; implementation: number; training: number } {
  return {
    review: 1 - ease(winT(p, 0.20, 0.28)),
    implementation: ease(winT(p, 0.28, 0.38)) * (1 - ease(winT(p, 0.58, 0.66))),
    training: ease(winT(p, 0.66, 0.85)), // arrives near the end, then holds — no fade-out
  };
}

export default function ReviewToTrainingReveal() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reviewRef = useRef<HTMLDivElement>(null);
  const implRef = useRef<HTMLDivElement>(null);
  const trainRef = useRef<HTMLDivElement>(null);

  // ---- Scroll animation: direct DOM writes, no re-renders --------------------
  useEffect(() => {
    const apply = (p: number) => {
      for (let i = 0; i < cardRefs.current.length; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;
        const { opacity, transform } = cardAt(i, p);
        el.style.opacity = String(opacity);
        el.style.transform = transform;
      }
      const ph = phrasesAt(p);
      if (reviewRef.current) reviewRef.current.style.opacity = String(ph.review);
      if (implRef.current) implRef.current.style.opacity = String(ph.implementation);
      if (trainRef.current) trainRef.current.style.opacity = String(ph.training);
    };

    const reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    if (reduce) { apply(1); return; }

    let ticking = false;
    const update = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      let p = total > 0 ? -rect.top / total : 0;
      p = Math.max(0, Math.min(1, p));
      apply(p);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { update(); ticking = false; });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // ---- Background image preload ---------------------------------------------
  // Once the page has finished loading, quietly fetch + decode the card photos
  // (at low priority, off the critical path) so by the time the reader scrolls
  // down to this pinned scene they're already in cache and there's no visible
  // first-frame lag. We mirror the srcset/sizes the rendered next/image cards
  // already carry, so the exact variant that will be painted is what we warm.
  useEffect(() => {
    const run = () => {
      const root = wrapperRef.current;
      if (!root) return;
      root.querySelectorAll('img').forEach((img) => {
        if (!img.srcset && !img.src) return;
        const pre = new Image();
        if (img.sizes) pre.sizes = img.sizes;
        if (img.srcset) pre.srcset = img.srcset;
        if (img.src) pre.src = img.src;
        pre.decode?.().catch(() => {});
      });
    };
    const schedule = () => {
      const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => void }).requestIdleCallback;
      if (ric) ric(run, { timeout: 2000 });
      else setTimeout(run, 300);
    };
    if (document.readyState === 'complete') { schedule(); return; }
    window.addEventListener('load', schedule, { once: true });
    return () => window.removeEventListener('load', schedule);
  }, []);

  const cardStyle = (i: number): CSSProperties => {
    const c = CARDS[i];
    const { opacity, transform } = cardAt(i, 0); // initial (p=0) paint; JS drives it after
    return {
      position: 'absolute', left: `${c.left}%`, top: `${c.top}%`, width: c.w, height: c.h,
      opacity, transform,
      borderRadius: '0.375rem', overflow: 'hidden', boxShadow: '0 18px 40px rgba(0,20,20,0.35)',
      pointerEvents: 'none', zIndex: 6,
      willChange: 'transform, opacity', backfaceVisibility: 'hidden',
    };
  };

  const initPh = phrasesAt(0);
  const phrase: CSSProperties = { fontSize: 'clamp(40px,7vw,88px)', fontWeight: 800, lineHeight: 1.02, letterSpacing: '-0.02em' };

  return (
    <div ref={wrapperRef} style={{ position: 'relative', height: '300vh', fontFamily: 'var(--font-sans)' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: 'var(--at-cyprus)' }}>
        {CARDS.map((c, i) => (
          <div key={i} ref={(el) => { cardRefs.current[i] = el; }} style={cardStyle(i)}>
            <ImageSlot src={c.img ? photoUrl(c.img) : undefined} placeholder={`Case study ${i + 1}`} radius={6} style={{ width: '100%', height: '100%' }} />
          </div>
        ))}

        <div style={{ position: 'absolute', left: '50%', top: '26%', transform: 'translate(-50%,-50%)', textAlign: 'center', zIndex: 2, width: 'min(720px,86vw)', pointerEvents: 'none' }}>
          <div style={{ position: 'relative' }}>
            <div ref={reviewRef} style={{ ...phrase, opacity: initPh.review, color: '#FFFFFF' }}>From review</div>
            <div ref={implRef} style={{ ...phrase, position: 'absolute', inset: 0, opacity: initPh.implementation, color: 'var(--at-turquoise-light)' }}>to implementation</div>
            <div ref={trainRef} style={{ ...phrase, position: 'absolute', inset: 0, opacity: initPh.training, color: 'var(--at-turquoise-light)' }}>and training</div>
          </div>
        </div>
      </div>
    </div>
  );
}
