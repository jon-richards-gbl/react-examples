interface UserCartProduct {
  productId: number;
  quantity: number;
}

export interface UserCart {
  userId: number;
  date: Date;
  products: UserCartProduct[];
}
