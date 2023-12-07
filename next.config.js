/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

const withNextIntl = require("next-intl/plugin")("./i18n.ts")

module.exports = withNextIntl(nextConfig)
