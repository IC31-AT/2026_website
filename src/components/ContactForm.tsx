'use client';

import { useState } from 'react';
import Icon from './Icon';
import BrandArrow from './BrandArrow';

/* Get-in-touch form. The live site has no backend of its own — the brief is
   simply "a form that gets emailed to us" — so on submit we compose a mailto:
   to hello@agencytech.co.uk pre-filled with the enquiry and hand off to the
   visitor's mail client. Swap this handler for a POST to an API route/service
   (e.g. Resend, Formspree) when a backend is wired up. */

const fieldWrap = { display: 'flex', flexDirection: 'column', gap: 7 } as const;
const labelStyle = { fontSize: 13, fontWeight: 600, color: 'var(--at-cyprus)' } as const;
const controlStyle = {
  height: 48, padding: '0 14px', fontSize: 15, fontFamily: 'inherit', color: 'var(--text-body)',
  background: 'var(--at-white)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-sm)',
  outline: 'none', width: '100%',
} as const;
const req = <span style={{ color: 'var(--at-red)' }}> *</span>;

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const g = (k: string) => (f.get(k) as string) || '';
    const name = `${g('firstName')} ${g('lastName')}`.trim();
    const body = [
      `Name: ${name}`,
      `Business: ${g('business')}`,
      `Work email: ${g('email')}`,
      `Phone: ${g('phone') || '—'}`,
      '',
      'How can we help?',
      g('message'),
    ].join('\n');
    const subject = `New enquiry from ${name || 'website'}${g('business') ? ` (${g('business')})` : ''}`;
    window.location.href = `mailto:hello@agencytech.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 16, padding: '48px 32px' }}>
        <span style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--status-success-soft)', color: 'var(--at-green-shade)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="check" size={26} /></span>
        <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: 'var(--at-cyprus)' }}>Almost there</h3>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 360 }}>Your email client should have opened with your message ready to send. If it didn&apos;t, email us directly at <a href="mailto:hello@agencytech.co.uk" style={{ color: 'var(--at-turquoise)', fontWeight: 600 }}>hello@agencytech.co.uk</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        <div style={fieldWrap}>
          <label htmlFor="firstName" style={labelStyle}>First name{req}</label>
          <input id="firstName" name="firstName" required autoComplete="given-name" style={controlStyle} />
        </div>
        <div style={fieldWrap}>
          <label htmlFor="lastName" style={labelStyle}>Last name{req}</label>
          <input id="lastName" name="lastName" required autoComplete="family-name" style={controlStyle} />
        </div>
      </div>

      <div style={fieldWrap}>
        <label htmlFor="business" style={labelStyle}>Business name{req}</label>
        <input id="business" name="business" required autoComplete="organization" style={controlStyle} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        <div style={fieldWrap}>
          <label htmlFor="email" style={labelStyle}>Work email{req}</label>
          <input id="email" name="email" type="email" required autoComplete="email" style={controlStyle} />
        </div>
        <div style={fieldWrap}>
          <label htmlFor="phone" style={labelStyle}>Phone number</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" style={controlStyle} />
        </div>
      </div>

      <div style={fieldWrap}>
        <label htmlFor="message" style={labelStyle}>How can we help?{req}</label>
        <textarea id="message" name="message" required rows={5} style={{ ...controlStyle, height: 'auto', padding: '12px 14px', lineHeight: 1.55, resize: 'vertical' }} />
      </div>

      <button type="submit" data-hover="background: var(--accent-hover); transform: scale(1.01)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 52, marginTop: 4, background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, fontFamily: 'inherit', cursor: 'pointer', transition: 'background 200ms ease, transform 200ms ease' }}>
        Send message <BrandArrow variant="light" size={15} />
      </button>
    </form>
  );
}
