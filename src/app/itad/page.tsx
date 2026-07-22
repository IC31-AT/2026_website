import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import ImageSlot from '@/components/ImageSlot';
import Icon from '@/components/Icon';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'ITAD',
  description:
    'IT Asset Disposal, done properly: collection, certified data destruction, and responsible resale or recycling — with the paperwork to prove it.',
};

const covers = [
  { icon: 'truck', title: 'Asset collection', desc: 'Scheduled, chain-of-custody collection from your studio — laptops, desktops, phones, servers and peripherals, logged item by item.', delay: 0 },
  { icon: 'shield-x', title: 'Certified data destruction', desc: 'Drives wiped to recognised standards or physically destroyed, with a certificate of destruction for every asset — your compliance evidence.', delay: 90 },
  { icon: 'recycle', title: 'Resale & recycling', desc: 'Kit with life left is refurbished and resold — offsetting your costs. The rest is responsibly recycled, never landfilled.', delay: 180 },
];

const steps = [
  { n: '01', title: 'Audit & quote', desc: 'You tell us what you have; we confirm what it’s worth and what disposal costs.', delay: 0 },
  { n: '02', title: 'Secure collection', desc: 'Tracked collection with a signed chain-of-custody record.', delay: 90 },
  { n: '03', title: 'Wipe or destroy', desc: 'Certified erasure or physical destruction, asset by asset.', delay: 180 },
  { n: '04', title: 'Certificate & rebate', desc: 'Destruction certificates, updated asset register, and resale value returned.', delay: 270 },
];

const eyebrow = 'at-eyebrow';

export default function ITADPage() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="it" theme="light" />

      {/* ================ HERO ================ */}
      <section style={{ background: 'linear-gradient(180deg, var(--at-grey) 0%, #ffffff 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '176px 32px 96px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 72, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12.5, fontWeight: 600, color: 'var(--text-muted)' }}>
              <Link href={ROUTES.itServices} style={{ color: 'var(--at-turquoise)', textDecoration: 'none' }}>IT Services</Link> <Icon name="chevron-right" size={13} /> ITAD
            </span>
            <h1 style={{ margin: 0, fontSize: 52, lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Old Kit Is a Data Risk in a Cupboard</h1>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 490, textWrap: 'pretty' }}>IT Asset Disposal, done properly: collection, certified data destruction, and responsible resale or recycling — with the paperwork to prove it.</p>
            <div style={{ display: 'flex', gap: 14, marginTop: 4 }}>
              <a href="#contact" data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 52, padding: '0 28px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>Arrange a Collection</a>
              <a href="#covers" data-hover="background: var(--surface-subtle); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 52, padding: '0 28px', background: 'transparent', color: 'var(--text-heading)', border: '2px solid var(--border-strong)', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>What&apos;s Covered</a>
            </div>
          </div>
          <ImageSlot placeholder="Photo — collected devices / secure handling" radius={6} style={{ width: '100%', height: 420, display: 'block' }} />
        </div>
      </section>

      {/* ================ WHAT ITAD COVERS ================ */}
      <section id="covers" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '104px 32px 96px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 560, marginBottom: 52 }}>
            <span className={eyebrow}>What ITAD Covers</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>From Your Cupboard to a Certificate</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {covers.map((c) => (
              <div key={c.title} data-reveal data-reveal-delay={c.delay} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name={c.icon} size={22} /></span>
                <h3 style={{ margin: 0, fontSize: 19, fontWeight: 600, color: 'var(--text-heading)' }}>{c.title}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================ TESTIMONIAL ================ */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '88px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 24 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
            <Icon name="quote" size={34} style={{ color: 'var(--at-turquoise)', opacity: 0.7 }} />
            <p style={{ margin: 0, fontSize: 24, lineHeight: 1.45, fontWeight: 600, color: 'var(--text-heading)', textWrap: 'pretty' }}>&quot;AgencyTech&apos;s asset collection solution aligns with Six&apos;s sustainability and B Corp values, providing cyber-secure asset handling, reducing landfill, and supporting community reuse.&quot;</p>
            <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>Dan Pritchard · Head of Production, Six Agency</span>
          </div>
        </div>
      </section>

      {/* ================ PROCESS ================ */}
      <section style={{ background: 'var(--at-cyprus)', position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/blob-scene-2.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '104px 32px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 560, marginBottom: 52 }}>
            <span className={eyebrow} style={{ color: 'var(--at-turquoise-light)' }}>The Process</span>
            <h2 style={{ margin: 0, fontSize: 36, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: '#fff' }}>Four Steps, Fully Documented</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {steps.map((s) => (
              <div key={s.n} data-reveal data-reveal-delay={s.delay} style={{ background: 'var(--at-cyprus-light)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-md)', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: 'var(--at-turquoise-light)', letterSpacing: '0.04em' }}>{s.n}</span>
                <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 600, color: '#fff' }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.68)', textWrap: 'pretty' }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <p data-reveal data-reveal-delay={200} style={{ margin: '44px 0 0', fontSize: 13.5, color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon name="file-check" size={16} style={{ color: 'var(--at-turquoise-light)' }} /> Every disposal ends with a data destruction certificate and an updated asset register — placeholder compliance copy, standards (e.g. WEEE, GDPR) to be confirmed.
          </p>
        </div>
      </section>

      {/* ================ FINAL CTA ================ */}
      <section id="contact" style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '100px 32px 108px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Got a Drawer Full of Old Laptops?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>Tell us roughly what you&apos;ve got and we&apos;ll arrange collection, destruction and the certificate — usually within the week.</p>
            <a href="mailto:hello@agencytech.co.uk" data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', marginTop: 6, transition: 'background 200ms ease, transform 200ms ease' }}>Arrange a Collection <Icon name="arrow-right" size={17} /></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
