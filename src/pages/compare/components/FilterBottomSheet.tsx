import type { KeyboardEvent } from 'react';

import { useEffect, useRef } from 'react';

import IcReset from '@assets/svg/arrow/IcReset';
import Button from '@components/Button';
import ChipToggle from '@components/ChipToggle';

import type { FilterTab } from '../types/filter';

import { FILTER_OPTIONS, FILTER_TABS } from '../constants/filterOptions';
import FilterOptionItem from './FilterOptionItem';

interface FilterBottomSheetProps {
  isHalfPriceOnly: boolean;
  isOpen: boolean;
  onApply: () => void;
  onClose: () => void;
  onHalfPriceToggle: () => void;
  onQualityOptionClick: (option: string) => void;
  onSortOptionClick: (option: string) => void;
  onTabClick: (tab: FilterTab) => void;
  selectedQuality: string;
  selectedSort: string;
  selectedTab: FilterTab;
}

const FilterBottomSheet = ({
  isHalfPriceOnly,
  isOpen,
  onApply,
  onClose,
  onHalfPriceToggle,
  onQualityOptionClick,
  onSortOptionClick,
  onTabClick,
  selectedQuality,
  selectedSort,
  selectedTab,
}: FilterBottomSheetProps) => {
  const sheetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const { body, documentElement } = document;

    documentElement.style.scrollbarGutter = 'stable';
    body.style.overflow = 'hidden';
    sheetRef.current?.focus({ preventScroll: true });

    return () => {
      documentElement.style.scrollbarGutter = '';
      body.style.overflow = '';
      previousFocus?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      onClose();
      return;
    }

    if (event.key !== 'Tab') return;

    const sheet = event.currentTarget;
    const buttons = sheet.querySelectorAll<HTMLButtonElement>(
      'button:not(:disabled)',
    );
    const firstButton = buttons[0];
    const lastButton = buttons[buttons.length - 1];
    const { activeElement } = document;

    if (
      event.shiftKey &&
      (activeElement === firstButton || activeElement === sheet)
    ) {
      event.preventDefault();
      lastButton.focus();
    } else if (!event.shiftKey && activeElement === lastButton) {
      event.preventDefault();
      firstButton.focus();
    }
  };

  return (
    <div inert={!isOpen} className="fixed inset-0 z-30">
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-dim-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <section
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label="필터"
        tabIndex={-1}
        className={`absolute inset-x-0 bottom-0 mx-auto w-[375px] rounded-t-8 bg-white pt-12 transition-transform duration-300 ease-out outline-none ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
        onKeyDown={handleKeyDown}
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
          {FILTER_OPTIONS[selectedTab].map((option) => (
            <FilterOptionItem
              key={option}
              isSelected={
                option ===
                (selectedTab === 'sort' ? selectedSort : selectedQuality)
              }
              label={option}
              onClick={() =>
                selectedTab === 'sort'
                  ? onSortOptionClick(option)
                  : onQualityOptionClick(option)
              }
            />
          ))}
        </ul>

        <div className="flex items-center gap-16 border-t border-gray-200 px-16 pt-16 pb-40">
          <button
            type="button"
            disabled
            className="flex items-center gap-4 text-body-14m text-gray-700 disabled:cursor-default"
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
};

export default FilterBottomSheet;
