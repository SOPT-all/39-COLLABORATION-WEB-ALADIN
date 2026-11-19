import IcReviewSortArrow from '@assets/svg/arrow/group/IcReviewSortArrow';
import IcChevronDownGray from '@assets/svg/arrow/IcChevronDownGray';
import IcMagic from '@assets/svg/product/IcMagic';

import type { Review } from '../../types/review';

import ReviewCard from './ReviewCard';

interface ReviewSectionProps {
  reviews: readonly Review[];
}

const ReviewSection = ({ reviews }: ReviewSectionProps) => (
  <section
    aria-label="리뷰"
    className="flex flex-col gap-16 px-(--layout-margin-x) py-16"
  >
    <div className="flex flex-col gap-12 rounded-8 bg-navy-100 p-12">
      <h2 className="flex items-center gap-8 text-body-16sb text-navy-500">
        <IcMagic aria-hidden="true" className="shrink-0" />
        AI 감상평 요약
      </h2>
      <p className="text-body-14m text-gray-950">
        폭력의 상처와 남겨진 이들의 슬픔을 전하는 작품, 인간의 존엄과 기억의
        의미를 되새기게 하는 여운이 인상적이에요.
      </p>
      <p className="text-body-14r text-gray-700">리뷰 678개를 요약했어요.</p>
    </div>

    <div>
      <div className="flex items-end justify-between gap-8 border-b border-gray-200">
        <div className="flex items-stretch">
          <span className="flex h-[36px] w-[108px] items-center justify-center border-b-4 border-navy-300 p-4 text-title-18sb whitespace-nowrap text-gray-950">
            구매자 (388)
          </span>
          <span className="flex w-[88px] items-center justify-center p-4 text-body-16r whitespace-nowrap text-gray-700">
            전체 (678)
          </span>
        </div>

        <span className="inline-flex min-h-[28px] shrink-0 items-stretch border border-gray-200 text-caption-12r text-gray-700">
          <span className="flex items-center p-2">공감순</span>
          <IcReviewSortArrow aria-hidden="true" className="shrink-0" />
        </span>
      </div>

      <ul className="flex flex-col gap-24 py-12">
        {reviews.map((review) => (
          <li key={review.id}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>

      <p className="flex items-center justify-center gap-4 px-16 py-8 text-body-14m text-gray-700">
        더 보기
        <IcChevronDownGray aria-hidden="true" />
      </p>
    </div>
  </section>
);

export default ReviewSection;
