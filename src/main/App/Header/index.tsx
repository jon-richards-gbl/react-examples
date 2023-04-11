import capitalize from "lodash/capitalize";
import React from "react";
import { Link, generatePath } from "react-router-dom";
import reactIcon from "~assets/react.svg";

import LoginButton from "~/auth/components/LoginButton";
import { PageRoutes } from "~/lib/constants/pageRoutes";
import { useGetCategoriesQuery } from "~/products/services/productService";

const AppHeader: React.FC = () => {
  const { data: categories } = useGetCategoriesQuery();

  return (
    <header className="py-2 flex justify-between bg-sky-800 items-center w-full shadow-md text-white">
      <h3 className="text-slate-300 flex items-center">
        <img className="h-4 inline mx-2" src={reactIcon} alt="" />
        Vite + React
      </h3>
      <nav>
        {categories?.map((category) => (
          <Link
            className="p-2 hover:text-neutral-200"
            key={category}
            to={generatePath(PageRoutes.CategoryPage, { slug: category })}
          >
            {capitalize(category)}
          </Link>
        ))}
      </nav>
      <LoginButton />
    </header>
  );
};

export default AppHeader;
