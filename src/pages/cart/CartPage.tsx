import { useEffect, useMemo, useRef, useState } from 'react';

import TabBar from '@components/TabBar';

import AccordionSeller from './components/AccordionSeller';
import CartBottomBar from './components/CartBottomBar';
import CartListItem from './components/CartListItem';
import CartPaymentSummary from './components/CartPaymentSummary';
import CartSelectionToolbar from './components/CartSelectionToolbar';
import SegmentCart from './components/SegmentCart';
import SummarySeller from './components/SummarySeller';
import {
  CART_ITEMS,
  FREE_SHIPPING_THRESHOLD,
  SELLERS,
} from './constants/mockCart';
import { calculateCartTotals } from './utils/calculateCartTotals';

const CART_TABS = [
  { label: '장바구니', value: 'cart' },
  { label: '보관함', value: 'storage' },
  { label: '구매함', value: 'purchase' },
  { label: '오늘 본 상품', value: 'recent' },
] as const;

const CartPage = () => {
  const [selectedCartTab, setSelectedCartTab] = useState('cart');
  const [selectedIds, setSelectedIds] = useState<number[]>(
    CART_ITEMS.map(({ id }) => id),
  );
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const paymentSummaryRef = useRef<HTMLElement>(null);

  const selectedItems = useMemo(
    () => CART_ITEMS.filter(({ id }) => selectedIds.includes(id)),
    [selectedIds],
  );
  const {
    discountAmount,
    freeShippingRemaining,
    itemAmount,
    selectedBookCount,
    selectedSellerCount,
    selectedTypeCount,
    shippingFee,
    totalPrice,
  } = useMemo(
    () =>
      calculateCartTotals(
        selectedItems,
        CART_ITEMS,
        SELLERS,
        FREE_SHIPPING_THRESHOLD,
      ),
    [selectedItems],
  );
  const isAllSelected = selectedIds.length === CART_ITEMS.length;

  useEffect(() => {
    const paymentSummary = paymentSummaryRef.current;
    if (!paymentSummary) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsPaymentVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );

    observer.observe(paymentSummary);
    return () => observer.disconnect();
  }, []);

  const handleToggleItem = (id: number) => {
    setSelectedIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((selectedId) => selectedId !== id)
        : [...currentIds, id],
    );
  };

  const handleToggleAll = () => {
    setSelectedIds(isAllSelected ? [] : CART_ITEMS.map(({ id }) => id));
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
            <SegmentCart deliveryCount={5} halfPriceCount={1} />
          </div>
          <CartSelectionToolbar
            isAllSelected={isAllSelected}
            selectedCount={selectedTypeCount}
            totalCount={CART_ITEMS.length}
            onMoveToKeep={() => undefined}
            onRemoveSelected={() => undefined}
            onSelectAll={handleToggleAll}
          />
        </div>
      </div>

      <div className="my-16">
        <AccordionSeller
          isSelected={isAllSelected}
          sellerName="우나야하"
          onSelect={handleToggleAll}
        >
          {CART_ITEMS.map((item) => (
            <CartListItem
              key={item.id}
              {...item}
              isSelected={selectedIds.includes(item.id)}
              onSelect={() => handleToggleItem(item.id)}
            />
          ))}
          <SummarySeller
            freeShippingRemaining={freeShippingRemaining}
            shippingFee={shippingFee}
            totalPrice={totalPrice}
          />
        </AccordionSeller>
      </div>

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

      {!isPaymentVisible && selectedBookCount > 0 && (
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
