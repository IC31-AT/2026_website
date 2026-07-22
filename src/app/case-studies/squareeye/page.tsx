import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Icon from '@/components/Icon';
import { dcHref } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'SquareEye Case Study',
  description:
    'A creative web design and development agency specialising in the legal sector — already ahead on AI, and looking to join it all up before the window closed.',
};

const stats = [
  { value: '86%', label: 'of the team already using AI tools actively' },
  { value: '4 wks', label: 'from kickoff to a sequenced 12-month roadmap' },
  { value: 'Above avg', label: 'UWE readiness score — top end of agencies assessed' },
];

const narrative = [
  {
    eyebrow: 'The Client',
    heading: 'Technical Depth, and a Founder Watching Closely',
    paras: [
      'SquareEye is a creative web design and development agency specialising in the legal sector, working with barristers’ chambers and law firms across the UK. A tight-knit team with a reputation for technical depth, and a founder who has been watching AI reshape the industry closely.',
      'They came to AgencyTech at an inflection point. Not because things were broken, but because the window to act was open — and they knew it wouldn’t stay that way.',
    ],
  },
  {
    eyebrow: 'The Situation',
    heading: 'The Appetite Was There. The Connective Tissue Wasn’t.',
    paras: [
      'The SquareEye team were already using AI tools actively — more so than most agencies at their stage. There was real appetite for change and a founder with clear ideas about where the business needed to go. What was missing was the connective tissue: a shared way of working, a clear information architecture, and a plan the whole team was building towards together.',
      'AI was being used individually, across multiple platforms, with no shared context or governance. Processes worked because people knew their jobs well — not because they were documented anywhere useful. Data was scattered across a stack of disconnected tools with no clear ownership.',
    ],
  },
  {
    eyebrow: 'How We Worked',
    heading: 'A Ground-Level View, Not a Self-Report',
    paras: [
      'Every member of the SquareEye team completed a detailed questionnaire. Every team member had a dedicated one-to-one interview. And a technical investigation gave us a ground-level view of the full tool environment — not just a self-reported one.',
      'The result was a complete, evidence-based picture of the business across technology, process, data, and AI readiness.',
    ],
  },
  {
    eyebrow: 'What We Found',
    heading: 'Energetic, But Uncoordinated',
    paras: [
      'SquareEye scored above average on the UWE 7-Dimensional AI Readiness Framework — sitting at the higher end of agencies we’ve assessed, with 86% of the team already using AI tools in their work. The culture and appetite were clearly there.',
      'The gap was in the foundations. AI adoption was energetic but uncoordinated. Information lived in too many places with no clear structure. Business strategy existed in the founder’s head but hadn’t been documented in a way the team could act on together. The opportunity wasn’t to start from scratch — it was to join things up.',
    ],
  },
];

const recommendations = [
  {
    icon: 'sparkles',
    area: 'AI platform',
    before: 'Team members running separate AI subscriptions across multiple platforms — no shared context, no institutional knowledge, no central oversight. Individual gains, but none of the compounding benefit.',
    after: 'A single, managed AI platform across the whole team — shared projects, a unified knowledge layer, built-in coding agents and design capabilities in one workspace. A coordinated capability that builds on itself.',
  },
  {
    icon: 'folder',
    area: 'File storage',
    before: 'Files spread across a platform outside the rest of the team’s working environment, with limited permission controls and no straightforward path to AI accessibility. Version chaos a regular friction point.',
    after: 'A unified cloud storage environment that integrates natively with the stack. Files accessible, correctly permissioned, and surfaceable by AI tools. One place to maintain, one source of truth.',
  },
  {
    icon: 'book-open',
    area: 'Company knowledge',
    before: 'Operational knowledge scattered across disconnected systems — client info in one place, project docs in another, support history somewhere else. Finding anything meant knowing where to look; AI couldn’t navigate it at all.',
    after: 'A clear information architecture with a single AI query layer across connected systems. Anyone can surface the right information instantly, permissions respected at every level. Years of knowledge made accessible.',
  },
  {
    icon: 'workflow',
    area: 'Automation',
    before: 'Existing automations spread across multiple workflow platforms, with usage-based pricing stacking up and limited capacity for more advanced, AI-augmented processes.',
    after: 'A consolidated, self-hostable automation setup with the flexibility to build genuinely intelligent workflows — including a ticket triage agent that gives support requests the context needed to action them.',
  },
  {
    icon: 'code',
    area: 'AI-assisted development',
    before: 'The founder had developed real expertise in AI-assisted website development through experimentation — but that knowledge lived with one person, applied inconsistently, hard to hand off.',
    after: 'A documented, repeatable build process any team member can follow and contribute to. Shared prompt libraries and standardised workflows make AI-assisted development a company capability, not an individual one.',
  },
  {
    icon: 'shield-check',
    area: 'Governance and training',
    before: 'No formal AI usage policy in practice, despite good individual awareness. New tools introduced without a structured evaluation process. No regular forum to align on how things should be done.',
    after: 'A training and governance framework covering data handling, acceptable use and tool evaluation — with a regular rhythm for sharing new ideas and keeping the team aligned as the stack evolves.',
  },
  {
    icon: 'database',
    area: 'Data management',
    before: 'Operational data spread across tools with unclear ownership, some duplication, and costs that hadn’t been reviewed against actual need.',
    after: 'A clear picture of what data lives where, why, and whether it’s in the right place — with recommendations to consolidate and reduce unnecessary licence spend.',
  },
  {
    icon: 'users',
    area: 'CRM & commercial operations',
    before: 'A capable CRM platform being used at a fraction of its potential, with a significant gap between what was paid for and what was used.',
    after: 'A rationalised setup that activates the features already available — better visibility of pipeline, client relationships and commercial opportunities, without adding cost.',
  },
];

const deliverables = [
  { icon: 'gauge', title: 'AI Readiness Report', desc: 'Benchmarked against the UWE 7-Dimensional Framework.', delay: 0 },
  { icon: 'layers', title: 'Complete Tool Audit', desc: 'Retain, replace and remove recommendations across the entire stack.', delay: 90 },
  { icon: 'map', title: 'Prioritised Opportunity Map', desc: 'Eight scoped initiatives, each rated by impact and effort.', delay: 180 },
  { icon: 'scale', title: 'AI Governance & Policy Framework', desc: 'A bespoke framework covering data, acceptable use and evaluation.', delay: 0 },
  { icon: 'route', title: '12-Month Roadmap', desc: 'Sequenced and editable, built for the whole team to act on.', delay: 90 },
  { icon: 'projector', title: 'Executive Presentation', desc: 'Delivered to the full leadership team.', delay: 180 },
];

const eyebrow = 'at-eyebrow';

export default function SquareEyeCaseStudyPage() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="case-studies" theme="light" />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--at-cyprus)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/blob-scene-3.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: '152px 32px 72px', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
            <Link href={dcHref('Futureproofing Case Studies.dc.html')} style={{ color: 'var(--at-turquoise-light)', textDecoration: 'none' }}>Case Studies</Link> <Icon name="chevron-right" size={13} /> SquareEye
          </span>
          <span style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 8, fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)', background: 'rgba(43,188,186,0.16)', padding: '5px 12px', borderRadius: 'var(--radius-pill)' }}>Futureproofing · The Review</span>
          <h1 style={{ margin: 0, fontSize: 46, lineHeight: 1.08, letterSpacing: '-0.025em', fontWeight: 800, color: '#fff', maxWidth: 760, textWrap: 'balance' }}>How AgencyTech Helped SquareEye Cut Through the Noise and Get Aligned</h1>
          <p style={{ margin: 0, fontSize: 17.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', maxWidth: 620, textWrap: 'pretty' }}>A creative web design and development agency specialising in the legal sector — already ahead on AI, and looking to join it all up before the window closed.</p>
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
          <blockquote style={{ margin: 0, fontSize: 26, lineHeight: 1.4, fontWeight: 600, color: 'var(--text-heading)', letterSpacing: '-0.01em', textWrap: 'pretty' }}>“A lot of what we talked about today made sense — and we knew we should be doing these things. But we hadn't been joining it up, and we hadn't been thinking about a proper implementation plan. Having a definite roadmap, with some outside accountability, would be good.”</blockquote>
          <span style={{ fontSize: 14, color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-heading)', fontWeight: 700 }}>Trevor S</strong> · Founder & CEO, SquareEye</span>
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
            <h2 style={{ margin: 0, fontSize: 32, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Not Starting From Scratch — Joining It Up</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>The tools and the appetite were already there. What was missing was the structure that lets them work together.</p>
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
            <span className={eyebrow}>What the Team Walked Away With</span>
            <h2 style={{ margin: 0, fontSize: 32, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>A Plan, and Something to Be Accountable To</h2>
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
          <blockquote style={{ margin: 0, fontSize: 23, lineHeight: 1.45, fontWeight: 600, color: 'var(--text-heading)', letterSpacing: '-0.01em', textWrap: 'pretty' }}>“The business we've had in the past — nothing would break if we ignored it for six months. This is different. I feel if we ignore this, we could be out of business very quickly. Having a definite plan, and something to be accountable to, changes that.”</blockquote>
          <span style={{ fontSize: 14, color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-heading)', fontWeight: 700 }}>Trevor S</strong> · Founder & CEO, SquareEye</span>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '92px 32px 104px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Ready to Join It Up?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>The Review is where the appetite you already have meets a plan the whole team can act on.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href={dcHref('Book The Review.dc.html')} data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>Book The Review <Icon name="arrow-right" size={17} /></Link>
              <Link href={dcHref('Futureproofing Case Studies.dc.html')} data-hover="background: var(--surface-subtle)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 54, padding: '0 28px', background: 'transparent', color: 'var(--text-heading)', border: '2px solid var(--border-strong)', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease' }}>More case studies</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
