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
  },
};

export default nextConfig;
