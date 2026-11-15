import { useParams } from 'react-router';

import ReviewCard from './components/ReviewCard';
import { mockReviews } from './constants/mockReviews';

const DetailPage = () => {
  return (
    <div className="px-(--layout-margin-x)">
      <ul className="flex flex-col gap-24 py-12">
        {mockReviews.map((review) => (
          <li key={review.id}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailPage;
