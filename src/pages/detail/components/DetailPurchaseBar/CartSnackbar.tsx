import { Link } from 'react-router';

import IcChevronRightSmall from '@assets/svg/arrow/IcChevronRightSmall';
import { ROUTES } from '@constants/routes';

interface CartSnackbarProps {
  hasCartLink: boolean;
  isOpen: boolean;
  message?: string;
  onExited: () => void;
}

const CartSnackbar = ({
  hasCartLink,
  isOpen,
  message,
  onExited,
}: CartSnackbarProps) => {
  return (
    <div
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={`absolute inset-x-(--layout-margin-x) bottom-full mb-12 flex h-[52px] items-center justify-between rounded-12 bg-gray-950 px-16 py-12 transition-[translate,opacity] ${isOpen ? 'translate-y-0 opacity-100 delay-0 duration-300 ease-out' : 'translate-y-12 opacity-0 delay-[500ms,0ms] duration-[0ms,500ms] ease-in-out'}`}
      onTransitionEnd={(event) => {
        if (
          event.target === event.currentTarget &&
          event.propertyName === 'opacity' &&
          !isOpen
        ) {
          onExited();
        }
      }}
    >
      <p className="text-body-14r text-white" role="status" aria-live="polite">
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
