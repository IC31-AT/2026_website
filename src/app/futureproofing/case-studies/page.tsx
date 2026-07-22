import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import CaseStudyCard from '@/components/CaseStudyCard';
import Icon from '@/components/Icon';
import { ROUTES, dcHref } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Futureproofing Case Studies',
  description:
    'Two Futureproofing audits, start to finish, plus the rollouts and automations that followed — real agencies, real numbers.',
};

const featured = [
  {
    client: 'PointZeroGroup · employer comms group, ~35 staff',
    title: 'Understanding Exactly What Was Holding PointZeroGroup Back',
    metric: '2.5',
    suffix: 'wks',
    metricLabel: 'kickoff to a board-ready 12-month roadmap',
    href: 'Case Study PointZeroGroup.dc.html',
    quote:
      '“Within two and a half weeks they’d spoken to the whole team, mapped every tool we used, and handed us a sequenced 12-month plan we could actually act on. For the first time, we have real clarity on where the business is and what needs to happen next.”',
    author: 'Mark Beavan',
    authorRole: 'Managing Director, PointZeroGroup',
    phases: [
      {
        icon: 'circle-alert',
        label: 'The Problem',
        body: 'Three agencies merged into one group, but the operational foundations never caught up — three sets of tools loosely combined, undocumented workflows, and no clear picture of what was holding the business back.',
      },
      {
        icon: 'search',
        label: 'What We Did',
        body: 'A structured Phase 1 Futureproofing Audit across all three agencies — a whole-team questionnaire, one-to-one interviews per function, and admin-level Microsoft 365 access — benchmarked against the UWE 7-Dimensional AI Readiness Framework.',
      },
      {
        icon: 'trending-up',
        label: 'The Outcome',
        body: 'A prioritised opportunity map of eight initiatives and seven quick wins, an AI governance framework, and a sequenced 12-month roadmap the leadership team is aligned on — delivered in two and a half weeks to hit a board deadline.',
      },
    ],
  },
  {
    client: 'SquareEye · legal-sector web & dev agency',
    title: 'Cutting Through the Noise, Getting SquareEye Aligned',
    metric: '8',
    suffix: '',
    metricLabel: 'initiatives scoped and sequenced — plus a consolidation plan that cuts duplicated licence spend',
    href: 'Case Study SquareEye.dc.html',
    quote:
      '“The business we’ve had in the past — nothing would break if we ignored it for six months. This is different. I feel if we ignore this, we could be out of business very quickly. Having a definite plan, and something to be accountable to, changes that.”',
    author: 'Trevor S',
    authorRole: 'Founder & CEO, SquareEye',
    phases: [
      {
        icon: 'circle-alert',
        label: 'The Problem',
        body: 'AI was being used actively — more than most agencies — but individually, across multiple platforms, with no shared context or governance. Processes worked because people knew their jobs, not because they were documented anywhere useful.',
      },
      {
        icon: 'search',
        label: 'What We Did',
        body: 'A four-week Phase 1 Futureproofing Audit — a whole-team questionnaire, one-to-one interviews, and a technical investigation of the full tool environment — benchmarked against the UWE 7-Dimensional AI Readiness Framework.',
      },
      {
        icon: 'trending-up',
        label: 'The Outcome',
        body: 'SquareEye scored above average, at the higher end of agencies assessed. The plan: a single managed AI platform, a clear information architecture, documented AI-assisted development, and a governance rhythm — joining up what was already there.',
      },
    ],
  },
];

const fpCases = [
  {
    metric: '4',
    suffix: 'hrs/wk',
    label: 'reclaimed per person, company-wide',
    client: 'Design & marketing agency · 60+ staff',
    title: 'AI, From Experimentation to Capability',
    summary:
      'A governed, company-wide ChatGPT rollout — training, custom GPTs and AI-ready file structure — turning random individual use into a repeatable team capability.',
    delay: 0,
  },
  {
    metric: '16',
    suffix: 'hrs/wk',
    label: 'of manual data entry removed',
    client: 'Content agency · 60+ staff',
    title: 'A Live Database That Maintains Itself',
    summary:
      'Custom automation scraping 1,400+ listings across 32 sources into one accurate, always-current database the whole team relies on.',
    delay: 90,
  },
  {
    metric: '34',
    suffix: '%',
    label: 'increase in average monthly leads',
    client: 'Device repair company',
    title: 'A Technical Overhaul Built to Scale',
    summary:
      'A new website, an AI-driven leads funnel with automated booking, and an internal knowledge base — with 2.5 hours reclaimed per person each week.',
    delay: 180,
  },
  {
    metric: '£48k',
    suffix: '+',
    label: 'labour cost saved per year',
    client: 'Shopify sports-jersey reseller',
    title: '267 Hours a Month, Automated Away',
    summary:
      'A human-in-the-loop pipeline that ingests, tags, renames, writes copy and drafts listings — scaling output without scaling headcount.',
    delay: 0,
  },
];

const eyebrow = 'at-eyebrow';

export default function FutureproofingCaseStudiesPage() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="fp" theme="light" />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(180deg, var(--at-grey) 0%, #ffffff 100%)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '168px 32px 40px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12.5, fontWeight: 600, color: 'var(--text-muted)' }}>
            <Link href={dcHref('Futureproofing.dc.html')} style={{ color: 'var(--at-turquoise)', textDecoration: 'none' }}>
              Futureproofing
            </Link>{' '}
            <Icon name="chevron-right" size={13} /> Case Studies
          </span>
          <h1 style={{ margin: 0, fontSize: 52, lineHeight: 1.06, letterSpacing: '-0.025em', fontWeight: 800, color: 'var(--text-heading)', maxWidth: 720, textWrap: 'balance' }}>
            Case Studies
          </h1>
          <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
            <Link
              href={dcHref('Case Studies.dc.html')}
              data-hover="background: var(--surface-subtle)"
              style={{ display: 'inline-flex', alignItems: 'center', height: 38, padding: '0 18px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-default)', background: '#fff', fontSize: 13.5, fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', transition: 'background 150ms ease' }}
            >
              All
            </Link>
            <Link
              href={dcHref('IT Case Studies.dc.html')}
              data-hover="background: var(--surface-subtle)"
              style={{ display: 'inline-flex', alignItems: 'center', height: 38, padding: '0 18px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-default)', background: '#fff', fontSize: 13.5, fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', transition: 'background 150ms ease' }}
            >
              IT Services
            </Link>
            <span style={{ display: 'inline-flex', alignItems: 'center', height: 38, padding: '0 18px', borderRadius: 'var(--radius-pill)', background: 'var(--at-cyprus)', fontSize: 13.5, fontWeight: 700, color: '#fff' }}>
              Futureproofing
            </span>
          </div>
        </div>
      </section>

      {/* FEATURED — stacked audit cards */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '36px 32px 40px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
            <span className={eyebrow}>The Review, In Full</span>
            <h2 style={{ margin: 0, fontSize: 30, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>
              Two Futureproofing Audits, Start to Finish
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {featured.map((f) => (
              <div key={f.title} data-reveal style={{ border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--at-cyprus)', padding: '42px 44px 40px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/blob-scene-1.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, pointerEvents: 'none' }} />
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 600 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)', background: 'rgba(43,188,186,0.16)', padding: '4px 11px', borderRadius: 'var(--radius-pill)' }}>
                          Futureproofing · The Review
                        </span>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>{f.client}</span>
                      </span>
                      <h3 style={{ margin: 0, fontSize: 28, lineHeight: 1.15, fontWeight: 700, color: '#fff', textWrap: 'balance' }}>{f.title}</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6, flex: 'none' }}>
                      <span style={{ display: 'flex', alignItems: 'baseline', gap: 6, whiteSpace: 'nowrap' }}>
                        <span style={{ fontSize: 62, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--at-turquoise-light)' }}>{f.metric}</span>
                        <span style={{ fontSize: 23, fontWeight: 700, color: 'var(--at-turquoise-light)' }}>{f.suffix}</span>
                      </span>
                      <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.75)', maxWidth: 230 }}>{f.metricLabel}</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, background: '#fff' }}>
                  {f.phases.map((p) => (
                    <div key={p.label} style={{ padding: '32px 30px', borderRight: '1px solid var(--border-default)', display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-turquoise)' }}>
                        <Icon name={p.icon} size={15} />
                        {p.label}
                      </span>
                      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--text-body)', textWrap: 'pretty' }}>{p.body}</p>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '30px 40px', background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)', display: 'flex', gap: 26, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', flex: 1, minWidth: 340 }}>
                    <Icon name="quote" size={24} style={{ color: 'var(--at-turquoise)', opacity: 0.5, flex: 'none', marginTop: 3 }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <blockquote style={{ margin: 0, fontSize: 16.5, lineHeight: 1.5, fontWeight: 600, color: 'var(--text-heading)', letterSpacing: '-0.01em', textWrap: 'pretty' }}>{f.quote}</blockquote>
                      <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>
                        <strong style={{ color: 'var(--text-heading)', fontWeight: 700 }}>{f.author}</strong> · {f.authorRole}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={dcHref(f.href)}
                    data-hover="background: var(--accent-hover); transform: scale(1.02)"
                    style={{ flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, height: 48, padding: '0 24px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 14.5, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}
                  >
                    Read the full case study <Icon name="arrow-right" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRID — more FP engagements */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px 100px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 620, marginBottom: 44 }}>
            <span className={eyebrow}>More Engagements</span>
            <h2 style={{ margin: 0, fontSize: 34, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>
              Rollouts and Automations
            </h2>
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: 'var(--text-muted)', textWrap: 'pretty' }}>
              The work that follows a Review — the builds, rollouts and automations that turn a roadmap into returns.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {fpCases.map((c) => (
              <div key={c.title} data-reveal data-reveal-delay={c.delay} style={{ height: '100%' }}>
                <CaseStudyCard
                  tag="Futureproofing"
                  metric={c.metric}
                  metricSuffix={c.suffix}
                  metricLabel={c.label}
                  client={c.client}
                  title={c.title}
                  summary={c.summary}
                  href="#"
                />
              </div>
            ))}
            <div
              data-reveal
              data-reveal-delay={90}
              style={{ border: '1px dashed var(--border-strong)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '40px 32px', textAlign: 'center', minHeight: 380, background: '#fff' }}
            >
              <Icon name="file-plus-2" size={28} style={{ color: 'var(--at-faint)' }} />
              <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-heading)' }}>Your Agency Here?</span>
              <span style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 240 }}>
                Every one of these started with The Review — an honest picture of where things stood.
              </span>
              <Link href={ROUTES.bookTheReview} style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--at-turquoise)', textDecoration: 'none' }}>
                Book The Review →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '100px 32px 108px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>
              Want Results Like These?
            </h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>
              It starts the same way every time — with The Review, and an honest picture of where you stand.
            </p>
            <Link
              href={ROUTES.bookTheReview}
              data-hover="background: var(--accent-hover); transform: scale(1.02)"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', marginTop: 6, transition: 'background 200ms ease, transform 200ms ease' }}
            >
              Book The Review <Icon name="arrow-right" size={17} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
