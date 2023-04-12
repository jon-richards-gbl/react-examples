import React from "react";

import Card from "~/lib/components/Card";
import { trimText } from "~/lib/helpers/text";
import { useAppDispatch } from "~/lib/hooks";
import type { ProductStub } from "~/products/types/products";

import "./styles.css";

import { removeFromCart } from "../../store/actions";

interface ShoppingCartItemProps {
  item: ProductStub;
  // removeFromCart(item: ProductStub): void;
}

const MAX_TITLE_LENGTH = 20;

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({
  item,
  // removeFromCart,
}) => {
  const dispatch = useAppDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));
  };

  return (
    <Card.Container className="shopping-cart-item">
      <Card.Content>
        <h4 className="heading-4">{trimText(item.title, MAX_TITLE_LENGTH)}</h4>
        <span
          className="shopping-cart-item__remove"
          onClick={handleRemoveFromCart}
        >
          X
        </span>
      </Card.Content>
    </Card.Container>
  );
};

export default ShoppingCartItem;