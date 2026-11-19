import { isHTTPError } from 'ky';
import { useState } from 'react';
import { generatePath, useNavigate, useSearchParams } from 'react-router';

import bookCover from '@assets/images/books/thumbnail-01.webp';
import BookInfo from '@components/BookInfo';
import TabBar from '@components/TabBar';
import { MOCK_BOOK_INFO } from '@constants/mockBookInfo';
import { ROUTES } from '@constants/routes';

import type { FilterTab } from './types/filter';
import type { UsedBook } from './types/usedBook';

import FilterBar from './components/FilterBar';
import FilterBottomSheet from './components/FilterBottomSheet';
import Pagination from './components/Pagination';
import PriceSummary from './components/PriceSummary';
import UsedBookList from './components/UsedBookList';
import {
  PRICE_SORT_OPTIONS,
  QUALITY_GRADE_OPTIONS,
  SORT_OPTIONS,
} from './constants/filterOptions';
import { MOCK_BOOK_PRICE } from './constants/mockUsedBooks';
import { SELLER_TABS } from './constants/sellerTabs';
import { useBookSellers } from './hooks/useBookSellers';
import { mapBookSellers } from './utils/mapBookSellers';

const DEFAULT_BOOK_ID = 1;
const DETAIL_USED_BOOK_ID = 103;

const parseBookId = (value: string | null) => {
  const bookId = Number(value);

  return /^\d+$/.test(value ?? '') && Number.isSafeInteger(bookId) && bookId > 0
    ? bookId
    : DEFAULT_BOOK_ID;
};

const ComparePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedSellerTab, setSelectedSellerTab] = useState('all');
  const [isHalfPriceOnly, setIsHalfPriceOnly] = useState(false);
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  const [selectedFilterTab, setSelectedFilterTab] = useState<FilterTab>('sort');
  const [selectedSort, setSelectedSort] = useState(SORT_OPTIONS[0]);
  const [appliedSort, setAppliedSort] = useState(SORT_OPTIONS[0]);
  const [selectedQuality, setSelectedQuality] = useState(
    QUALITY_GRADE_OPTIONS[0],
  );

  const openFilterSheet = (tab: FilterTab) => {
    setSelectedFilterTab(tab);
    setIsFilterSheetOpen(true);
  };

  const closeFilterSheet = () => setIsFilterSheetOpen(false);

  const handleHalfPriceToggle = () => setIsHalfPriceOnly((prev) => !prev);

  const handleFilterApply = () => {
    const nextSort = PRICE_SORT_OPTIONS.includes(selectedSort)
      ? selectedSort
      : appliedSort;

    setAppliedSort(nextSort);
    setSelectedSort(nextSort);
    closeFilterSheet();
  };

  const handleFilterClose = () => {
    setSelectedSort(appliedSort);
    closeFilterSheet();
  };

  const bookId = parseBookId(searchParams.get('bookId'));
  const priceSort = appliedSort === '고가격순' ? 'HIGHEST' : 'LOWEST';
  const { data, error, isError, isPending, refetch } = useBookSellers({
    bookId,
    priceSort,
  });
  const usedBooks = data?.data ? mapBookSellers(data.data) : [];

  const isBookNotFound = isHTTPError(error) && error.response.status === 404;

  const getUsedBookDetailPath = (usedBook: UsedBook) =>
    usedBook.id === DETAIL_USED_BOOK_ID
      ? generatePath(ROUTES.DETAIL, { bookId: String(usedBook.id) })
      : undefined;

  const handleUsedBookClick = (usedBook: UsedBook) => {
    const detailPath = getUsedBookDetailPath(usedBook);

    if (detailPath) navigate(detailPath);
  };

  return (
    <div className="flex flex-col gap-8 bg-gray-50">
      <section
        aria-label="도서 정보"
        className="flex flex-col gap-24 bg-white px-(--layout-margin-x) py-24"
      >
        <img
          src={bookCover}
          alt={`${MOCK_BOOK_INFO.title} 표지`}
          width={280}
          height={400}
          className="mx-auto h-[400px] w-[280px] object-cover"
        />
        <BookInfo {...MOCK_BOOK_INFO} />
      </section>
      <PriceSummary
        listPrice={MOCK_BOOK_PRICE.listPrice}
        mileage={MOCK_BOOK_PRICE.mileage}
        salePrice={MOCK_BOOK_PRICE.salePrice}
      />

      <section aria-label="중고 판매 목록">
        <div className="sticky top-[3.5rem] z-[9] bg-white">
          <TabBar
            countLabel="99+"
            items={SELLER_TABS}
            selectedValue={selectedSellerTab}
            onValueChange={setSelectedSellerTab}
          />
          <div className="border-b border-gray-200 px-(--layout-margin-x)">
            <FilterBar
              gradeLabel="모든 품질 등급"
              isHalfPriceOnly={isHalfPriceOnly}
              sortLabel={appliedSort}
              onGradeClick={() => openFilterSheet('quality')}
              onHalfPriceToggle={handleHalfPriceToggle}
              onSortClick={() => openFilterSheet('sort')}
            />
          </div>
        </div>

        {isPending ? (
          <p
            role="status"
            className="bg-white px-(--layout-margin-x) py-24 text-body-14r text-gray-700"
          >
            판매 목록을 불러오는 중입니다.
          </p>
        ) : isError && !data ? (
          <div
            role="alert"
            className="flex flex-col items-start gap-8 bg-white px-(--layout-margin-x) py-24 text-body-14r text-gray-700"
          >
            <p>
              {isBookNotFound
                ? '도서 정보를 찾을 수 없습니다.'
                : '판매 목록을 불러오지 못했습니다.'}
            </p>
            {!isBookNotFound && (
              <button
                type="button"
                className="underline"
                onClick={() => void refetch()}
              >
                다시 시도
              </button>
            )}
          </div>
        ) : usedBooks.length === 0 ? (
          <p
            role="status"
            className="bg-white px-(--layout-margin-x) py-24 text-body-14r text-gray-700"
          >
            판매 중인 상품이 없습니다.
          </p>
        ) : (
          <>
            <UsedBookList
              getDetailPath={getUsedBookDetailPath}
              usedBooks={usedBooks}
              onItemClick={handleUsedBookClick}
            />
            <Pagination currentPage={1} totalPage={23} />
          </>
        )}
      </section>
      <FilterBottomSheet
        isHalfPriceOnly={isHalfPriceOnly}
        isOpen={isFilterSheetOpen}
        selectedQuality={selectedQuality}
        selectedSort={selectedSort}
        selectedTab={selectedFilterTab}
        onApply={handleFilterApply}
        onClose={handleFilterClose}
        onHalfPriceToggle={handleHalfPriceToggle}
        onQualityOptionClick={setSelectedQuality}
        onSortOptionClick={setSelectedSort}
        onTabClick={setSelectedFilterTab}
      />
    </div>
  );
};

export default ComparePage;
