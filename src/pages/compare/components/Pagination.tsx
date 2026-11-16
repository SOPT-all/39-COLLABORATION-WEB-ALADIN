import IcChevronLast from '@assets/svg/arrow/IcChevronLast';
import IcChevronNext from '@assets/svg/arrow/IcChevronNext';

interface PaginationProps {
  currentPage: number;
  totalPage: number;
}

const Pagination = ({ currentPage, totalPage }: PaginationProps) => (
  <nav
    aria-label="페이지 이동"
    className="flex items-center justify-between bg-white px-(--layout-margin-x) py-16"
  >
    <div aria-hidden="true" className="flex-1" />
    <p className="text-body-14m text-gray-700">
      {currentPage} / {totalPage}
    </p>
    <div className="flex flex-1 justify-end gap-4">
      <button type="button" aria-label="다음 페이지">
        <IcChevronNext aria-hidden="true" />
      </button>
      <button type="button" aria-label="마지막 페이지">
        <IcChevronLast aria-hidden="true" />
      </button>
    </div>
  </nav>
);

export default Pagination;
