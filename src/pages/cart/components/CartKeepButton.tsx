import { useState } from 'react';

import IcCabinetOutline from '@assets/svg/product/IcCabinetOutline';

const CartKeepButton = () => {
  const [isSelected, setIsSelected] = useState(false);
  const backgroundClass = isSelected
    ? 'bg-gray-50'
    : 'bg-white active:bg-gray-50';

  return (
    <button
      aria-pressed={isSelected}
      className={`flex h-[30px] items-center justify-center gap-4 rounded-4 pr-8 pl-4 text-body-14m text-gray-700 inset-ring inset-ring-gray-200 ${backgroundClass}`}
      type="button"
      onClick={() => setIsSelected((previous) => !previous)}
    >
      <IcCabinetOutline aria-hidden="true" />
      <span>보관</span>
    </button>
  );
};

export default CartKeepButton;
