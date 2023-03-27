import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import LoginButton from "../../../modules/auth/components/LoginButton";
import { selectCategories } from "../../../modules/products/store/selectors";

const AppHeader: React.FC = () => {
  const categories = useSelector(selectCategories);

  return (
    <nav>
      <h3>Vite + React</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.url}>
            <Link to={`/category/${category.url}`}>{category.name}</Link>
          </li>
        ))}
        <li>
          <LoginButton />
        </li>
      </ul>
    </nav>
  );
};

export default AppHeader;
