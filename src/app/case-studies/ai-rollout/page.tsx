import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Icon from '@/components/Icon';
import BrandArrow from '@/components/BrandArrow';
import { dcHref } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Company-Wide AI Rollout — Case Study',
  description:
    'How AgencyTech turned ad-hoc AI use into a governed, repeatable capability at a 60-person design and marketing agency — reclaiming around four hours per person each week.',
};

const stats = [
  { value: '~4 hrs/wk', label: 'reclaimed per person on average' },
  { value: '60+', label: 'staff onboarded to ChatGPT & AI safety' },
  { value: '8.5/10', label: 'average AI literacy & safety score' },
];

const narrative = [
  {
    eyebrow: 'The Client',
    heading: 'A Team Ready to Make AI Everyone’s Job',
    paras: [
      'A medium-sized Bristol design and social media agency that wanted to move beyond ad-hoc AI use and make AI a safe, consistent, team-wide capability rather than an individual-experimentation tool.',
      'The appetite was there across the 60-person team — what was missing was a shared way of working that everyone could rely on, not just the early adopters.',
    ],
  },
  {
    eyebrow: 'The Challenge',
    heading: 'Unstructured, Inconsistent, and Locked in People’s Heads',
    paras: [
      'AI usage was unstructured and inconsistent: no shared training, playbooks or knowledge-sharing, so people recreated the same prompts through trial and error. Governance uncertainty around hallucinations, IP and where data goes created hesitation for senior creatives.',
      'The infrastructure wasn’t AI-ready either — files sat in highly shared Google folders rather than a governed shared drive. And there was an innovation lag, because workflows hadn’t been designed to take advantage of AI in the first place.',
    ],
  },
  {
    eyebrow: 'Our Approach',
    heading: 'A Rollout Designed for Adoption, Not Just Access',
    paras: [
      'We ran a structured rollout designed for adoption, governance and future-proofing: discovery, AI-ready data foundations, tooling and behaviour change, then training and follow-up support.',
      'The goal was never to hand people a login and hope. It was to build capability that lasts — repeatable, role-specific and safe by default.',
    ],
  },
  {
    eyebrow: 'The Solution',
    heading: 'A Practical, Governed AI Enablement Programme',
    paras: [
      'We delivered a practical, governed AI enablement programme: AI-ready cloud infrastructure, organisation-wide onboarding to ChatGPT with personalised usage patterns, training and documentation, and custom GPT workflows.',
      'Throughout, we gave the team clear guidance on safe, human-in-the-loop use — so confidence grew alongside adoption.',
    ],
  },
];

const approach = [
  {
    icon: 'search',
    title: 'Discovery / Audit',
    desc: 'Mapped how teams worked, where AI could remove friction, and what leadership needed to feel confident on risk and change.',
  },
  {
    icon: 'folder',
    title: 'AI-Ready Data & Files',
    desc: 'Moved from ad-hoc shared folders to a robust shared cloud structure with clear ownership, access rights and guardrails for future automation.',
  },
  {
    icon: 'sparkles',
    title: 'ChatGPT Rollout',
    desc: 'Introduced ChatGPT aligned to how individuals prefer to work, so adoption was practical and personal, not theoretical.',
  },
  {
    icon: 'graduation-cap',
    title: 'Training Seminar + Docs',
    desc: 'A company-wide session (most of the 60-person team attended), backed by digital documentation so learning didn’t disappear after one workshop.',
  },
  {
    icon: 'user-check',
    title: '1:1 Enablement + Custom GPTs',
    desc: 'Follow-up 1:1 sessions and custom GPT integrations that turned AI into repeatable, role-specific workflows.',
  },
  {
    icon: 'messages-square',
    title: 'SLT Feedback Loop',
    desc: 'Surfaced wider workflow and system blockers back to directors to unlock longer-term productivity gains.',
  },
];

const results = [
  { icon: 'clock', title: '~4 hrs/wk saved', desc: 'Reported savings of 1–10 hours per week; average around 4, median 3.5.', delay: 0 },
  { icon: 'gauge', title: 'Confidence up', desc: 'AI literacy & safety 8.5/10, prompting 7.7, comfort using AI on public assets (with review) 7.3.', delay: 90 },
  { icon: 'zap', title: 'Faster first drafts', desc: 'Captions, emails and client comms, with more creative variety.', delay: 180 },
  { icon: 'check', title: 'Fewer mistakes', desc: 'AI-assisted QA cut preventable errors like links, names and typos.', delay: 0 },
  { icon: 'sparkles', title: 'Custom GPT momentum', desc: 'Early wins on briefing, SEO metadata and reporting.', delay: 90 },
];

const eyebrow = 'at-eyebrow';

export default function AiRolloutCaseStudyPage() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="case-studies" theme="light" />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--at-cyprus)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/blob-scene-3.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: '152px 32px 72px', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
            <Link href={dcHref('Futureproofing Case Studies.dc.html')} style={{ color: 'var(--at-turquoise-light)', textDecoration: 'none' }}>Case Studies</Link> <Icon name="chevron-right" size={13} /> Company-Wide AI Rollout
          </span>
          <span style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 8, fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)', background: 'rgba(43,188,186,0.16)', padding: '5px 12px', borderRadius: 'var(--radius-pill)' }}>Futureproofing · AI Enablement</span>
          <h1 style={{ margin: 0, fontSize: 46, lineHeight: 1.08, letterSpacing: '-0.025em', fontWeight: 800, color: '#fff', maxWidth: 760, textWrap: 'balance' }}>AI, From Experimentation to Company Capability</h1>
          <p style={{ margin: 0, fontSize: 17.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', maxWidth: 620, textWrap: 'pretty' }}>A medium-sized design and social media agency that wanted to move beyond ad-hoc AI use and make it a safe, consistent, team-wide capability.</p>
        </div>
      </section>

      {/* METRIC STRIP */}
      <section style={{ background: 'var(--at-cyprus-light)', borderBottom: '1px solid var(--border-on-dark)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ padding: '34px 20px', display: 'flex', flexDirection: 'column', gap: 6, borderRight: '1px solid var(--border-on-dark)' }}>
                <span style={{ fontSize: 40, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--at-turquoise-light)' }}>{s.value}</span>
                <span style={{ fontSize: 13, lineHeight: 1.45, color: 'rgba(255,255,255,0.72)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD QUOTE */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '80px 32px 8px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Icon name="quote" size={34} style={{ color: 'var(--at-turquoise)', opacity: 0.5 }} />
          <blockquote style={{ margin: 0, fontSize: 26, lineHeight: 1.4, fontWeight: 600, color: 'var(--text-heading)', letterSpacing: '-0.01em', textWrap: 'pretty' }}>“The problem is, it’s in everybody’s heads.”</blockquote>
          <span style={{ fontSize: 14, color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-heading)', fontWeight: 700 }}>A team member</strong></span>
        </div>
      </section>

      {/* NARRATIVE */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 32px 40px', display: 'flex', flexDirection: 'column', gap: 52 }}>
          {narrative.map((n) => (
            <div key={n.heading} data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span className={eyebrow}>{n.eyebrow}</span>
              <h2 style={{ margin: 0, fontSize: 30, lineHeight: 1.18, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>{n.heading}</h2>
              {n.paras.map((para, i) => (
                <p key={i} style={{ margin: 0, fontSize: 16.5, lineHeight: 1.7, color: 'var(--text-body)', textWrap: 'pretty' }}>{para}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* OUR APPROACH */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '88px 32px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640, marginBottom: 40 }}>
            <span className={eyebrow}>Our Approach</span>
            <h2 style={{ margin: 0, fontSize: 32, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>A Structured Rollout, Built to Stick</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>Discovery, AI-ready foundations, tooling and behaviour change, then training and follow-up support — each step designed for adoption and governance.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {approach.map((a) => (
              <div key={a.title} data-reveal style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 11 }}>
                <span style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name={a.icon} size={20} /></span>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--text-heading)' }}>{a.title}</h3>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--text-muted)', textWrap: 'pretty' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE RESULTS */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '88px 32px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640, marginBottom: 40 }}>
            <span className={eyebrow}>The Results</span>
            <h2 style={{ margin: 0, fontSize: 32, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Hours Back, and Confidence to Match</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {results.map((d) => (
              <div key={d.title} data-reveal data-reveal-delay={d.delay} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 11 }}>
                <span style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name={d.icon} size={20} /></span>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--text-heading)' }}>{d.title}</h3>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--text-muted)', textWrap: 'pretty' }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '92px 32px 104px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Ready to Make AI a Team Capability?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>The Review is where scattered, individual AI use becomes a governed capability the whole team can rely on.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href={dcHref('Book The Review.dc.html')} data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>Book The Review <BrandArrow variant="light" size={15} /></Link>
              <Link href={dcHref('Futureproofing Case Studies.dc.html')} data-hover="background: var(--surface-subtle)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 54, padding: '0 28px', background: 'transparent', color: 'var(--text-heading)', border: '2px solid var(--border-strong)', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease' }}>More case studies</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
