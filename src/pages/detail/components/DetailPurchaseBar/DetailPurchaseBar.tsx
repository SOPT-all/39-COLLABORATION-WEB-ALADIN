import { useEffect, useRef, useState } from 'react';

import IcCabinetOutline from '@assets/svg/product/IcCabinetOutline';
import Button from '@components/Button';

import CartSnackbar from './CartSnackbar';

const CART_SNACKBAR_DURATION_MS = 3000;

const DetailPurchaseBar = () => {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);
  const snackbarTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(snackbarTimer.current), []);

  const handleAddToCart = () => {
    window.clearTimeout(snackbarTimer.current);
    setIsSnackbarVisible(true);
    snackbarTimer.current = window.setTimeout(
      () => setIsSnackbarVisible(false),
      CART_SNACKBAR_DURATION_MS,
    );
  };

  return (
    <aside
      aria-label="중고 도서 구매"
      className="fixed inset-x-0 bottom-0 z-10 mx-auto h-(--detail-purchase-bar-height) w-[375px] max-w-full bg-white"
    >
      <CartSnackbar isVisible={isSnackbarVisible} />
      <div className="flex items-center gap-8 border-t border-gray-200 px-(--layout-margin-x) py-16">
        <button
          type="button"
          aria-label="보관함에 담기"
          className="flex size-40 shrink-0 items-center justify-center rounded-4 border border-gray-300 active:bg-gray-50"
        >
          <IcCabinetOutline aria-hidden="true" />
        </button>
        <div className="flex min-w-0 flex-1 items-center justify-between">
          <Button className="h-40 w-[144px]" onClick={handleAddToCart}>
            장바구니
          </Button>
          <Button
            className="w-[144px] ring-1 inset-ring-0 ring-pink-500"
            variant="secondary"
          >
            주문하기
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default DetailPurchaseBar;
