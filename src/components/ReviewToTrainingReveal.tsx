'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Link from 'next/link';
import ImageSlot from './ImageSlot';
import { ROUTES } from '@/lib/routes';

/* Scroll-driven "From review → to implementation → and training" reveal. A tall
   wrapper pins a full-viewport stage; scroll progress swaps the headline phrase
   and floats case-study cards up. Ported from the ReviewToTrainingReveal prototype. */
const CARDS = [
  { left: 6, top: 50, w: 230, h: 300, rot: -4 },
  { left: 24, top: 47, w: 250, h: 230, rot: 3 },
  { left: 43, top: 52, w: 210, h: 270, rot: -3 },
  { left: 61, top: 46, w: 260, h: 210, rot: 5 },
  { left: 78, top: 53, w: 220, h: 290, rot: -5 },
  { left: 93, top: 48, w: 200, h: 260, rot: 4 },
];
const GROUP_STARTS = [0.0, 0.2, 0.5];

const ease = (t: number) => 1 - (1 - t) * (1 - t);
const winT = (p: number, a: number, b: number) => (b <= a ? (p >= b ? 1 : 0) : Math.max(0, Math.min(1, (p - a) / (b - a))));

export default function ReviewToTrainingReveal() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    if (reduce) { setProgress(1); return; }
    let ticking = false;
    const update = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      let p = total > 0 ? -rect.top / total : 0;
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
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

  const p = progress;
  const cardStyle = (i: number): CSSProperties => {
    const c = CARDS[i];
    const group = Math.floor(i / 2);
    const within = i % 2;
    const start = GROUP_STARTS[group] + within * 0.05;
    const end = start + 0.16;
    const tIn = ease(winT(p, start, end));
    const tOut = ease(winT(p, 0.88, 0.98));
    const opacity = tIn * (1 - tOut);
    const ty = (1 - tIn) * 60;
    return {
      position: 'absolute', left: `${c.left}%`, top: `${c.top}%`, width: c.w, height: c.h,
      opacity, transform: `translate(-50%,-50%) translateY(${ty}vh) rotate(${c.rot}deg)`,
      borderRadius: '0.375rem', overflow: 'hidden', boxShadow: '0 18px 40px rgba(0,20,20,0.35)',
      pointerEvents: 'none', zIndex: 6,
    };
  };

  const reviewOpacity = 1 - ease(winT(p, 0.22, 0.3));
  const implementationOpacity = ease(winT(p, 0.3, 0.4)) * (1 - ease(winT(p, 0.54, 0.62)));
  const trainingOpacity = ease(winT(p, 0.62, 0.72)) * (1 - ease(winT(p, 0.88, 0.98)));
  const pIn = ease(winT(p, 0.9, 1.0));

  const phrase: CSSProperties = { fontSize: 'clamp(40px,7vw,88px)', fontWeight: 800, lineHeight: 1.02, letterSpacing: '-0.02em' };

  return (
    <div ref={wrapperRef} style={{ position: 'relative', height: '420vh', fontFamily: "'Manrope','Montserrat',system-ui,sans-serif" }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: 'var(--at-cyprus)' }}>
        {CARDS.map((_, i) => (
          <div key={i} style={cardStyle(i)}>
            <ImageSlot placeholder={`Case study ${i + 1}`} radius={6} style={{ width: '100%', height: '100%' }} />
          </div>
        ))}

        <div style={{ position: 'absolute', left: '50%', top: '46%', transform: 'translate(-50%,-50%)', textAlign: 'center', zIndex: 2, width: 'min(720px,86vw)', pointerEvents: 'none' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ ...phrase, opacity: reviewOpacity, color: '#FFFFFF' }}>From review</div>
            <div style={{ ...phrase, position: 'absolute', inset: 0, opacity: implementationOpacity, color: 'var(--at-turquoise-light)' }}>to implementation</div>
            <div style={{ ...phrase, position: 'absolute', inset: 0, opacity: trainingOpacity, color: 'var(--at-turquoise-light)' }}>and training</div>
          </div>
          <div style={{ marginTop: 28, pointerEvents: 'auto', zIndex: 8, position: 'relative', opacity: pIn, transform: `translateY(${(1 - pIn) * 20}px)` }}>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', margin: '0 0 24px' }}>From review to implementation, our team turns audit findings into a working plan — the systems, tools and support to see it through.</p>
            <Link href={ROUTES.theReview} data-hover="background: var(--accent-hover)" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--at-turquoise)', color: '#FFFFFF', textDecoration: 'none', fontWeight: 700, fontSize: 15, padding: '12px 22px', borderRadius: '0.25rem', transition: 'background 160ms ease-out' }}>See our process →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
