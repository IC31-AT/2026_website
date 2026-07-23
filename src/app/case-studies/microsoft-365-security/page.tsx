import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Icon from '@/components/Icon';
import { dcHref } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Microsoft 365 Security Overhaul — Case Study',
  description:
    'How AgencyTech turned an exposed, inconsistently managed Microsoft 365 tenant into a structured, secure and defensible environment for a charity handling sensitive safeguarding data.',
};

const stats = [
  { value: '56%', label: 'improvement in Microsoft Secure Score' },
  { value: '18 → 73', label: 'Identity Secure Score, pre to post' },
  { value: '25% → 77%', label: 'overall Secure Score' },
];

const narrative = [
  {
    eyebrow: 'The Client',
    heading: 'A Charity Handling Sensitive Data',
    paras: [
      'A growing charity supporting vulnerable individuals and families, handling sensitive client and safeguarding data every day.',
      'As its Microsoft 365 grant licences approached renewal, the charity engaged AgencyTech to review the environment and strengthen its security.',
    ],
  },
  {
    eyebrow: 'The Situation',
    heading: 'A Tenant Left Inconsistently Configured',
    paras: [
      'The charity’s previous IT provider had left the Microsoft 365 tenant inconsistently configured, with gaps in security controls and user-management processes.',
      'For an organisation handling sensitive safeguarding data, these gaps represented significant, unnecessary risk.',
    ],
  },
  {
    eyebrow: 'What We Found',
    heading: 'Gaps Across Identity, Access and Licensing',
    paras: [
      'An initial review flagged expiring grant licences with no transition plan, inconsistent MFA coverage, and admin roles that weren’t secured to modern best practice.',
      'It also surfaced legacy user accounts still active, improperly offboarded staff retaining access, and orphaned accounts increasing the domain attack surface — leaving a Secure Score well below peer organisations.',
    ],
  },
  {
    eyebrow: 'How We Worked',
    heading: 'From Partial Enforcement to Policy-Driven Security',
    paras: [
      'In line with Microsoft Entra best-practice, AgencyTech moved the charity from partial enforcement to consistent, policy-driven security.',
      'Alongside this, we cleaned up historical accounts and right-sized licensing for non-profit compliance — reducing risk while removing unnecessary spend.',
    ],
  },
];

const recommendations = [
  {
    icon: 'shield-check',
    area: 'Security & MFA',
    before: 'Inconsistent MFA enforcement, with weaker authentication in use.',
    after: 'MFA enforced across all active users and admins, structured Conditional Access policies, and self-service password reset with dual verification.',
  },
  {
    icon: 'lock',
    area: 'Admin protection',
    before: 'Administrative roles not fully secured to modern best practice.',
    after: 'All privileged roles protected with strong authentication, aligned to the Cyber Essentials standard.',
  },
  {
    icon: 'users',
    area: 'Legacy accounts',
    before: 'Legacy and dormant accounts still active, increasing the domain attack surface.',
    after: 'Dormant accounts identified and removed, and former staff properly offboarded — OneDrive data migrated first — reducing exposure.',
  },
  {
    icon: 'file-check',
    area: 'Offboarding & data',
    before: 'Improperly offboarded staff retaining access, with historic data scattered.',
    after: 'A controlled offboarding process, with required data retained for SLT and historic data centralised into secure locations.',
  },
  {
    icon: 'scale',
    area: 'Licensing',
    before: 'Expiring grant licences with no transition plan, and unnecessary premium licences in use.',
    after: 'SLT on Business Standard and operational staff on Business Basic, compliant with Microsoft’s 85% non-profit utilisation requirement, and renewals structured to avoid unnecessary spend.',
  },
  {
    icon: 'radar',
    area: 'Security posture',
    before: 'Reactive and inconsistently managed.',
    after: 'Structured, policy-driven and defensible.',
  },
];

const results = [
  { icon: 'trending-up', title: '+56% Secure Score', desc: 'A significant lift, now above average for similar organisations.', delay: 0 },
  { icon: 'shield-check', title: 'Lower breach risk', desc: 'Reduced risk of phishing and credential compromise.', delay: 90 },
  { icon: 'list-checks', title: 'User lifecycle', desc: 'Clear processes for managing accounts over time.', delay: 180 },
  { icon: 'lock', title: 'Cyber Essentials-aligned', desc: 'Admin role setup aligned to the standard.', delay: 0 },
  { icon: 'user-check', title: 'Cleaner identity', desc: 'Dormant and orphaned accounts removed.', delay: 90 },
  { icon: 'route', title: 'A scalable foundation', desc: 'Properly governed, ready for future growth.', delay: 180 },
];

const eyebrow = 'at-eyebrow';

export default function Microsoft365SecurityCaseStudyPage() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="case-studies" theme="light" />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--at-cyprus)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/blob-scene-1.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: '152px 32px 72px', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
            <Link href={dcHref('IT Case Studies.dc.html')} style={{ color: 'var(--at-turquoise-light)', textDecoration: 'none' }}>Case Studies</Link> <Icon name="chevron-right" size={13} /> Microsoft 365 Security
          </span>
          <span style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 8, fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)', background: 'rgba(43,188,186,0.16)', padding: '5px 12px', borderRadius: 'var(--radius-pill)' }}>IT Services · Microsoft 365</span>
          <h1 style={{ margin: 0, fontSize: 46, lineHeight: 1.08, letterSpacing: '-0.025em', fontWeight: 800, color: '#fff', maxWidth: 760, textWrap: 'balance' }}>A Microsoft 365 Tenant, Secured Properly</h1>
          <p style={{ margin: 0, fontSize: 17.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', maxWidth: 620, textWrap: 'pretty' }}>A growing charity handling sensitive client and safeguarding data, whose previous IT provider had left its Microsoft 365 tenant inconsistently configured.</p>
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
          <blockquote style={{ margin: 0, fontSize: 26, lineHeight: 1.4, fontWeight: 600, color: 'var(--text-heading)', letterSpacing: '-0.01em', textWrap: 'pretty' }}>“AgencyTech feel like an extension of our team. They’ve strengthened our Microsoft 365 security, supported us through licensing changes, reduced risk by cleaning up legacy accounts, and provided hands-on IT support when we’ve needed it. The client portal and clear guidance give us confidence that everything is managed properly. Their support has been professional and genuinely valued.”</blockquote>
          <span style={{ fontSize: 14, color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-heading)', fontWeight: 700 }}>The charity’s leadership team</strong></span>
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
            <span className={eyebrow}>What We Changed</span>
            <h2 style={{ margin: 0, fontSize: 32, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>From Exposed to Defensible</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>A structured, policy-driven overhaul across identity, access, offboarding and licensing — closing the gaps the previous provider had left open.</p>
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

      {/* THE RESULTS */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '88px 32px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640, marginBottom: 40 }}>
            <span className={eyebrow}>The Outcome</span>
            <h2 style={{ margin: 0, fontSize: 32, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>The Results</h2>
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
      <section id="contact" style={{ background: '#fff', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '92px 32px 104px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Is Your Tenant Really Secure?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>Let’s review your Microsoft 365 environment and close the gaps before they become a problem.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="mailto:hello@agencytech.co.uk" data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>Book a Call <Icon name="arrow-right" size={17} /></Link>
              <Link href={dcHref('IT Case Studies.dc.html')} data-hover="background: var(--surface-subtle)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 54, padding: '0 28px', background: 'transparent', color: 'var(--text-heading)', border: '2px solid var(--border-strong)', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease' }}>More case studies</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
