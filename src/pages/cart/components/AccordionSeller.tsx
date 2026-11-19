import { useState, type ReactNode } from 'react';

import IcChevronDown from '@assets/svg/arrow/IcChevronDown';
import IcCheckOutline from '@assets/svg/cart/IcCheckOutline';
import IcCheckUnselected from '@assets/svg/cart/IcCheckUnselected';

interface AccordionSellerProps {
  children: ReactNode;
  isCvsDelivery: boolean;
  isSelected: boolean;
  onSelect: () => void;
  sellerName: string;
}

const AccordionSeller = ({
  children,
  isCvsDelivery,
  isSelected,
  onSelect,
  sellerName,
}: AccordionSellerProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section className="border-b border-gray-200">
      <div className="flex h-[59px] items-end justify-between gap-12 border-b border-gray-200 bg-white p-16">
        <div className="flex min-w-0 items-center gap-12">
          <button
            type="button"
            aria-label={`${sellerName} 상품 전체 선택`}
            aria-pressed={isSelected}
            className="shrink-0"
            onClick={onSelect}
          >
            {isSelected ? (
              <IcCheckOutline aria-hidden="true" />
            ) : (
              <IcCheckUnselected aria-hidden="true" />
            )}
          </button>

          <div className="flex min-w-0 items-center gap-8">
            <span className="truncate text-title-18sb text-gray-950">
              {sellerName}
            </span>
            {isCvsDelivery && (
              <span className="flex shrink-0 items-center justify-center rounded-full bg-sky px-12 py-4 text-label-12sb text-white">
                반값택배 가능
              </span>
            )}
          </div>
        </div>

        <button
          aria-expanded={isExpanded}
          aria-label={`${sellerName} 상품 목록 ${isExpanded ? '접기' : '펼치기'}`}
          className="flex size-24 shrink-0 items-center justify-center text-gray-950 [&_path]:stroke-current"
          type="button"
          onClick={() => setIsExpanded((previous) => !previous)}
        >
          <IcChevronDown
            aria-hidden="true"
            className={isExpanded ? 'rotate-180' : ''}
          />
        </button>
      </div>

      {isExpanded && children}
    </section>
  );
};

export default AccordionSeller;
