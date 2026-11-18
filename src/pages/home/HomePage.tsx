import SearchField from '@components/SearchField';

import BookSentenceSection from './components/BookSentenceSection/BookSentenceSection';
import EditorPickSection from './components/EditorPickSection';
import HomeShortcutSection from './components/HomeShortcutSection';
import KeywordShortcutSection from './components/KeywordShortcutSection/KeywordShortcutSection';
import Navbar from './components/Navbar';
import NowIssueSection from './components/NowIssueSection/NowIssueSection';
import OnlineUsedSection from './components/OnlineUsedSection/OnlineUsedSection';
import RealtimeRankSection from './components/RealtimeRankSection/RealtimeRankSection';
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
      <HomeShortcutSection />
      <EditorPickSection />
      <RealtimeRankSection />
      <KeywordShortcutSection />
      <NowIssueSection />
      <OnlineUsedSection />
      <BookSentenceSection />
    </div>
  );
};

export default HomePage;
