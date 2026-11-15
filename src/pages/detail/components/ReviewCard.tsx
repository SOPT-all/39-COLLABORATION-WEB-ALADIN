import IcMore from '@assets/svg/product/IcMore';
import IcNewWindow from '@assets/svg/product/IcNewWindow';
import IcNotice from '@assets/svg/status/IcNotice';
import IcPurchaseBadge from '@assets/svg/status/IcPurchaseBadge';
import IcStar5 from '@assets/svg/status/IcStar5';

import type { Review } from '../constants/mockReviews';

import LikeButton from './LikeButton';
import ThanksToButton from './ThanksToButton';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => (
  <article className="flex flex-col gap-8 text-gray-700">
    <header className="flex items-center gap-4 text-body-14m">
      <IcPurchaseBadge aria-label="구매" className="shrink-0" role="img" />
      <span>{review.author}</span>
      <time dateTime={review.createdAt}>{review.createdAt}</time>
      <IcMore aria-hidden="true" className="ml-auto shrink-0" />
    </header>

    <IcStar5 aria-label="5점 만점에 5점" role="img" />

    <div className="mt-4 flex flex-col gap-2">
      <p className="text-body-16r whitespace-pre-wrap">{review.content}</p>
      <IcNewWindow aria-hidden="true" />
    </div>

    <footer className="mt-4 flex flex-wrap items-center gap-8">
      <span className="text-body-16sb">댓글 ({review.commentCount})</span>

      <div className="ml-auto flex items-center gap-4">
        <LikeButton isLiked={false} />
        <ThanksToButton />
        <IcNotice aria-hidden="true" />
      </div>
    </footer>
  </article>
);

export default ReviewCard;
