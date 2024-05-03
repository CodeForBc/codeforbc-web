/** @type {import('next').NextConfig} */

const output = process.env.NODE_ENV === 'production' ? 'export' : 'standalone';
const distDir = process.env.NODE_ENV === 'production' ? undefined : '.next';

const nextConfig = {
  output: output,
  distDir: distDir,
  images: {
    unoptimized: true,
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

module.exports = nextConfig;
