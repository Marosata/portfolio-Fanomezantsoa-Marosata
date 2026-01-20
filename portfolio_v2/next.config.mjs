/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en"
  }
};

export default nextConfig;


