import type { UsedBook } from '../types/usedBook';

import UsedBookItem from './UsedBookItem';

interface UsedBookListProps {
  onItemClick?: (usedBook: UsedBook) => void;
  usedBooks: UsedBook[];
}

const UsedBookList = ({ onItemClick, usedBooks }: UsedBookListProps) => (
  <ul className="divide-y divide-gray-200">
    {usedBooks.map((usedBook) => (
      <li key={usedBook.id}>
        <UsedBookItem
          usedBook={usedBook}
          onClick={() => onItemClick?.(usedBook)}
        />
      </li>
    ))}
  </ul>
);

export default UsedBookList;
