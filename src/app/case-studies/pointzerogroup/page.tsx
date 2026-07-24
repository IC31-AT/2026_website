import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Icon from '@/components/Icon';
import BrandArrow from '@/components/BrandArrow';
import { ROUTES, dcHref } from '@/lib/routes';
import { photoUrl } from '@/lib/media';

export const metadata: Metadata = {
  title: 'PointZeroGroup — Case Study',
  description:
    'How AgencyTech helped PointZeroGroup, a specialist employer communications group of three agencies, understand exactly what was holding them back — and build a board-ready 12-month roadmap.',
};

const stats = [
  { value: '2.5 wks', label: 'from kickoff to a board-ready 12-month roadmap' },
  { value: '3 → 1', label: 'agencies assessed as one unified group' },
  { value: '8 + 7', label: 'scoped initiatives and identified quick wins' },
];

const narrative = [
  {
    eyebrow: 'The Client',
    heading: 'Busy, Experienced, Well-Regarded — and Held Back',
    paras: [
      'PointZeroGroup is a specialist employer communications group made up of three agencies: home, Brand.0, and Reward Point Zero. They work with leading enterprise organisations on employer brand, internal communications, EVP, and careers — around 35 staff, with ambitious leadership and a clear long-term vision to become an AI-informed employer communications agency.',
      'They came to AgencyTech with a familiar problem: the business was busy, experienced, and well-regarded. Something was holding them back — they just didn’t have a clear picture of what.',
    ],
  },
  {
    eyebrow: 'The Situation',
    heading: 'Three Agencies, Loosely Combined',
    paras: [
      'In the years since the agencies merged into a single group, the operational foundations hadn’t kept pace. Three sets of tools, processes, and working habits had been loosely combined rather than properly unified. Leadership had a strong sense of where they wanted to take the business; what they lacked was a clear picture of what was actually happening, and what needed to change first.',
      'AgencyTech was engaged to run a Phase 1 Futureproofing Audit: a structured diagnostic covering the group’s technology stack, workflows, AI readiness, and operational foundations across all three agencies — delivered in an expedited two and a half weeks to meet an internal board deadline.',
    ],
  },
  {
    eyebrow: 'How We Worked',
    heading: 'Evidence, Not Self-Report',
    paras: [
      'Every member of the team completed a detailed questionnaire, every function had a dedicated one-to-one interview, and admin-level access to Microsoft 365 gave us a ground-level view of the actual tool environment rather than a self-reported one.',
      'Most operational problems in agencies aren’t visible from the top. They live in the workarounds people have quietly built around systems that don’t work, and in the distance between how leadership thinks the business operates and how it actually does.',
    ],
  },
  {
    eyebrow: 'What We Found',
    heading: 'Interconnected Problems, Not One Obvious Failure',
    paras: [
      'Using the UWE 7-Dimensional AI Readiness Framework, PointZeroGroup scored low-medium, with a notable gap between how the team assessed themselves and what the evidence showed. The business was optimistic about its operational state, but the audit revealed real work was needed on the technical foundations to make its ambition a reality.',
      'The lowest-scoring areas were data management and process documentation — both prerequisites for almost everything the group wanted to do next. Culture and team appetite for change scored significantly higher. What was missing was the structure, infrastructure, and governance to act on it.',
    ],
  },
];

const recommendations = [
  {
    icon: 'folder',
    area: 'File storage',
    before:
      'Files scattered across a local RAID server, personal OneDrives, Slack threads and local machines. No reliable backup, no remote access without a VPN, and roughly half a day per week per person lost just searching.',
    after:
      'A unified cloud architecture with a tailored solution for the creative studio’s large active assets. Files accessible anywhere, backed up, searchable by content — and the data foundation in place for Copilot and Claude to work across the business.',
  },
  {
    icon: 'users',
    area: 'CRM',
    before:
      'HubSpot at significant annual cost, the majority of contacts unowned, pipeline health invisible, and every won deal triggering hours of duplicated manual admin.',
    after:
      'A right-sized CRM with a clean, enriched database, live pipeline visibility, and automated contact management that surfaces dormant relationships before they go cold. BD time spent on relationships, not data entry.',
  },
  {
    icon: 'briefcase',
    area: 'Project management',
    before:
      'Synergist misconfigured since the merger, billing and hours data unreliable, finance running a parallel spreadsheet, and studio time going unbilled every week.',
    after:
      'A single trustworthy system for job profitability, resource utilisation and margin. Leadership pricing and resourcing on what’s actually happening. Unbilled time visible and recoverable; the parallel spreadsheet retired.',
  },
  {
    icon: 'book-open',
    area: 'Knowledge and process',
    before:
      'Institutional knowledge living in individuals’ heads, inconsistently documented. New starters onboarded informally, proposals built from scratch every time.',
    after:
      'A centralised, searchable knowledge base of SOPs, onboarding and process guides, integrated with AI tools. Proposals draw from a shared library of case studies and costing history, with AI able to draft from it directly.',
  },
  {
    icon: 'shield-check',
    area: 'AI and governance',
    before:
      'A mix of personal AI accounts, no shared policy, inconsistent capability, and no leadership visibility of what was being used. IP and data implications not understood; existing licences going to waste.',
    after:
      'A governed, company-wide AI deployment with consistent access, a formal usage framework covering data, IP and client work, and an AI Champions structure to maintain standards as the group grows.',
  },
  {
    icon: 'workflow',
    area: 'Automation',
    before:
      'Systems disconnected, staff manually bridging the gaps between tools, and hours of avoidable admin absorbed across multiple roles every week.',
    after:
      'Automation connecting the stack as each tool comes online — won deals flowing into project management, dormant contacts flagged, documents reviewed on demand. Manual connective tissue replaced by background workflows.',
  },
  {
    icon: 'presentation',
    area: 'Sales capability',
    before:
      'No shared case study library, no unified service offering, and proposal quality dependent on individual initiative rather than shared foundations.',
    after:
      'A centralised case study library tagged by service, sector and outcome, a shared service offering document, a structured outreach framework, and proposal templates for the whole team. Consistent, fast pitching from a shared foundation.',
  },
];

const deliverables = [
  { icon: 'gauge', title: 'AI Readiness Report', desc: 'Benchmarked against the UWE 7-Dimensional Framework.', delay: 0 },
  { icon: 'layers', title: 'Complete Tool Audit', desc: 'Retain, replace and remove recommendations for every platform in the stack.', delay: 90 },
  { icon: 'map', title: 'Prioritised Opportunity Map', desc: 'Eight scoped initiatives and seven quick wins, each rated by impact and effort.', delay: 180 },
  { icon: 'scale', title: 'AI Governance & Policy Framework', desc: 'Covering IP, data handling, acceptable use and shadow software.', delay: 0 },
  { icon: 'route', title: '12-Month Roadmap', desc: 'Sequenced to maximise impact and account for dependencies.', delay: 90 },
  { icon: 'projector', title: 'Executive Presentation', desc: 'Delivered to the full leadership team ahead of their internal board session.', delay: 180 },
];

const eyebrow = 'at-eyebrow';

export default function PointZeroGroupCaseStudyPage() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="case-studies" theme="light" />

      {/* HERO — frosted case-study photo behind the headline and the numbers */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--at-cyprus)', borderBottom: '1px solid var(--border-on-dark)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photoUrl('heros/pointzerogroup.jpg')} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(10px)', transform: 'scale(1.1)', opacity: 0.55, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,34,34,0.72) 0%, rgba(0,34,34,0.9) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: '152px 32px 0', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
            <Link href={dcHref('Futureproofing Case Studies.dc.html')} style={{ color: 'var(--at-turquoise-light)', textDecoration: 'none' }}>Case Studies</Link> <Icon name="chevron-right" size={13} /> PointZeroGroup
          </span>
          <span style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 8, fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)', background: 'rgba(43,188,186,0.16)', padding: '5px 12px', borderRadius: 'var(--radius-pill)' }}>Futureproofing · The Review</span>
          <h1 style={{ margin: 0, fontSize: 46, lineHeight: 1.08, letterSpacing: '-0.025em', fontWeight: 800, color: '#fff', maxWidth: 760, textWrap: 'balance' }}>How AgencyTech Helped PointZeroGroup Understand Exactly What Was Holding Them Back</h1>
          <p style={{ margin: 0, fontSize: 17.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', maxWidth: 620, textWrap: 'pretty' }}>A specialist employer communications group of three agencies, ~35 staff — and a clear vision the operational foundations hadn’t yet caught up with.</p>
          {/* Numbers, over the frosted photo */}
          <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid rgba(255,255,255,0.18)' }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{ padding: '28px 20px 4px', display: 'flex', flexDirection: 'column', gap: 6, borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.18)' : 'none' }}>
                <span style={{ fontSize: 40, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--at-turquoise-light)' }}>{s.value}</span>
                <span style={{ fontSize: 13, lineHeight: 1.45, color: 'rgba(255,255,255,0.72)' }}>{s.label}</span>
              </div>
            ))}
          </div>
          <div style={{ height: 56 }} />
        </div>
      </section>

      {/* LEAD QUOTE */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '80px 32px 8px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Icon name="quote" size={34} style={{ color: 'var(--at-turquoise)', opacity: 0.5 }} />
          <blockquote style={{ margin: 0, fontSize: 26, lineHeight: 1.4, fontWeight: 600, color: 'var(--text-heading)', letterSpacing: '-0.01em', textWrap: 'pretty' }}>“We knew things weren’t working as well as they should — what we didn’t have was a clear picture of exactly where, or why. AgencyTech gave us that. For the first time, we have real clarity on where the business is and what needs to happen next to use AI to supercharge the agency.”</blockquote>
          <span style={{ fontSize: 14, color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-heading)', fontWeight: 700 }}>Mark Beavan</strong> · Managing Director, PointZeroGroup</span>
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

      {/* RECOMMENDATIONS — before / after */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '88px 32px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640, marginBottom: 44 }}>
            <span className={eyebrow}>What We Recommended</span>
            <h2 style={{ margin: 0, fontSize: 32, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Get the Infrastructure Right, and Everything Becomes Possible</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>Each initiative was sequenced deliberately — every one unlocks the next. Here’s the before and after, area by area.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {recommendations.map((r) => (
              <div key={r.area} data-reveal style={{ background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <div style={{ padding: '18px 26px', background: 'var(--at-cyprus)', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 34, height: 34, flex: 'none', borderRadius: 'var(--radius-sm)', background: 'rgba(43,188,186,0.16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise-light)' }}><Icon name={r.icon} size={17} /></span>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#fff' }}>{r.area}</h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  <div style={{ padding: '24px 26px', borderRight: '1px solid var(--border-default)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-faint)' }}>Before</span>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-muted)', textWrap: 'pretty' }}>{r.before}</p>
                  </div>
                  <div style={{ padding: '24px 26px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise)' }}>After</span>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)', textWrap: 'pretty' }}>{r.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '88px 32px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640, marginBottom: 40 }}>
            <span className={eyebrow}>What the Leadership Team Walked Away With</span>
            <h2 style={{ margin: 0, fontSize: 32, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Six Written Outputs, One Aligned Plan</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {deliverables.map((d) => (
              <div key={d.title} data-reveal data-reveal-delay={d.delay} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 11 }}>
                <span style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name={d.icon} size={20} /></span>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--text-heading)' }}>{d.title}</h3>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--text-muted)', textWrap: 'pretty' }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING QUOTE */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '80px 32px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Icon name="quote" size={30} style={{ color: 'var(--at-turquoise)', opacity: 0.5 }} />
          <blockquote style={{ margin: 0, fontSize: 23, lineHeight: 1.45, fontWeight: 600, color: 'var(--text-heading)', letterSpacing: '-0.01em', textWrap: 'pretty' }}>“One of the things that struck me most was how quickly they got to the real issues. They didn’t just surface what we already suspected — they gave us the data and the context to understand it properly, and a clear path forward. We now have a plan the whole leadership team is aligned on. That’s a significant shift for us.”</blockquote>
          <span style={{ fontSize: 14, color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-heading)', fontWeight: 700 }}>Mark Beavan</strong> · Managing Director, PointZeroGroup</span>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '92px 32px 104px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Want the Same Clarity?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>It starts with The Review — the same structured audit that gave PointZeroGroup their picture and their plan.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href={ROUTES.bookTheReview} data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>Book The Review <BrandArrow variant="light" size={15} /></Link>
              <Link href={dcHref('Futureproofing Case Studies.dc.html')} data-hover="background: var(--surface-subtle)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 54, padding: '0 28px', background: 'transparent', color: 'var(--text-heading)', border: '2px solid var(--border-strong)', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease' }}>More case studies</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
