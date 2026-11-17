import bookCover from '@assets/images/book-sentence/thumbnail-01.webp';
import SearchField from '@components/SearchField';

import BookSentence from './components/BookSentence';
import EditorPickSection from './components/EditorPickSection';
import Navbar from './components/Navbar';
import NowIssueSection from './components/NowIssueSection';
import SectionHeader from './components/SectionHeader';
import TopBannerAd from './components/TopBannerAd';

const HomePage = () => {
  return (
    <div>
      <div className="px-(--layout-margin-x)">
        <SearchField keyword="알라딘 만권당 삼성카드" variant="home" />
      </div>
      <Navbar />
      <div className="px-(--layout-margin-x) py-16">
        <TopBannerAd />
      </div>
      <EditorPickSection />
      <NowIssueSection />
      <SectionHeader title="이 책의 한 문장" showArrow />
      <div className="py-24">
        <BookSentence
          imageSrc={bookCover}
          sentence="이른 11월의 거리는 밤이 끝났음에도 어둑했고, 식료품점 주인이 놀랄 만큼 바람이 벌써 날을 세웠다."
          title="점원"
        />
      </div>
    </div>
  );
};

export default HomePage;
