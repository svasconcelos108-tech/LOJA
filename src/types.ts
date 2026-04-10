export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  isPromotion?: boolean;
  discountPrice?: number;
}

export interface CartItem extends Product {
  quantity: number;
}
