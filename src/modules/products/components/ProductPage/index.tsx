import capitalize from "lodash/capitalize";
import React from "react";
import { generatePath, useParams } from "react-router-dom";

import LoadingPage from "~/lib/components/LoadingPage";
import NotFoundPage from "~/lib/components/NotFoundPage";
import Page from "~/lib/components/Page";
import { PageRoutes } from "~/lib/constants/pageRoutes";

import { useGetItemByIdQuery } from "../../services/productService";

type ProductParams = {
  id: string | undefined;
};

const ProductPage: React.FC = () => {
  const { id = "" } = useParams<ProductParams>();

  const { isLoading, data: product } = useGetItemByIdQuery(id);

  if (isLoading) return <LoadingPage />;
  if (!product || !id) return <NotFoundPage />;

  const breadCrumbs = [
    {
      name: capitalize(product.category),
      url: generatePath(PageRoutes.CategoryPage, { slug: product.category }),
    },
  ];

  return (
    <Page.Container>
      <Page.Header title={product.title} breadCrumbs={breadCrumbs} />
      <article className="p-4">
        <img
          className="h-48"
          alt={`Photo of ${product.title}`}
          src={product.image}
        />
        <p>{product.description}</p>
      </article>
    </Page.Container>
  );
};

export default ProductPage;
