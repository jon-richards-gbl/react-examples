import React from "react";
import { Link } from "react-router-dom";

import { slugify } from "../../../../lib/helpers/util";
import { ProductStub } from "../../types/products";

interface ProductTileProps {
  product: ProductStub;
}

const ProductTile: React.FC<ProductTileProps> = ({ product }) => (
  <div>
    <img alt={`Photo of ${product.title}`} src={product.image} height="150" />
    <h3>{product.title}</h3>
    <Link to={`/product/${product.id}/${slugify(product.title)}`}>More</Link>
  </div>
);

export default ProductTile;
