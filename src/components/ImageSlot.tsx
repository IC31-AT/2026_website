import type { CSSProperties } from 'react';
import Image from 'next/image';
import Icon from './Icon';

/* Photographic image slot from the design prototypes.

   - No `src`: renders an on-brand placeholder box at the intended dimensions,
     labelled with the subject (unchanged from the prototype behaviour).
   - With `src`: renders the real photo via next/image (auto-optimised — resize +
     WebP/AVIF — on Vercel), filling the same box with object-fit: cover so the
     layout is identical to the placeholder it replaces.

   To drop in real imagery: add `src="/assets/photos/<name>"` (and ideally `alt`).
   Set `priority` on above-the-fold hero images only. */
export default function ImageSlot({
  placeholder = 'Photo',
  src,
  alt,
  sizes = '(max-width: 900px) 100vw, 600px',
  priority = false,
  radius = 6,
  style,
  className,
}: {
  placeholder?: string;
  src?: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  radius?: number;
  shape?: string;
  style?: CSSProperties;
  className?: string;
}) {
  if (src) {
    return (
      <div
        className={className}
        style={{ position: 'relative', overflow: 'hidden', borderRadius: radius, ...style }}
      >
        <Image
          src={src}
          alt={alt ?? placeholder}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: 'cover' }}
        />
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 24,
        textAlign: 'center',
        background: 'var(--surface-subtle)',
        border: '1px solid var(--border-strong)',
        borderRadius: radius,
        color: 'var(--at-faint)',
        overflow: 'hidden',
        ...style,
      }}
    >
      <Icon name="image" size={26} strokeWidth={1.6} aria-hidden />
      <span style={{ fontSize: 12.5, fontWeight: 600, lineHeight: 1.5, maxWidth: 280 }}>{placeholder}</span>
    </div>
  );
}
