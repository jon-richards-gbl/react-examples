import capitalize from "lodash/capitalize";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { generatePath, useParams } from "react-router-dom";

import LoadingPage from "~/lib/components/LoadingPage";
import NotFoundPage from "~/lib/components/NotFoundPage";
import Page from "~/lib/components/Page";
import { PageRoutes } from "~/lib/constants/pageRoutes";
import { useAppDispatch } from "~/lib/hooks/state";

import "./styles.css";

import { fetchProductById } from "../../store/actions";
import { selectProductById } from "../../store/selectors";

type ProductParams = {
  id: string | undefined;
};

const ProductPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id = "" } = useParams<ProductParams>();
  const { isLoading, product } = useSelector(selectProductById(id));

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id]);

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
      <article className="product-page">
        <img
          className="product-page__image"
          alt={`Photo of ${product.title}`}
          src={product.image}
        />
        <h2 className="heading-3">About</h2>
        <p>{product.description}</p>
      </article>
    </Page.Container>
  );
};

export default ProductPage;
