import { useEffect, useMemo, useRef, useState } from 'react';

import sonyeonCover from '@assets/images/books/thumbnail-01.webp';
import iliasCover from '@assets/images/books/thumbnail-03.webp';
import TabBar from '@components/TabBar';

import AccordionSeller from './components/AccordionSeller';
import CartBottomBar from './components/CartBottomBar';
import CartListItem from './components/CartListItem';
import CartPaymentSummary from './components/CartPaymentSummary';
import CartSelectionToolbar from './components/CartSelectionToolbar';
import SegmentCart from './components/SegmentCart';
import SummarySeller from './components/SummarySeller';

const CART_TABS = [
  { label: '장바구니', value: 'cart' },
  { label: '보관함', value: 'storage' },
  { label: '구매함', value: 'purchase' },
  { label: '오늘 본 상품', value: 'recent' },
] as const;

const INITIAL_CART_ITEMS = [
  {
    condition: '중',
    discountRate: 64,
    id: 1,
    imageSrc: sonyeonCover,
    originalPrice: 15000,
    price: 5400,
    title: '소년이 온다',
  },
  {
    condition: '최상',
    discountRate: 45,
    id: 2,
    imageSrc: iliasCover,
    originalPrice: 33000,
    price: 18000,
    title: '일리아스',
  },
] as const;

const FREE_SHIPPING_THRESHOLD = 100000;
const SHIPPING_FEE = 3500;

const CartPage = () => {
  const [selectedCartTab, setSelectedCartTab] = useState('cart');
  const [cartItems, setCartItems] = useState([...INITIAL_CART_ITEMS]);
  const [selectedIds, setSelectedIds] = useState<number[]>(
    INITIAL_CART_ITEMS.map(({ id }) => id),
  );
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const paymentSummaryRef = useRef<HTMLElement>(null);

  const selectedItems = useMemo(
    () => cartItems.filter(({ id }) => selectedIds.includes(id)),
    [cartItems, selectedIds],
  );

  const selectedTypeCount = selectedItems.length;
  const selectedBookCount = selectedItems.length;
  const itemAmount = selectedItems.reduce(
    (sum, { originalPrice }) => sum + originalPrice,
    0,
  );
  const saleAmount = selectedItems.reduce((sum, { price }) => sum + price, 0);
  const discountAmount = itemAmount - saleAmount;
  const shippingFee = selectedItems.length > 0 ? SHIPPING_FEE : 0;
  const totalPrice = saleAmount + shippingFee;
  const freeShippingRemaining = Math.max(
    FREE_SHIPPING_THRESHOLD - saleAmount,
    0,
  );
  const isAllSelected =
    cartItems.length > 0 && selectedIds.length === cartItems.length;

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

  const toggleItem = (id: number) => {
    setSelectedIds((current) =>
      current.includes(id)
        ? current.filter((selectedId) => selectedId !== id)
        : [...current, id],
    );
  };

  const toggleAll = () => {
    setSelectedIds(isAllSelected ? [] : cartItems.map(({ id }) => id));
  };

  const removeItems = (ids: number[]) => {
    setCartItems((current) => current.filter(({ id }) => !ids.includes(id)));
    setSelectedIds((current) => current.filter((id) => !ids.includes(id)));
  };

  return (
    <section aria-label="장바구니" className="bg-gray-100">
      <TabBar
        className="sticky top-[3.5rem] z-[9]"
        items={CART_TABS}
        selectedValue={selectedCartTab}
        onValueChange={setSelectedCartTab}
      />

      <div className="flex flex-col gap-12 bg-white px-12 py-16">
        <SegmentCart deliveryCount={5} halfPriceCount={1} />
        <CartSelectionToolbar
          isAllSelected={isAllSelected}
          selectedCount={selectedIds.length}
          totalCount={cartItems.length}
          onMoveToKeep={() => removeItems(selectedIds)}
          onRemoveSelected={() => removeItems(selectedIds)}
          onSelectAll={toggleAll}
        />
      </div>

      <div className="mt-16">
        <AccordionSeller
          isSelected={isAllSelected}
          sellerName="우나야하"
          onSelect={toggleAll}
        >
          {cartItems.map((item) => (
            <CartListItem
              key={item.id}
              {...item}
              isSelected={selectedIds.includes(item.id)}
              onRemove={() => removeItems([item.id])}
              onSelect={() => toggleItem(item.id)}
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
