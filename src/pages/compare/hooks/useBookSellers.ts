import { keepPreviousData, useQuery } from '@tanstack/react-query';

import type { FindBookSellersParams } from '@apis/generated/dataContracts';
import { usedBookKeys } from '@constants/queryKeys';

import { getBookSellers } from '../apis/getBookSellers';

export const useBookSellers = ({ bookId, priceSort }: FindBookSellersParams) =>
  useQuery({
    queryKey: usedBookKeys.sellers(bookId, priceSort),
    queryFn: () => getBookSellers({ bookId, priceSort }),
    placeholderData: keepPreviousData,
  });
