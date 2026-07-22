import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import CaseStudyCard from '@/components/CaseStudyCard';
import ImageSlot from '@/components/ImageSlot';
import Icon from '@/components/Icon';
import { dataUri } from '@/lib/blobscene';
import { ROUTES } from '@/lib/routes';

/* Brand blob scenes — single corner-anchored nested-contour compositions
   (per AT Design System · Background Blob Scenes: Cyprus base, layers 3–5,
   jitter < 0.03, waviness ≤ 6, brand palettes only). One continuous graphic
   per section rather than cropped two-corner fragments. */
const teamBlob = dataUri({ width: 1600, height: 900, corner: 'br', layers: 4, points: 6, jitter: 0.02, palette: 'brandTeal', seed: 7 });
const ctaBlob = dataUri({ width: 1600, height: 640, corner: 'tr', layers: 4, points: 6, jitter: 0.02, palette: 'turquoisePop', seed: 8 });

export const metadata: Metadata = {
  title: 'Futureproofing Program',
  description:
    'A structured path to AI readiness — built and run by the people who already keep your systems secure. One relationship, three specialisms, four tiers.',
};

const reliefLines = [
  { strong: 'Hours back in the week', muted: 'not more to learn on top of everything else.' },
  { strong: 'One team who actually knows your systems', muted: 'not five browser tabs of conflicting advice.' },
  { strong: 'Decisions made with you', muted: 'not left for you to guess at alone.' },
  { strong: 'Margins and output that move', muted: 'not “AI adoption” as a box to tick.' },
  { strong: 'A plan that keeps you ahead', muted: 'not scrambling to catch up with everyone else’s LinkedIn posts.' },
].map((l, i) => ({ ...l, delay: (i % 3) * 60 }));

const teamRoles = [
  { icon: 'compass', kicker: 'The thinking', title: 'AI Strategist & Operations Partner', desc: 'Works out what’s actually worth doing, and how it fits the way you run.', delay: 0 },
  { icon: 'shield-check', kicker: 'The building', title: 'Developer & Security', desc: 'Makes it real — built properly, kept secure, safe to rely on.', delay: 100 },
  { icon: 'graduation-cap', kicker: 'The enabling', title: 'Trainer', desc: 'Makes sure your team can actually use what’s been built.', delay: 200 },
];

const tierDefs = [
  { num: '01', name: 'Experimenting', band: '0–4.9', where: 'Using free tools, no structure or governance yet.', possible: 'A clear, honest picture of where you stand — and a first governance layer in place.', minH: 300, peak: false },
  { num: '02', name: 'Consolidating', band: '5–6.9', where: 'Clear processes, structured data, early automation.', possible: 'Real returns from first automations — one consistent way of working.', minH: 336, peak: false },
  { num: '03', name: 'Accelerating', band: '7–8.9', where: 'Custom systems built around how you actually work.', possible: 'Real margin and capacity gains — foundations for new service lines.', minH: 372, peak: false },
  { num: '04', name: 'Ascending', band: '9–10', where: 'Creating new AI-powered services to sell.', possible: 'New, sellable products on your own IP — revenue no competitor can copy.', minH: 408, peak: true },
];

const tiers = tierDefs.map((t, i) => ({
  ...t,
  delay: i * 100,
  bg: t.peak ? 'var(--at-cyprus)' : '#fff',
  border: t.peak ? 'var(--at-cyprus)' : 'var(--border-default)',
  ghost: t.peak ? 'rgba(43,188,186,0.12)' : 'rgba(0,64,64,0.05)',
  kicker: t.peak ? 'var(--at-turquoise-light)' : 'var(--at-faint)',
  nameColor: t.peak ? '#fff' : 'var(--text-heading)',
  labelColor: t.peak ? 'rgba(255,255,255,0.55)' : 'var(--at-faint)',
  whereColor: t.peak ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)',
  possibleKicker: t.peak ? 'var(--at-turquoise-light)' : 'var(--at-turquoise)',
  possibleColor: t.peak ? '#fff' : 'var(--text-heading)',
}));

const evidenceGroups = [
  {
    label: 'FP Review', icon: 'clipboard-check', note: 'Phase 1 · the audit that sets your tier', cols: 2, cases: [
      { tag: 'Futureproofing', metric: '2.5', suffix: 'wks', label: 'kickoff to a board-ready 12-month roadmap', client: 'PointZeroGroup · employer comms group', title: 'Understanding What Held PointZeroGroup Back', summary: 'A Phase 1 Review across three merged agencies — scored on all seven dimensions, with a sequenced 12-month roadmap delivered in two and a half weeks.', href: 'Case Study PointZeroGroup.dc.html', delay: 0 },
      { tag: 'Futureproofing', metric: '86', suffix: '%', label: 'of the team already using AI, actively', client: 'SquareEye · legal-sector web agency', title: 'Cutting Through the Noise, Getting Aligned', summary: 'Already ahead on AI but uncoordinated. A four-week Review joined it up — one managed platform, a clear information architecture, and a shared roadmap.', href: 'Case Study SquareEye.dc.html', delay: 90 },
    ],
  },
  {
    label: 'FP Implementation', icon: 'wrench', note: 'Phase 2 · what we built from the roadmap', cols: 3, cases: [
      { tag: 'Futureproofing', metric: '4', suffix: 'hrs/wk', label: 'reclaimed per person, company-wide', client: 'Design & marketing agency · 60+ staff', title: 'AI, From Experimentation to Capability', summary: 'A governed, company-wide ChatGPT rollout — training, custom GPTs and AI-ready file structure — turning random individual use into a repeatable team capability.', href: '#', delay: 0 },
      { tag: 'Futureproofing', metric: '16', suffix: 'hrs/wk', label: 'of manual data entry removed', client: 'Content agency · 60+ staff', title: 'A Live Database That Maintains Itself', summary: 'Custom automation scraping 1,400+ listings across 32 sources into one accurate, always-current database the whole team relies on.', href: '#', delay: 90 },
      { tag: 'Futureproofing', metric: '34', suffix: '%', label: 'increase in average monthly leads', client: 'Device repair company', title: 'A Technical Overhaul Built to Scale', summary: 'A new website, an AI-driven leads funnel with automated booking, and an internal knowledge base — with 2.5 hours reclaimed per person each week.', href: '#', delay: 180 },
    ],
  },
];

const nextSteps = [
  { icon: 'clipboard-check', tag: 'Phase 1', title: 'The Review', desc: 'A fixed-price, fixed-length audit that tells you exactly where you stand — in writing.', meta: 'From £2,500 + VAT · 4–5 weeks', cta: 'Explore The Review', href: ROUTES.theReview, delay: 0 },
  { icon: 'wrench', tag: 'Phase 2', title: 'Ongoing Work', desc: 'Two ways to build what the Review found — advisory, or we build it for you.', meta: 'Advisory from £800 + VAT / month', cta: 'Explore Ongoing Work', href: ROUTES.ongoingWork, delay: 90 },
  { icon: 'zap', tag: 'Start light', title: 'Automations', desc: 'Not ready for the full engagement? A half-day to align on what’s worth automating first.', meta: '~£800 + VAT · half-day', cta: 'Explore Automations', href: ROUTES.automations, delay: 180 },
];

const eyebrow = 'at-eyebrow';

export default function FutureproofingPage() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="fp" theme="dark" />

      {/* 1. HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--at-cyprus)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '176px 32px 104px', display: 'grid', gridTemplateColumns: '1.08fr 0.92fr', gap: 72, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            <span className={eyebrow} style={{ color: 'var(--at-turquoise-light)' }}>Futureproofing Program</span>
            <h1 style={{ margin: 0, fontSize: 56, lineHeight: 1.06, letterSpacing: '-0.025em', fontWeight: 800, color: '#fff', textWrap: 'balance' }}>Stop Feeling Behind on AI. Start Feeling Ready for It.</h1>
            <p style={{ margin: 0, fontSize: 18.5, lineHeight: 1.6, color: 'var(--text-on-dark-muted)', maxWidth: 500, textWrap: 'pretty' }}>A structured path to AI readiness — built and run by the people who already keep your systems secure, not a chatbot bolted on by strangers.</p>
            <div style={{ display: 'flex', gap: 14, marginTop: 6, flexWrap: 'wrap' }}>
              <Link href={ROUTES.bookTheReview} data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 52, padding: '0 28px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>Book The Review</Link>
              <Link href={ROUTES.futureproofingAbout} data-hover="background: var(--at-cyprus-light); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 52, padding: '0 28px', background: 'transparent', color: '#fff', border: '2px solid var(--border-on-dark)', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>See how it works</Link>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <ImageSlot placeholder="Photo — the Futureproofing team" radius={6} style={{ width: '100%', height: 420, display: 'block', boxShadow: 'var(--shadow-lg)' }} />
            <div style={{ position: 'absolute', left: -34, top: 40, animation: 'at-float 5s ease-in-out infinite', background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 11 }}>
              <span style={{ width: 30, height: 30, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name="clock" size={16} /></span>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-heading)' }}>Hours back in the week</span>
            </div>
            <div style={{ position: 'absolute', right: -26, bottom: 34, animation: 'at-float 6s ease-in-out 1.3s infinite', background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 11 }}>
              <span style={{ width: 30, height: 30, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name="heart-handshake" size={16} /></span>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-heading)' }}>One less thing to carry</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE RELIEF */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '128px 32px 120px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 16, marginBottom: 72 }}>
            <span className={eyebrow}>What Changes</span>
            <h2 style={{ margin: 0, fontSize: 42, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)', textWrap: 'balance' }}>What Changes When AI Is Actually Working For You</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {reliefLines.map((line, i) => (
              <div key={i} data-reveal data-reveal-delay={line.delay} style={{ display: 'flex', alignItems: 'flex-start', gap: 22, padding: '30px 0', borderTop: '1px solid var(--border-default)' }}>
                <span style={{ flex: 'none', marginTop: 12, width: 11, height: 11, borderRadius: 3, background: 'var(--at-turquoise)', transform: 'rotate(45deg)' }} />
                <p style={{ margin: 0, fontSize: 26, lineHeight: 1.4, letterSpacing: '-0.01em', textWrap: 'pretty' }}>
                  <span style={{ fontWeight: 700, color: 'var(--text-heading)' }}>{line.strong}</span>{' '}
                  <span style={{ fontWeight: 500, color: 'var(--at-faint)' }}>— {line.muted}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TEAM REVEAL */}
      <section style={{ position: 'relative', background: 'var(--at-cyprus)', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={teamBlob} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'bottom right', opacity: 0.5, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1080, margin: '0 auto', padding: '118px 32px 124px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 18, marginBottom: 24 }}>
            <span className={eyebrow} style={{ color: 'var(--at-turquoise-light)' }}>Why This Is Actually Deliverable</span>
            <h2 style={{ margin: 0, fontSize: 42, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: '#fff', textWrap: 'balance' }}>One Relationship. Three Specialisms.</h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: 680, textWrap: 'pretty' }}>What looks like one AI partner is actually three: someone thinking about your AI strategy and operations, someone building and securing the systems underneath it, and someone making sure your team can actually use what’s been built.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 40 }}>
            {teamRoles.map((role) => (
              <div key={role.title} data-reveal data-reveal-delay={role.delay} style={{ background: 'var(--at-cyprus-light)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-md)', padding: '30px 26px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-sm)', background: 'rgba(43,188,186,0.16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise-light)' }}><Icon name={role.icon} size={23} /></span>
                <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)' }}>{role.kicker}</span>
                <h3 style={{ margin: 0, fontSize: 19, lineHeight: 1.25, fontWeight: 600, color: '#fff' }}>{role.title}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', textWrap: 'pretty' }}>{role.desc}</p>
              </div>
            ))}
          </div>

          <div data-reveal data-reveal-delay={120} style={{ position: 'relative', height: 96 }}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <path d="M16.7 0 C16.7 60, 50 42, 50 100" fill="none" stroke="#2BBCBA" strokeWidth="1.5" strokeOpacity="0.6" vectorEffect="non-scaling-stroke" />
              <path d="M50 0 L50 100" fill="none" stroke="#2BBCBA" strokeWidth="1.5" strokeOpacity="0.6" vectorEffect="non-scaling-stroke" />
              <path d="M83.3 0 C83.3 60, 50 42, 50 100" fill="none" stroke="#2BBCBA" strokeWidth="1.5" strokeOpacity="0.6" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>

          <div data-reveal data-reveal-delay={200} style={{ display: 'flex', justifyContent: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'var(--at-turquoise)', color: '#fff', borderRadius: 'var(--radius-pill)', padding: '15px 28px', fontSize: 16, fontWeight: 700, boxShadow: '0 0 0 8px rgba(6,154,152,0.14)' }}><Icon name="handshake" size={20} />One relationship — accountable to a plan, not a trend</span>
          </div>

          <p data-reveal data-reveal-delay={120} style={{ margin: '44px auto 0', maxWidth: 660, textAlign: 'center', fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,0.6)', textWrap: 'pretty' }}>Most “AI experts” can only offer you the first one — and usually not even that, underneath the confidence.</p>
        </div>
      </section>

      {/* 4. EVIDENCE */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '120px 32px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640, marginBottom: 52 }}>
            <span className={eyebrow}>Evidence It’s Real</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>We’ve Done This With AI Before — Here’s What Happened</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 44 }}>
            {evidenceGroups.map((g) => (
              <div key={g.label} data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise)', background: 'rgba(6,154,152,0.08)', border: '1px solid rgba(6,154,152,0.22)', padding: '6px 14px', borderRadius: 'var(--radius-pill)' }}><Icon name={g.icon} size={14} />{g.label}</span>
                  <span style={{ flex: 1, height: 1, background: 'var(--border-default)' }} />
                  <span style={{ fontSize: 13, color: 'var(--at-faint)' }}>{g.note}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${g.cols}, 1fr)`, gap: 24, alignItems: 'stretch' }}>
                  {g.cases.map((c) => (
                    <div key={c.title} data-reveal data-reveal-delay={c.delay} style={{ height: '100%' }}>
                      <CaseStudyCard tag={c.tag} metric={c.metric} metricSuffix={c.suffix} metricLabel={c.label} client={c.client} title={c.title} summary={c.summary} href={c.href} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE STAGES */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '118px 32px 124px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 680, marginBottom: 20 }}>
            <span className={eyebrow}>The Four Tiers</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Wherever You’re Starting From, There’s a Next Step</h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>The Review places you in one of four tiers — and your tier is set by your weakest dimension, not an average. One critical gap holds the whole business back, so moving up a tier is exactly what “not lagging behind” looks like: concrete, not abstract.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, alignItems: 'end', marginTop: 44 }}>
            {tiers.map((tier) => (
              <div key={tier.num} data-reveal data-reveal-delay={tier.delay} style={{ position: 'relative', overflow: 'hidden', minHeight: tier.minH, background: tier.bg, border: `1px solid ${tier.border}`, borderRadius: 'var(--radius-md)', padding: '30px 26px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <span style={{ position: 'absolute', right: 14, bottom: -18, fontSize: 128, lineHeight: 1, fontWeight: 800, color: tier.ghost }}>{tier.num}</span>
                <span style={{ position: 'relative', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: tier.kicker }}>Stage {tier.num}</span>
                <h3 style={{ position: 'relative', margin: 0, fontSize: 23, lineHeight: 1.15, fontWeight: 700, color: tier.nameColor }}>{tier.name}</h3>
                <span style={{ position: 'relative', fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', color: tier.possibleKicker }}>Score {tier.band}</span>
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: tier.labelColor }}>Where you are</span>
                  <span style={{ fontSize: 14, lineHeight: 1.55, color: tier.whereColor, textWrap: 'pretty' }}>{tier.where}</span>
                </div>
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 4, marginTop: 6 }}>
                  <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: tier.possibleKicker }}>What’s possible</span>
                  <span style={{ fontSize: 14, lineHeight: 1.55, fontWeight: 600, color: tier.possibleColor, textWrap: 'pretty' }}>{tier.possible}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NEXT STEPS */}
      <section id="next-steps" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '112px 32px 40px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 620, marginBottom: 48 }}>
            <span className={eyebrow}>How It Works</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Three Ways In, One Starting Point</h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>Everything begins with The Review — a clear, honest picture of where you stand. What you do next is up to you.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {nextSteps.map((step) => (
              <Link key={step.title} href={step.href} data-reveal data-reveal-delay={step.delay} data-hover="box-shadow: var(--shadow-md); transform: translateY(-3px)" style={{ display: 'flex', flexDirection: 'column', gap: 14, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '32px 28px', textDecoration: 'none', transition: 'box-shadow 250ms ease, transform 250ms ease' }}>
                <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name={step.icon} size={22} /></span>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-turquoise)' }}>{step.tag}</span>
                <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-heading)' }}>{step.title}</span>
                <span style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)' }}>{step.desc}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-heading)', marginTop: 4 }}>{step.meta}</span>
                <span style={{ marginTop: 'auto', paddingTop: 8, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700, color: 'var(--at-turquoise)' }}>{step.cta} <Icon name="arrow-right" size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section id="contact" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '60px 32px 112px' }}>
          <div data-reveal style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-md)', background: 'var(--at-cyprus)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ctaBlob} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top right', opacity: 0.55, pointerEvents: 'none' }} />
            <div style={{ position: 'relative', padding: '84px 48px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
              <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: '#fff', maxWidth: 620, textWrap: 'balance' }}>Find Out Exactly Where You Stand</h2>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', maxWidth: 480, textWrap: 'pretty' }}>The Review is a complete purchase on its own — no obligation into anything else. In writing, in five weeks.</p>
              <Link href={ROUTES.bookTheReview} data-hover="background: var(--at-turquoise-light); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--at-turquoise)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', marginTop: 6, transition: 'background 200ms ease, transform 200ms ease' }}>Book The Review <Icon name="arrow-right" size={17} /></Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
