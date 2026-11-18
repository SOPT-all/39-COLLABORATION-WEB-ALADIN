import type { Ref } from 'react';

import IcChevronRightSmall from '@assets/svg/arrow/IcChevronRightSmall';
import IcNotice from '@assets/svg/status/IcNotice';
import Button from '@components/Button';
import { formatPrice } from '@utils/formatPrice';

interface CartPaymentSummaryProps {
  discountAmount: number;
  itemAmount: number;
  ref?: Ref<HTMLElement>;
  selectedBookCount: number;
  selectedSellerCount: number;
  selectedTypeCount: number;
  shippingFee: number;
  totalPrice: number;
}

const CartPaymentSummary = ({
  discountAmount,
  itemAmount,
  ref,
  selectedBookCount,
  selectedSellerCount,
  selectedTypeCount,
  shippingFee,
  totalPrice,
}: CartPaymentSummaryProps) => {
  const discountLabel =
    discountAmount === 0 ? '0원' : `−${formatPrice(discountAmount)}원`;

  const paymentDetails = [
    {
      label: '상품 수',
      value: `${selectedTypeCount}종 ${selectedBookCount}개`,
    },
    {
      label: '상품 금액',
      value: `${formatPrice(itemAmount)}원`,
    },
    {
      label: '할인 금액',
      value: discountLabel,
      valueClassName: 'text-pink-500',
    },
    {
      label: '배송비',
      note: `판매자 ${selectedSellerCount}곳`,
      value: `${formatPrice(shippingFee)}원`,
    },
  ];

  return (
    <section
      ref={ref}
      aria-labelledby="payment-summary-title"
      className="flex flex-col gap-16 border-b border-gray-200 bg-white px-16 py-24"
    >
      <h2 id="payment-summary-title" className="text-title-20sb text-gray-950">
        결제 금액
      </h2>

      <dl className="flex w-full flex-col gap-8 text-body-14r">
        {paymentDetails.map(({ label, note, value, valueClassName }) => (
          <div key={label} className="flex justify-between">
            <dt className="flex items-center gap-4 text-gray-700">
              {label}
              {note && (
                <span className="text-caption-12r text-gray-500">{note}</span>
              )}
            </dt>
            <dd
              className={`text-body-14m ${valueClassName ?? 'text-gray-950'}`}
            >
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="h-px w-[calc(100%+2rem)] -translate-x-16 bg-gray-200" />

      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h3 className="text-title-20sb text-gray-950">결제 예정 금액</h3>
          <strong className="text-display-24sb text-gray-950">
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

        <div className="flex items-center justify-between rounded-8 bg-navy-50 p-8 text-body-14sb text-navy-400">
          <span>받을 수 있는 사은품 확인하기</span>
          <IcChevronRightSmall
            aria-hidden="true"
            className="[&_path]:stroke-current"
          />
        </div>
      </div>

      <Button
        className="w-full disabled:cursor-default disabled:bg-gray-300"
        disabled={selectedBookCount === 0}
        size="large"
      >
        {selectedBookCount}권 · {formatPrice(totalPrice)}원 주문하기
      </Button>

      <p className="text-center text-caption-12r text-gray-700">
        무이자 할부 안내 | 장바구니 이용안내
      </p>
    </section>
  );
};

export default CartPaymentSummary;
