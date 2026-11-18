import BookConditionSection from './components/BookConditionSection/BookConditionSection';
import ReviewCard from './components/ReviewCard';
import SaleAlertSection from './components/SaleAlertSection/SaleAlertSection';
import UsedBookPurchaseInfo from './components/UsedBookPurchaseInfo';
import { MOCK_BOOK_CONDITION } from './constants/mockBookCondition';
import { MOCK_REVIEWS } from './constants/mockReviews';
import { MOCK_USED_BOOK_PURCHASE_INFO } from './constants/mockUsedBookPurchaseInfo';

const DetailPage = () => (
  <>
    <div className="flex flex-col gap-8 bg-gray-50 py-8">
      <UsedBookPurchaseInfo purchaseInfo={MOCK_USED_BOOK_PURCHASE_INFO} />
      <BookConditionSection
        grade={MOCK_BOOK_CONDITION.grade}
        groups={MOCK_BOOK_CONDITION.groups}
      />
      <SaleAlertSection />
    </div>

    <div className="px-(--layout-margin-x)">
      <ul className="flex flex-col gap-24 py-12">
        {MOCK_REVIEWS.map((review) => (
          <li key={review.id}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default DetailPage;
