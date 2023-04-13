import capitalize from "lodash/capitalize";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import LoadingPage from "~/lib/components/LoadingPage";
import NotFoundPage from "~/lib/components/NotFoundPage";
import Page from "~/lib/components/Page";
import { useAppDispatch } from "~/lib/hooks/state";

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
  const { isLoading, category } = useSelector(selectCategoryByName(slug));

  useEffect(() => {
    dispatch(fetchCategoryByName(slug));
  }, [slug]);

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
