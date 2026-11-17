import IcChevronRightCircle from '@assets/svg/arrow/IcChevronRightCircle';

import type { UsedBookPurchaseInfoData } from '../types/usedBookPurchaseInfo';

interface UsedBookPurchaseInfoProps {
  purchaseInfo: UsedBookPurchaseInfoData;
}

const PAYMENT_DIVIDER_CLASSES =
  'relative py-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gray-200 after:absolute after:inset-x-0 after:top-full after:h-px after:bg-gray-200';

const formatNumber = (value: number) => value.toLocaleString('ko-KR');

const UsedBookPurchaseInfo = ({ purchaseInfo }: UsedBookPurchaseInfoProps) => {
  const {
    listPrice,
    salePrice,
    discountRate,
    shippingFee,
    remoteShippingFee,
    estimatedPaymentAmount,
    newBookSalePrice,
    newBookMileage,
    estimatedDispatchHours,
    minimumOrderAmount,
    sellerName,
    qualityGradeLabel,
  } = purchaseInfo;
  const formattedListPrice = `${formatNumber(listPrice)}원`;

  return (
    <section
      aria-label="구매 정보"
      className="bg-white px-(--layout-margin-x) py-16"
    >
      <dl className="grid grid-cols-[5.25rem_minmax(0,1fr)] gap-y-8 text-body-14r">
        <div className="col-span-full grid grid-cols-subgrid items-center">
          <dt className="text-body-14sb">판매가</dt>
          <dd className="flex flex-wrap items-center gap-x-4">
            <span className="text-display-24sb text-pink-500">
              {discountRate}%
            </span>
            <span className="flex items-center text-display-24sb">
              {formatNumber(salePrice)}
              <span className="text-title-18m">원</span>
            </span>
            <s className="text-gray-500">{formattedListPrice}</s>
          </dd>
        </div>

        <div className="col-span-full grid grid-cols-subgrid items-center">
          <dt className="text-body-14sb">배송료</dt>
          <dd>
            택배 {formatNumber(shippingFee)}원, 도서/산간{' '}
            {formatNumber(remoteShippingFee)}원
          </dd>
        </div>

        <div
          className={`col-span-full grid grid-cols-subgrid items-center ${PAYMENT_DIVIDER_CLASSES}`}
        >
          <dt className="text-body-14sb">예상 결제액</dt>
          <dd className="flex items-center text-title-20sb">
            {formatNumber(estimatedPaymentAmount)}
            <span className="text-body-16m">원~</span>
          </dd>
        </div>

        <div className="col-span-full grid grid-cols-subgrid items-center py-px">
          <dt className="text-body-14sb">새상품</dt>
          <dd className="flex flex-wrap items-center gap-x-8 text-gray-700">
            <s className="text-gray-500">{formattedListPrice}</s>
            <span>
              {`${formatNumber(newBookSalePrice)}원 (+${formatNumber(newBookMileage)}원)`}
            </span>
            <IcChevronRightCircle aria-hidden="true" />
          </dd>
        </div>

        <div className="col-span-full grid grid-cols-subgrid items-center">
          <dt className="text-body-14sb">출고 예상일</dt>
          <dd className="text-gray-700">
            통상{' '}
            <strong className="text-body-14sb">
              {estimatedDispatchHours}시간
            </strong>{' '}
            이내
          </dd>
        </div>

        <div className="col-span-full grid grid-cols-subgrid items-center">
          <dt className="text-body-14sb">최소주문금액</dt>
          <dd className="text-gray-700">
            {minimumOrderAmount !== null && formatNumber(minimumOrderAmount)}원
          </dd>
        </div>

        <div className="col-span-full grid grid-cols-subgrid items-center">
          <dt className="text-body-14sb">판매자</dt>
          <dd className="flex items-center gap-8 text-gray-700">
            <span>{sellerName}</span>
            <IcChevronRightCircle aria-hidden="true" />
          </dd>
        </div>

        <div className="col-span-full grid grid-cols-subgrid items-center">
          <dt className="text-body-14sb">상품상태</dt>
          <dd className="text-pink-500">{qualityGradeLabel}</dd>
        </div>
      </dl>
    </section>
  );
};

export default UsedBookPurchaseInfo;
