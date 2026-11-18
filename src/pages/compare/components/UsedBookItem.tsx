import IcCabinetOutline from '@assets/svg/product/IcCabinetOutline';
import Button from '@components/Button';
import ChipLink from '@components/ChipLink';
import { formatPrice } from '@utils/formatPrice';

import type { UsedBook } from '../types/usedBook';

import { BOOK_CONDITION_LABEL } from '../constants/usedBookLabels';
import SellerTag from './SellerTag';

const LABEL_CLASS = 'w-[42px] shrink-0 text-body-16sb text-gray-700';

interface UsedBookItemProps {
  onClick?: () => void;
  usedBook: UsedBook;
}

const UsedBookItem = ({ onClick, usedBook }: UsedBookItemProps) => {
  const {
    condition,
    discountRate,
    freeShippingThreshold,
    price,
    sellerGrade,
    sellerName,
    shippingFee,
    title,
  } = usedBook;

  return (
    <article
      className="flex flex-col gap-16 border-b border-gray-200 bg-white px-(--layout-margin-x) py-24"
      onClick={onClick}
    >
      <div className="flex flex-col gap-8">
        <h3 className="text-title-18sb text-gray-950">{title}</h3>

        <div className="flex flex-col gap-8">
          <div className="flex h-24 items-center gap-16">
            <span className={LABEL_CLASS}>판매자</span>
            <span className="flex items-center gap-4 text-body-16r text-gray-700">
              {sellerName}
              <SellerTag grade={sellerGrade} />
            </span>
          </div>

          <div className="flex items-center gap-16">
            <span className={LABEL_CLASS}>상태</span>
            <span className="flex items-center gap-8 text-body-16r text-gray-700">
              {BOOK_CONDITION_LABEL[condition]}
              <ChipLink
                label="상태 자세히"
                surface="none"
                onClick={(e) => e.stopPropagation()}
              />
            </span>
          </div>

          <div className="flex gap-16">
            <span className={LABEL_CLASS}>판매가</span>
            <div className="flex flex-1 flex-col gap-4">
              <p className="flex items-start gap-4 text-body-16sb text-gray-950">
                <span className="text-pink-500">{discountRate}%</span>
                <span>
                  {formatPrice(price)}
                  <span className="text-body-16r">원</span>
                </span>
              </p>
              <p className="text-body-16r text-gray-700">
                {formatPrice(freeShippingThreshold)}원 미만 배송비{' '}
                {formatPrice(shippingFee)}원
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-[9px]" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          aria-label="보관함에 담기"
          className="flex size-[37px] shrink-0 items-center justify-center rounded-4 border border-gray-300 active:bg-gray-50"
        >
          <IcCabinetOutline aria-hidden="true" />
        </button>
        <Button className="flex-1">장바구니</Button>
        <Button className="flex-1" variant="secondary">
          주문하기
        </Button>
      </div>
    </article>
  );
};

export default UsedBookItem;
