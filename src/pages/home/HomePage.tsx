import SearchField from '@components/SearchField';

import Navbar from './components/Navbar';

const HomePage = () => {
  return (
    <div className="pb-40">
      <div className="px-(--layout-margin-x)">
        <SearchField
          className="pr-16 opacity-50 [&]:bg-gray-100 [&>p]:text-body-14m [&>span]:size-24 [&>span]:pl-0"
          keyword="알라딘 만권당 삼성카드"
        />
      </div>
      <Navbar />
    </div>
  );
};

export default HomePage;
