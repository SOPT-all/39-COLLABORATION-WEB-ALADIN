import { useState } from 'react';

import TabBar from '@components/TabBar';

import CartSelectionToolbar from './components/CartSelectionToolbar';
import SegmentCart from './components/SegmentCart';

const CART_TABS = [
  { label: '장바구니', value: 'cart' },
  { label: '보관함', value: 'storage' },
  { label: '구매함', value: 'purchase' },
  { label: '오늘 본 상품', value: 'recent' },
] as const;

const CartPage = () => {
  const [selectedCartTab, setSelectedCartTab] = useState('cart');

  return (
    <section aria-label="장바구니">
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
          isAllSelected
          selectedCount={2}
          totalCount={2}
        />
      </div>
    </section>
  );
};

export default CartPage;
