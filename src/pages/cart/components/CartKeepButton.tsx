import type { ComponentPropsWithRef } from 'react';

import IcCabinetOutline from '@assets/svg/product/IcCabinetOutline';

const CartKeepButton = ({
  className = '',
  type = 'button',
  ...props
}: ComponentPropsWithRef<'button'>) => {
  return (
    <button
      {...props}
      className={`flex h-[30px] items-center justify-center gap-4 rounded-4 bg-white pr-8 pl-4 text-body-14m text-gray-700 inset-ring inset-ring-gray-200 enabled:active:bg-gray-50 ${className}`}
      type={type}
    >
      <IcCabinetOutline aria-hidden="true" />
      <span>보관</span>
    </button>
  );
};

export default CartKeepButton;
