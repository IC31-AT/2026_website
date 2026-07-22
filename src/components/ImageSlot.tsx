import type { CSSProperties } from 'react';
import Icon from './Icon';

/* Placeholder for a photographic image slot from the design prototypes. The
   prototype filled these at runtime; here we render an on-brand placeholder box
   at the same dimensions, labelled with the intended subject. Pass real imagery
   later by swapping this for a next/image. */
export default function ImageSlot({
  placeholder = 'Photo',
  radius = 6,
  style,
  className,
}: {
  placeholder?: string;
  radius?: number;
  shape?: string;
  style?: CSSProperties;
  className?: string;
}) {
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
