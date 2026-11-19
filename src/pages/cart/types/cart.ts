export interface CartItemView {
  id: string;
  condition: string;
  discountRate: number;
  imageSrc?: string;
  originalPrice: number;
  price: number;
  quantity: number;
  sellerId: string;
  title: string;
}

export interface CartSellerView {
  id: string;
  name: string;
  isCvsDelivery: boolean;
  deliveryFee: number;
  freeDeliveryThreshold: number;
  items: CartItemView[];
}
