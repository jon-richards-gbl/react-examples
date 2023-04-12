import React from "react";

import LoadingPage from "~/lib/components/LoadingPage";
import Page from "~/lib/components/Page";
import { useAppSelector } from "~/lib/hooks/state";

import { selectCategoryNames } from "../../store/selectors";
import CategoryTile from "../CategoryTile";
import ProductTileGrid from "../ProductTileGrid";

const LandingPage: React.FC = () => {
  const { data: categories, isLoading } = useAppSelector(selectCategoryNames);

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
