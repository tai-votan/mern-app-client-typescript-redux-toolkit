import request from '@/utils/request';
import { removeEmptyParams } from '@/utils/utils';

export async function getAllPost(params: any = {}) {
  return request('/api/stories/personalized', {
    params: removeEmptyParams({
      page: 1,
      ...params,
    }),
  });
}
