const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: 'standalone',
  trailingSlash: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'tools/styles/base')],
    prependData: '@import "resources.scss";'
  },

  exportPathMap: async function (defaultPathMap) {
    return {
      ...defaultPathMap
    };
  },
  webpack: (config, options) => {
    // SVG
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};

module.exports = nextConfig;
