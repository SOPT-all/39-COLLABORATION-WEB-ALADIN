import reviewDropdown from '@assets/images/reviewDropdown.png';
import IcCheckOutline from '@assets/svg/cart/IcCheckOutline';
import IcNotice from '@assets/svg/status/IcNotice';
import IcStar5 from '@assets/svg/status/IcStar5';

import RegisterButton from '../RegisterButton';

const ShortReviewForm = () => (
  <section
    aria-labelledby="short-review-heading"
    className="flex flex-col bg-white px-(--layout-margin-x) py-16"
  >
    <h2
      id="short-review-heading"
      className="flex items-center gap-8 py-12 text-title-20sb text-gray-950"
    >
      100자평
      <IcNotice aria-hidden="true" />
    </h2>

    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4 text-gray-700">
        <div className="flex gap-4">
          <div className="flex h-32 w-[133px] shrink-0 items-center justify-between border border-gray-300 px-4">
            <IcStar5
              aria-label="별점 미선택"
              className="shrink-0 [&_path]:fill-gray-300"
              role="img"
            />
            <img
              alt=""
              className="size-[20px] shrink-0 object-cover"
              src={reviewDropdown}
            />
          </div>

          <div className="flex h-32 min-w-0 flex-1 items-center justify-between border border-gray-300 px-4 text-body-16m">
            <span>카테고리</span>
            <img
              alt=""
              className="size-[20px] shrink-0 object-cover"
              src={reviewDropdown}
            />
          </div>
        </div>

        <p className="min-h-[105px] border border-gray-300 p-4 text-body-16m">
          배송 문의나 욕설 및 인신공격성 글은 상품 페이지에서 노출
          제외처리됩니다.
        </p>
        <p className="text-right text-body-14m">
          현재 0 /280byte (한글 140자 이내)
        </p>

        <label className="flex items-center gap-4 text-body-14m">
          <input className="sr-only" type="checkbox" disabled />
          <IcCheckOutline
            aria-hidden="true"
            className="shrink-0 [&_path:last-child]:stroke-gray-200"
            width={24}
            height={24}
          />
          스포일러 포함
        </label>
      </div>

      <fieldset disabled>
        <RegisterButton />
      </fieldset>
    </div>
  </section>
);

export default ShortReviewForm;
