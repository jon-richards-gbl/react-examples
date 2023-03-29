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
    { name: product.category, url: `/category/${slugify(product.category)}` },
  ];

  return (
    <Page.Container>
      <Page.Header title={product.title} breadCrumbs={breadCrumbs} />
      <img alt={`Photo of ${product.title}`} src={product.image} height="300" />
      <p>{product.description}</p>
    </Page.Container>
  );
};

export default ProductPage;
