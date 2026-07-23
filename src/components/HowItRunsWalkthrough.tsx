'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Icon from './Icon';

/* Scroll-driven "How It Runs" walkthrough. A tall wrapper pins a full-viewport
   stage; as the reader scrolls, one large step is brought into focus at a time
   (crossfading), with a vertical rail tracking progress through the five steps.

   Falls back to a static stacked list when motion is reduced or the viewport is
   too narrow to justify the pin — rendered on the server and as the initial
   client render so hydration matches, then upgraded to the pinned experience on
   mount where appropriate. */

type Step = { num: string; icon: string; title: string; desc: string };

const STEPS: Step[] = [
  {
    num: '1',
    icon: 'target',
    title: 'Your Goals',
    desc: 'Before anything technical, we find out what you actually want from this — more time back, better margins, new services, whatever it is. Everything else builds from there.',
  },
  {
    num: '2',
    icon: 'search',
    title: 'What’s In the Way',
    desc: 'We look at your tools, data and processes — not generally, but specifically for what’s blocking the goal you just gave us.',
  },
  {
    num: '3',
    icon: 'gauge',
    title: 'Is It Reachable Now?',
    desc: 'We score your business against a proven methodology — more on that next — to find out if your goal is achievable today, or what needs fixing first.',
  },
  {
    num: '4',
    icon: 'route',
    title: 'Your Plan',
    desc: 'A written, sequenced roadmap — what changes, in what order, who owns it.',
  },
  {
    num: '5',
    icon: 'users',
    title: 'Alignment',
    desc: 'Walked through with your leadership team, so everyone knows the plan and their part in it.',
  },
];

const STEP_VH = 0.6; // scroll length per step, in viewport heights
const eyebrow = 'at-eyebrow';

function Header() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640 }}>
      <span className={eyebrow} style={{ color: 'var(--at-turquoise-light)' }}>The Process</span>
      <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: '#fff' }}>How It Runs</h2>
    </div>
  );
}

/* Closing beat for P1 — the Review's outputs are the client's to keep, with no
   obligation to continue into Phase 2. Sits after Step 5, before the section ends. */
function Closing() {
  return (
    <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto', padding: '0 32px 96px' }}>
      <div data-reveal style={{ display: 'flex', gap: 20, alignItems: 'flex-start', background: 'var(--at-cyprus-light)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-md)', padding: '32px 34px' }}>
        <span style={{ flex: 'none', width: 48, height: 48, borderRadius: 'var(--radius-sm)', background: 'rgba(43,188,186,0.16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise-light)' }}><Icon name="file-check" size={22} /></span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)' }}>Yours to keep — no obligation</span>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.82)', textWrap: 'pretty' }}>Everything from the Review — the roadmap, the reports, the governance policy — belongs to you. You’re free to take it and resource it internally, with no obligation to go further. Most clients have chosen to bring AgencyTech in for the next stage, but that choice is entirely optional.</p>
        </div>
      </div>
    </div>
  );
}

export default function HowItRunsWalkthrough() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  // Decide, on mount, whether to run the pinned scroll experience.
  useEffect(() => {
    const reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const enable = () => setScroll(!reduce && window.innerWidth > 820);
    enable();
    window.addEventListener('resize', enable);
    return () => window.removeEventListener('resize', enable);
  }, []);

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
      setProgress(p);
      setActive(Math.max(0, Math.min(STEPS.length - 1, Math.round(p * (STEPS.length - 1)))));
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

  // ---- Static / reduced-motion fallback -----------------------------------
  if (!scroll) {
    return (
      <>
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '104px 32px 56px' }}>
        <div data-reveal style={{ marginBottom: 48 }}><Header /></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              data-reveal
              data-reveal-delay={i * 80}
              style={{ display: 'flex', gap: 22, alignItems: 'flex-start', background: 'var(--at-cyprus-light)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-md)', padding: '28px 26px' }}
            >
              <span style={{ flex: 'none', width: 52, height: 52, borderRadius: '50%', background: 'rgba(43,188,186,0.16)', color: 'var(--at-turquoise-light)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={s.icon} size={24} /></span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)' }}>Step {s.num}</span>
                <h3 style={{ margin: 0, fontSize: 22, lineHeight: 1.2, fontWeight: 700, color: '#fff' }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.72)', textWrap: 'pretty' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Closing />
      </>
    );
  }

  // ---- Pinned scroll experience -------------------------------------------
  const railFill = STEPS.length > 1 ? (active / (STEPS.length - 1)) * 100 : 0;

  const cardStyle = (i: number): CSSProperties => {
    const isActive = i === active;
    return {
      position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 22,
      opacity: isActive ? 1 : 0,
      transform: isActive ? 'translateY(0)' : `translateY(${i < active ? -28 : 28}px)`,
      transition: 'opacity 500ms cubic-bezier(0.16,1,0.3,1), transform 500ms cubic-bezier(0.16,1,0.3,1)',
      pointerEvents: isActive ? 'auto' : 'none',
    };
  };

  return (
    <>
    <div ref={wrapperRef} style={{ position: 'relative', height: `${(1 + STEPS.length * STEP_VH) * 100}vh` }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', width: '100%' }}>
          <div style={{ marginBottom: 44 }}><Header /></div>

          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 56, alignItems: 'stretch' }}>
            {/* Rail */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: 6 }}>
              <div style={{ position: 'absolute', left: 22, top: 22, bottom: 22, width: 2, background: 'rgba(255,255,255,0.16)' }} />
              <div style={{ position: 'absolute', left: 22, top: 22, width: 2, height: `calc((100% - 44px) * ${railFill / 100})`, background: 'var(--at-turquoise)', transition: 'height 500ms cubic-bezier(0.16,1,0.3,1)' }} />
              {STEPS.map((s, i) => {
                const on = i <= active;
                const isActive = i === active;
                return (
                  <button
                    key={s.num}
                    type="button"
                    onClick={() => {
                      const el = wrapperRef.current;
                      if (!el) return;
                      const total = el.offsetHeight - window.innerHeight;
                      const target = el.offsetTop + total * (i / (STEPS.length - 1));
                      window.scrollTo({ top: target, behavior: 'smooth' });
                    }}
                    style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 14, background: 'none', border: 'none', padding: '6px 0', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span style={{ flex: 'none', width: 44, height: 44, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 800, background: on ? 'var(--at-turquoise)' : 'var(--at-cyprus-light)', color: '#fff', border: `1px solid ${on ? 'var(--at-turquoise)' : 'var(--border-on-dark)'}`, boxShadow: isActive ? '0 0 0 6px rgba(43,188,186,0.18)' : 'none', transition: 'background 350ms ease, box-shadow 350ms ease' }}>{s.num}</span>
                    <span style={{ fontSize: 13.5, fontWeight: 700, color: isActive ? '#fff' : 'rgba(255,255,255,0.5)', transition: 'color 350ms ease' }}>{s.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Focused step */}
            <div style={{ position: 'relative', minHeight: 320 }}>
              {STEPS.map((s, i) => (
                <div key={s.num} style={cardStyle(i)} aria-hidden={i !== active}>
                  <span style={{ width: 64, height: 64, borderRadius: 'var(--radius-md)', background: 'rgba(43,188,186,0.16)', color: 'var(--at-turquoise-light)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={s.icon} size={30} /></span>
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)' }}>Step {s.num}</span>
                  <h3 style={{ margin: 0, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 800, color: '#fff', textWrap: 'balance' }}>{s.title}</h3>
                  <p style={{ margin: 0, fontSize: 20, lineHeight: 1.55, color: 'rgba(255,255,255,0.78)', maxWidth: 560, textWrap: 'pretty' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Closing />
    </>
  );
}
