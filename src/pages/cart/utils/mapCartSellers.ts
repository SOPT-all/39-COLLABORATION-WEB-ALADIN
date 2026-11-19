import type {
  CartItemResponse,
  CartReadResponse,
} from '@apis/generated/dataContracts';

import type { CartItemView, CartSellerView } from '../types/cart';

const DEFAULT_FREE_DELIVERY_THRESHOLD = 100000;

const BOOK_CONDITION_LABELS: Record<
  NonNullable<CartItemResponse['bookCondition']>,
  string
> = {
  EXCELLENT: '최상',
  FAIR: '중',
  GOOD: '상',
};

export const mapCartSellers = (
  sellerGroups: NonNullable<CartReadResponse['sellerGroups']>,
): CartSellerView[] =>
  sellerGroups.map((sellerGroup, sellerIndex) => {
    const sellerId =
      sellerGroup.sellerId === undefined
        ? `seller-${sellerIndex}`
        : String(sellerGroup.sellerId);

    const items: CartItemView[] = (sellerGroup.items ?? []).map(
      (item, itemIndex) => ({
        id:
          item.cartItemId === undefined
            ? `${sellerId}-item-${itemIndex}`
            : String(item.cartItemId),
        condition: item.bookCondition
          ? BOOK_CONDITION_LABELS[item.bookCondition]
          : '정보 없음',
        discountRate: item.discountRate ?? 0,
        imageSrc: item.bookImageUrl,
        originalPrice: item.originalPrice ?? 0,
        price: item.salePrice ?? 0,
        quantity: 1,
        sellerId,
        title: item.bookTitle || '제목 없음',
      }),
    );

    return {
      id: sellerId,
      name: sellerGroup.sellerName || '판매자 정보 없음',
      isCvsDelivery: sellerGroup.isCvsDelivery ?? false,
      deliveryFee: sellerGroup.deliveryFee ?? 0,
      freeDeliveryThreshold:
        sellerGroup.freeDeliveryThreshold ?? DEFAULT_FREE_DELIVERY_THRESHOLD,
      items,
    };
  });
