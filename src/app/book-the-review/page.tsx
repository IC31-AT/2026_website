'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Icon from '@/components/Icon';
import BrandArrow from '@/components/BrandArrow';
import { ROUTES } from '@/lib/routes';

const deliverables = [
  'A prioritised 12-month roadmap',
  'Full tools audit',
  'AI readiness report',
  'Opportunity map',
  'Executive presentation',
  'AI governance & policy framework',
];

const eyebrow = 'at-eyebrow';

export default function BookTheReviewPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');

  const trimmedName = name.trim();
  const nameSuffix = trimmedName ? ', ' + trimmedName.split(' ')[0] : '';

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-grey)', minHeight: '100vh' }}>
      <style>{`
        .at-review-field::placeholder { color: var(--at-faint); }
        .at-review-field:focus {
          border-color: var(--at-turquoise);
          box-shadow: 0 0 0 3px rgba(6,154,152,0.16);
          background: #fff;
        }
      `}</style>
      <SiteNav active="fp" theme="light" />

      <section style={{ background: 'var(--at-grey)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '148px 32px 100px', display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 60, alignItems: 'start' }}>

          {/* LEFT — reassurance */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, position: 'sticky', top: 108 }}>
            <Link href={ROUTES.futureproofing} data-hover="color: var(--at-turquoise)" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13.5, fontWeight: 700, color: 'var(--text-muted)', textDecoration: 'none' }}><Icon name="arrow-left" size={15} />Back to Futureproofing</Link>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span className={eyebrow}>The Review</span>
              <h1 style={{ margin: 0, fontSize: 40, lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Know Exactly Where You Stand. In Writing, in Five Weeks.</h1>
              <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>Tell us a little about your business and we&apos;ll be in touch to book it in. No pitch deck, no obligation — just a straight conversation about where you are and what The Review would cover.</p>
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-faint)' }}>What you walk away with</span>
              {deliverables.map((d) => (
                <span key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: 11, fontSize: 14.5, lineHeight: 1.45, color: 'var(--text-body)' }}><Icon name="check" size={16} style={{ color: 'var(--at-turquoise)', flex: 'none', marginTop: 2 }} />{d}</span>
              ))}
              <div style={{ height: 1, background: 'var(--border-default)', margin: '2px 0' }} />
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-heading)' }}>From £2,500</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-muted)' }}>+ VAT · typically 4–5 weeks</span>
              </div>
            </div>
          </div>

          {/* RIGHT — form / confirmation */}
          <div style={{ background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', padding: '40px 40px 44px' }}>
            {submitted && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 18, padding: '24px 0' }}>
                <span style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name="check" size={28} /></span>
                <h2 style={{ margin: 0, fontSize: 28, lineHeight: 1.15, fontWeight: 700, color: 'var(--text-heading)' }}>Thanks{nameSuffix} — that&apos;s with us.</h2>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--text-muted)' }}>We&apos;ll reply within one working day to find a time. If it&apos;s urgent, email us directly at <a href="mailto:hello@agencytech.co.uk" style={{ color: 'var(--at-turquoise)', fontWeight: 600, textDecoration: 'none' }}>hello@agencytech.co.uk</a>.</p>
                <Link href={ROUTES.futureproofing} style={{ marginTop: 6, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14.5, fontWeight: 700, color: 'var(--at-turquoise)', textDecoration: 'none' }}>Back to Futureproofing <BrandArrow variant="dark" size={14} /></Link>
              </div>
            )}
            {!submitted && (
              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-heading)' }}>Your name</span>
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Smith" className="at-review-field" style={{ height: 46, padding: '0 14px', fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--text-heading)', background: 'var(--at-grey)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-heading)' }}>Work email</span>
                    <input type="email" required placeholder="jane@agency.co.uk" className="at-review-field" style={{ height: 46, padding: '0 14px', fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--text-heading)', background: 'var(--at-grey)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                  </label>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-heading)' }}>Company</span>
                    <input type="text" placeholder="Agency name" className="at-review-field" style={{ height: 46, padding: '0 14px', fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--text-heading)', background: 'var(--at-grey)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-heading)' }}>Team size</span>
                    <select className="at-review-field" style={{ height: 46, padding: '0 12px', fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--text-heading)', background: 'var(--at-grey)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', outline: 'none', appearance: 'none' }}>
                      <option>1–10</option>
                      <option>11–25</option>
                      <option>26–50</option>
                      <option>51–100</option>
                      <option>100+</option>
                    </select>
                  </label>
                </div>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-heading)' }}>Where would you say you&apos;re starting from?</span>
                  <select className="at-review-field" style={{ height: 46, padding: '0 12px', fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--text-heading)', background: 'var(--at-grey)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', outline: 'none', appearance: 'none' }}>
                    <option>Not sure yet — that&apos;s fine</option>
                    <option>Experimenting — free tools, no structure yet</option>
                    <option>Consolidating — processes and some automation</option>
                    <option>Accelerating — custom systems in place</option>
                    <option>Ascending — building AI-powered services to sell</option>
                  </select>
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-heading)' }}>What&apos;s prompting this? <span style={{ fontWeight: 500, color: 'var(--at-faint)' }}>(optional)</span></span>
                  <textarea rows={4} placeholder="A sentence or two on what's on your mind — no need for detail." className="at-review-field" style={{ padding: '12px 14px', fontFamily: 'var(--font-sans)', fontSize: 14.5, lineHeight: 1.5, color: 'var(--text-heading)', background: 'var(--at-grey)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', outline: 'none', resize: 'vertical' }} />
                </label>
                <button type="submit" data-hover="background: var(--accent-hover); transform: scale(1.01)" style={{ height: 52, marginTop: 4, background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, transition: 'background 200ms ease, transform 200ms ease' }}>Request The Review <BrandArrow variant="light" size={15} /></button>
                <p style={{ margin: 0, fontSize: 12, lineHeight: 1.5, color: 'var(--at-faint)', textAlign: 'center' }}>We&apos;ll only use these details to get back to you about The Review.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
