// Allow next/image to optimise photography served from the Supabase Storage
// public CDN (bucket paths like /storage/v1/object/public/media/...). Host is
// derived from the configured project URL so it tracks env changes.
const supabaseHost = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname
  : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Lint is run separately; don't fail production builds on lint config/rules.
    ignoreDuringBuilds: true,
  },
  images: {
    // Photography goes through Next's optimiser (resize + WebP/AVIF) on Vercel.
    // Brand logos/blobs stay as raw <img> and bypass this regardless.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: supabaseHost
      ? [{ protocol: 'https', hostname: supabaseHost, pathname: '/storage/v1/object/public/**' }]
      : [],
  },
};

export default nextConfig;
