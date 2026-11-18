import { useState } from 'react';

import TabBar from '@components/TabBar';

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
    </section>
  );
};

export default CartPage;
