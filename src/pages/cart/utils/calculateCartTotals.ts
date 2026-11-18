interface CartItem {
  id: number;
  originalPrice: number;
  price: number;
  quantity: number;
  sellerId: number;
}

interface CartSeller {
  id: number;
  shippingFee: number;
}

export const calculateCartTotals = (
  selectedItems: readonly CartItem[],
  cartItems: readonly CartItem[],
  sellers: readonly CartSeller[],
  freeShippingThreshold: number,
) => {
  const selectedTypeCount = selectedItems.length;
  const selectedBookCount = selectedItems.reduce(
    (sum, { quantity }) => sum + quantity,
    0,
  );
  const itemAmount = selectedItems.reduce(
    (sum, { originalPrice, quantity }) => sum + originalPrice * quantity,
    0,
  );
  const saleAmount = selectedItems.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0,
  );
  const cartSaleAmount = cartItems.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0,
  );
  const selectedSellerIds = new Set(
    selectedItems.map(({ sellerId }) => sellerId),
  );
  const selectedSellerCount = selectedSellerIds.size;
  const shippingFee = sellers.reduce(
    (sum, { id, shippingFee: sellerShippingFee }) =>
      selectedSellerIds.has(id) ? sum + sellerShippingFee : sum,
    0,
  );

  return {
    discountAmount: itemAmount - saleAmount,
    freeShippingRemaining: Math.max(
      freeShippingThreshold - cartSaleAmount,
      0,
    ),
    itemAmount,
    saleAmount,
    selectedBookCount,
    selectedSellerCount,
    selectedTypeCount,
    shippingFee,
    totalPrice: saleAmount + shippingFee,
  };
};
