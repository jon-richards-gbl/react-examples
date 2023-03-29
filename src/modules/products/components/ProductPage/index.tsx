import capitalize from "lodash/capitalize";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import LoadingPage from "../../../../lib/components/LoadingPage";
import NotFoundPage from "../../../../lib/components/NotFoundPage";
import Page from "../../../../lib/components/Page";
import { slugify } from "../../../../lib/helpers/util";
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks";
import { fetchItemById } from "../../store/actions";
import {
  selectIsProductsLoading,
  selectProductById,
} from "../../store/selectors";

type ProductParams = {
  id: string | undefined;
};

const ProductPage: React.FC = () => {
  const { id } = useParams<ProductParams>();

  const dispatch = useAppDispatch();

  const product = useAppSelector(selectProductById(id));
  const isLoading = useAppSelector(selectIsProductsLoading);

  useEffect(() => {
    if (id) {
      dispatch(fetchItemById(id));
    }
  }, [id]);

  if (isLoading) return <LoadingPage />;
  if (!product) return <NotFoundPage />;

  const breadCrumbs = [
    {
      name: capitalize(product.category),
      url: `/category/${slugify(product.category)}`,
    },
  ];

  return (
    <Page.Container>
      <Page.Header title={product.title} breadCrumbs={breadCrumbs} />
      <article className="prose p-4">
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
