import { apiService } from "~/lib/helpers/apiService";
import type { ProductStub } from "~/products/types/products";

import {
  addLocalStoreMock,
  getLocalStoreMock,
  mapItemsToCart,
  removeLocalStoreMock,
} from "../helpers/shoppingCart";

enum ShoppingCartEndpoints {
  PutUpdateCart = "carts/7",
  GetUpdateCart = "carts/7",
}

export const shoppingCartService = {
  putToCart: async (item: ProductStub) => {
    // behind the scenes putting the data into local storage since the fake api won't persist
    const updatedCart = addLocalStoreMock(item);

    await apiService.put(ShoppingCartEndpoints.PutUpdateCart, {
      data: mapItemsToCart(updatedCart),
    });

    return updatedCart;
  },

  removeFromCart: async (item: ProductStub) => {
    // behind the scenes putting the data into local storage since the fake api won't persist
    const updatedCart = removeLocalStoreMock(item);

    await apiService.put(ShoppingCartEndpoints.PutUpdateCart, {
      data: mapItemsToCart(updatedCart),
    });

    return updatedCart;
  },

  fetchCart: async () => {
    // behind the scenes getting the data from local storage since the fake api won't persist
    const existingCart = getLocalStoreMock();

    await apiService.get(ShoppingCartEndpoints.GetUpdateCart);

    return existingCart;
  },
};
