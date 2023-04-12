import capitalize from "lodash/capitalize";
import React from "react";
import { useParams } from "react-router-dom";

import LoadingPage from "~/lib/components/LoadingPage";
import NotFoundPage from "~/lib/components/NotFoundPage";
import Page from "~/lib/components/Page";

import { useGetItemsByCategoryQuery } from "../../services/productService";
import ProductTile from "../ProductTile";
import ProductTileGrid from "../ProductTileGrid";

type CategoryParams = {
  slug: string | undefined;
};

const CategoryPage: React.FC = () => {
  const { slug = "" } = useParams<CategoryParams>();

  const { isLoading, data: category } = useGetItemsByCategoryQuery(slug);

  if (isLoading) return <LoadingPage />;
  if (!category) return <NotFoundPage />;

  return (
    <Page.Container>
      <Page.Header title={capitalize(category.name)} />
      <ProductTileGrid>
        {category.products.map((product) => (
          <ProductTile key={product.id} product={product} />
        ))}
      </ProductTileGrid>
    </Page.Container>
  );
};

export default CategoryPage;
