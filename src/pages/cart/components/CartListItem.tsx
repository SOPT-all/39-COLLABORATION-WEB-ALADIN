import { useState } from 'react';

import IcCheckOutline from '@assets/svg/cart/IcCheckOutline';
import IcCheckUnselected from '@assets/svg/cart/IcCheckUnselected';
import IcClose from '@assets/svg/close/IcClose';
import { formatPrice } from '@utils/formatPrice';

import CartKeepButton from './CartKeepButton';
import Stepper from './Stepper';

interface CartListItemProps {
  condition: string;
  discountRate: number;
  imageSrc?: string;
  isSelected: boolean;
  onRemove?: () => void;
  onSelect: () => void;
  originalPrice: number;
  price: number;
  title: string;
}

const CartListItem = ({
  condition,
  discountRate,
  imageSrc,
  isSelected,
  onRemove,
  onSelect,
  originalPrice,
  price,
  title,
}: CartListItemProps) => {
  const [failedImageSrc, setFailedImageSrc] = useState<string | null>(null);
  const smallImageSrc = imageSrc?.replace(
    /^(https:\/\/image\.aladin\.co\.kr\/product\/\d+\/\d+\/)cover500\//,
    '$1cover200/',
  );
  const currentImageSrc =
    failedImageSrc === smallImageSrc ? imageSrc : smallImageSrc;

  return (
    <article className="relative flex items-start justify-between bg-white px-16 pt-16 pb-24">
      <div className="flex min-w-0 flex-1 items-start gap-16">
        <button
          type="button"
          aria-label={`${title} 선택`}
          aria-pressed={isSelected}
          className="shrink-0"
          onClick={onSelect}
        >
          {isSelected ? (
            <IcCheckOutline aria-hidden="true" className="shrink-0" />
          ) : (
            <IcCheckUnselected aria-hidden="true" />
          )}
        </button>

        <div className="flex min-w-0 flex-1 items-start gap-8">
          {imageSrc && failedImageSrc !== imageSrc ? (
            <img
              alt={`${title} 표지`}
              className="h-[120px] w-[80px] shrink-0 object-cover"
              height={120}
              src={currentImageSrc}
              width={80}
              onError={() => setFailedImageSrc(currentImageSrc ?? imageSrc)}
            />
          ) : (
            <div
              role="img"
              aria-label={`${title} 표지 없음`}
              className="flex h-[120px] w-[80px] shrink-0 items-center justify-center bg-gray-50 text-caption-12r text-gray-700"
            >
              표지 없음
            </div>
          )}

          <div className="flex h-[120px] min-w-0 flex-1 flex-col items-start justify-between">
            <div className="flex min-w-0 flex-col items-start gap-4 self-stretch">
              <span className="rounded-full bg-light-blue px-8 py-2 text-label-12sb text-bluegray">
                {condition}
              </span>

              <div className="min-w-0 self-stretch">
                <h3 className="truncate text-body-14sb text-gray-950">
                  {title}
                </h3>
                <div className="flex h-24 items-center gap-4 whitespace-nowrap">
                  <span className="text-body-16sb text-pink-500">
                    {discountRate}%
                  </span>
                  <div className="flex items-end gap-2">
                    <span className="text-body-16sb text-gray-950">
                      {formatPrice(price)}
                      <span className="text-body-16r">원</span>
                    </span>
                    <s className="text-body-14r text-gray-500">
                      {formatPrice(originalPrice)}원
                    </s>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <Stepper label={title} />
              <CartKeepButton />
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label={`${title} 삭제`}
        className="shrink-0"
        onClick={onRemove}
      >
        <IcClose aria-hidden="true" />
      </button>
      <div className="absolute right-16 bottom-0 left-16 border-b border-gray-200" />
    </article>
  );
};

export default CartListItem;
