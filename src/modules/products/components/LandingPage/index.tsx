import React from "react";
import { useSelector } from "react-redux";

import LoadingPage from "~/lib/components/LoadingPage";
import Page from "~/lib/components/Page";

import { selectCategoryNames } from "../../store/selectors";
import CategoryTile from "../CategoryTile";
import ProductTileGrid from "../ProductTileGrid";

const LandingPage: React.FC = () => {
  const { data: categories, isLoading } = useSelector(selectCategoryNames);

  if (isLoading || !categories) return <LoadingPage />;

  return (
    <Page.Container>
      <ProductTileGrid>
        {categories.map((category) => (
          <CategoryTile key={category} categoryName={category} />
        ))}
      </ProductTileGrid>
    </Page.Container>
  );
};

export default LandingPage;
