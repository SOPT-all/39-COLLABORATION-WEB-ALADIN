import type {
  CartReadResponse,
  ReadCartData,
  ReadCartParams,
} from '@apis/generated/dataContracts';
import { apiClient } from '@apis/kyClient';

export const getCart = async (
  { cartId }: ReadCartParams,
  signal: AbortSignal,
): Promise<CartReadResponse> => {
  const { data } = await apiClient
    .get(`v1/carts/${cartId}`, { signal })
    .json<ReadCartData>();

  if (!data) {
    throw new Error('장바구니 응답 데이터가 비어 있습니다.');
  }

  return data;
};
