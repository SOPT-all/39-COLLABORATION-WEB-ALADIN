import type { Review } from '../types/review';

import ReviewCard from './ReviewCard';

interface ReviewSectionProps {
  reviews: readonly Review[];
}

const ReviewSection = ({ reviews }: ReviewSectionProps) => (
  <div className="px-(--layout-margin-x)">
    <ul className="flex flex-col gap-24 py-12">
      {reviews.map((review) => (
        <li key={review.id}>
          <ReviewCard review={review} />
        </li>
      ))}
    </ul>
  </div>
);

export default ReviewSection;
