import type {
  FindBookSellersData,
  FindBookSellersParams,
} from '@apis/generated/dataContracts';
import { apiClient } from '@apis/kyClient';

export const getBookSellers = ({ bookId, priceSort }: FindBookSellersParams) =>
  apiClient
    .get(`v1/books/${bookId}/sellers`, { searchParams: { priceSort } })
    .json<FindBookSellersData>();
