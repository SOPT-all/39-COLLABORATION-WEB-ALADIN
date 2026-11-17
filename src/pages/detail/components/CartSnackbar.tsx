import { Link } from 'react-router';

import IcChevronRightSmall from '@assets/svg/arrow/IcChevronRightSmall';
import { ROUTES } from '@constants/routes';

interface CartSnackbarProps {
  isVisible: boolean;
}

const CartSnackbar = ({ isVisible }: CartSnackbarProps) => {
  return (
    <div
      className={
        isVisible
          ? 'fixed inset-x-0 bottom-24 z-20 mx-auto flex h-[52px] w-[343px] max-w-full items-center justify-between rounded-12 bg-gray-950 px-16 py-12'
          : 'sr-only'
      }
    >
      <p className="text-body-14r text-white" role="status">
        {isVisible ? '상품이 장바구니에 담겼습니다.' : ''}
      </p>
      {isVisible && (
        <Link
          className="inline-flex shrink-0 items-center gap-8 text-body-14sb whitespace-nowrap text-pink-300 [&_path]:stroke-current"
          to={ROUTES.CART}
        >
          장바구니 보기
          <IcChevronRightSmall aria-hidden="true" />
        </Link>
      )}
    </div>
  );
};

export default CartSnackbar;
