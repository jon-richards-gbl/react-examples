import React from "react";

import Card from "~/lib/components/Card";
import { trimText } from "~/lib/helpers/text";
import type { ProductStub } from "~/products/types/products";

import "./styles.css";

import { useRemoveFromCartMutation } from "../../services/shoppingCartService";

interface ShoppingCartItemProps {
  item: ProductStub;
}

const MAX_TITLE_LENGTH = 20;

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ item }) => {
  const [removeFromCart] = useRemoveFromCartMutation();

  const handleRemoveFromCart = () => {
    removeFromCart(item);
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
