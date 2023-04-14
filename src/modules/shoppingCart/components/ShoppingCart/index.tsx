import React from "react";

import LoadingSpinner from "~/lib/components/LoadingSpinner";

import { useFetchCartQuery } from "../../services/shoppingCartService";
import ShoppingCartItem from "../ShoppingCartItem";

const ShoppingCart: React.FC = () => {
  const { isLoading, data: cartItems } = useFetchCartQuery();

  return (
    <>
      <ul>
        {cartItems?.map((item) => (
          <ShoppingCartItem key={item.id} item={item} />
        ))}
      </ul>
      {isLoading && <LoadingSpinner />}
    </>
  );
};

export default ShoppingCart;
