import IcChevronDownSmall from '@assets/svg/arrow/IcChevronDownSmall';
import IcChevronRight from '@assets/svg/arrow/IcChevronRight';
import IcTime from '@assets/svg/status/IcTime';

interface SectionHeaderProps {
  title: string;
  showArrow?: boolean;
  time?: string;
}

const SectionHeader = ({
  title,
  showArrow = false,
  time,
}: SectionHeaderProps) => {
  return (
    <div className="w-full bg-white px-(--layout-margin-x) py-12 text-gray-950">
      <div className="flex items-center justify-between">
        <h2 className="text-title-20sb">{title}</h2>
        {time !== undefined && (
          <div className="flex h-[21px] w-[74px] shrink-0 items-center gap-8">
            <span className="flex w-[53px] shrink-0 items-center gap-4 text-body-14m text-navy-500">
              <IcTime aria-hidden="true" className="shrink-0" />
              <span className="w-[35px] shrink-0 whitespace-nowrap">
                {time}
              </span>
            </span>
            <IcChevronDownSmall aria-hidden="true" className="shrink-0" />
          </div>
        )}
        {time === undefined && showArrow && (
          <IcChevronRight
            aria-hidden="true"
            width={10}
            height={18}
            className="shrink-0"
          />
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
