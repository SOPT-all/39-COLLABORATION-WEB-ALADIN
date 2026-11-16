import IcReset from '@assets/svg/arrow/IcReset';
import Button from '@components/Button';
import ChipToggle from '@components/ChipToggle';

import type { FilterTab } from '../types/filter';

import { FILTER_TABS } from '../constants/filterOptions';
import FilterOptionItem from './FilterOptionItem';

interface FilterBottomSheetProps {
  isHalfPriceOnly: boolean;
  isOpen: boolean;
  onApply: () => void;
  onClose: () => void;
  onHalfPriceToggle: () => void;
  onOptionClick: (option: string) => void;
  onReset: () => void;
  onTabClick: (tab: FilterTab) => void;
  options: string[];
  selectedOption: string;
  selectedTab: FilterTab;
}

const FilterBottomSheet = ({
  isHalfPriceOnly,
  isOpen,
  onApply,
  onClose,
  onHalfPriceToggle,
  onOptionClick,
  onReset,
  onTabClick,
  options,
  selectedOption,
  selectedTab,
}: FilterBottomSheetProps) => (
  <div inert={!isOpen} className="fixed inset-0 z-30">
    <div
      aria-hidden="true"
      className={`absolute inset-0 bg-dim-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    />
    <section
      role="dialog"
      aria-modal="true"
      aria-label="필터"
      className={`absolute inset-x-0 bottom-0 mx-auto w-[375px] rounded-t-8 bg-white pt-12 transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="flex items-center justify-between border-b border-gray-200 px-16 py-12">
        <div className="flex gap-12">
          {FILTER_TABS.map(({ label, value }) => (
            <button
              key={value}
              type="button"
              aria-pressed={selectedTab === value}
              className={`text-body-16sb ${selectedTab === value ? 'text-pink-500' : 'text-gray-500'}`}
              onClick={() => onTabClick(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <ChipToggle
          isSelected={isHalfPriceOnly}
          label="반값택배만 보기"
          onClick={onHalfPriceToggle}
        />
      </div>

      <ul className="h-[294px]">
        {options.map((option) => (
          <FilterOptionItem
            key={option}
            isSelected={option === selectedOption}
            label={option}
            onClick={() => onOptionClick(option)}
          />
        ))}
      </ul>

      <div className="flex items-center gap-16 border-t border-gray-200 px-16 pt-16 pb-40">
        <button
          type="button"
          className="flex items-center gap-4 text-body-14m text-gray-700"
          onClick={onReset}
        >
          초기화
          <IcReset aria-hidden="true" />
        </button>
        <Button className="flex-1" onClick={onApply}>
          필터 적용하기
        </Button>
      </div>
    </section>
  </div>
);

export default FilterBottomSheet;
