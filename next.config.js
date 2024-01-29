// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }
    return config;
  },
  env: {
    SENTRY_DSN: process.env.SENTRY_DSN,
  },
};
