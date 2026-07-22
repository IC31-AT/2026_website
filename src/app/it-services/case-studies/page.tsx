import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import CaseStudyCard from '@/components/CaseStudyCard';
import Icon from '@/components/Icon';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'IT Services Case Studies',
  description:
    'What working with AgencyTech actually looks like for creative agencies — filtered to IT Services.',
};

const caseStudies = [
  {
    tag: 'IT Services',
    metric: '7',
    suffix: 'min',
    label: 'average ticket response time',
    client: 'Creative agency · 50 people, Bristol',
    title: 'A Phased Cybersecurity Overhaul',
    summary:
      'Enforced 2FA, phishing simulations, company-wide device protection and a central password manager — plus in-person and digital training that made it stick.',
    delay: undefined,
  },
  {
    tag: 'IT Services',
    metric: '56',
    suffix: '%',
    label: 'Microsoft Secure Score improvement',
    client: 'Charity · safeguarding data',
    title: 'A Microsoft 365 Tenant, Secured Properly',
    summary:
      'MFA enforced across every account, dormant and improperly offboarded users cleaned out, and licensing right-sized for non-profit compliance.',
    delay: 90,
  },
  {
    tag: 'IT Services',
    metric: '0',
    suffix: '',
    label: 'components sent to landfill',
    client: 'Six Agency · B-Corp, creative',
    title: 'An ITAD Clear-Out Aligned to B-Corp Values',
    summary:
      'On-site audit, certified data wipes and a resale rebate — retired Apple kit turned back into capital and studio space, with nothing sent to landfill.',
    delay: 180,
  },
  {
    tag: 'IT Services',
    metric: 'Top 50',
    suffix: '',
    label: 'UK university — new student service',
    client: 'Major UK university',
    title: 'A Hardship Device Scheme, Built End-to-End',
    summary:
      "Launched and validated a service they couldn't resource in-house — a co-designed framework now being embedded in a new manufacturer tender for long-term scale.",
    delay: undefined,
  },
];

export default function ItCaseStudiesPage() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="it" theme="light" />

      {/* ================ HERO ================ */}
      <section style={{ background: 'linear-gradient(180deg, var(--at-grey) 0%, #ffffff 100%)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '168px 32px 64px', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12.5, fontWeight: 600, color: 'var(--text-muted)' }}>
            <Link href={ROUTES.itServices} style={{ color: 'var(--at-turquoise)', textDecoration: 'none' }}>IT Services</Link>
            <Icon name="chevron-right" size={13} />
            Case Studies
          </span>
          <h1 style={{ margin: 0, fontSize: 50, lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', maxWidth: 640, textWrap: 'balance' }}>Real Problems, Measured Outcomes</h1>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 520, textWrap: 'pretty' }}>What working with AgencyTech actually looks like for creative agencies — filtered to IT Services.</p>
          <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
            <Link href={ROUTES.caseStudies} data-hover="background: var(--surface-subtle)" style={{ display: 'inline-flex', alignItems: 'center', height: 38, padding: '0 18px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-default)', background: '#fff', fontSize: 13.5, fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', transition: 'background 150ms ease' }}>All</Link>
            <span style={{ display: 'inline-flex', alignItems: 'center', height: 38, padding: '0 18px', borderRadius: 'var(--radius-pill)', background: 'var(--at-cyprus)', fontSize: 13.5, fontWeight: 700, color: '#fff' }}>IT Services</span>
            <Link href={ROUTES.futureproofingCaseStudies} data-hover="background: var(--surface-subtle)" style={{ display: 'inline-flex', alignItems: 'center', height: 38, padding: '0 18px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-default)', background: '#fff', fontSize: 13.5, fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', transition: 'background 150ms ease' }}>Futureproofing</Link>
          </div>
        </div>
      </section>

      {/* ================ CASE STUDY GRID ================ */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 32px 104px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {caseStudies.map((c) => (
              <div key={c.title} data-reveal data-reveal-delay={c.delay}>
                <CaseStudyCard tag={c.tag} metric={c.metric} metricSuffix={c.suffix} metricLabel={c.label} client={c.client} title={c.title} summary={c.summary} href="#" />
              </div>
            ))}
            <div data-reveal data-reveal-delay={90} style={{ border: '1px dashed var(--border-strong)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '40px 32px', textAlign: 'center', minHeight: 380 }}>
              <Icon name="file-plus-2" size={28} style={{ color: 'var(--at-faint)' }} />
              <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-heading)' }}>Your Project Here?</span>
              <span style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 240 }}>More case studies are being written up — and the next one could be yours.</span>
              <a href="#contact" style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--at-turquoise)', textDecoration: 'none' }}>Start a conversation →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ================ FINAL CTA ================ */}
      <section id="contact" style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '100px 32px 108px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Want Results Like These?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>Every one of these started with a short call and an honest look at what wasn&apos;t working.</p>
            <a href="mailto:hello@agencytech.co.uk" data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', marginTop: 6, transition: 'background 200ms ease, transform 200ms ease' }}>Book a Call <Icon name="arrow-right" size={17} /></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
