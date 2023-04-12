import React from "react";

import "./styles.css";

interface ProductTileGridProps {
  children: React.ReactNode;
  className?: string;
}
const ProductTileGrid: React.FC<ProductTileGridProps> = ({
  children,
  className = "",
}) => (
  <article className={`product-tile-grid ${className}`}>{children}</article>
);

export default ProductTileGrid;
