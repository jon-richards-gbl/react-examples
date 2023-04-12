import capitalize from "lodash/capitalize";
// import uniqBy from "lodash/uniqBy";
import React, { useEffect /*, useCallback, useState */ }  from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import LoadingPage from "~/lib/components/LoadingPage";
import NotFoundPage from "~/lib/components/NotFoundPage";
import Page from "~/lib/components/Page";
import { useAppDispatch } from "~/lib/hooks/state";
import ShoppingCart from "~/shoppingCart/components/ShoppingCart";

import "./styles.css";

import { fetchCategoryByName } from "../../store/actions";
import { selectCategoryByName } from "../../store/selectors";
// import { ProductStub } from "../../types/products";
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

  /* ----- new cart functionality ----- */
  // const [cartItems, setCartItems] = useState<ProductStub[]>([]);
  //
  // const addToCart = useCallback(
  //   (newItem: ProductStub) => {
  //     setCartItems((prev) => uniqBy([...prev, newItem], "id"));
  //   },
  //   [setCartItems]
  // );
  //
  // const removeFromCart = useCallback(
  //   (removedItem: ProductStub) => {
  //     setCartItems((prev) => prev.filter((item) => item.id !== removedItem.id));
  //   },
  //   [setCartItems]
  // );
  /* ----- new cart functionality ----- */

  if (isLoading) return <LoadingPage />;
  if (!category) return <NotFoundPage />;

  return (
    <Page.Container>
      <Page.Header title={capitalize(category.name)} />
      <div className="category-page">
        <ProductTileGrid className="category-page__main">
          {category.products.map((product) => (
            <ProductTile
              key={product.id}
              product={product}
              // addToCart={addToCart}
              // isInCart={cartItems.map((c) => c.id).includes(product.id)}
            />
          ))}
        </ProductTileGrid>
        <aside className="category-page__sidebar">
          <ShoppingCart /* cartItems={cartItems} removeFromCart={removeFromCart} */ />
        </aside>
      </div>
    </Page.Container>
  );
};

export default CategoryPage;
