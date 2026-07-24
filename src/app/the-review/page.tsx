import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Icon from '@/components/Icon';
import BrandArrow from '@/components/BrandArrow';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'The Review',
  description:
    'A fixed-price, fixed-length audit that tells you exactly where you stand — and exactly what to do next.',
};

const deliverables = [
  { icon: 'route', title: 'Prioritised 12-Month Roadmap', desc: 'A sequenced plan — what to do, in what order, and why.', delay: 0 },
  { icon: 'layers', title: 'Full Tools Audit', desc: 'Everything you’re running today, mapped and assessed.', delay: 90 },
  { icon: 'gauge', title: 'AI Readiness Report', desc: 'An honest picture of where you stand across the areas that matter.', delay: 180 },
  { icon: 'map', title: 'Opportunity Map', desc: 'Where AI would actually move the needle for your business.', delay: 0 },
  { icon: 'presentation', title: 'Executive Presentation', desc: 'The findings, walked through with your leadership team.', delay: 90 },
  { icon: 'scale', title: 'AI Governance & Policy Framework', desc: 'The guardrails that let you adopt safely, from day one.', delay: 180 },
];

const bands = [
  { range: '1–4', name: 'Experimenting', desc: 'Informal, individual-led, uncommitted — free tools, no shared structure or governance yet.', bg: '#FCEEEC', border: '#F1D6D1', ink: '#B4453C', chip: 'rgba(180,69,60,0.10)', delay: 0 },
  { range: '5–6', name: 'Consolidating', desc: 'A working strategy or process exists and guides decisions. Foundations going in.', bg: '#FBF4DE', border: '#EFE1B4', ink: '#8A6D16', chip: 'rgba(138,109,22,0.10)', delay: 90 },
  { range: '7–8', name: 'Accelerating', desc: 'Documented, standardised, actively followed — with clear ownership assigned.', bg: '#E7F3EC', border: '#CBE6D5', ink: '#2E7D52', chip: 'rgba(46,125,82,0.10)', delay: 180 },
  { range: '9–10', name: 'Ascending', desc: 'Board-level, proactively resourced, compounding into genuinely new capability.', bg: '#E2F1F0', border: '#C3E2E0', ink: '#0F6D6B', chip: 'rgba(15,109,107,0.10)', delay: 270 },
];

const steps = [
  { num: '1', icon: 'messages-square', title: 'Interviews', desc: 'We talk to the people who actually run the work.', connector: true, delay: 0 },
  { num: '2', icon: 'search', title: 'Systems Audit', desc: 'A full look at the tools and data underneath.', connector: true, delay: 90 },
  { num: '3', icon: 'gauge', title: 'Scoring', desc: 'Seven dimensions, each scored 1–10 against fixed descriptors — from what we observe, not what’s claimed.', connector: true, delay: 180 },
  { num: '4', icon: 'route', title: 'Roadmap Delivery', desc: 'A prioritised plan, in writing, handed over.', connector: true, delay: 270 },
  { num: '5', icon: 'presentation', title: 'Executive Presentation', desc: 'Walked through with your leadership team.', connector: false, delay: 360 },
];

export default function TheReviewPage() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="fp" theme="light" />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, var(--at-grey) 0%, #ffffff 100%)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '172px 32px 96px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--at-turquoise)' }}>
              <span style={{ width: 7, height: 7, background: 'var(--at-turquoise)', borderRadius: 2, transform: 'rotate(45deg)' }} />
              Phase 1 · The Review
            </span>
            <h1 style={{ margin: 0, fontSize: 54, lineHeight: 1.06, letterSpacing: '-0.025em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Know Exactly Where You Stand. In Writing, in Five Weeks.</h1>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 500, textWrap: 'pretty' }}>A fixed-price, fixed-length audit that tells you exactly where you stand — and exactly what to do next.</p>
            <div style={{ display: 'flex', gap: 14, marginTop: 4, flexWrap: 'wrap' }}>
              <Link href={ROUTES.bookTheReview} data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 52, padding: '0 28px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>Book The Review</Link>
              <a href="#deliverables" data-hover="background: var(--surface-subtle)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 52, padding: '0 28px', background: 'transparent', color: 'var(--text-heading)', border: '2px solid var(--border-strong)', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease' }}>What you get</a>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--at-cyprus)', boxShadow: 'var(--shadow-lg)', padding: '36px 34px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/blob-scene-3.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, pointerEvents: 'none' }} />
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)' }}>The deliverable</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                  <span style={{ fontSize: 62, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em', color: '#fff' }}>1</span>
                  <span style={{ fontSize: 18, fontWeight: 600, color: 'rgba(255,255,255,0.82)' }}>clear roadmap, 6 written outputs</span>
                </div>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)' }}>A complete purchase on its own. No black box, no obligation into anything else.</p>
              </div>
            </div>
            <div style={{ position: 'absolute', right: -24, top: 28, animation: 'at-float 5.5s ease-in-out infinite', background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 30, height: 30, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name="calendar-check" size={16} /></span>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-heading)' }}>4–5 weeks, start to finish</span>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section id="deliverables" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '108px 32px 96px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 620, marginBottom: 48 }}>
            <span className="at-eyebrow">What You Get</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Six Written Outputs, One Clear Direction</h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>Everything is documented and handed over. You own it whether or not we ever work together again.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {deliverables.map((d, i) => (
              <div key={i} data-reveal data-reveal-delay={d.delay} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name={d.icon} size={21} /></span>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: 'var(--text-heading)' }}>{d.title}</h3>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-muted)', textWrap: 'pretty' }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS FLOW */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '108px 32px 112px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 620, marginBottom: 56 }}>
            <span className="at-eyebrow">How It Runs</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Five Weeks, Five Steps</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, alignItems: 'stretch' }}>
            {steps.map((s) => (
              <div key={s.num} data-reveal data-reveal-delay={s.delay} style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12, padding: '0 18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                  <span style={{ width: 46, height: 46, flex: 'none', borderRadius: '50%', background: 'var(--at-cyprus)', color: 'var(--at-turquoise-light)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}><Icon name={s.icon} size={21} /></span>
                  {s.connector && (
                    <span style={{ flex: 1, height: 2, background: 'var(--border-strong)' }} />
                  )}
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-turquoise)' }}>Step {s.num}</span>
                <h3 style={{ margin: 0, fontSize: 17, lineHeight: 1.2, fontWeight: 700, color: 'var(--text-heading)' }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--text-muted)', textWrap: 'pretty' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE SCORE */}
      <section style={{ background: '#fff', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '108px 32px 96px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 660, marginBottom: 48 }}>
            <span className="at-eyebrow">How We Score It</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>A Number You Can Stand Behind</h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>We score your business across seven dimensions of AI readiness — adapted from our UWE licence — each rated 1–10 against a fixed set of descriptors. The score reflects what we observe on the ground, not what a business believes about itself. Those seven scores place you in one of four tiers.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
            {bands.map((b) => (
              <div key={b.range} data-reveal data-reveal-delay={b.delay} style={{ background: b.bg, border: `1px solid ${b.border}`, borderRadius: 'var(--radius-md)', padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontSize: 30, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em', color: b.ink }}>{b.range}</span>
                </div>
                <span style={{ alignSelf: 'flex-start', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: b.ink, background: b.chip, padding: '4px 10px', borderRadius: 'var(--radius-pill)' }}>{b.name}</span>
                <span style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--text-body)', textWrap: 'pretty' }}>{b.desc}</span>
              </div>
            ))}
          </div>
          <div data-reveal className="at-highlight" style={{ display: 'flex', gap: 20, alignItems: 'flex-start', padding: '30px 32px' }}>
            <span style={{ flex: 'none', width: 46, height: 46, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name="trending-down" size={22} /></span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h3 style={{ margin: 0, fontSize: 19, fontWeight: 700, color: 'var(--text-heading)' }}>Your tier is set by your weakest dimension — not an average</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>One critical gap holds the whole business back, however strong everything else looks. A business can score well on culture and ethics and still be pinned to the lowest tier by a weak strategy or data foundation. It’s walk-before-you-run, built into the maths — and it’s exactly what tells you where to start.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING + STANDALONE */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto', padding: '108px 32px 96px', display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 60, alignItems: 'center' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <span className="at-eyebrow">Pricing</span>
            <h2 style={{ margin: 0, fontSize: 36, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>One Fixed Price. No Surprises.</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>The Review is a complete purchase on its own — there’s no obligation to go further afterwards, and no pressure to. Some businesses take the roadmap and run it themselves.</p>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--at-faint)', textWrap: 'pretty' }}>Priced “from” because real engagements scale with the size and complexity of the business — a recent one ran £4,500 for a larger team.</p>
          </div>
          <div data-reveal data-reveal-delay={100} style={{ background: 'var(--surface-subtle)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '40px 38px', display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontSize: 30, fontWeight: 700, color: 'var(--text-muted)' }}>From</span>
              <span style={{ fontSize: 56, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-heading)' }}>£2,500</span>
              <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-muted)' }}>+ VAT</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-body)' }}><Icon name="clock" size={16} style={{ color: 'var(--at-turquoise)' }} />Typically 4–5 weeks</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-body)' }}><Icon name="file-check" size={16} style={{ color: 'var(--at-turquoise)' }} />Six written deliverables, yours to keep</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-body)' }}><Icon name="shield-off" size={16} style={{ color: 'var(--at-turquoise)' }} />No obligation into Phase 2</span>
            </div>
            <Link href={ROUTES.bookTheReview} data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 50, background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>Book The Review</Link>
          </div>
        </div>
      </section>

      {/* CASE SNIPPET */}
      <section style={{ background: 'var(--at-cyprus)', position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/blob-scene-1.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: '100px 32px', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span className="at-eyebrow" style={{ color: 'var(--at-turquoise-light)' }}>What a Completed Review Looks Like</span>
          <p style={{ margin: 0, fontSize: 24, lineHeight: 1.45, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em', textWrap: 'pretty' }}>For PointZeroGroup — an employer communications group of three merged agencies — the Review scored the business across all seven dimensions, set its tier, and sequenced a prioritised 12-month roadmap. Delivered in two and a half weeks to meet a board deadline.</p>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.55)' }}><Icon name="check" size={13} />PointZeroGroup · Futureproofing · The Review</span>
          <Link href={ROUTES.futureproofingCaseStudies} data-hover="gap: 12px" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 700, color: 'var(--at-turquoise-light)', textDecoration: 'none', transition: 'gap 200ms ease' }}>See the case studies <BrandArrow variant="light" size={15} /></Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '100px 32px 108px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Ready to Find Out Where You Stand?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>Tell us a little about your business and we’ll book it in — usually within one working day.</p>
            <Link href={ROUTES.bookTheReview} data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', marginTop: 6, transition: 'background 200ms ease, transform 200ms ease' }}>Book The Review <BrandArrow variant="light" size={15} /></Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
