import IcChevronDownGray from '@assets/svg/arrow/IcChevronDownGray';
import IcBestseller from '@assets/svg/category/IcBestseller';
import IcGenres from '@assets/svg/category/IcGenres';
import IcNewBooks from '@assets/svg/category/IcNewBooks';
import IcUsedBooks from '@assets/svg/category/IcUsedBooks';

const SHORTCUTS = [
  { label: '중고도서', Icon: IcUsedBooks },
  { label: '베스트', Icon: IcBestseller },
  { label: '신간', Icon: IcNewBooks },
  { label: '분야', Icon: IcGenres },
];

const HomeShortcutSection = () => {
  return (
    <section
      aria-label="홈 바로가기"
      className="w-full bg-white px-(--layout-margin-x) pb-12 text-caption-12r text-gray-950"
    >
      <ul className="flex justify-between pb-8">
        {SHORTCUTS.map(({ label, Icon }) => (
          <li key={label} className="flex w-[70px] flex-col items-center">
            <div className="flex h-[30px] w-[50px] items-center justify-center">
              <Icon
                aria-hidden="true"
                width={32}
                height={32}
                className="shrink-0"
              />
            </div>
            <span className="flex h-[22px] items-center justify-center">
              {label}
            </span>
          </li>
        ))}
      </ul>
      <div className="border-t border-gray-200 py-12">
        <div className="flex h-24 items-center justify-center gap-4">
          <span className="h-[18px] w-[45px] shrink-0 text-center text-caption-12r text-gray-950">
            혜택·기타
          </span>
          <IcChevronDownGray aria-hidden="true" width={24} height={24} />
        </div>
      </div>
    </section>
  );
};

export default HomeShortcutSection;
