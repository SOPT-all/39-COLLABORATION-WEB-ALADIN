import IcChevronRightSmall from '@assets/svg/arrow/IcChevronRightSmall';

interface KeywordChipProps {
  keyword: string;
}

const KeywordChip = ({ keyword }: KeywordChipProps) => {
  return (
    <span className="inline-flex h-[38px] w-fit shrink-0 items-center gap-8 rounded-full border border-gray-200 bg-white px-16 py-8 text-body-14sb whitespace-nowrap text-gray-950">
      <span className="inline-flex items-center gap-2">
        <span>#</span>
        <span>{keyword}</span>
      </span>
      <IcChevronRightSmall aria-hidden="true" className="shrink-0" />
    </span>
  );
};

export default KeywordChip;
