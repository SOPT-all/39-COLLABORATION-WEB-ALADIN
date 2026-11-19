import type { SalesPostDetailResponse } from '@apis/generated/dataContracts';

export interface UsedBookPurchaseInfoData extends Pick<
  SalesPostDetailResponse,
  | 'salePrice'
  | 'shippingFee'
  | 'remoteShippingFee'
  | 'estimatedPaymentAmount'
  | 'sellerName'
> {
  listPrice: number;
  discountRate: number;
  newBookSalePrice: number;
  newBookMileage: number;
  estimatedDispatchHours: number;
  minimumOrderAmount: number | null;
  qualityGradeLabel: string;
}
