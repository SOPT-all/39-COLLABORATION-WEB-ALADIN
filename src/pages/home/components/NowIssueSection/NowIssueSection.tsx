import bookCover from '@assets/images/now-issue/thumbnail-01.webp';

import SectionHeader from '../SectionHeader';
import BarIndicator from './BarIndicator';
import NowIssueCard from './NowIssueCard';

const NOW_ISSUE_BOOK = {
  coverSrc: bookCover,
  title: '안녕, 엄니',
  badge: '화제의 신간',
  description: '‘피터팬 아빠’ 전경철 작가의 마지막 이야기',
};

const NowIssueSection = () => {
  return (
    <section aria-label="지금, 화제의 책" className="bg-white pb-24">
      <SectionHeader title="지금, 화제의 책" />
      <div className="flex flex-col items-center gap-24">
        <div className="flex w-full justify-center gap-8 overflow-hidden">
          <div
            aria-hidden="true"
            className="h-[192px] w-[343px] shrink-0 rounded-8 bg-gray-50"
          />
          <NowIssueCard {...NOW_ISSUE_BOOK} />
          <div
            aria-hidden="true"
            className="h-[192px] w-[343px] shrink-0 rounded-8 bg-gray-50"
          />
        </div>
        <BarIndicator />
      </div>
    </section>
  );
};

export default NowIssueSection;
