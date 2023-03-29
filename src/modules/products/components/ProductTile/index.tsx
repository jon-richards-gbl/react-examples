import React from "react";
import { Link } from "react-router-dom";

import Card from "../../../../lib/components/Card";
import { slugify } from "../../../../lib/helpers/util";
import { ProductStub } from "../../types/products";

interface ProductTileProps {
  product: ProductStub;
}

const ProductTile: React.FC<ProductTileProps> = ({ product }) => {
  return (
    <Card
      imageSrc={product.image}
      name={product.title}
      link={`/product/${product.id}/${slugify(product.title)}`}
    >
      <h4>{product.title}</h4>
      <Link to={`/product/${product.id}/${slugify(product.title)}`}>More</Link>
    </Card>
  );
};

export default ProductTile;
