import { createAction } from "@reduxjs/toolkit";

import { ProductStub } from "~/products/types/products";

export const addToCart = createAction<ProductStub>("shoppingCard/addItem");

export const removeFromCart = createAction<ProductStub>(
  "shoppingCard/removeItem"
);
