import kebabCase from "lodash/kebabCase";
import React from "react";
import { Link, generatePath } from "react-router-dom";

import Card from "~/lib/components/Card";
import { PageRoutes } from "~/lib/constants/pageRoutes";

import "./styles.css";

import { ProductStub } from "../../types/products";

interface ProductTileProps {
  product: ProductStub;
}

const ProductTile: React.FC<ProductTileProps> = ({ product }) => {
  const link = generatePath(PageRoutes.ProductPage, {
    id: String(product.id),
    slug: kebabCase(product.title),
  });

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
      </Card.Content>
    </Card.Container>
  );
};

export default ProductTile;
