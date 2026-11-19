import type { FindBookSellersParams } from '@apis/generated/dataContracts';

export const bookKeys = {
  onlineUsed: () => ['books', 'onlineUsed'] as const,
};

export const cartKeys = {
  detail: (cartId: number) => ['cart', cartId] as const,
};

export const usedBookKeys = {
  list: () => ['usedBooks', 'list'] as const,
  sellers: (bookId: number, priceSort: FindBookSellersParams['priceSort']) =>
    ['usedBooks', 'sellers', bookId, priceSort] as const,
  detail: (salesPostId: number) =>
    ['usedBooks', 'detail', salesPostId] as const,
};
