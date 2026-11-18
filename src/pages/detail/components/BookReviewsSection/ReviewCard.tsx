import { isHTTPError } from 'ky';
import { useState } from 'react';

import IcMore from '@assets/svg/product/IcMore';
import IcNewWindow from '@assets/svg/product/IcNewWindow';
import IcNotice from '@assets/svg/status/IcNotice';
import IcPurchaseBadge from '@assets/svg/status/IcPurchaseBadge';
import IcStar5 from '@assets/svg/status/IcStar5';

import type { Review } from '../../types/review';

import { useToggleReviewLike } from '../../hooks/useToggleReviewLike';
import LikeButton from './LikeButton';
import ThanksToButton from './ThanksToButton';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const { mutate, isPending, isError, error } = useToggleReviewLike(review.id);

  const handleLikeClick = () => {
    if (isPending) return;

    mutate(undefined, {
      onSuccess: (data) => setIsLiked(data.isLiked),
    });
  };

  return (
    <article className="flex flex-col gap-12 text-gray-700">
      <header className="flex items-start justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4 text-body-14m">
            <IcPurchaseBadge
              aria-label="구매"
              className="h-[20px] w-[42px] shrink-0"
              role="img"
            />
            <span>{review.author}</span>
            <time dateTime={review.createdAt}>{review.createdAt}</time>
          </div>

          <IcStar5 aria-label="5점 만점에 5점" role="img" />
        </div>
        <IcMore aria-hidden="true" className="shrink-0" />
      </header>

      <div className="flex flex-col gap-2">
        <p className="text-body-16r whitespace-pre-wrap">{review.content}</p>
        <IcNewWindow aria-hidden="true" />
      </div>

      <footer className="flex flex-wrap items-center gap-8">
        <span className="text-body-16m">댓글 ({review.commentCount})</span>

        <div className="ml-auto flex items-center gap-4">
          <LikeButton
            disabled={isPending}
            isLiked={isLiked}
            onClick={handleLikeClick}
          />
          <ThanksToButton />
          <IcNotice aria-hidden="true" />
        </div>
      </footer>
      {isError && (
        <p className="sr-only" role="alert">
          {isHTTPError(error) && error.response.status === 404
            ? '리뷰를 찾을 수 없습니다.'
            : '리뷰 공감 상태를 변경하지 못했습니다.'}
        </p>
      )}
    </article>
  );
};

export default ReviewCard;
