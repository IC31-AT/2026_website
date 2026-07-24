'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import BrandArrow from './BrandArrow';
import { ROUTES } from '@/lib/routes';

/* Persistent floating "Book a call" bar, pinned bottom-right on every page.
   On-brand Cyprus pill with a staff-member avatar (placeholder for Casey —
   swap the inner circle for a next/image when the real photo is ready).
   Hidden on the contact / booking pages where the primary CTA already lives. */

const HIDE_ON: string[] = [ROUTES.contact, ROUTES.bookTheReview];

export default function BookCallBar() {
  const pathname = usePathname();
  if (pathname && HIDE_ON.some((p) => pathname === p || pathname.startsWith(p + '/'))) {
    return null;
  }

  return (
    <Link
      href={ROUTES.contact}
      aria-label="Book a call with AgencyTech"
      className="at-bookbar"
      data-hover="background: var(--at-cyprus-light); box-shadow: 0 18px 42px rgba(0,43,43,0.30)"
      style={{
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: 'clamp(16px, 3vw, 28px)',
        zIndex: 80,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 14,
        padding: '9px 9px 9px 22px',
        background: 'var(--at-cyprus)',
        border: '1px solid var(--at-cyprus-light)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-lg)',
        textDecoration: 'none',
        animation: 'at-bookbar-in 520ms cubic-bezier(0.16,1,0.3,1) 400ms both',
        transition: 'background 200ms ease, box-shadow 220ms ease',
      }}
    >
      <span className="at-bookbar-copy" style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <span
          className="at-bookbar-kicker"
          style={{
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--at-turquoise-light)',
          }}
        >
          Ready to talk?
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 15, fontWeight: 700, color: '#fff' }}>
          Book a call <BrandArrow variant="light" size={14} />
        </span>
      </span>

      {/* Avatar — placeholder for Casey. Replace the inner content with a
          <next/image> (rounded, object-fit cover) when the photo is ready. */}
      <span
        className="at-bookbar-avatar"
        aria-hidden
        style={{
          position: 'relative',
          flex: 'none',
          width: 46,
          height: 46,
          borderRadius: 'var(--radius-pill)',
          overflow: 'hidden',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(150deg, var(--at-turquoise) 0%, var(--at-turquoise-light) 100%)',
          border: '2px solid rgba(255,255,255,0.9)',
          color: '#fff',
        }}
      >
        <Icon name="user-check" size={22} color="#fff" strokeWidth={1.9} />
      </span>

      {/* Available dot */}
      <span
        className="at-bookbar-status"
        aria-hidden
        style={{
          position: 'absolute',
          right: 11,
          bottom: 9,
          width: 12,
          height: 12,
          borderRadius: 'var(--radius-pill)',
          background: '#3ad07a',
          border: '2px solid var(--at-cyprus)',
        }}
      />
    </Link>
  );
}
