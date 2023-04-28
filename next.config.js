/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    reactStrictMode: false,
    i18n: {
        locales: ["ru", "en"],
        defaultLocale: "ru",
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
};

module.exports = nextConfig;
