import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import ImageSlot from '@/components/ImageSlot';
import Icon from '@/components/Icon';
import ReviewToTrainingReveal from '@/components/ReviewToTrainingReveal';
import { dataUri } from '@/lib/blobscene';
import { dcHref } from '@/lib/routes';

/* One continuous background graphic for the whole page — a single brand blob
   scene (Cyprus base, nested corner contours flowing down the right edge),
   sized tall so it spans the full page. Replaces the four separate cropped
   scenes that previously left visible seams between sections. */
const pageBlob = dataUri({ width: 1400, height: 4200, corner: 'tr', layers: 5, points: 6, jitter: 0.02, palette: 'brandTeal', seed: 11 });

export const metadata: Metadata = {
  title: 'About the Futureproofing Program',
  description:
    'The Futureproofing Program starts with a fixed-price audit — The Review — that scores where your agency stands today and hands you a prioritised 12-month roadmap.',
};

const assessed = [
  { icon: 'git-fork', label: 'How decisions get made' },
  { icon: 'database', label: 'Whether your data can be trusted' },
  { icon: 'users', label: 'How your team works day to day' },
  { icon: 'shield-check', label: 'Whether the right guardrails exist' },
];

type TierDef = {
  num: string;
  name: string;
  band: string;
  where: string;
  possible: string;
  peak?: boolean;
};

const tierDefs: TierDef[] = [
  { num: '1', name: 'Experimenting', band: '0–4.9', where: 'Using free tools, no structure or governance yet.', possible: 'A clear, costed picture of what AI is worth to you.' },
  { num: '2', name: 'Consolidating', band: '5–6.9', where: 'Clear processes, structured data, early automation.', possible: '10+ hrs/week back per team, redeployed to billable work.' },
  { num: '3', name: 'Accelerating', band: '7–8.9', where: 'Custom systems built around how you actually work.', possible: 'Fatter margins on every project — capacity for new revenue lines.' },
  { num: '4', name: 'Ascending', band: '9–10', where: 'Creating new AI-powered services to sell.', possible: 'New, sellable IP — revenue competitors can’t copy.', peak: true },
];

const TIER_MIN_H = 170;
const TIER_MAX_H = 400;
const TIER_EXP_K = 1.6;
const TIER_COLS = 4;

function tierFrac(t: number) {
  return (Math.exp(TIER_EXP_K * t) - 1) / (Math.exp(TIER_EXP_K) - 1);
}

const tierHeights = Array.from({ length: TIER_COLS }, (_, i) =>
  Math.round(TIER_MIN_H + (TIER_MAX_H - TIER_MIN_H) * tierFrac(i / (TIER_COLS - 1)))
);
const tierResultSizes = [19, 21, 23, 26];

const tiers = tierDefs.map((t, i) => {
  const peak = !!t.peak;
  return {
    ...t,
    delay: i * 90,
    cardHeight: tierHeights[i],
    resultSize: tierResultSizes[i],
    pad: i === 0 ? '20px 20px' : i === 1 ? '22px 22px' : i === 2 ? '24px 24px' : '28px 26px',
    shadow: peak ? 'var(--shadow-lg)' : i === 2 ? 'var(--shadow-sm)' : 'none',
    badgeBg: peak ? 'var(--at-turquoise)' : 'var(--at-cyprus)',
    badgeColor: '#fff',
    cardBg: '#fff',
    cardBorder: peak ? 'var(--at-turquoise)' : 'var(--border-default)',
    nameColor: 'var(--at-cyprus)',
    labelColor: peak ? 'var(--at-turquoise)' : 'var(--at-faint)',
    whereLabelColor: 'var(--at-faint)',
    whereColor: 'var(--at-muted)',
    divider: 'var(--border-default)',
    possibleKicker: 'var(--at-turquoise)',
    possibleColor: 'var(--at-cyprus)',
  };
});

function buildTierArrow() {
  const rowH = 48 + TIER_MAX_H;
  const gap = 16;
  const canvasW = 1136;
  const colW = (canvasW - gap * (TIER_COLS - 1)) / TIER_COLS;
  const xSpan = (TIER_COLS - 1) * (colW + gap);
  const x0 = colW / 2;
  const pt = (t: number) => ({ x: x0 + xSpan * t, y: (TIER_MAX_H - TIER_MIN_H) * (1 - tierFrac(t)) + 15 });
  const tEnd = 1.15;
  const steps = 40;
  let d = '';
  for (let i = 0; i <= steps; i++) {
    const t = (tEnd * i) / steps;
    const p = pt(t);
    d += (i === 0 ? 'M' : ' L') + p.x.toFixed(1) + ',' + p.y.toFixed(1);
  }
  const end = pt(tEnd);
  const justBefore = pt(tEnd - 0.01);
  const angle = (Math.atan2(end.y - justBefore.y, end.x - justBefore.x) * 180) / Math.PI;
  return {
    viewBox: `0 0 ${canvasW} ${rowH}`,
    d,
    headTransform: `translate(${end.x.toFixed(1)},${end.y.toFixed(1)}) rotate(${angle.toFixed(1)})`,
  };
}

const tierArrow = buildTierArrow();

const eyebrow = 'at-eyebrow';

export default function FutureproofingAboutPage() {
  return (
    <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', color: 'var(--text-on-dark)', background: 'var(--at-cyprus)' }}>
      {/* Single, page-spanning background graphic (see pageBlob above). Sits
          behind all content; transparent sections let it show through as one
          continuous scene, opaque sections (reveal, white CTA, footer) cover it. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={pageBlob} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top right', opacity: 0.5, pointerEvents: 'none', zIndex: 0 }} />

      <SiteNav active="fp" theme="dark" />

      {/* HERO */}
      <section style={{ position: 'relative', zIndex: 1, background: 'transparent', overflow: 'hidden' }}>
        <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto', padding: '176px 32px 84px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <span className={eyebrow} style={{ color: 'var(--at-turquoise-light)' }}>About the Program</span>
          <h1 style={{ margin: 0, fontSize: 54, lineHeight: 1.06, letterSpacing: '-0.025em', fontWeight: 800, color: '#fff', textWrap: 'balance' }}>A Clear Read on Where You Stand — and a Path to Where You’re Going</h1>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'var(--text-on-dark-muted)', maxWidth: 560, textWrap: 'pretty' }}>The Futureproofing Program starts with a fixed-price audit — The Review — that scores where your agency stands today and hands you a prioritised 12-month roadmap. From there, act on it yourselves or bring us in to build it with you.</p>
        </div>
      </section>

      {/* CLIENT PHOTO + QUOTE */}
      <section style={{ position: 'relative', zIndex: 1, background: 'transparent', overflow: 'hidden' }}>
        <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', padding: '88px 32px 96px' }}>
          <div data-reveal style={{ display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: 0, borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', background: 'var(--at-cyprus)', minHeight: 420 }}>
            <ImageSlot placeholder="Photo — Mark, Point Zero Group" style={{ width: '100%', height: '100%', minHeight: 320, display: 'block' }} />
            <div style={{ padding: '56px 56px', display: 'flex', flexDirection: 'column', gap: 22, justifyContent: 'center', background: '#fff' }}>
              <Icon name="quote" size={36} style={{ color: 'var(--at-turquoise)', opacity: 0.8 }} />
              <blockquote style={{ margin: 0, fontSize: 26, lineHeight: 1.45, fontWeight: 600, color: 'var(--at-cyprus)', letterSpacing: '-0.01em', textWrap: 'pretty' }}>“Within two and a half weeks they’d spoken to the whole team, mapped every tool we used, and handed us a sequenced 12-month plan we could actually act on. For the first time, we have real clarity on where the business is and what needs to happen next.”</blockquote>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--at-cyprus)' }}>Mark Beavan</span>
                <span style={{ fontSize: 13.5, color: 'var(--at-turquoise)' }}>Managing Director · PointZeroGroup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW THE PROGRAM WORKS — review > implementation > training animation */}
      <section style={{ position: 'relative', zIndex: 1 }}>
        <ReviewToTrainingReveal />
      </section>

      {/* WHAT GETS ASSESSED */}
      <section style={{ position: 'relative', zIndex: 1, background: 'transparent', overflow: 'hidden' }}>
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: '104px 32px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <span className={eyebrow} style={{ color: 'var(--at-turquoise-light)' }}>What Gets Assessed</span>
            <h2 style={{ margin: 0, fontSize: 34, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: '#fff', maxWidth: 640, textWrap: 'balance' }}>We Look at What Actually Determines Whether AI Sticks</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.78)', maxWidth: 640, textWrap: 'pretty' }}>We look at the areas that actually determine whether AI adoption sticks or stalls — things like how decisions get made, whether your data can be trusted, how your team actually works day to day, and whether the right guardrails exist before anything gets automated.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 8 }}>
              {assessed.map((a) => (
                <span key={a.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '10px 16px', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-pill)', background: 'var(--at-cyprus-light)', fontSize: 14, fontWeight: 600, color: '#fff' }}>
                  <Icon name={a.icon} size={15} style={{ color: 'var(--at-turquoise-light)' }} />
                  {a.label}
                </span>
              ))}
            </div>
            <p style={{ margin: '10px 0 0', fontSize: 13.5, color: 'rgba(255,255,255,0.55)', textWrap: 'pretty' }}>Each area is scored 1–10 against a fixed set of descriptors — based on what we observe on the ground, not what’s self-reported.</p>
          </div>
        </div>
      </section>

      {/* TIER LADDER — full depth */}
      <section style={{ position: 'relative', zIndex: 1, background: 'transparent', overflow: 'hidden' }}>
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '96px 32px 104px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640, marginBottom: 56 }}>
            <span className={eyebrow} style={{ color: 'var(--at-turquoise-light)' }}>The Four Tiers</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: '#fff' }}>The Results Compound as You Climb</h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: 'var(--text-on-dark-muted)', textWrap: 'pretty' }}>The Review places you in one of four tiers — set by your weakest dimension, not an average, so one critical gap is what holds you back. Every tier up is a step up in margin, capacity or revenue; each unlocks a bigger result than the one before.</p>
          </div>
          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, alignItems: 'end', paddingBottom: 8 }}>
            <svg viewBox={tierArrow.viewBox} preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none', zIndex: 0 }}>
              <path d={tierArrow.d} fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" opacity={0.6} />
              <g transform={tierArrow.headTransform}><path d="M-13,-10 L18,0 L-13,10 Z" fill="#fff" opacity={0.6} /></g>
            </svg>
            {tiers.map((t) => (
              <div key={t.num} data-reveal data-reveal-delay={t.delay} style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 30 }}>
                  <span style={{ width: 44, height: 44, flex: 'none', borderRadius: '50%', background: t.badgeBg, color: t.badgeColor, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 800 }}>{t.num}</span>
                </div>
                <div style={{ height: t.cardHeight, background: t.cardBg, border: `1px solid ${t.cardBorder}`, borderRadius: 'var(--radius-md)', padding: t.pad, display: 'flex', flexDirection: 'column', gap: 16, boxShadow: t.shadow }}>
                  <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: t.labelColor }}>Tier {t.num} · {t.name} · {t.band}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: t.possibleKicker }}>The result</span>
                    <span style={{ fontSize: t.resultSize, lineHeight: 1.2, fontWeight: 800, color: t.possibleColor, textWrap: 'pretty' }}>{t.possible}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 'auto', paddingTop: 10, borderTop: `1px solid ${t.divider}` }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: t.whereLabelColor }}>Starting point</span>
                    <span style={{ fontSize: 13, lineHeight: 1.5, color: t.whereColor, textWrap: 'pretty' }}>{t.where}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" style={{ position: 'relative', zIndex: 1, background: '#fff', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '100px 32px 108px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--at-cyprus)', textWrap: 'balance' }}>See Where You Land</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--at-muted)', maxWidth: 460, textWrap: 'pretty' }}>The Review is where the model meets your business — a clear, honest picture of exactly which stage you’re at.</p>
            <Link href={dcHref('Book The Review.dc.html')} data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', marginTop: 6, transition: 'background 200ms ease, transform 200ms ease' }}>Book The Review <Icon name="arrow-right" size={17} /></Link>
          </div>
        </div>
      </section>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <SiteFooter />
      </div>
    </div>
  );
}
