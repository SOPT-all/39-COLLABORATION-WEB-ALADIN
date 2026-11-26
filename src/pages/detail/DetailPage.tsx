import { isHTTPError } from 'ky';
import { useParams } from 'react-router';

import BookDetailSection from './components/BookDetailSection/BookDetailSection';
import BookReviewsSection from './components/BookReviewsSection/BookReviewsSection';
import DetailPurchaseBar from './components/DetailPurchaseBar/DetailPurchaseBar';
import { useUsedBookDetail } from './hooks/useUsedBookDetail';

const DetailPage = () => {
  const { bookId: salesPostParam } = useParams<'bookId'>();
  const parsedSalesPostId = Number(salesPostParam);
  const salesPostId =
    /^\d+$/.test(salesPostParam ?? '') &&
    Number.isSafeInteger(parsedSalesPostId) &&
    parsedSalesPostId > 0
      ? parsedSalesPostId
      : undefined;
  const { data, error, isPending } = useUsedBookDetail(salesPostId);

  if (
    salesPostId === undefined ||
    (isHTTPError(error) && error.response.status === 404)
  ) {
    return <p role="alert">중고 판매 상품을 찾을 수 없습니다.</p>;
  }

  if (isPending) {
    return (
      <>
        <BookDetailSection />
        <p role="status" className="min-h-[calc(100svh-3.5rem)]">
          중고 상품 정보를 불러오는 중입니다.
        </p>
      </>
    );
  }

  if (!data) {
    return <p role="alert">중고 상품 정보를 불러오지 못했습니다.</p>;
  }

  return (
    <>
      <BookDetailSection salesPost={data} />
      <BookReviewsSection />
      <DetailPurchaseBar />
    </>
  );
};

export default DetailPage;
