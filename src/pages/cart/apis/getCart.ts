import type {
  ReadCartData,
  ReadCartParams,
} from '@apis/generated/dataContracts';
import { apiClient } from '@apis/kyClient';

export const getCart = ({ cartId }: ReadCartParams) =>
  apiClient.get(`v1/carts/${cartId}`).json<ReadCartData>();
