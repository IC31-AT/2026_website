import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Icon from '@/components/Icon';
import BrandArrow from '@/components/BrandArrow';
import { dcHref } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Six Agency ITAD — Case Study',
  description:
    'How AgencyTech gave Six Agency, a certified B-Corp, a cyber-secure and sustainable way to retire its Apple hardware — nothing to landfill, space reclaimed, and capital recovered.',
};

const stats = [
  { value: '0', label: 'components sent to landfill' },
  { value: 'Rebate', label: 'a competitive return on retired assets' },
  { value: 'Certified', label: 'data erasure on every device' },
];

const narrative = [
  {
    eyebrow: 'The Client',
    heading: 'A B-Corp Cycling Through High-Performance Hardware',
    paras: [
      'Six Agency is a certified B-Corp that prioritises sustainability. As a high-output creative agency it regularly cycles through high-performance hardware, specifically within the Apple ecosystem.',
    ],
  },
  {
    eyebrow: 'The Challenge',
    heading: 'Retired Assets Taking Up Space and Losing Value',
    paras: [
      'An accumulation of retired IT assets — primarily MacBooks and Apple Displays — was no longer in active use: occupying valuable office space, depreciating in value the longer it sat in storage, and requiring certified data erasure to protect sensitive agency and client information.',
    ],
  },
  {
    eyebrow: 'How We Worked',
    heading: 'Managing Assets, Not Scrapping Them',
    paras: [
      'AgencyTech provided a comprehensive IT asset-management service focused on environmental sustainability and data security, rather than treating all hardware as scrap.',
    ],
  },
  {
    eyebrow: 'Why It Fit',
    heading: 'Aligned to Six’s B-Corp Values',
    paras: [
      'The approach mapped directly to Six’s B-Corp values: a circular-economy mindset, secure handling, and community reuse.',
    ],
  },
];

const solution = [
  {
    icon: 'clipboard-check',
    title: 'On-Site Audit & Manifesting',
    desc: 'An initial survey at Six’s office created a detailed asset manifest documenting every device at the point of collection — full transparency, and significant time saved for the internal team.',
    delay: 0,
  },
  {
    icon: 'recycle',
    title: 'Sustainable Reuse',
    desc: 'Rather than scrapping everything, AgencyTech evaluated the circular-economy potential: repairing where possible, wiping faulty devices, and earmarking older, low-value assets for goodwill projects such as digital-literacy initiatives and charity donations.',
    delay: 90,
  },
  {
    icon: 'shield-check',
    title: 'Certified Data Erasure',
    desc: 'Certified secure wipes on every device, protecting sensitive agency and client information.',
    delay: 180,
  },
];

const results = [
  { icon: 'trending-up', title: 'Financial recovery', desc: 'A competitive rebate turned depreciating storage items back into liquid capital.', delay: 0 },
  { icon: 'layout-grid', title: 'Space reclaimed', desc: 'Clearing stagnant inventory freed up studio square footage.', delay: 90 },
  { icon: 'recycle', title: 'Environmental impact', desc: 'No components sent to landfill, parts reclaimed for reuse, supporting B-Corp status.', delay: 180 },
  { icon: 'shield-check', title: 'Data peace of mind', desc: 'Certification that all devices had been wiped.', delay: 0 },
];

const eyebrow = 'at-eyebrow';

export default function SixAgencyCaseStudyPage() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="case-studies" theme="light" />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--at-cyprus)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/blob-scene-2.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: '152px 32px 72px', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
            <Link href={dcHref('IT Case Studies.dc.html')} style={{ color: 'var(--at-turquoise-light)', textDecoration: 'none' }}>Case Studies</Link> <Icon name="chevron-right" size={13} /> Six Agency
          </span>
          <span style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 8, fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)', background: 'rgba(43,188,186,0.16)', padding: '5px 12px', borderRadius: 'var(--radius-pill)' }}>IT Services · ITAD</span>
          <h1 style={{ margin: 0, fontSize: 46, lineHeight: 1.08, letterSpacing: '-0.025em', fontWeight: 800, color: '#fff', maxWidth: 760, textWrap: 'balance' }}>An ITAD Clear-Out Aligned to B-Corp Values</h1>
          <p style={{ margin: 0, fontSize: 17.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', maxWidth: 620, textWrap: 'pretty' }}>Six Agency is a certified B-Corp and high-output creative agency that regularly cycles through high-performance hardware, specifically within the Apple ecosystem.</p>
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
          <blockquote style={{ margin: 0, fontSize: 26, lineHeight: 1.4, fontWeight: 600, color: 'var(--text-heading)', letterSpacing: '-0.01em', textWrap: 'pretty' }}>“AgencyTech’s asset-collection solution aligns with Six’s sustainability and B-Corp values, providing cyber-secure asset handling, reducing landfill, and supporting community reuse.”</blockquote>
          <span style={{ fontSize: 14, color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-heading)', fontWeight: 700 }}>Dan Pritchard</strong> · Head of Production, Six</span>
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

      {/* THE SOLUTION */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '88px 32px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640, marginBottom: 40 }}>
            <span className={eyebrow}>The Solution</span>
            <h2 style={{ margin: 0, fontSize: 32, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>A Secure, Sustainable Route Off the Shelf</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {solution.map((s) => (
              <div key={s.title} data-reveal data-reveal-delay={s.delay} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 11 }}>
                <span style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name={s.icon} size={20} /></span>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--text-heading)' }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--text-muted)', textWrap: 'pretty' }}>{s.desc}</p>
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
            <h2 style={{ margin: 0, fontSize: 32, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Value Recovered, Space Freed, Nothing Wasted</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {results.map((r) => (
              <div key={r.title} data-reveal data-reveal-delay={r.delay} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 11 }}>
                <span style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name={r.icon} size={20} /></span>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--text-heading)' }}>{r.title}</h3>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--text-muted)', textWrap: 'pretty' }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '92px 32px 104px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Retiring Hardware Responsibly?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>Recover value, reclaim space, and keep every device out of landfill — with certified data erasure on all of it.</p>
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
