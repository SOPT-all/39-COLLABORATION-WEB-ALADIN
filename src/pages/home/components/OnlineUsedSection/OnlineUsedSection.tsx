import { Link } from 'react-router';

import { ROUTES } from '@constants/routes';

import { useOnlineUsedBooks } from '../../hooks/useOnlineUsedBooks';
import SectionHeader from '../SectionHeader';
import BookCard from './BookCard';

const OnlineUsedSection = () => {
  const { data, isPending, isError, refetch } = useOnlineUsedBooks();
  const books = data?.data?.books ?? [];

  const renderContent = () => {
    if (isPending) {
      return (
        <p
          role="status"
          className="px-(--layout-margin-x) py-24 text-body-14r text-gray-700"
        >
          도서 목록을 불러오는 중입니다.
        </p>
      );
    }

    if (isError && data === undefined) {
      return (
        <div
          role="alert"
          className="flex flex-col items-start gap-8 px-(--layout-margin-x) py-24 text-body-14r text-gray-700"
        >
          <p>도서 목록을 불러오지 못했습니다.</p>
          <button
            type="button"
            className="underline"
            onClick={() => void refetch()}
          >
            다시 시도
          </button>
        </div>
      );
    }

    if (books.length === 0) {
      return (
        <p
          role="status"
          className="px-(--layout-margin-x) py-24 text-body-14r text-gray-700"
        >
          온라인 중고 도서가 없습니다.
        </p>
      );
    }

    return (
      <ul className="flex [scrollbar-width:none] gap-16 overflow-x-auto px-(--layout-margin-x) [&::-webkit-scrollbar]:hidden">
        {books.map((book, index) => {
          const card = (
            <BookCard
              imageSrc={book.coverImageUrl}
              title={book.title || '제목 없음'}
              author={book.authors?.join(', ') || '저자 정보 없음'}
              hasShadow={book.bookId === 1 || book.bookId === 3}
            />
          );
          const canNavigate =
            index === 0 && book.title === '소년이 온다' && book.bookId != null;

          return (
            <li key={book.bookId ?? `book-${index}`} className="shrink-0">
              {canNavigate ? (
                <Link to={`${ROUTES.COMPARE}?bookId=${book.bookId}`}>
                  {card}
                </Link>
              ) : (
                card
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <section aria-label="온라인 중고" className="pb-24">
      <SectionHeader title="온라인 중고" showArrow />
      {renderContent()}
    </section>
  );
};

export default OnlineUsedSection;
