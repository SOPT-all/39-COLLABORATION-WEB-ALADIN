import firstCover from '@assets/images/top10/thumbnail-01.webp';
import secondCover from '@assets/images/top10/thumbnail-02.webp';

import SectionHeader from '../SectionHeader';
import BookRankItem from './BookRankItem';

const RealtimeRankSection = () => (
  <section aria-label="실시간 클릭 Top 10" className="pb-24">
    <SectionHeader title="실시간 클릭 Top 10" time="10:02" />
    <ul className="flex flex-col gap-2 pt-2">
      <li>
        <BookRankItem
          imageSrc={firstCover}
          title="2026 노벨문학상 앤 카슨"
          change="hot"
        />
      </li>
      <li>
        <BookRankItem
          imageSrc={secondCover}
          rank={1}
          title="돈으로 자유를 사라"
          change="same"
        />
      </li>
    </ul>
  </section>
);

export default RealtimeRankSection;
