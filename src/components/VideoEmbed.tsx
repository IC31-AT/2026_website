'use client';

import { useState } from 'react';
import Icon from './Icon';

/* Poster → native-video player for testimonial/marketing clips.

   Shows a poster image (or the brand cyprus panel if none) with a pulsing play
   button — matching the placeholder it replaces. On click it swaps to a native
   <video> streamed from its URL (e.g. a public Supabase Storage object via
   storageUrl(...)). Native <video> + a public bucket gives range-request seeking
   for free; heavier/long-form video can later move to Mux/Cloudflare Stream by
   swapping this component's internals, keeping the same props. */
export default function VideoEmbed({
  url,
  poster,
  label = 'Play video',
  radius = 'var(--radius-md)',
  minHeight = 340,
  style,
  className,
}: {
  url: string;
  poster?: string;
  label?: string;
  radius?: number | string;
  minHeight?: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  const frame: React.CSSProperties = {
    position: 'relative',
    minHeight,
    borderRadius: radius,
    overflow: 'hidden',
    background: 'var(--at-cyprus)',
    ...style,
  };

  if (playing) {
    return (
      <div className={className} style={frame}>
        <video
          src={url}
          poster={poster}
          controls
          autoPlay
          playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', background: '#000' }}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={className}
      aria-label={label}
      onClick={() => setPlaying(true)}
      data-hover="opacity: 0.94"
      style={{
        ...frame,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 0,
        border: 'none',
        cursor: 'pointer',
        color: '#fff',
        transition: 'opacity 200ms ease',
      }}
    >
      {poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
      <span
        style={{
          position: 'relative',
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: poster ? 'rgba(0,20,20,0.45)' : 'rgba(255,255,255,0.14)',
          border: '1px solid rgba(255,255,255,0.25)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--at-turquoise-light)',
          backdropFilter: poster ? 'blur(2px)' : undefined,
          animation: 'at-pulse 1.8s ease-in-out 900ms 2',
        }}
      >
        <Icon name="play" size={26} />
      </span>
    </button>
  );
}
