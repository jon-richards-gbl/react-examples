import React from "react";

import "./styles.css";

interface ProductTileGridProps {
  children: React.ReactNode;
}
const ProductTileGrid: React.FC<ProductTileGridProps> = ({ children }) => (
  <article className="product-tile-grid">{children}</article>
);

export default ProductTileGrid;
