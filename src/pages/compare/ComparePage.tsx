import { useState } from 'react';
import { generatePath, useNavigate } from 'react-router';

import TabBar from '@components/TabBar';
import { ROUTES } from '@constants/routes';

import type { UsedBook } from './types/usedBook';

import FilterBar from './components/FilterBar';
import Pagination from './components/Pagination';
import PriceSummary from './components/PriceSummary';
import UsedBookList from './components/UsedBookList';
import { MOCK_BOOK_PRICE, MOCK_USED_BOOKS } from './constants/mockUsedBooks';
import { SELLER_TABS } from './constants/sellerTabs';

const ComparePage = () => {
  const navigate = useNavigate();
  const [selectedSellerTab, setSelectedSellerTab] = useState('all');
  const [isHalfPriceOnly, setIsHalfPriceOnly] = useState(false);

  const handleUsedBookClick = (usedBook: UsedBook) => {
    if (usedBook.id !== MOCK_USED_BOOKS[0].id) return;
    navigate(generatePath(ROUTES.DETAIL, { bookId: String(usedBook.id) }));
  };

  return (
    <div className="flex flex-col gap-8 bg-gray-50">
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
              sortLabel="저가격순"
              onHalfPriceToggle={() => setIsHalfPriceOnly((prev) => !prev)}
            />
          </div>
        </div>

        <UsedBookList
          usedBooks={MOCK_USED_BOOKS}
          onItemClick={handleUsedBookClick}
        />
        <Pagination currentPage={1} totalPage={23} />
      </section>
    </div>
  );
};

export default ComparePage;
