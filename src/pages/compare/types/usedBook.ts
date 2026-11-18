export type SellerGrade = 'professional' | 'gold';

export type BookCondition = 'best' | 'good' | 'fair';

export interface BookPrice {
  listPrice: number;
  salePrice: number;
  mileage: number;
}

export interface UsedBook {
  id: number;
  title: string;
  sellerName: string;
  sellerGrade?: SellerGrade;
  condition: BookCondition;
  discountRate: number;
  price: number;
  shippingFee: number;
  freeShippingThreshold: number;
}
