const { API_URL, HOST_IMAGE_URL, ANALYZE } = process.env;
import { i18n } from './next-i18next.config';
import withBundleAnalyzer from '@next/bundle-analyzer';

withBundleAnalyzer({
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
