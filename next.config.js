const { API_URL, HOST_IMAGE_URL, ANALYZE } = process.env;

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  env: {
    API_URL,
    HOST_IMAGE_URL,
  },
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
    localeDetection: false,
  },
  images: {
    loader: 'imgix',
    path: HOST_IMAGE_URL,
  },
});
