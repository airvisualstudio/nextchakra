/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  distDir: 'build',
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}
