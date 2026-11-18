import BookConditionSection from './components/BookConditionSection/BookConditionSection';
import ReviewSection from './components/ReviewSection';
import SaleAlertSection from './components/SaleAlertSection/SaleAlertSection';
import { MOCK_BOOK_CONDITION } from './constants/mockBookCondition';
import { MOCK_REVIEWS } from './constants/mockReviews';

const DetailPage = () => (
  <>
    <div className="flex flex-col gap-8 bg-gray-50 py-8">
      <BookConditionSection
        grade={MOCK_BOOK_CONDITION.grade}
        groups={MOCK_BOOK_CONDITION.groups}
      />
      <SaleAlertSection />
    </div>

    <ReviewSection reviews={MOCK_REVIEWS} />
  </>
);

export default DetailPage;
