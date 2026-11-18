export interface UsedBookPurchaseInfoData {
  listPrice: number;
  salePrice: number;
  discountRate: number;
  shippingFee: number;
  remoteShippingFee: number;
  estimatedPaymentAmount: number;
  newBookSalePrice: number;
  newBookMileage: number;
  estimatedDispatchHours: number;
  minimumOrderAmount: number | null;
  sellerName: string;
  qualityGradeLabel: string;
}
