/* eslint-disable no-empty-pattern, @typescript-eslint/no-empty-interface */
import React from "react";

import { useAppSelector } from "~/lib/hooks";

// import type { ProductStub } from "~/products/types/products";
import ShoppingCartItem from "../ShoppingCartItem";
import { selectCartItems } from "../../store/selectors";

interface ShoppingCartProps {
  //  cartItems: ProductStub[];
  //  removeFromCart(item: ProductStub): void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
//  cartItems,
//  removeFromCart,
}) => {
  const cartItems = useAppSelector(selectCartItems);

  return (
    <ul>
      {cartItems.map((item) => (
        <ShoppingCartItem
          key={item.id}
          item={item}
          // removeFromCart={removeFromCart}
        />
      ))}
    </ul>
  );
};

export default ShoppingCart;
