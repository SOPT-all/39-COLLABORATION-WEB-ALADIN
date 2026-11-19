import { useEffect, useMemo, useRef, useState } from 'react';

import type {
  CartItemResponse,
  CartReadResponse,
} from '@apis/generated/dataContracts';
import TabBar from '@components/TabBar';

import type { CartItemView, CartSellerView } from './types/cart';

import AccordionSeller from './components/AccordionSeller';
import CartBottomBar from './components/CartBottomBar';
import CartListItem from './components/CartListItem';
import CartPaymentSummary from './components/CartPaymentSummary';
import CartSelectionToolbar from './components/CartSelectionToolbar';
import SegmentCart from './components/SegmentCart';
import SummarySeller from './components/SummarySeller';
import { CART_ID } from './constants/cart';
import { useCart } from './hooks/useCart';
import { calculateCartTotals } from './utils/calculateCartTotals';

const CART_TABS = [
  { label: '장바구니', value: 'cart' },
  { label: '보관함', value: 'storage' },
  { label: '구매함', value: 'purchase' },
  { label: '오늘 본 상품', value: 'recent' },
] as const;

const EMPTY_SELLER_GROUPS: NonNullable<CartReadResponse['sellerGroups']> = [];
const DEFAULT_FREE_DELIVERY_THRESHOLD = 100000;

const BOOK_CONDITION_LABELS: Record<
  NonNullable<CartItemResponse['bookCondition']>,
  string
> = {
  EXCELLENT: '최상',
  FAIR: '중',
  GOOD: '상',
};

const CartPage = () => {
  const [selectedCartTab, setSelectedCartTab] = useState('cart');
  const [selectedIds, setSelectedIds] = useState<string[] | null>(null);
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const paymentSummaryRef = useRef<HTMLElement>(null);
  const { data: cartData, isError, isPending, refetch } = useCart(CART_ID);
  const sellerGroups = cartData?.sellerGroups ?? EMPTY_SELLER_GROUPS;

  const cartSellers = useMemo<CartSellerView[]>(
    () =>
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
            sellerGroup.freeDeliveryThreshold ??
            DEFAULT_FREE_DELIVERY_THRESHOLD,
          items,
        };
      }),
    [sellerGroups],
  );

  const cartItems = useMemo(
    () => cartSellers.flatMap(({ items }) => items),
    [cartSellers],
  );
  const isCartReady = !isPending && cartData !== undefined;

  const activeSelectedIds = useMemo(
    () => selectedIds ?? cartItems.map(({ id }) => id),
    [cartItems, selectedIds],
  );
  const selectedItems = useMemo(
    () => cartItems.filter(({ id }) => activeSelectedIds.includes(id)),
    [activeSelectedIds, cartItems],
  );
  const {
    discountAmount,
    itemAmount,
    selectedBookCount,
    selectedSellerCount,
    selectedTypeCount,
    sellerSummaries,
    shippingFee,
    totalPrice,
  } = useMemo(
    () => calculateCartTotals(selectedItems, cartItems, cartSellers),
    [cartItems, cartSellers, selectedItems],
  );
  const isAllSelected =
    cartItems.length > 0 && activeSelectedIds.length === cartItems.length;
  const deliveryCount = cartItems.length;
  const halfPriceCount = cartSellers.reduce(
    (count, { isCvsDelivery, items }) =>
      isCvsDelivery ? count + items.length : count,
    0,
  );

  useEffect(() => {
    if (!isCartReady) return;

    const paymentSummary = paymentSummaryRef.current;
    if (!paymentSummary) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsPaymentVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );

    observer.observe(paymentSummary);
    return () => observer.disconnect();
  }, [isCartReady]);

  const handleToggleItem = (id: string) => {
    setSelectedIds((currentIds) => {
      const selectedItemIds = currentIds ?? activeSelectedIds;

      return selectedItemIds.includes(id)
        ? selectedItemIds.filter((selectedId) => selectedId !== id)
        : [...selectedItemIds, id];
    });
  };

  const handleToggleSeller = (sellerId: string) => {
    const sellerItemIds =
      cartSellers
        .find((seller) => seller.id === sellerId)
        ?.items.map(({ id }) => id) ?? [];
    const isSellerSelected =
      sellerItemIds.length > 0 &&
      sellerItemIds.every((id) => activeSelectedIds.includes(id));

    setSelectedIds((currentIds) => {
      const selectedItemIds = currentIds ?? activeSelectedIds;

      if (isSellerSelected) {
        return selectedItemIds.filter((id) => !sellerItemIds.includes(id));
      }

      return [...new Set([...selectedItemIds, ...sellerItemIds])];
    });
  };

  const handleToggleAll = () => {
    setSelectedIds(isAllSelected ? [] : cartItems.map(({ id }) => id));
  };

  return (
    <section aria-label="장바구니" className="bg-gray-100">
      <div className="sticky top-[3.5rem] z-[9]">
        <TabBar
          items={CART_TABS}
          selectedValue={selectedCartTab}
          onValueChange={setSelectedCartTab}
        />

        <div className="flex flex-col gap-12 bg-white py-16">
          <div className="mx-12">
            <SegmentCart
              deliveryCount={deliveryCount}
              halfPriceCount={halfPriceCount}
            />
          </div>
          {isCartReady && (
            <CartSelectionToolbar
              isAllSelected={isAllSelected}
              selectedCount={selectedTypeCount}
              totalCount={cartItems.length}
              onMoveToKeep={() => undefined}
              onRemoveSelected={() => undefined}
              onSelectAll={handleToggleAll}
            />
          )}
        </div>
      </div>

      <div className="my-16">
        {isPending ? (
          <p
            role="status"
            className="bg-white px-16 py-24 text-body-14r text-gray-700"
          >
            장바구니를 불러오는 중입니다.
          </p>
        ) : isError && !cartData ? (
          <div
            role="alert"
            className="flex flex-col items-start gap-8 bg-white px-16 py-24 text-body-14r text-gray-700"
          >
            <p>장바구니를 불러오지 못했습니다.</p>
            <button
              type="button"
              className="underline"
              onClick={() => void refetch()}
            >
              다시 시도
            </button>
          </div>
        ) : cartItems.length === 0 ? (
          <p
            role="status"
            className="bg-white px-16 py-24 text-body-14r text-gray-700"
          >
            장바구니에 담긴 상품이 없습니다.
          </p>
        ) : (
          cartSellers.map((seller) => {
            const sellerSummary = sellerSummaries.find(
              ({ sellerId }) => sellerId === seller.id,
            );
            const isSellerSelected =
              seller.items.length > 0 &&
              seller.items.every(({ id }) => activeSelectedIds.includes(id));

            return (
              <div key={seller.id} className="mb-16 last:mb-0">
                <AccordionSeller
                  isCvsDelivery={seller.isCvsDelivery}
                  isSelected={isSellerSelected}
                  sellerName={seller.name}
                  onSelect={() => handleToggleSeller(seller.id)}
                >
                  {seller.items.map((item) => (
                    <CartListItem
                      key={item.id}
                      condition={item.condition}
                      discountRate={item.discountRate}
                      imageSrc={item.imageSrc}
                      isSelected={activeSelectedIds.includes(item.id)}
                      originalPrice={item.originalPrice}
                      price={item.price}
                      title={item.title}
                      onSelect={() => handleToggleItem(item.id)}
                    />
                  ))}
                  {sellerSummary && (
                    <SummarySeller
                      freeShippingRemaining={
                        sellerSummary.freeShippingRemaining
                      }
                      shippingFee={sellerSummary.shippingFee}
                      totalPrice={sellerSummary.totalPrice}
                    />
                  )}
                </AccordionSeller>
              </div>
            );
          })
        )}
      </div>

      {cartData && (
        <CartPaymentSummary
          ref={paymentSummaryRef}
          discountAmount={discountAmount}
          itemAmount={itemAmount}
          selectedBookCount={selectedBookCount}
          selectedSellerCount={selectedSellerCount}
          selectedTypeCount={selectedTypeCount}
          shippingFee={shippingFee}
          totalPrice={totalPrice}
        />
      )}

      {cartData && !isPaymentVisible && selectedBookCount > 0 && (
        <CartBottomBar
          selectedBookCount={selectedBookCount}
          selectedTypeCount={selectedTypeCount}
          totalPrice={totalPrice}
        />
      )}
    </section>
  );
};

export default CartPage;
