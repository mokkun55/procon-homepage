import type { NextConfig } from 'next'

const path = require('path')

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    turbo: {}, // Turbopack を明示的に有効化
  },
}

export default nextConfig
