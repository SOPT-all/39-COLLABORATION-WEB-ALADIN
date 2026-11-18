import { useMemo, useState } from 'react';

import sonyeonCover from '@assets/images/books/thumbnail-01.webp';
import iliasCover from '@assets/images/books/thumbnail-03.webp';
import TabBar from '@components/TabBar';

import AccordionSeller from './components/AccordionSeller';
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

const CART_ITEMS = [
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
  const [selectedIds, setSelectedIds] = useState<number[]>(
    CART_ITEMS.map(({ id }) => id),
  );

  const selectedItems = useMemo(
    () => CART_ITEMS.filter(({ id }) => selectedIds.includes(id)),
    [selectedIds],
  );
  const itemAmount = selectedItems.reduce(
    (sum, { originalPrice }) => sum + originalPrice,
    0,
  );
  const saleAmount = selectedItems.reduce(
    (sum, { price }) => sum + price,
    0,
  );
  const discountAmount = itemAmount - saleAmount;
  const shippingFee = selectedItems.length > 0 ? SHIPPING_FEE : 0;
  const totalPrice = saleAmount + shippingFee;
  const freeShippingRemaining = Math.max(
    FREE_SHIPPING_THRESHOLD - saleAmount,
    0,
  );
  const isAllSelected = selectedIds.length === CART_ITEMS.length;

  const toggleItem = (id: number) => {
    setSelectedIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((selectedId) => selectedId !== id)
        : [...currentIds, id],
    );
  };

  const toggleAll = () => {
    setSelectedIds(isAllSelected ? [] : CART_ITEMS.map(({ id }) => id));
  };

  return (
    <section aria-label="장바구니" className="bg-gray-100">
      <TabBar
        className="sticky top-[3.5rem] z-[9]"
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
          selectedCount={selectedIds.length}
          totalCount={CART_ITEMS.length}
          onMoveToKeep={() => undefined}
          onRemoveSelected={() => undefined}
          onSelectAll={toggleAll}
        />
      </div>

      <div className="mt-16">
        <AccordionSeller
          isSelected={isAllSelected}
          sellerName="우나야하"
          onSelect={toggleAll}
        >
          {CART_ITEMS.map((item) => (
            <CartListItem
              key={item.id}
              {...item}
              isSelected={selectedIds.includes(item.id)}
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
        discountAmount={discountAmount}
        itemAmount={itemAmount}
        selectedBookCount={selectedItems.length}
        selectedTypeCount={selectedItems.length}
        shippingFee={shippingFee}
        totalPrice={totalPrice}
      />
    </section>
  );
};

export default CartPage;
