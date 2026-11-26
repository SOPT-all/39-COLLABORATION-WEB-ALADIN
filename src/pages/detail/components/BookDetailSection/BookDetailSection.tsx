import type { SalesPostDetailResponse } from '@apis/generated/dataContracts';
import BookInfo from '@components/BookInfo';

import { MOCK_BOOK_CONDITION } from '../../constants/mockBookCondition';
import { MOCK_DETAIL_BOOK } from '../../constants/mockDetailBook';
import { MOCK_USED_BOOK_PURCHASE_INFO } from '../../constants/mockUsedBookPurchaseInfo';
import BookConditionSection from './BookConditionSection';
import SaleAlertSection from './SaleAlertSection';
import UsedBookPurchaseInfo from './UsedBookPurchaseInfo';

const QUALITY_GRADE_LABELS: Record<
  NonNullable<SalesPostDetailResponse['qualityGrade']>,
  string
> = {
  EXCELLENT: '최상',
  GOOD: '상',
  FAIR: '중',
};

interface BookDetailSectionProps {
  salesPost?: SalesPostDetailResponse;
}

const BookDetailSection = ({ salesPost }: BookDetailSectionProps) => {
  const gradeLabel = salesPost?.qualityGrade
    ? QUALITY_GRADE_LABELS[salesPost.qualityGrade]
    : '—';

  return (
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

      {salesPost && (
        <div className="flex flex-col gap-8 bg-gray-50 py-8">
          <UsedBookPurchaseInfo
            purchaseInfo={{
              ...MOCK_USED_BOOK_PURCHASE_INFO,
              salePrice: salesPost.salePrice,
              shippingFee: salesPost.shippingFee,
              remoteShippingFee: salesPost.remoteShippingFee,
              estimatedPaymentAmount: salesPost.estimatedPaymentAmount,
              sellerName: salesPost.sellerName,
              qualityGradeLabel: gradeLabel,
            }}
          />
          <BookConditionSection
            grade={gradeLabel}
            groups={MOCK_BOOK_CONDITION.groups}
          />
          <SaleAlertSection />
        </div>
      )}
    </>
  );
};

export default BookDetailSection;
