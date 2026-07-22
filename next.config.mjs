/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Lint is run separately; don't fail production builds on lint config/rules.
    ignoreDuringBuilds: true,
  },
  images: {
    // Brand PNG/SVG assets are served straight from /public; no remote loaders needed.
    unoptimized: true,
  },
};

export default nextConfig;
