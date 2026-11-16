import IcChevronRightSmall from '@assets/svg/arrow/IcChevronRightSmall';
import IcNotice from '@assets/svg/status/IcNotice';

const SummarySeller = () => {
  return (
    <div className="flex w-full flex-col gap-12 bg-white p-16">
      <div className="flex items-center justify-between rounded-8 bg-gray-50 py-8 pr-4 pl-8">
        <p className="text-caption-12r text-gray-700">
          76,600원 더 담으면{' '}
          <strong className="text-label-12sb text-pink-500">배송비 무료</strong>
        </p>

        <div className="flex shrink-0 items-center text-label-12sb text-navy-400">
          <span>판매자 책 더 보기</span>
          <IcChevronRightSmall
            aria-hidden="true"
            className="[&_path]:stroke-current"
          />
        </div>
      </div>

      <div className="flex h-24 items-center justify-between">
        <div className="flex items-center gap-4 text-gray-700">
          <span className="text-label-12sb">10월 30일 출고</span>
          <span aria-hidden="true" className="text-caption-12r">
            ·
          </span>
          <span className="text-caption-12r">배송비 3,500원</span>
          <span
            aria-hidden="true"
            className="flex size-[14px] items-center justify-center"
          >
            <IcNotice className="max-w-none scale-[0.7778]" />
          </span>
        </div>

        <dl className="flex shrink-0 items-end gap-4">
          <dt className="text-body-16r text-gray-700">합계</dt>
          <dd className="text-body-16sb text-gray-950">26,900원</dd>
        </dl>
      </div>
    </div>
  );
};

export default SummarySeller;
