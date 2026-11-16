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
