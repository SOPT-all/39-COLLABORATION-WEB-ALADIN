/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CartItemCreateRequest {
  /**
   * 중고 도서 판매글 ID
   * @format int64
   * @exclusiveMin 0
   * @example 11
   */
  usedBookSalesPostId: number;
}

export interface CommonResponseVoid {
  /** @format int32 */
  status?: number;
  code?: string;
  message?: string;
  data?: any;
}

export interface CommonResponseReviewLikeResponse {
  /** @format int32 */
  status?: number;
  code?: string;
  message?: string;
  data?: ReviewLikeResponse;
}

export interface ReviewLikeResponse {
  /**
   * 리뷰 ID
   * @format int64
   * @example 1
   */
  reviewId?: number;
  /**
   * 변경 후 공감 여부. true면 공감한 상태(버튼이 눌린 모양)
   * @example true
   */
  isLiked?: boolean;
}

export interface CommonResponseSalesPostDetailResponse {
  /** @format int32 */
  status?: number;
  code?: string;
  message?: string;
  data?: SalesPostDetailResponse;
}

export interface SalesPostDetailResponse {
  /**
   * 중고 판매글 ID
   * @format int64
   * @example 103
   */
  salesPostId?: number;
  /**
   * 도서 ID
   * @format int64
   * @example 1
   */
  bookId?: number;
  /**
   * 판매자 ID
   * @format int64
   * @example 30
   */
  sellerId?: number;
  /**
   * 판매자 표시 이름
   * @example "우나야하"
   */
  sellerName?: string;
  /**
   * 판매가(원)
   * @format int32
   * @example 5400
   */
  salePrice?: number;
  /**
   * 일반 배송비(원)
   * @format int32
   * @example 3500
   */
  shippingFee?: number;
  /**
   * 도서·산간 지역 전체 배송비(원)
   * @format int32
   * @example 6200
   */
  remoteShippingFee?: number;
  /**
   * 판매가와 일반 배송비를 합한 예상 결제액(원)
   * @format int32
   * @example 8900
   */
  estimatedPaymentAmount?: number;
  /**
   * 품질 등급 코드
   * @example "FAIR"
   */
  qualityGrade?: "EXCELLENT" | "GOOD" | "FAIR";
  /**
   * 판매글에 저장된 상태 설명 원문
   * @example "중 등급. 사용감 많음."
   */
  conditionDescription?: string;
  /**
   * 판매 완료 여부
   * @example false
   */
  isSold?: boolean;
}

export interface CartItemResponse {
  /**
   * 장바구니 상품 ID
   * @format int64
   * @example 1
   */
  cartItemId?: number;
  /**
   * 중고 도서 판매글 ID
   * @format int64
   * @example 11
   */
  usedBookSalesPostId?: number;
  /**
   * 도서 ID
   * @format int64
   * @example 1
   */
  bookId?: number;
  /**
   * 도서명
   * @example "소년이 온다"
   */
  bookTitle?: string;
  /**
   * 도서 표지 이미지 URL
   * @example "https://example.com/books/1.jpg"
   */
  bookImageUrl?: string;
  /**
   * 도서 상태
   * @example "GOOD"
   */
  bookCondition?: "EXCELLENT" | "GOOD" | "FAIR";
  /**
   * 정상가
   * @format int32
   * @example 15000
   */
  originalPrice?: number;
  /**
   * 판매가
   * @format int32
   * @example 5400
   */
  salePrice?: number;
  /**
   * 할인율
   * @format int32
   * @example 64
   */
  discountRate?: number;
}

export interface CartReadResponse {
  /**
   * 장바구니 ID
   * @format int64
   * @example 1
   */
  cartId?: number;
  /** 판매자별 장바구니 상품 목록 */
  sellerGroups?: SellerGroupResponse[];
  /**
   * 상품 정상가 합계
   * @format int32
   * @example 48000
   */
  totalOriginalPrice?: number;
  /**
   * 총 할인 금액
   * @format int32
   * @example 24600
   */
  totalDiscountPrice?: number;
  /**
   * 총 배송비
   * @format int32
   * @example 3500
   */
  totalDeliveryFee?: number;
  /**
   * 최종 결제 금액
   * @format int32
   * @example 26900
   */
  totalPaymentPrice?: number;
  /**
   * 장바구니 상품 수
   * @format int32
   * @example 2
   */
  totalBookCount?: number;
  /**
   * 전체 무료배송 여부
   * @example false
   */
  isFreeDelivery?: boolean;
}

export interface CommonResponseCartReadResponse {
  /** @format int32 */
  status?: number;
  code?: string;
  message?: string;
  data?: CartReadResponse;
}

export interface SellerGroupResponse {
  /**
   * 판매자 ID
   * @format int64
   * @example 1
   */
  sellerId?: number;
  /**
   * 판매자명
   * @example "우냐야하"
   */
  sellerName?: string;
  /**
   * 편의점 배송 가능 여부
   * @example true
   */
  isCvsDelivery?: boolean;
  /**
   * 적용 배송비
   * @format int32
   * @example 3500
   */
  deliveryFee?: number;
  /**
   * 무료배송 기준 금액
   * @format int32
   * @example 100000
   */
  freeDeliveryThreshold?: number;
  /** 판매자의 장바구니 상품 목록 */
  items?: CartItemResponse[];
}

export interface BookSellersResponse {
  /**
   * 도서 ID
   * @format int64
   * @example 1
   */
  bookId?: number;
  /**
   * [중고] + 책 이름으로 구성된 판매글 제목
   * @example "[중고] 소년이 온다"
   */
  salePostTitle?: string;
  /** 해당 도서의 중고 판매 목록 */
  sellers?: SellerResponse[];
}

export interface CommonResponseBookSellersResponse {
  /** @format int32 */
  status?: number;
  code?: string;
  message?: string;
  data?: BookSellersResponse;
}

export interface SellerResponse {
  /**
   * 중고 판매글 ID
   * @format int64
   * @example 10
   */
  usedBookId?: number;
  /**
   * 판매자 ID
   * @format int64
   * @example 3
   */
  sellerId?: number;
  /**
   * 판매자 이름
   * @example "알라딘 중고서점"
   */
  sellerName?: string;
  /**
   * 판매자 등급 (GENERAL: 일반, PROFESSIONAL: 전문셀러, GOLD: 골드셀러)
   * @example "GOLD"
   */
  sellerType?: "GENERAL" | "PROFESSIONAL" | "GOLD";
  /**
   * 중고 도서 품질 등급
   * @example "BEST"
   */
  grade?: "BEST" | "GOOD" | "NORMAL";
  /**
   * 판매 가격(원)
   * @format int32
   * @example 5400
   */
  price?: number;
  /**
   * 정가 대비 할인율(%)
   * @format int32
   * @example 64
   */
  discountRate?: number;
  /**
   * 배송비(원)
   * @format int32
   * @example 3500
   */
  deliveryFee?: number;
  /**
   * 무료배송 기준 금액(원)
   * @format int32
   * @example 100000
   */
  freeDeliveryThreshold?: number;
  /**
   * 편의점 배송 가능 여부
   * @example true
   */
  isCvsDelivery?: boolean;
  /**
   * 판매 여부
   * @example false
   */
  isSold?: boolean;
}

export interface BookResponse {
  /**
   * 중고 가격 비교 대상 도서 ID
   * @format int64
   * @example 1
   */
  bookId?: number;
  /**
   * 도서 표지 이미지 URL
   * @example "https://example.com/books/1.jpg"
   */
  coverImageUrl?: string;
  /**
   * 도서 제목
   * @example "소년이 온다"
   */
  title?: string;
  /**
   * 저자명 목록
   * @example ["한강"]
   */
  authors?: string[];
}

export interface CommonResponseOnlineUsedBookListResponse {
  /** @format int32 */
  status?: number;
  code?: string;
  message?: string;
  data?: OnlineUsedBookListResponse;
}

export interface OnlineUsedBookListResponse {
  /**
   * 온라인 중고 도서 목록
   * @example []
   */
  books?: BookResponse[];
}

export interface AddCartItemParams {
  /** @format int64 */
  cartId: number;
}

export type AddCartItemData = CommonResponseVoid;

export interface ToggleReviewLikeParams {
  /**
   * 공감할 리뷰 ID
   * @format int64
   * @exclusiveMin 0
   * @example 1
   */
  reviewId: number;
}

export type ToggleReviewLikeData = CommonResponseReviewLikeResponse;

export interface FindSalesPostDetailParams {
  /**
   * 중고 판매글 ID
   * @format int64
   * @exclusiveMin 0
   * @example 103
   */
  salesPostId: number;
}

export type FindSalesPostDetailData = CommonResponseSalesPostDetailResponse;

export interface ReadCartParams {
  /**
   * 장바구니 ID
   * @format int64
   * @exclusiveMin 0
   * @example 1
   */
  cartId: number;
}

export type ReadCartData = CommonResponseCartReadResponse;

export interface FindBookSellersParams {
  /**
   * 가격 정렬 기준. 생략 시 LOWEST
   * @example "LOWEST"
   */
  priceSort?: "LOWEST" | "HIGHEST";
  /**
   * 중고 도서 품질 등급. 생략 시 전체
   * @example "BEST"
   */
  grade?: "BEST" | "GOOD" | "NORMAL";
  /**
   * 편의점 배송 가능한 판매글만 조회할지 여부. 생략 시 false
   * @example false
   */
  cvsDelivery?: boolean;
  /**
   * 판매자 목록을 조회할 도서 ID
   * @format int64
   * @exclusiveMin 0
   * @example 1
   */
  bookId: number;
}

export type FindBookSellersData = CommonResponseBookSellersResponse;

export type FindOnlineUsedBooksData = CommonResponseOnlineUsedBookListResponse;
