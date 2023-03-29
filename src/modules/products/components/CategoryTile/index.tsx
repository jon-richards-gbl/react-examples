import capitalize from "lodash/capitalize";
import React from "react";
import { Link } from "react-router-dom";

import Card from "../../../../lib/components/Card";

interface CategoryTileProps {
  categoryName: string;
}

const CategoryTile: React.FC<CategoryTileProps> = ({ categoryName }) => {
  const link = `/category/${categoryName}`;

  return (
    <Card
      imageSrc="http://via.placeholder.com/640x360"
      name={categoryName}
      link={link}
    >
      <Link to={link}>
        <h3>{capitalize(categoryName)}</h3>
      </Link>
    </Card>
  );
};

export default CategoryTile;
