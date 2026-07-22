import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Icon from '@/components/Icon';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Get in Touch',
  description:
    'Contact AgencyTech — get in touch using the form or reach us directly by email or phone. Existing clients can raise a support ticket or use the client portal.',
};

const eyebrow = 'at-eyebrow';

export default function ContactPage() {
  return (
    <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav />

      {/* HERO */}
      <section style={{ position: 'relative', background: 'var(--at-white)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '176px 32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20 }}>
          <span className={eyebrow}>Get in Touch</span>
          <h1 style={{ margin: 0, fontSize: 52, lineHeight: 1.08, letterSpacing: '-0.025em', fontWeight: 800, color: 'var(--at-cyprus)', textWrap: 'balance' }}>Contact AgencyTech</h1>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 520, textWrap: 'pretty' }}>Please get in touch using the form, or reach us directly via email or phone.</p>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section style={{ position: 'relative', background: 'var(--at-white)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 32px 104px', display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 56, alignItems: 'start' }}>
          {/* Left — direct contact + existing clients */}
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: 'var(--at-cyprus)' }}>New enquiries</h2>
              <a href="mailto:hello@agencytech.co.uk" data-cursor data-hover="border-color: var(--at-turquoise)" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', textDecoration: 'none', transition: 'border-color 200ms ease' }}>
                <span style={{ flex: 'none', width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'var(--status-info-soft)', color: 'var(--at-turquoise)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="mails" size={20} /></span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.03em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Email us</span>
                  <span style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--at-cyprus)' }}>hello@agencytech.co.uk</span>
                </span>
              </a>
              <a href="mailto:hello@agencytech.co.uk?subject=Book%20an%20intro%20call" data-cursor data-hover="border-color: var(--at-turquoise)" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', textDecoration: 'none', transition: 'border-color 200ms ease' }}>
                <span style={{ flex: 'none', width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'var(--status-info-soft)', color: 'var(--at-turquoise)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="calendar-check" size={20} /></span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.03em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Prefer to talk?</span>
                  <span style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--at-cyprus)' }}>Book an intro call</span>
                </span>
              </a>
            </div>

            {/* Existing clients */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '24px', background: 'var(--at-cyprus)', borderRadius: 'var(--radius-md)', color: 'var(--text-on-dark)' }}>
              <span style={{ flex: 'none', width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'rgba(43,188,186,0.16)', color: 'var(--at-turquoise-light)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="headset" size={20} /></span>
              <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#fff' }}>Existing clients</h2>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.72)', textWrap: 'pretty' }}>Please create a support ticket or contact us using the support email or client portal.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 4 }}>
                <a href="mailto:support@agencytech.co.uk" data-hover="background: rgba(255,255,255,0.08)" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 40, padding: '0 16px', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-sm)', fontSize: 13.5, fontWeight: 600, color: '#fff', textDecoration: 'none', transition: 'background 200ms ease' }}><Icon name="mails" size={15} /> support@agencytech.co.uk</a>
                <a href="#" data-hover="background: var(--accent-hover)" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 40, padding: '0 16px', background: 'var(--accent)', borderRadius: 'var(--radius-sm)', fontSize: 13.5, fontWeight: 700, color: '#fff', textDecoration: 'none', transition: 'background 200ms ease' }}><Icon name="arrow-right" size={15} /> Client portal</a>
              </div>
            </div>
          </div>

          {/* Right — form card */}
          <div data-reveal data-reveal-delay={90} style={{ padding: '36px 36px 40px', background: 'var(--at-white)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)' }}>
            <h2 style={{ margin: '0 0 6px', fontSize: 22, fontWeight: 700, color: 'var(--at-cyprus)' }}>Send us a message</h2>
            <p style={{ margin: '0 0 24px', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-muted)' }}>Tell us a little about your agency and we&apos;ll get back to you shortly.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
