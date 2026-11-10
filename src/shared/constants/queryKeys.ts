export const cartKeys = {
  detail: (cartId: number) => ['cart', cartId] as const,
};

export const usedBookKeys = {
  list: () => ['usedBooks', 'list'] as const,
  detail: (salesPostId: number) =>
    ['usedBooks', 'detail', salesPostId] as const,
};
