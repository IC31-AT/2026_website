'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';

/* Scroll-driven "How We Score It" reveal. Five slides share one pinned stage:
   slide 1 is a static overview; slides 2–5 each bring one tier into focus while
   its bar rises on a shared ascending (exponential) chart, so the four tiers
   build into a climbing curve as the reader scrolls.

   Falls back to a static overview + stacked tier list when motion is reduced or
   the viewport is too narrow. Rendered static on the server and initial client
   render, then upgraded on mount so hydration matches. */

type Tier = {
  num: string;
  name: string;
  band: string;
  startLabel: string;
  start: string;
  riskLabel: string;
  risk: string;
  possible: string;
  next?: string;
};

const OVERVIEW =
  'We score your business across several key areas — using a methodology built on licensed research from the University of the West of England, combined with what we’ve seen actually works, and breaks, inside agencies day to day. Your score places you in one of four tiers.';

const WEAKEST =
  'Your tier is set by your weakest area, not an average — one real gap holds a business back more than any average can hide.';

const TIERS: Tier[] = [
  {
    num: '1', name: 'Experimenting', band: '0–4.9',
    startLabel: 'Where you are',
    start: 'Free tools, no structure, no governance, no formal IT or security management.',
    riskLabel: 'Risk of skipping ahead',
    risk: 'Moving fast without governance means data going into tools with no policy behind it — no one watching what goes where.',
    possible: 'A clear, costed picture of what AI is worth to you. A first governance layer. Leadership aligned. IT and security on a proper footing.',
    next: 'Real structure starts turning into real, measurable returns.',
  },
  {
    num: '2', name: 'Consolidating', band: '5–6.9',
    startLabel: 'What’s been done',
    start: 'Documented processes, structured data, early automation, an established IT/cyber framework, leadership on board.',
    riskLabel: 'Risk of skipping ahead',
    risk: 'Building custom systems or training AI on your own data before that data is genuinely trustworthy means building on shaky ground.',
    possible: 'Data you can trust and query. Real hours back per week. One consistent way of working. Confidence to scale past a few early champions.',
    next: 'This is where a genuine competitive edge starts.',
  },
  {
    num: '3', name: 'Accelerating', band: '7–8.9',
    startLabel: 'Where you are',
    start: 'Custom systems, proprietary workflows, AI trained on your own data, staff exploring with real guidance.',
    riskLabel: 'Risk of skipping ahead',
    risk: 'Trying to package and sell services before there’s real clarity on what you do and for whom means there’s nothing defensible to sell.',
    possible: 'Systems built around how you actually work. Real margin and capacity gains. A genuine edge over agencies stuck lower. Solid enough foundations for new service lines.',
    next: 'New revenue, IP that’s actually yours.',
  },
  {
    num: '4', name: 'Ascending', band: '9–10',
    startLabel: 'Where you are',
    start: 'Building new AI-powered services to sell, new revenue streams forming.',
    riskLabel: 'The risk now',
    risk: 'This one flips — no longer about skipping ahead, but about defensibility. Without locking it down, what’s built can be copied and the edge disappears.',
    possible: 'New sellable IP. Revenue competitors can’t replicate. Recognised authority. A stronger story for growth, investment or exit.',
  },
];

const N_SLIDES = TIERS.length + 1; // 1 overview + 4 tiers
const SLIDE_VH = 0.6;
const CHART_H = 300;
const EXP_K = 1.6;

const frac = (t: number) => (Math.exp(EXP_K * t) - 1) / (Math.exp(EXP_K) - 1);
const barPx = (i: number) => CHART_H * (0.3 + 0.7 * frac(i / (TIERS.length - 1)));

const eyebrow = 'at-eyebrow';
const EASE = 'cubic-bezier(0.16,1,0.3,1)';

function DetailRow({ label, text, accent }: { label: string; text: string; accent?: 'risk' | 'possible' }) {
  const labelColor = accent === 'possible' ? 'var(--at-turquoise-light)' : accent === 'risk' ? '#F6C453' : 'rgba(255,255,255,0.5)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: labelColor }}>{label}</span>
      <span style={{ fontSize: 15, lineHeight: 1.55, fontWeight: accent === 'possible' ? 600 : 400, color: accent === 'possible' ? '#fff' : 'rgba(255,255,255,0.78)', textWrap: 'pretty' }}>{text}</span>
    </div>
  );
}

function OverviewCopy() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 660 }}>
      <span className={eyebrow} style={{ color: 'var(--at-turquoise-light)' }}>How We Score It</span>
      <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: '#fff' }}>A Number You Can Stand Behind</h2>
      <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: 'var(--text-on-dark-muted)', textWrap: 'pretty' }}>{OVERVIEW}</p>
      <p style={{ margin: '6px 0 0', fontSize: 16.5, lineHeight: 1.65, fontWeight: 600, color: '#fff', textWrap: 'pretty' }}>{WEAKEST}</p>
    </div>
  );
}

function TierDetail({ t }: { t: Tier }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{ flex: 'none', width: 52, height: 52, borderRadius: '50%', background: 'var(--at-turquoise)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 800 }}>{t.num}</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)' }}>Tier {t.num} · {t.band}</span>
          <h3 style={{ margin: 0, fontSize: 28, lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 800, color: '#fff' }}>{t.name}</h3>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px 28px' }}>
        <DetailRow label={t.startLabel} text={t.start} />
        <DetailRow label={t.riskLabel} text={t.risk} accent="risk" />
        <DetailRow label="What’s possible now" text={t.possible} accent="possible" />
        {t.next && <DetailRow label="What’s next" text={t.next} />}
      </div>
    </div>
  );
}

export default function TierScoreReveal() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState(0); // 0 = overview, 1..4 = tiers
  const [lineLen, setLineLen] = useState(0);

  useEffect(() => {
    const reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const enable = () => setScroll(!reduce && window.innerWidth > 820);
    enable();
    window.addEventListener('resize', enable);
    return () => window.removeEventListener('resize', enable);
  }, []);

  useEffect(() => {
    if (lineRef.current) setLineLen(lineRef.current.getTotalLength());
  }, [scroll]);

  useEffect(() => {
    if (!scroll) return;
    let ticking = false;
    const update = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      let p = total > 0 ? -rect.top / total : 0;
      p = Math.max(0, Math.min(1, p));
      setActive(Math.max(0, Math.min(N_SLIDES - 1, Math.round(p * (N_SLIDES - 1)))));
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
  }, [scroll]);

  // Ascending line through the bar tops, in a 0..400 × 0..CHART_H space.
  const pts = TIERS.map((_, i) => ({ x: (i + 0.5) * (400 / TIERS.length), y: CHART_H - barPx(i) }));
  const linePath = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

  // ---- Static / reduced-motion fallback -----------------------------------
  if (!scroll) {
    return (
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '96px 32px 104px' }}>
        <div data-reveal style={{ marginBottom: 48 }}><OverviewCopy /></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {TIERS.map((t, i) => (
            <div key={t.num} data-reveal data-reveal-delay={i * 80} style={{ background: 'var(--at-cyprus-light)', border: `1px solid ${i === TIERS.length - 1 ? 'var(--at-turquoise)' : 'var(--border-on-dark)'}`, borderRadius: 'var(--radius-md)', padding: '28px 26px' }}>
              <TierDetail t={t} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ---- Pinned scroll experience -------------------------------------------
  const revealCount = active; // number of bars shown (0 at overview)
  const featured = active - 1; // -1 at overview
  const lineFrac = TIERS.length > 1 ? Math.max(0, revealCount - 1) / (TIERS.length - 1) : 0;

  return (
    <div ref={wrapperRef} style={{ position: 'relative', height: `${(1 + N_SLIDES * SLIDE_VH) * 100}vh` }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          {/* Left — crossfading copy */}
          <div style={{ position: 'relative', minHeight: 360 }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', opacity: active === 0 ? 1 : 0, transform: active === 0 ? 'translateY(0)' : 'translateY(-24px)', transition: `opacity 500ms ${EASE}, transform 500ms ${EASE}`, pointerEvents: active === 0 ? 'auto' : 'none' }} aria-hidden={active !== 0}>
              <OverviewCopy />
            </div>
            {TIERS.map((t, i) => {
              const isActive = featured === i;
              return (
                <div key={t.num} style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', opacity: isActive ? 1 : 0, transform: isActive ? 'translateY(0)' : `translateY(${featured > i ? -24 : 24}px)`, transition: `opacity 500ms ${EASE}, transform 500ms ${EASE}`, pointerEvents: isActive ? 'auto' : 'none' }} aria-hidden={!isActive}>
                  <TierDetail t={t} />
                </div>
              );
            })}
          </div>

          {/* Right — ascending chart */}
          <div>
            <div style={{ position: 'relative', height: CHART_H }}>
              {/* baseline */}
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 1, background: 'rgba(255,255,255,0.18)' }} />
              {/* bars */}
              <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: `repeat(${TIERS.length}, 1fr)`, gap: 18, alignItems: 'end' }}>
                {TIERS.map((t, i) => {
                  const shown = i < revealCount;
                  const isFeatured = featured === i;
                  return (
                    <div key={t.num} style={{ position: 'relative', height: barPx(i), display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                      <div style={{ position: 'absolute', inset: 0, transformOrigin: 'bottom', transform: shown ? 'scaleY(1)' : 'scaleY(0)', opacity: shown ? 1 : 0, background: isFeatured ? 'var(--at-turquoise)' : 'rgba(43,188,186,0.22)', border: `1px solid ${isFeatured ? 'var(--at-turquoise)' : 'rgba(43,188,186,0.4)'}`, borderRadius: '8px 8px 0 0', transition: `transform 600ms ${EASE}, opacity 400ms ease, background 350ms ease` }} />
                      <span style={{ position: 'relative', marginTop: 12, fontSize: 13, fontWeight: 800, color: '#fff', opacity: shown ? 1 : 0, transition: 'opacity 400ms ease' }}>{t.band}</span>
                    </div>
                  );
                })}
              </div>
              {/* ascending line overlay */}
              <svg viewBox={`0 0 400 ${CHART_H}`} preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none' }}>
                <path ref={lineRef} d={linePath} fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" style={{ strokeDasharray: lineLen, strokeDashoffset: lineLen * (1 - lineFrac), opacity: revealCount > 1 ? 0.75 : 0, transition: `stroke-dashoffset 600ms ${EASE}, opacity 400ms ease` }} />
              </svg>
            </div>
            {/* axis labels */}
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${TIERS.length}, 1fr)`, gap: 18, marginTop: 14 }}>
              {TIERS.map((t, i) => (
                <span key={t.num} style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: featured === i ? 'var(--at-turquoise-light)' : 'rgba(255,255,255,0.45)', transition: 'color 350ms ease' }}>{t.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
