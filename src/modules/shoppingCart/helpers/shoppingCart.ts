import uniqBy from "lodash/uniqBy";

import type { ProductStub } from "~/products/types/products";

import { UserCart } from "../types/cart";

export function mapItemsToCart(items: ProductStub[]): UserCart {
  return {
    userId: 1,
    date: new Date(),
    products: items.map((item) => ({
      productId: item.id,
      quantity: 1,
    })),
  };
}

const CART_KEY = "shopping-cart";

export function getLocalStoreMock(): ProductStub[] {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}

function setLocalStoreMock(items: ProductStub[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function addLocalStoreMock(item: ProductStub): ProductStub[] {
  const existingCart = getLocalStoreMock();
  const updatedCart = uniqBy([...existingCart, item], "id");
  setLocalStoreMock(updatedCart);

  return updatedCart;
}

export function removeLocalStoreMock(item: ProductStub): ProductStub[] {
  const existingCart = getLocalStoreMock();
  const updatedCart = existingCart.filter((i) => i.id !== item.id);
  setLocalStoreMock(updatedCart);

  return updatedCart;
}
