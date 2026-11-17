import { useState } from 'react';

import IcChevronDown from '@assets/svg/arrow/IcChevronDown';
import IcCheckOutline from '@assets/svg/cart/IcCheckOutline';

interface AccordionSellerProps {
  sellerName: string;
}

const AccordionSeller = ({ sellerName }: AccordionSellerProps) => {
  const [isArrowUp, setIsArrowUp] = useState(true);

  return (
    <div className="flex h-[59px] items-end justify-between gap-12 border-b border-gray-200 bg-white p-16">
      <div className="flex min-w-0 items-center gap-12">
        <IcCheckOutline aria-hidden="true" className="shrink-0" />

        <div className="flex min-w-0 items-center gap-8">
          <span className="truncate text-title-18sb text-gray-950">
            {sellerName}
          </span>
          <span className="flex shrink-0 items-center justify-center rounded-full bg-sky px-12 py-4 text-label-12sb text-white">
            반값택배 가능
          </span>
        </div>
      </div>

      <button
        aria-label={`${sellerName} 상품 화살표 ${isArrowUp ? '아래로' : '위로'} 전환`}
        className="flex size-24 shrink-0 items-center justify-center text-gray-950 [&_path]:stroke-current"
        type="button"
        onClick={() => setIsArrowUp((previous) => !previous)}
      >
        <IcChevronDown
          aria-hidden="true"
          className={isArrowUp ? 'rotate-180' : ''}
        />
      </button>
    </div>
  );
};

export default AccordionSeller;
