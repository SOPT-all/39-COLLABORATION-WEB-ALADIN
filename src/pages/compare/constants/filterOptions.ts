import type { FilterTab } from '../types/filter';

interface FilterTabItem {
  label: string;
  value: FilterTab;
}

export const FILTER_TABS: FilterTabItem[] = [
  { label: '정렬 순서', value: 'sort' },
  { label: '품질 등급', value: 'quality' },
];

export const QUALITY_GRADE_OPTIONS = ['모든 품질등급', '최상', '상', '중'];

export const SORT_OPTIONS = [
  '저가격순',
  '고가격순',
  '품질등급순',
  '판매자등급순',
  '판매자명순',
  '등록일순',
];

export const FILTER_OPTIONS: Record<FilterTab, string[]> = {
  quality: QUALITY_GRADE_OPTIONS,
  sort: SORT_OPTIONS,
};
