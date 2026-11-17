import SearchField from '@components/SearchField';

import Navbar from './components/Navbar';
import NowIssueSection from './components/NowIssueSection';

const HomePage = () => {
  return (
    <div className="pb-40">
      <div className="px-(--layout-margin-x)">
        <SearchField keyword="알라딘 만권당 삼성카드" variant="home" />
      </div>
      <Navbar />
      <NowIssueSection />
    </div>
  );
};

export default HomePage;
