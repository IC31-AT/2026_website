import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import CaseStudiesExplorer, { type CaseCategory, type CaseDef } from '@/components/CaseStudiesExplorer';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Icon from '@/components/Icon';
import { testimonials } from '@/lib/testimonials';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    "Every engagement starts with an honest look at what wasn't working. Here's what happened next — across IT Services and the Futureproofing Program.",
};

const cases: CaseDef[] = [
  { tag: 'Futureproofing', metric: '2.5', suffix: 'wks', label: 'kickoff to a board-ready 12-month roadmap', client: 'PointZeroGroup · employer comms group', title: 'Understanding What Held PointZeroGroup Back', summary: 'A Phase 1 Futureproofing Audit across three merged agencies — benchmarked on the UWE framework — delivered a sequenced 12-month roadmap in two and a half weeks.', href: 'Case Study PointZeroGroup.dc.html', featured: true },
  { tag: 'Futureproofing', metric: '86', suffix: '%', label: 'of the team already using AI, actively', client: 'SquareEye · legal-sector web agency', title: 'Cutting Through the Noise, Getting Aligned', summary: 'Already ahead on AI but uncoordinated. A four-week audit joined it up — one managed platform, a clear information architecture, and a shared roadmap.', href: 'Case Study SquareEye.dc.html', featured: true },
  { tag: 'IT Services', metric: '7', suffix: 'min', label: 'average ticket response time', client: 'Creative agency · 50 people, Bristol', title: 'A Phased Cybersecurity Overhaul', summary: 'Enforced 2FA, phishing simulations, company-wide device protection and a central password manager — plus training that made it stick.', href: '#' },
  { tag: 'IT Services', metric: '56', suffix: '%', label: 'Microsoft Secure Score improvement', client: 'Charity · safeguarding data', title: 'A Microsoft 365 Tenant, Secured Properly', summary: 'MFA enforced across every account, dormant and improperly offboarded users cleaned out, and licensing right-sized for non-profit compliance.', href: '#' },
  { tag: 'Futureproofing', metric: '4', suffix: 'hrs/wk', label: 'reclaimed per person, company-wide', client: 'Design & marketing agency · 60+ staff', title: 'AI, From Experimentation to Capability', summary: 'A governed, company-wide ChatGPT rollout — training, custom GPTs and AI-ready file structure — turning random individual use into a repeatable team capability.', href: '#' },
  { tag: 'IT Services', metric: '0', suffix: '', label: 'components sent to landfill', client: 'Six Agency · B-Corp, creative', title: 'An ITAD Clear-Out Aligned to B-Corp Values', summary: 'On-site audit, certified data wipes and a resale rebate — retired Apple kit turned back into capital and studio space, with nothing sent to landfill.', href: '#' },
  { tag: 'Futureproofing', metric: '16', suffix: 'hrs/wk', label: 'of manual data entry removed', client: 'Content agency · 60+ staff', title: 'A Live Database That Maintains Itself', summary: 'Custom automation scraping 1,400+ listings across 32 sources into one accurate, always-current database the whole team relies on.', href: '#' },
  { tag: 'Futureproofing', metric: '34', suffix: '%', label: 'increase in average monthly leads', client: 'Device repair company', title: 'A Technical Overhaul Built to Scale', summary: 'A new website, an AI-driven leads funnel with automated booking, and an internal knowledge base — with 2.5 hours reclaimed per person each week.', href: '#' },
  { tag: 'IT Services', metric: 'Top 50', suffix: '', label: 'UK university — new student service', client: 'Major UK university', title: 'A Hardship Device Scheme, Built End-to-End', summary: 'Launched and validated a service they couldn’t resource in-house — a co-designed framework now being embedded in a new manufacturer tender.', href: '#' },
  { tag: 'Futureproofing', metric: '£48k', suffix: '+', label: 'labour cost saved per year', client: 'Shopify sports-jersey reseller', title: '267 Hours a Month, Automated Away', summary: 'A human-in-the-loop pipeline that ingests, tags, renames, writes copy and drafts listings — scaling output without scaling headcount.', href: '#' },
];

function toCategory(raw?: string | string[]): CaseCategory {
  const v = Array.isArray(raw) ? raw[0] : raw;
  if (v === 'it' || v === 'it-services') return 'it';
  if (v === 'futureproofing' || v === 'fp') return 'futureproofing';
  return 'all';
}

export default async function CaseStudiesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string | string[] }>;
}) {
  const { category } = await searchParams;
  const initialCategory = toCategory(category);

  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="case-studies" theme="light" />

      <CaseStudiesExplorer cases={cases} initialCategory={initialCategory} />

      {/* MORE CLIENT QUOTES */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px 104px' }}>
          <TestimonialsCarousel items={testimonials} eyebrow="More From Our Clients" heading="Trusted Across Agencies, Charities and Universities" cardBg="#fff" />
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '100px 32px 108px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Want Results Like These?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>Every one of these started with a short call and an honest look at what wasn't working.</p>
            <a href="mailto:hello@agencytech.co.uk" data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', marginTop: 6, transition: 'background 200ms ease, transform 200ms ease' }}>Book a Call <Icon name="arrow-right" size={17} /></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
