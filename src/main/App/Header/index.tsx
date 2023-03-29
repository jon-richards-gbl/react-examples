import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import LoginButton from "../../../modules/auth/components/LoginButton";
import { selectCategoryNames } from "../../../modules/products/store/selectors";

const AppHeader: React.FC = () => {
  const categories = useSelector(selectCategoryNames);

  return (
    <header>
      <h3>Vite + React</h3>
      <nav>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/category/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <LoginButton />
    </header>
  );
};

export default AppHeader;
