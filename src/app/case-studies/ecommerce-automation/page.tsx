import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Icon from '@/components/Icon';
import BrandArrow from '@/components/BrandArrow';
import { dcHref } from '@/lib/routes';

export const metadata: Metadata = {
  title: '267 Hours a Month, Automated Away — Case Study',
  description:
    'How AgencyTech built a human-in-the-loop automation pipeline for a Shopify sports-jersey reseller — saving 267+ hours a month and £48k+ a year without growing headcount.',
};

const stats = [
  { value: '267+', label: 'hours saved per month (≈2 full-time employees)' },
  { value: '£48k+', label: 'labour cost saved per year' },
  { value: '2,000', label: 'shirts processed per month' },
];

const narrative = [
  {
    eyebrow: 'The Client',
    heading: 'A Reseller of Modern and Vintage Shirts',
    paras: [
      'An independent Shopify-based sports-jersey reseller serving fans and collectors of modern and vintage shirts.',
    ],
  },
  {
    eyebrow: 'The Challenge',
    heading: 'Ten to Twenty Minutes, Per Shirt',
    paras: [
      'Preparing each jersey for Shopify took 10–20 minutes per shirt, excluding photography. Staff manually typed the badge, player and number, season and kit type, renamed images, and researched and wrote descriptions before uploading.',
      'That capped throughput at roughly 4–6 shirts per hour per person — and delayed inventory going live.',
    ],
  },
  {
    eyebrow: 'How We Worked',
    heading: 'A Human-in-the-Loop Pipeline',
    paras: [
      'AgencyTech designed a human-in-the-loop automation pipeline that handles the repetitive steps end-to-end, while keeping a person in control of the final check and price.',
    ],
  },
  {
    eyebrow: 'Why This Approach',
    heading: 'Scale Without Scaling Labour',
    paras: [
      'It was chosen over one-by-one listing tools or offloading to extra staff because it delivers scale, consistency and structured data without growing labour costs in proportion to volume.',
    ],
  },
];

const workflow = [
  { icon: 'package', title: 'Bulk Zip Ingest', desc: 'Ingests a large collection of unsorted photoshoot photos from a cloud platform.', delay: 0 },
  { icon: 'image', title: 'Image Compression', desc: 'Compresses images for faster load times and better processing.', delay: 90 },
  { icon: 'search', title: 'Image OCR', desc: 'Detects the club badge, player name/number, league patches and other identifiers.', delay: 180 },
  { icon: 'file-text', title: 'Smart File Renaming', desc: 'Aligns file names to the store’s own naming convention.', delay: 0 },
  { icon: 'sparkles', title: 'AI-Generated Copy', desc: 'Writes alt text and SEO copy, then bulk-uploads images to Shopify.', delay: 90 },
  { icon: 'check', title: 'Draft Listings for Review', desc: 'Assembles image URLs, copy and shirt info into a bulk upload as draft listings, for human-in-the-loop verification before pricing and publishing.', delay: 180 },
];

const results = [
  { icon: 'clock', title: '267+ hrs/mo saved', desc: 'At 2,000 shirts a month — roughly two full-time employees.', delay: 0 },
  { icon: 'trending-up', title: '£48k+ saved per year', desc: 'At a £15/hr labour rate, for the same volume of work.', delay: 90 },
  { icon: 'target', title: 'Simpler growth', desc: 'The business can focus on products and marketing instead of processing hours.', delay: 180 },
  { icon: 'check', title: 'Fewer errors', desc: 'Pre-defined, computer-generated variables remove mistyped or incorrect facts.', delay: 0 },
];

const eyebrow = 'at-eyebrow';

export default function EcommerceAutomationCaseStudyPage() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="case-studies" theme="light" />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--at-cyprus)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/blob-scene-2.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: '152px 32px 72px', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
            <Link href={dcHref('Futureproofing Case Studies.dc.html')} style={{ color: 'var(--at-turquoise-light)', textDecoration: 'none' }}>Case Studies</Link> <Icon name="chevron-right" size={13} /> eCommerce Automation
          </span>
          <span style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 8, fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)', background: 'rgba(43,188,186,0.16)', padding: '5px 12px', borderRadius: 'var(--radius-pill)' }}>Futureproofing · Automation</span>
          <h1 style={{ margin: 0, fontSize: 46, lineHeight: 1.08, letterSpacing: '-0.025em', fontWeight: 800, color: '#fff', maxWidth: 760, textWrap: 'balance' }}>267 Hours a Month, Automated Away</h1>
          <p style={{ margin: 0, fontSize: 17.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', maxWidth: 620, textWrap: 'pretty' }}>An independent Shopify-based sports-jersey reseller serving fans and collectors of modern and vintage shirts.</p>
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

      {/* NARRATIVE */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '80px 32px 40px', display: 'flex', flexDirection: 'column', gap: 52 }}>
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

      {/* THE WORKFLOW, AUTOMATED */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '88px 32px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640, marginBottom: 40 }}>
            <span className={eyebrow}>The Pipeline</span>
            <h2 style={{ margin: 0, fontSize: 32, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>The Workflow, Automated</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>Six steps take a folder of raw photoshoot photos to review-ready draft listings — without a person touching the repetitive middle.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {workflow.map((w) => (
              <div key={w.title} data-reveal data-reveal-delay={w.delay} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 11 }}>
                <span style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name={w.icon} size={20} /></span>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--text-heading)' }}>{w.title}</h3>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--text-muted)', textWrap: 'pretty' }}>{w.desc}</p>
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
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Scaling Output Without Scaling Headcount?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>The Review is where we find the repetitive work automation can take off your team’s plate.</p>
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
