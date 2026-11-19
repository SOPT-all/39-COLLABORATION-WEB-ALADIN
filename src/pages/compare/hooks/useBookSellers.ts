import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { usedBookKeys } from '@constants/queryKeys';

import {
  getBookSellers,
  type GetBookSellersParams,
} from '../apis/getBookSellers';

export const useBookSellers = ({ bookId, priceSort }: GetBookSellersParams) =>
  useQuery({
    queryKey: usedBookKeys.sellers(bookId, priceSort),
    queryFn: ({ signal }) => getBookSellers({ bookId, priceSort }, signal),
    placeholderData: keepPreviousData,
  });
