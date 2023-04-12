import React from "react";

import type { ProductStub } from "~/products/types/products";

import ShoppingCartItem from "../ShoppingCartItem";

interface ShoppingCartProps {
  cartItems: ProductStub[];
  removeFromCart(item: ProductStub): void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  cartItems,
  removeFromCart,
}) => {
  return (
    <ul>
      {cartItems.map((item) => (
        <ShoppingCartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
        />
      ))}
    </ul>
  );
};

export default ShoppingCart;
