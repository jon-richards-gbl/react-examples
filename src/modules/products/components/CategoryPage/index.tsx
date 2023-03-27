import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../../lib/hooks";
import { fetchItemsByCategory } from "../../store/actions";
import { selectCategoryBySlug } from "../../store/selectors";
import ProductTile from "./ProductTile";

type CategoryParams = {
  slug: string | undefined;
};

const CategoryPage: React.FC = () => {
  const { slug } = useParams<CategoryParams>();

  const dispatch = useAppDispatch();
  // todo loading
  const category = useAppSelector(selectCategoryBySlug(slug));

  useEffect(() => {
    if (slug) {
      dispatch(fetchItemsByCategory(slug));
    }
  }, [slug]);

  if (!category) return <div>Loading...</div>;

  return (
    <section>
      <header>
        <h1>{category.name}</h1>
      </header>
      {category.products.map((product) => (
        <ProductTile key={product.id} product={product} />
      ))}
    </section>
  );
};

export default CategoryPage;
