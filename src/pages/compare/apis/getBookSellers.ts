import type {
  FindBookSellersData,
  FindBookSellersParams,
} from '@apis/generated/dataContracts';
import { apiClient } from '@apis/kyClient';

export type GetBookSellersParams = Pick<
  FindBookSellersParams,
  'bookId' | 'priceSort'
>;

export const getBookSellers = (
  { bookId, priceSort }: GetBookSellersParams,
  signal?: AbortSignal,
) =>
  apiClient
    .get(`v1/books/${bookId}/sellers`, { searchParams: { priceSort }, signal })
    .json<FindBookSellersData>();
