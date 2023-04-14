import React, { useEffect } from "react";

import LoadingSpinner from "~/lib/components/LoadingSpinner";
import { useAppDispatch, useAppSelector } from "~/lib/hooks/state";

import { fetchCart } from "../../store/actions";
import { selectCartItems } from "../../store/selectors";
import ShoppingCartItem from "../ShoppingCartItem";

const ShoppingCart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: cartItems, isLoading } = useAppSelector(selectCartItems);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  return (
    <>
      <ul>
        {cartItems.map((item) => (
          <ShoppingCartItem key={item.id} item={item} />
        ))}
      </ul>
      {isLoading && <LoadingSpinner />}
    </>
  );
};

export default ShoppingCart;
