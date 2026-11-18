import { skipToken, useQuery } from '@tanstack/react-query';

import { usedBookKeys } from '@constants/queryKeys';

import { getUsedBookDetail } from '../apis/getUsedBookDetail';

export const useUsedBookDetail = (salesPostId: number | undefined) =>
  useQuery({
    queryKey: usedBookKeys.detail(salesPostId ?? 0),
    queryFn:
      salesPostId === undefined
        ? skipToken
        : ({ signal }) => getUsedBookDetail(salesPostId, signal),
    retry: false,
  });
