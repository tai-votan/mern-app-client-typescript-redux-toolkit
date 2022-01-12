import request from '@/utils/request';

export async function getAllPost(params: any = {}) {
  return request('/api/stories/personalized', {
    params: {
      page: 1,
      ...params,
    },
  });
}
