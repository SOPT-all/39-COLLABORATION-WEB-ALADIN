import { useQuery } from '@tanstack/react-query';

import { cartKeys } from '@constants/queryKeys';

import { getCart } from '../apis/getCart';

export const useCart = (cartId: number) =>
  useQuery({
    queryKey: cartKeys.detail(cartId),
    queryFn: ({ signal }) => getCart({ cartId }, signal),
  });
