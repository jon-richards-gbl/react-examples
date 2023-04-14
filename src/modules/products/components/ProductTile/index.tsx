import kebabCase from "lodash/kebabCase";
import React from "react";
import { Link, generatePath } from "react-router-dom";

import Card from "~/lib/components/Card";
import { PageRoutes } from "~/lib/constants/pageRoutes";
import { useAppSelector } from "~/lib/hooks/state";
import { useAddToCartMutation } from "~/shoppingCart/services/shoppingCartService";
import { selectItemIsInCart } from "~/shoppingCart/store/selectors";

import "./styles.css";

import { ProductStub } from "../../types/products";

interface ProductTileProps {
  product: ProductStub;
}

const ProductTile: React.FC<ProductTileProps> = ({ product }) => {
  const [addToCart] = useAddToCartMutation();
  const isInCart = useAppSelector(selectItemIsInCart(product.id));

  const link = generatePath(PageRoutes.ProductPage, {
    id: String(product.id),
    slug: kebabCase(product.title),
  });

  const handleAddToCard = () => {
    addToCart(product);
  };

  return (
    <Card.Container>
      <Card.Header>
        <Link to={link} className="product-tile__header">
          <img src={product.image} alt={`Image of ${product.title}`} />
        </Link>
      </Card.Header>
      <Card.Content>
        <h4 className="heading-4">{product.title}</h4>
        <Link className="product-tile__link" to={link}>
          More
        </Link>

        <button
          onClick={handleAddToCard}
          className="button-base product-tile__add-to-cart"
          disabled={isInCart}
        >
          Add to Cart
        </button>
      </Card.Content>
    </Card.Container>
  );
};

export default ProductTile;
