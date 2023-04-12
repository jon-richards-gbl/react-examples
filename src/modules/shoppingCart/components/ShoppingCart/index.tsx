import React, { useEffect } from "react";

import LoadingSpinner from "~/lib/components/LoadingSpinner";
import { useAppDispatch, useAppSelector } from "~/lib/hooks/state";
import { fetchCart } from "~/shoppingCart/store/actions";

import { selectCartItems, selectIsCartLoading } from "../../store/selectors";
import ShoppingCartItem from "../ShoppingCartItem";

const ShoppingCart: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsCartLoading);
  const cartItems = useAppSelector(selectCartItems);

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
