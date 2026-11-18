import { MOCK_REVIEWS } from '../../constants/mockReviews';
import ReviewSection from './ReviewSection';
import ShortReviewForm from './ShortReviewForm';

const BookReviewsSection = () => (
  <>
    <ShortReviewForm />
    <ReviewSection reviews={MOCK_REVIEWS} />
  </>
);

export default BookReviewsSection;
