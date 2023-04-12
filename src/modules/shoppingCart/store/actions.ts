import { AppDispatchWithThunk } from "~/lib/types/store";
import { ProductStub } from "~/products/types/products";

import { updateCardResolved, updateCartPending } from ".";
import { shoppingCartService } from "../services/shoppingCartService";

export function addToCart(item: ProductStub): AppDispatchWithThunk {
  return async (dispatch) => {
    dispatch(updateCartPending());

    const res = await shoppingCartService.putToCart(item);

    dispatch(updateCardResolved(res));
  };
}

export function removeFromCart(item: ProductStub): AppDispatchWithThunk {
  return async (dispatch) => {
    dispatch(updateCartPending());

    const res = await shoppingCartService.removeFromCart(item);

    dispatch(updateCardResolved(res));
  };
}

export function fetchCart(): AppDispatchWithThunk {
  return async (dispatch) => {
    dispatch(updateCartPending());

    const res = await shoppingCartService.fetchCart();

    dispatch(updateCardResolved(res));
  };
}
