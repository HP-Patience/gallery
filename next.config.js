/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['img.2am.top'],
  },
  // 确保动态路由的 chunk 文件名正确生成
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.filename = 'static/chunks/[name]-[contenthash].js';
      config.output.chunkFilename = 'static/chunks/[name]-[contenthash].js';
    }
    return config;
  },
}

module.exports = nextConfig
