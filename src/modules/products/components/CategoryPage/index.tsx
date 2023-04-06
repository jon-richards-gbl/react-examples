import capitalize from "lodash/capitalize";
import React from /*, { useEffect }*/
"react";
import { useParams } from "react-router-dom";

import LoadingPage from "~/lib/components/LoadingPage";
import NotFoundPage from "~/lib/components/NotFoundPage";
import Page from "~/lib/components/Page";

import { useGetItemsByCategoryQuery } from "../../services/productService";
// import { useAppDispatch, useAppSelector } from "~/lib/hooks";
//
// import { fetchItemsByCategory } from "../../store/actions";
// import {
//   selectCategoryBySlug,
//   selectIsProductsLoading,
// } from "../../store/selectors";
import ProductTile from "../ProductTile";

type CategoryParams = {
  slug: string | undefined;
};

const CategoryPage: React.FC = () => {
  const { slug = "" } = useParams<CategoryParams>();

  const { isLoading, data: category } = useGetItemsByCategoryQuery(slug);

  // const dispatch = useAppDispatch();
  //
  // const category = useAppSelector(selectCategoryBySlug(slug));
  // const isLoading = useAppSelector(selectIsProductsLoading);
  //
  // useEffect(() => {
  //   if (slug) {
  //     dispatch(fetchItemsByCategory(slug));
  //   }
  // }, [slug]);

  if (isLoading) return <LoadingPage />;
  if (!category) return <NotFoundPage />;

  return (
    <Page.Container>
      <Page.Header title={capitalize(category.name)} />
      <div className="grid grid-cols-4 p-4">
        {category.products.map((product) => (
          <ProductTile key={product.id} product={product} />
        ))}
      </div>
    </Page.Container>
  );
};

export default CategoryPage;
