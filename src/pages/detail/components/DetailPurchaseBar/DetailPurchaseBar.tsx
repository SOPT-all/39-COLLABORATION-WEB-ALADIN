import { isHTTPError } from 'ky';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';

import type { CommonResponseVoid } from '@apis/generated/dataContracts';
import IcCabinetOutline from '@assets/svg/product/IcCabinetOutline';
import Button from '@components/Button';

import { useAddCartItem } from '../../hooks/useAddCartItem';
import CartSnackbar from './CartSnackbar';

const CART_ID = 1;
const CART_SNACKBAR_DURATION_MS = 4000;
const ALREADY_IN_CART_CODE = 'CART_ITEM_ALREADY_EXISTS';
const ALREADY_SOLD_CODE = 'SALES_POST_ALREADY_SOLD';

interface CartSnackbarState {
  hasCartLink: boolean;
  message: string;
}

const getCartErrorSnackbar = (error: unknown): CartSnackbarState => {
  const code =
    isHTTPError<CommonResponseVoid>(error) && typeof error.data === 'object'
      ? error.data.code
      : undefined;

  if (code === ALREADY_IN_CART_CODE) {
    return { hasCartLink: true, message: '이미 장바구니에 담긴 상품입니다.' };
  }

  if (code === ALREADY_SOLD_CODE) {
    return { hasCartLink: false, message: '이미 판매된 상품입니다.' };
  }

  return { hasCartLink: false, message: '장바구니에 담지 못했습니다.' };
};

const DetailPurchaseBar = () => {
  const { bookId } = useParams<'bookId'>();
  const salesPostId = Number(bookId);
  const canAddToCart = Number.isSafeInteger(salesPostId) && salesPostId > 0;
  const { isPending, mutate } = useAddCartItem();
  const [snackbar, setSnackbar] = useState<CartSnackbarState | null>(null);
  const snackbarTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(snackbarTimer.current), []);

  const showSnackbar = (nextSnackbar: CartSnackbarState) => {
    window.clearTimeout(snackbarTimer.current);
    setSnackbar(nextSnackbar);
    snackbarTimer.current = window.setTimeout(
      () => setSnackbar(null),
      CART_SNACKBAR_DURATION_MS,
    );
  };

  const handleAddToCart = () => {
    mutate(
      { cartId: CART_ID, usedBookSalesPostId: salesPostId },
      {
        onError: (error) => showSnackbar(getCartErrorSnackbar(error)),
        onSuccess: () =>
          showSnackbar({
            hasCartLink: true,
            message: '상품이 장바구니에 담겼습니다.',
          }),
      },
    );
  };

  return (
    <aside
      aria-label="중고 도서 구매"
      className="fixed inset-x-0 bottom-0 z-10 mx-auto h-(--detail-purchase-bar-height) w-[375px] max-w-full bg-white"
    >
      <CartSnackbar
        hasCartLink={snackbar?.hasCartLink ?? false}
        message={snackbar?.message}
      />
      <div className="flex items-center gap-8 border-t border-gray-200 px-(--layout-margin-x) py-16">
        <button
          type="button"
          aria-label="보관함에 담기"
          className="flex size-40 shrink-0 items-center justify-center rounded-4 border border-gray-300 active:bg-gray-50"
        >
          <IcCabinetOutline aria-hidden="true" />
        </button>
        <div className="flex min-w-0 flex-1 items-center justify-between">
          <Button
            className="h-40 w-[144px]"
            disabled={!canAddToCart || isPending}
            onClick={handleAddToCart}
          >
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
