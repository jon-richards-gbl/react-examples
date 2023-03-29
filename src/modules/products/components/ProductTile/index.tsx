import kebabCase from "lodash/kebabCase";
import React from "react";
import { Link, generatePath } from "react-router-dom";

import Card from "../../../../lib/components/Card";
import { PageRoutes } from "../../../../lib/constants/pageRoutes";
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
    <Card imageSrc={product.image} name={product.title} link={link}>
      <h4 className="text-base font-medium leading-tight pb-2">
        {product.title}
      </h4>
      <Link
        className="text-sky-300 hover:text-sky-600 hover:underline"
        to={link}
      >
        More
      </Link>
    </Card>
  );
};

export default ProductTile;
