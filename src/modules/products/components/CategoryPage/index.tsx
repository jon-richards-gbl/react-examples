import capitalize from "lodash/capitalize";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import LoadingPage from "~/lib/components/LoadingPage";
import NotFoundPage from "~/lib/components/NotFoundPage";
import Page from "~/lib/components/Page";
import { useAppDispatch, useAppSelector } from "~/lib/hooks/state";
import ShoppingCart from "~/shoppingCart/components/ShoppingCart";

import "./styles.css";

import { fetchCategoryByName } from "../../store/actions";
import { selectCategoryByName } from "../../store/selectors";
import ProductTile from "../ProductTile";
import ProductTileGrid from "../ProductTileGrid";

type CategoryParams = {
  slug: string | undefined;
};

const CategoryPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { slug = "" } = useParams<CategoryParams>();
  const { isLoading, category } = useAppSelector(selectCategoryByName(slug));

  useEffect(() => {
    dispatch(fetchCategoryByName(slug));
  }, [slug]);

  if (isLoading) return <LoadingPage />;
  if (!category) return <NotFoundPage />;

  return (
    <Page.Container>
      <Page.Header title={capitalize(category.name)} />
      <div className="category-page">
        <ProductTileGrid className="category-page__main">
          {category.products.map((product) => (
            <ProductTile key={product.id} product={product} />
          ))}
        </ProductTileGrid>
        <aside className="category-page__sidebar">
          <ShoppingCart />
        </aside>
      </div>
    </Page.Container>
  );
};

export default CategoryPage;
