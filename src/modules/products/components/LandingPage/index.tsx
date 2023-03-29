import React from "react";

import LoadingPage from "../../../../lib/components/LoadingPage";
import Page from "../../../../lib/components/Page";
import { useAppSelector } from "../../../../lib/hooks";
import { selectCategoryNames } from "../../store/selectors";
import CategoryTile from "../CategoryTile";

const LandingPage: React.FC = () => {
  const categories = useAppSelector(selectCategoryNames);

  if (!categories) return <LoadingPage />;

  return (
    <Page.Container>
      <div className="grid grid-cols-4 p-4">
        {categories.map((category) => (
          <CategoryTile key={category} categoryName={category} />
        ))}
      </div>
    </Page.Container>
  );
};

export default LandingPage;
