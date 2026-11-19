import type { FindSalesPostDetailData } from '@apis/generated/dataContracts';
import { apiClient } from '@apis/kyClient';

export const getUsedBookDetail = async (
  salesPostId: number,
  signal: AbortSignal,
) => {
  const { data } = await apiClient
    .get(`v1/used-book-sales-posts/${salesPostId}`, { signal })
    .json<FindSalesPostDetailData>();

  if (!data) {
    throw new Error('중고 상품 상세 정보가 비어 있습니다.');
  }

  return data;
};
