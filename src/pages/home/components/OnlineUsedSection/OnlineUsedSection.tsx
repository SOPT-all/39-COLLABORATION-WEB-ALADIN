import { Link } from 'react-router';

import firstCover from '@assets/images/books/thumbnail-01.webp';
import secondCover from '@assets/images/books/thumbnail-02.webp';
import thirdCover from '@assets/images/books/thumbnail-03.webp';
import { ROUTES } from '@constants/routes';

import SectionHeader from '../SectionHeader';
import BookCard from './BookCard';

const BOOKS = [
  { imageSrc: firstCover, title: '소년이 온다', author: '한강', hasShadow: true },
  { imageSrc: secondCover, title: '에로스, 달콤쌉쌀한', author: '앤 카슨' },
  { imageSrc: thirdCover, title: '일리아스', author: '호메로스', hasShadow: true },
];

const OnlineUsedSection = () => (
  <section aria-label="온라인 중고" className="pb-24">
    <SectionHeader title="온라인 중고" showArrow />
    <ul className="flex [scrollbar-width:none] gap-16 overflow-x-auto px-(--layout-margin-x) [&::-webkit-scrollbar]:hidden">
      {BOOKS.map((book, index) => (
        <li key={book.title} className="shrink-0">
          {index === 0 ? (
            <Link to={ROUTES.COMPARE}>
              <BookCard {...book} />
            </Link>
          ) : (
            <BookCard {...book} />
          )}
        </li>
      ))}
    </ul>
  </section>
);

export default OnlineUsedSection;
