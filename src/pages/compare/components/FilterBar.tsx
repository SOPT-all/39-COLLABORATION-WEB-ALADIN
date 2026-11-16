import ChipToggle from '@components/ChipToggle';

import SortDropdownButton from './SortDropdownButton';

interface FilterBarProps {
  gradeLabel: string;
  isHalfPriceOnly: boolean;
  onGradeClick?: () => void;
  onHalfPriceToggle: () => void;
  onSortClick?: () => void;
  sortLabel: string;
}

const FilterBar = ({
  gradeLabel,
  isHalfPriceOnly,
  onGradeClick,
  onHalfPriceToggle,
  onSortClick,
  sortLabel,
}: FilterBarProps) => (
  <div className="flex items-center justify-between border-b border-gray-200 bg-white px-(--layout-margin-x) py-12">
    <div className="flex items-center gap-12">
      <SortDropdownButton label={sortLabel} onClick={onSortClick} />
      <SortDropdownButton label={gradeLabel} onClick={onGradeClick} />
    </div>
    <ChipToggle
      isSelected={isHalfPriceOnly}
      label="반값택배만 보기"
      onClick={onHalfPriceToggle}
    />
  </div>
);

export default FilterBar;
