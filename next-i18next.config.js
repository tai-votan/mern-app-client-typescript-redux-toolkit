const VIETNAMESE = "vi";
const VIETNAMESE_LOCALES = "vi-VN";
const VIETNAMESE_CURRENCY = "VND";

const ENGLISH = "en";
const ENGLISH_LOCALES = "en-US";
const ENGLISH_CURRENCY = "USD";

module.exports = {
  i18n: {
    locales: [VIETNAMESE, ENGLISH],
    defaultLocale: ENGLISH,
    localeDetection: false,
  },
  currency: {
    [VIETNAMESE]: {
      locales: VIETNAMESE_LOCALES,
      currency: VIETNAMESE_CURRENCY,
    },
    [ENGLISH]: {
      locales: ENGLISH_LOCALES,
      currency: ENGLISH_CURRENCY,
    },
  },
};
