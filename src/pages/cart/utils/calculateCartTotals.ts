import type { CartItemView, CartSellerView } from '../types/cart';

export const calculateCartTotals = (
  selectedItems: readonly CartItemView[],
  cartItems: readonly CartItemView[],
  sellers: readonly CartSellerView[],
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
  const sellerSummaries = sellers.map((seller) => {
    const sellerCartItems = cartItems.filter(
      ({ sellerId }) => sellerId === seller.id,
    );
    const sellerSelectedItems = selectedItems.filter(
      ({ sellerId }) => sellerId === seller.id,
    );
    const sellerSaleAmount = sellerSelectedItems.reduce(
      (sum, { price, quantity }) => sum + price * quantity,
      0,
    );
    const cartSellerSaleAmount = sellerCartItems.reduce(
      (sum, { price, quantity }) => sum + price * quantity,
      0,
    );
    const isSelected = sellerSelectedItems.length > 0;
    const shippingFee = isSelected ? seller.deliveryFee : 0;

    return {
      freeShippingRemaining: Math.max(
        seller.freeDeliveryThreshold - cartSellerSaleAmount,
        0,
      ),
      isSelected,
      sellerId: seller.id,
      shippingFee,
      totalPrice: sellerSaleAmount + shippingFee,
    };
  });
  const selectedSellerCount = sellerSummaries.filter(
    ({ isSelected }) => isSelected,
  ).length;
  const shippingFee = sellerSummaries.reduce(
    (sum, { shippingFee: sellerShippingFee }) => sum + sellerShippingFee,
    0,
  );

  return {
    discountAmount: itemAmount - saleAmount,
    itemAmount,
    saleAmount,
    sellerSummaries,
    selectedBookCount,
    selectedSellerCount,
    selectedTypeCount,
    shippingFee,
    totalPrice: saleAmount + shippingFee,
  };
};
