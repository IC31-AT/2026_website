import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Icon from '@/components/Icon';
import BrandArrow from '@/components/BrandArrow';
import { dcHref } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Cybersecurity & Systems Overhaul — Case Study',
  description:
    'How AgencyTech gave a fast-growing 50-person creative agency real peace of mind on cybersecurity — enforced 2FA, phishing simulations, company-wide device protection and a central password manager, backed by training that stuck.',
};

const stats = [
  { value: '7 min', label: 'average ticket response time' },
  { value: '2FA', label: 'enforced across the company' },
  { value: 'Company-wide', label: 'device protection & password management' },
];

const narrative = [
  {
    eyebrow: 'The Client',
    heading: 'Strong Creative Output, Foundations Left Behind',
    paras: [
      'A fast-growing 50-person creative agency in Bristol, with strong creative output and a reputation to match. But as the team scaled, the IT foundations and company systems underneath it hadn’t kept pace.',
      'The result was a business solving its problems with spiralling labour costs rather than smarter systems — a pattern that only gets more expensive as a company grows.',
    ],
  },
  {
    eyebrow: 'The Situation',
    heading: 'Exposed, and Held Back',
    paras: [
      'A lack of IT and cybersecurity controls left the agency exposed to risk and operational disruption. It also made it hard to adopt the new tools the team wanted — from AI to a scalable knowledge base.',
      'Without fixing these foundations first, future growth and efficiency gains would always be limited by what sat beneath them.',
    ],
  },
  {
    eyebrow: 'How We Worked',
    heading: 'An Embedded Partner, Working in Phases',
    paras: [
      'AgencyTech acted as an embedded partner rather than a one-off supplier, taking a phased approach: assess the cyber posture first, then lead adoption through training rather than tooling alone.',
      'That was backed by ongoing, engaged consultation — staying close to the team so the change held and kept pace with the business.',
    ],
  },
  {
    eyebrow: 'Why It Mattered',
    heading: 'Foundations That Unlock the Next Step',
    paras: [
      'With the foundations secured, the agency could finally bring structure to how it used its tools, automate admin, and start using AI confidently across the team.',
      'The work wasn’t security for its own sake — it was the groundwork that made everything after it possible.',
    ],
  },
];

const delivered = [
  {
    icon: 'shield-check',
    title: 'Phased Cybersecurity Overhaul',
    desc: 'Enhanced the company’s cyber posture: enforced 2FA, phishing simulations, company-wide device protection and a centralised password manager.',
  },
  {
    icon: 'graduation-cap',
    title: 'Training Events',
    desc: 'In-person and digital training events with individual follow-ups to drive real adoption across the team.',
  },
  {
    icon: 'headset',
    title: 'Ongoing, Proactive Support',
    desc: 'Support on existing systems plus engaged consultation to keep the client at the forefront of security.',
  },
];

const outcomes = [
  { icon: 'shield-check', title: 'Reduced exposure', desc: '2FA, device protection and a password manager across the company.', delay: 0 },
  { icon: 'zap', title: 'Fewer disruptions', desc: 'A 7-minute average ticket response; issues solved before they become problems.', delay: 90 },
  { icon: 'sparkles', title: 'AI-ready foundations', desc: 'Structure to adopt AI and a knowledge base confidently.', delay: 180 },
  { icon: 'graduation-cap', title: 'A team that adopted it', desc: 'Training and follow-ups that made the change stick.', delay: 0 },
];

const eyebrow = 'at-eyebrow';

export default function CybersecurityOverhaulCaseStudyPage() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="case-studies" theme="light" />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--at-cyprus)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/blob-scene-2.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: '152px 32px 72px', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
            <Link href={dcHref('IT Case Studies.dc.html')} style={{ color: 'var(--at-turquoise-light)', textDecoration: 'none' }}>Case Studies</Link> <Icon name="chevron-right" size={13} /> Cybersecurity Overhaul
          </span>
          <span style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 8, fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)', background: 'rgba(43,188,186,0.16)', padding: '5px 12px', borderRadius: 'var(--radius-pill)' }}>IT Services · Cybersecurity</span>
          <h1 style={{ margin: 0, fontSize: 46, lineHeight: 1.08, letterSpacing: '-0.025em', fontWeight: 800, color: '#fff', maxWidth: 760, textWrap: 'balance' }}>A Phased Cybersecurity Overhaul for a Growing Creative Agency</h1>
          <p style={{ margin: 0, fontSize: 17.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', maxWidth: 620, textWrap: 'pretty' }}>A fast-growing 50-person creative agency whose IT foundations hadn’t kept pace — using spiralling labour costs to solve problems rather than smarter systems.</p>
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
          <blockquote style={{ margin: 0, fontSize: 26, lineHeight: 1.4, fontWeight: 600, color: 'var(--text-heading)', letterSpacing: '-0.01em', textWrap: 'pretty' }}>“Working with AgencyTech has taken a huge amount of pressure off our leadership team and given us real peace of mind around our cybersecurity standards. The support is fast and proactive, issues get solved before they become problems, and the integrated approach to technology and AI has helped us strengthen our operations, bring structure to how we use our tools, automate admin, and start using AI confidently across the team.”</blockquote>
          <span style={{ fontSize: 14, color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-heading)', fontWeight: 700 }}>CEO</strong> · creative agency</span>
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

      {/* WHAT WE DELIVERED */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '88px 32px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640, marginBottom: 40 }}>
            <span className={eyebrow}>What We Delivered</span>
            <h2 style={{ margin: 0, fontSize: 32, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Securing the Foundations, Then Building on Them</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {delivered.map((d) => (
              <div key={d.title} data-reveal style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 11 }}>
                <span style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name={d.icon} size={20} /></span>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--text-heading)' }}>{d.title}</h3>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--text-muted)', textWrap: 'pretty' }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE OUTCOME */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '88px 32px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640, marginBottom: 40 }}>
            <span className={eyebrow}>The Outcome</span>
            <h2 style={{ margin: 0, fontSize: 32, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Peace of Mind, and Room to Grow</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {outcomes.map((o) => (
              <div key={o.title} data-reveal data-reveal-delay={o.delay} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 11 }}>
                <span style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name={o.icon} size={20} /></span>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--text-heading)' }}>{o.title}</h3>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--text-muted)', textWrap: 'pretty' }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ background: '#fff', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '92px 32px 104px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Foundations Holding You Back?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>Let’s secure the basics and build the structure your team needs to grow with confidence.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="mailto:hello@agencytech.co.uk" data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>Book a Call <BrandArrow variant="light" size={15} /></Link>
              <Link href={dcHref('IT Case Studies.dc.html')} data-hover="background: var(--surface-subtle)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 54, padding: '0 28px', background: 'transparent', color: 'var(--text-heading)', border: '2px solid var(--border-strong)', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease' }}>More case studies</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
