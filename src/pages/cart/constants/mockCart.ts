import sonyeonCover from '@assets/images/books/thumbnail-01.webp';
import iliasCover from '@assets/images/books/thumbnail-03.webp';

export const CART_ITEMS = [
  {
    condition: '중',
    discountRate: 64,
    id: 1,
    imageSrc: sonyeonCover,
    originalPrice: 15000,
    price: 5400,
    quantity: 1,
    sellerId: 1,
    title: '소년이 온다',
  },
  {
    condition: '최상',
    discountRate: 45,
    id: 2,
    imageSrc: iliasCover,
    originalPrice: 33000,
    price: 18000,
    quantity: 1,
    sellerId: 1,
    title: '일리아스',
  },
] as const;

export const FREE_SHIPPING_THRESHOLD = 100000;

export const SELLERS = [{ id: 1, shippingFee: 3500 }] as const;
