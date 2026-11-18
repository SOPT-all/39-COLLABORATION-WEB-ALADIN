import SectionHeader from '../SectionHeader';
import KeywordChip from './KeywordChip';

const KEYWORDS = [
  '노벨문학상',
  '홍또닛',
  '정재승',
  '하루키 신작',
  '트렌드코리아',
  '퍼플필',
];

const KeywordShortcutSection = () => (
  <section aria-label="키워드 바로가기" className="pb-24">
    <SectionHeader title="키워드 바로가기" />
    <ul className="flex flex-wrap gap-x-8 gap-y-[5px] px-(--layout-margin-x) py-4">
      {KEYWORDS.map((keyword) => (
        <li key={keyword}>
          <KeywordChip keyword={keyword} />
        </li>
      ))}
    </ul>
  </section>
);

export default KeywordShortcutSection;
