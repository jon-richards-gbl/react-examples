export interface Category {
  name: string;
  products: ProductStub[];
}

export interface ProductStub {
  id: number;
  title: string;
  image: string;
}

export interface ProductFull extends ProductStub {
  price: string;
  category: string;
  description: string;
}
