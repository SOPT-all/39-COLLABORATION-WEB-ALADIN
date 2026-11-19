import { Link } from 'react-router';

import IcChevronRightSmall from '@assets/svg/arrow/IcChevronRightSmall';
import { ROUTES } from '@constants/routes';

interface CartSnackbarProps {
  hasCartLink: boolean;
  message?: string;
}

const CartSnackbar = ({ hasCartLink, message }: CartSnackbarProps) => {
  return (
    <div
      className={
        message
          ? 'absolute inset-x-(--layout-margin-x) bottom-full mb-24 flex h-[52px] items-center justify-between rounded-12 bg-gray-950 px-16 py-12'
          : 'sr-only'
      }
    >
      <p className="text-body-14r text-white" role="status">
        {message}
      </p>
      {hasCartLink && (
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
