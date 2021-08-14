import request from '@/utils/request';

export async function getLatestArticle(params: any = {}) {
  const { isServer = false, ...rest } = params;
  return request('/api/v2/latest-article', {
    params: {
      language: 'VN',
      page: 1,
      isIgnoreFeatureArticle: true,
      ...rest,
    },
    isServer,
  });
}
