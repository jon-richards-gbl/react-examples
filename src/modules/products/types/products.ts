export interface ProductsState {
  isLoading: boolean;
  categories: Record<string, Category>;
  products: Record<string, ProductFull>;
}

export interface Category {
  name: string;
  url: string;
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
