import { forwardRef } from 'react';

import IcChevronRightSmall from '@assets/svg/arrow/IcChevronRightSmall';
import IcNotice from '@assets/svg/status/IcNotice';
import Button from '@components/Button';
import { formatPrice } from '@utils/formatPrice';

interface CartPaymentSummaryProps {
  discountAmount: number;
  itemAmount: number;
  selectedBookCount: number;
  selectedTypeCount: number;
  shippingFee: number;
  totalPrice: number;
}

const CartPaymentSummary = forwardRef<HTMLElement, CartPaymentSummaryProps>(
  (
    {
      discountAmount,
      itemAmount,
      selectedBookCount,
      selectedTypeCount,
      shippingFee,
      totalPrice,
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        aria-labelledby="payment-summary-title"
        className="flex flex-col gap-16 border-b border-gray-200 bg-white px-16 py-24"
      >
        <h2
          id="payment-summary-title"
          className="text-title-20sb text-gray-950"
        >
          결제 금액
        </h2>

        <dl className="flex w-full flex-col gap-8 text-body-14r">
          <div className="flex justify-between">
            <dt className="text-gray-700">상품 수</dt>
            <dd className="text-body-14m text-gray-950">
              {selectedTypeCount}종 {selectedBookCount}개
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-700">상품 금액</dt>
            <dd className="text-body-14m text-gray-950">
              {formatPrice(itemAmount)}원
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-700">할인 금액</dt>
            <dd className="text-body-14m text-pink-500">
              −{formatPrice(discountAmount)}원
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="flex items-center gap-4 text-gray-700">
              배송비
              <span className="text-caption-12r text-gray-500">판매자 1곳</span>
            </dt>
            <dd className="text-body-14m text-gray-950">
              {formatPrice(shippingFee)}원
            </dd>
          </div>
        </dl>

        <div className="h-px w-[calc(100%+2rem)] -translate-x-16 bg-gray-200" />

        <div className="flex flex-col gap-8">
          <div className="flex h-[31px] items-center justify-between">
            <h3 className="text-title-20sb text-gray-950">결제 예정 금액</h3>
            <strong className="text-title-24sb text-gray-950">
              {formatPrice(totalPrice)}원
            </strong>
          </div>

          <div className="flex items-center justify-between text-caption-12r text-gray-500">
            <span className="flex items-center gap-4">
              적립 예정 마일리지
              <IcNotice aria-hidden="true" width={14} height={14} />
            </span>
            <span>0원</span>
          </div>

          <div className="flex items-center justify-between rounded-8 bg-light-blue p-8 text-body-14sb text-navy-400">
            <span>받을 수 있는 사은품 확인하기</span>
            <IcChevronRightSmall
              aria-hidden="true"
              className="[&_path]:stroke-current"
            />
          </div>
        </div>

        <Button className="w-full" size="large">
          {selectedBookCount}권 · {formatPrice(totalPrice)}원 주문하기
        </Button>

        <p className="text-center text-caption-12r text-gray-700">
          무이자 할부 안내 | 장바구니 이용안내
        </p>
      </section>
    );
  },
);

CartPaymentSummary.displayName = 'CartPaymentSummary';

export default CartPaymentSummary;
