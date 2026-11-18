import bookCover from '@assets/images/book-sentence/thumbnail-01.webp';

import SectionHeader from '../SectionHeader';
import BookSentence from './BookSentence';

const BookSentenceSection = () => (
  <section aria-label="이 책의 한 문장">
    <SectionHeader title="이 책의 한 문장" showArrow />
    <div className="py-24">
      <BookSentence
        imageSrc={bookCover}
        sentence="이른 11월의 거리는 밤이 끝났음에도 어둑했고, 식료품점 주인이 놀랄 만큼 바람이 벌써 날을 세웠다."
        title="점원"
      />
    </div>
  </section>
);

export default BookSentenceSection;
