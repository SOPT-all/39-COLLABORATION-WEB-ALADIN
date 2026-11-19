import type { UsedBook } from '../types/usedBook';

import UsedBookItem from './UsedBookItem';

interface UsedBookListProps {
  getDetailPath?: (usedBook: UsedBook) => string | undefined;
  onItemClick?: (usedBook: UsedBook) => void;
  usedBooks: UsedBook[];
}

const UsedBookList = ({
  getDetailPath,
  onItemClick,
  usedBooks,
}: UsedBookListProps) => (
  <ul>
    {usedBooks.map((usedBook) => (
      <li key={usedBook.id}>
        <UsedBookItem
          detailPath={getDetailPath?.(usedBook)}
          usedBook={usedBook}
          onClick={() => onItemClick?.(usedBook)}
        />
      </li>
    ))}
  </ul>
);

export default UsedBookList;
