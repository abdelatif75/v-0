/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["firebasestorage.googleapis.com", "lh3.googleusercontent.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false,
        },
      }
    }
    config.module = {
      ...config.module,
      exprContextCritical: false,
    }
    return config
  },
}

const withNextIntl = require("next-intl/plugin")("./i18n.ts")

module.exports = withNextIntl(nextConfig)
