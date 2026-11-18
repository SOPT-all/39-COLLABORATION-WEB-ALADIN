import type { BookPrice, UsedBook } from '../types/usedBook';

export const MOCK_BOOK_PRICE: BookPrice = {
  listPrice: 15000,
  salePrice: 13500,
  mileage: 750,
};

export const MOCK_BOOK_INFO = {
  author: '한강(지은이)',
  publishedAt: '2014-05-19',
  publisher: '창비',
  subtitle: '2024 노벨문학상 수상작가',
  title: '소년이 온다',
};

export const MOCK_USED_BOOKS: UsedBook[] = [
  {
    id: 1,
    title: '[중고] 소년이 온다',
    sellerName: '우나야하',
    sellerGrade: 'professional',
    condition: 'fair',
    discountRate: 64,
    price: 5400,
    shippingFee: 3500,
    freeShippingThreshold: 100000,
  },
  {
    id: 2,
    title: '[중고] 소년이 온다',
    sellerName: '뿌릿야하',
    sellerGrade: 'gold',
    condition: 'best',
    discountRate: 10,
    price: 13500,
    shippingFee: 3500,
    freeShippingThreshold: 100000,
  },
];
