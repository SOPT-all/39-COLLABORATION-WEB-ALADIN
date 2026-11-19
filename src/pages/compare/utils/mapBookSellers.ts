import type {
  BookSellersResponse,
  SellerResponse,
} from '@apis/generated/dataContracts';

import type { BookCondition, SellerGrade, UsedBook } from '../types/usedBook';

const REQUIRED_SELLER_FIELDS = [
  'usedBookId',
  'sellerName',
  'sellerType',
  'grade',
  'price',
  'discountRate',
  'deliveryFee',
  'freeDeliveryThreshold',
] as const;

type CompleteSeller = Required<
  Pick<SellerResponse, (typeof REQUIRED_SELLER_FIELDS)[number]>
>;

const SELLER_GRADE_BY_TYPE: Partial<
  Record<CompleteSeller['sellerType'], SellerGrade>
> = {
  PROFESSIONAL: 'professional',
  GOLD: 'gold',
};

const BOOK_CONDITION_BY_GRADE: Record<CompleteSeller['grade'], BookCondition> =
  {
    BEST: 'best',
    GOOD: 'good',
    NORMAL: 'fair',
  };

const isCompleteSeller = (seller: SellerResponse): seller is CompleteSeller =>
  REQUIRED_SELLER_FIELDS.every((field) => seller[field] != null);

export const mapBookSellers = ({
  salePostTitle = '',
  sellers = [],
}: BookSellersResponse): UsedBook[] =>
  sellers.filter(isCompleteSeller).map((seller) => ({
    id: seller.usedBookId,
    title: salePostTitle,
    sellerName: seller.sellerName,
    sellerGrade: SELLER_GRADE_BY_TYPE[seller.sellerType],
    condition: BOOK_CONDITION_BY_GRADE[seller.grade],
    discountRate: seller.discountRate,
    price: seller.price,
    shippingFee: seller.deliveryFee,
    freeShippingThreshold: seller.freeDeliveryThreshold,
  }));
