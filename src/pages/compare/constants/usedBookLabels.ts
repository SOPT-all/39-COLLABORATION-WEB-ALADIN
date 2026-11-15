import type { BookCondition, SellerGrade } from '../types/usedBook';

export const SELLER_GRADE_LABEL: Record<SellerGrade, string> = {
  professional: '전문셀러',
  gold: '골드셀러',
};

export const BOOK_CONDITION_LABEL: Record<BookCondition, string> = {
  best: '최상',
  good: '상',
  fair: '중',
};
