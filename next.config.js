require('dotenv').config();

const { API_URL, HOST_IMAGE_URL } = process.env;

module.exports = {
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
};
