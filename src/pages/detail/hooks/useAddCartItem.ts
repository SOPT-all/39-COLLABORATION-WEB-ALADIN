import { useMutation, useQueryClient } from '@tanstack/react-query';

import { cartKeys } from '@constants/queryKeys';

import { addCartItem } from '../apis/addCartItem';

export const useAddCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addCartItem,
    onSuccess: (_data, { cartId }) =>
      queryClient.invalidateQueries({ queryKey: cartKeys.detail(cartId) }),
  });
};
