/** @type {import('next').NextConfig} */

module.exports = {
    webpack: (config, { isServer }) => {
    // For SVG support in the client-side
    if (!isServer) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
    }

    return config;
  },
}

const withImages = require('next-images');
module.exports = withImages();
