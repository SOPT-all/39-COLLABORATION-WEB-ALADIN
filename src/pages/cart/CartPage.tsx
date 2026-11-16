import { useState } from 'react';

import TabBar from '@components/TabBar';

import SegmentCart from './components/SegmentCart';

const CART_TABS = [
  { label: '장바구니', value: 'cart' },
  { label: '보관함', value: 'storage' },
  { label: '구매함', value: 'purchase' },
  { label: '오늘 본 상품', value: 'recent' },
] as const;

const CartPage = () => {
  const [selectedCartTab, setSelectedCartTab] = useState('cart');
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState<
    'delivery' | 'halfPrice'
  >('delivery');

  return (
    <section aria-label="장바구니">
      <div className="sticky top-[3.5rem] z-[9] bg-white">
        <TabBar
          items={CART_TABS}
          selectedValue={selectedCartTab}
          onValueChange={setSelectedCartTab}
        />

        <div className="p-16">
          <SegmentCart
            deliveryCount={5}
            halfPriceCount={1}
            selectedValue={selectedDeliveryMethod}
            onValueChange={setSelectedDeliveryMethod}
          />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
