import BookInfo from '@components/BookInfo';

import { MOCK_BOOK_CONDITION } from '../../constants/mockBookCondition';
import { MOCK_DETAIL_BOOK } from '../../constants/mockDetailBook';
import { MOCK_USED_BOOK_PURCHASE_INFO } from '../../constants/mockUsedBookPurchaseInfo';
import BookConditionSection from './BookConditionSection/BookConditionSection';
import SaleAlertSection from './SaleAlertSection/SaleAlertSection';
import UsedBookPurchaseInfo from './UsedBookPurchaseInfo';

const BookDetailSection = () => (
  <>
    <section
      aria-label="도서 정보"
      className="flex flex-col gap-24 bg-white px-(--layout-margin-x) py-24"
    >
      <img
        src={MOCK_DETAIL_BOOK.coverSrc}
        alt={`${MOCK_DETAIL_BOOK.info.title} 표지`}
        width={260}
        height={375}
        className="mx-auto h-[400px] w-auto"
      />
      <BookInfo {...MOCK_DETAIL_BOOK.info} />
    </section>

    <div className="flex flex-col gap-8 bg-gray-50 py-8">
      <UsedBookPurchaseInfo purchaseInfo={MOCK_USED_BOOK_PURCHASE_INFO} />
      <BookConditionSection
        grade={MOCK_BOOK_CONDITION.grade}
        groups={MOCK_BOOK_CONDITION.groups}
      />
      <SaleAlertSection />
    </div>
  </>
);

export default BookDetailSection;
