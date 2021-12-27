const { API_URL, HOST_IMAGE_URL, ANALYZE } = process.env;
const { i18n } = require('./next-i18next.config');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  env: {
    API_URL,
    HOST_IMAGE_URL,
  },
  i18n,
  images: {
    loader: 'imgix',
    path: HOST_IMAGE_URL,
  },
});
