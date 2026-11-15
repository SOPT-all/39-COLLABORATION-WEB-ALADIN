import BookConditionSection from './components/BookConditionSection/BookConditionSection';
import SaleAlertSection from './components/SaleAlertSection/SaleAlertSection';
import { MOCK_BOOK_CONDITION } from './constants/mockBookCondition';

const DetailPage = () => (
  <div className="flex flex-col gap-8 bg-gray-50 py-8">
    <BookConditionSection
      grade={MOCK_BOOK_CONDITION.grade}
      groups={MOCK_BOOK_CONDITION.groups}
    />
    <SaleAlertSection />
  </div>
);

export default DetailPage;
