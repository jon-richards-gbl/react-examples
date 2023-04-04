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
    <Card
      imageSrc="http://via.placeholder.com/640x360"
      name={categoryName}
      link={link}
    >
      <Link to={link}>
        <h3 className="text-xl font-medium leading-tight">
          {capitalize(categoryName)}
        </h3>
      </Link>
    </Card>
  );
};

export default CategoryTile;
