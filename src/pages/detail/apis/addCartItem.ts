import type {
  AddCartItemData,
  AddCartItemParams,
  CartItemCreateRequest,
} from '@apis/generated/dataContracts';
import { apiClient } from '@apis/kyClient';

export type AddCartItemRequest = AddCartItemParams & CartItemCreateRequest;

export const addCartItem = ({
  cartId,
  usedBookSalesPostId,
}: AddCartItemRequest) =>
  apiClient
    .post(`v1/carts/${cartId}/items`, { json: { usedBookSalesPostId } })
    .json<AddCartItemData>();
