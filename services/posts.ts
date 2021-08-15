import request from '@/utils/request';

export async function getAllPost(params: any = {}) {
  const { isServer = false, ...rest } = params;
  return request('/api/stories/personalized', {
    params: {
      page: 1,
      ...rest,
    },
    isServer,
  });
}
