/** @type {import('next').NextConfig} */

const basePath = process.env.NODE_ENV === 'production' ? '/openbc-web' : '';
const output = process.env.NODE_ENV === 'production' ? 'export' : 'standalone';
const distDir = process.env.NODE_ENV === 'production' ? 'dist' : '.next';

const nextConfig = {
  basePath: basePath,
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
