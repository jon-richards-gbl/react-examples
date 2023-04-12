import capitalize from "lodash/capitalize";
import React from "react";
import { Link, generatePath } from "react-router-dom";

import LoginButton from "~/auth/components/LoginButton";
import { PageRoutes } from "~/lib/constants/pageRoutes";
import { useGetCategoriesQuery } from "~/products/services/productService";
import reactIcon from "~assets/react.svg";

import "./styles.css";

const AppHeader: React.FC = () => {
  const { data: categories } = useGetCategoriesQuery();

  return (
    <header className="header">
      <div className="header__container header__icon">
        <img src={reactIcon} alt="" />
        <h3>Vite + React</h3>
      </div>

      <nav className="header__container header__nav">
        {categories?.map((category) => (
          <Link
            key={category}
            to={generatePath(PageRoutes.CategoryPage, { slug: category })}
          >
            {capitalize(category)}
          </Link>
        ))}
      </nav>

      <menu className="header__container">
        <LoginButton />
      </menu>
    </header>
  );
};

export default AppHeader;
