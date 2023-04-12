import React from "react";

import { useAppSelector } from "~/lib/hooks";

import { selectCartItems } from "../../store/selectors";
import ShoppingCartItem from "../ShoppingCartItem";

const ShoppingCart: React.FC = () => {
  const cartItems = useAppSelector(selectCartItems);

  return (
    <ul>
      {cartItems.map((item) => (
        <ShoppingCartItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ShoppingCart;
