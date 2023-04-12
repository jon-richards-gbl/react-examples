import capitalize from "lodash/capitalize";
import React from "react";
import { Link, generatePath } from "react-router-dom";

import Card from "~/lib/components/Card";
import { PageRoutes } from "~/lib/constants/pageRoutes";

interface CategoryTileProps {
  categoryName: string;
}

const CategoryTile: React.FC<CategoryTileProps> = ({ categoryName }) => {
  const link = generatePath(PageRoutes.CategoryPage, { slug: categoryName });

  return (
    <Card.Container>
      <Card.Content>
        <Link to={link}>
          <h3 className="heading-3">{capitalize(categoryName)}</h3>
        </Link>
      </Card.Content>
    </Card.Container>
  );
};

export default CategoryTile;
