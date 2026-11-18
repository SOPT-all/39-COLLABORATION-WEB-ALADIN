import { useState } from 'react';
import { generatePath, useNavigate } from 'react-router';

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
import { MOCK_BOOK_PRICE, MOCK_USED_BOOKS } from './constants/mockUsedBooks';
import { SELLER_TABS } from './constants/sellerTabs';

const ComparePage = () => {
  const navigate = useNavigate();
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

  const sortedUsedBooks = [...MOCK_USED_BOOKS].sort((a, b) =>
    appliedSort === '고가격순' ? b.price - a.price : a.price - b.price,
  );

  const getUsedBookDetailPath = (usedBook: UsedBook) =>
    usedBook.id === MOCK_USED_BOOKS[0].id
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

        <UsedBookList
          getDetailPath={getUsedBookDetailPath}
          usedBooks={sortedUsedBooks}
          onItemClick={handleUsedBookClick}
        />
        <Pagination currentPage={1} totalPage={23} />
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
