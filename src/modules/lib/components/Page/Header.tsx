import React from "react";
import { Link } from "react-router-dom";

interface PageLink {
  name: string;
  url: string;
}

interface PageHeaderProps {
  title: string;
  breadCrumbs?: PageLink[];
  centred?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadCrumbs }) => (
  <header className="border-b-2 border-neutral-200 mb-4 p-4">
    <nav>
      <Link className="text-sky-300 hover:text-sky-600 hover:underline" to="/">
        Home
      </Link>
      {breadCrumbs?.map((link) => (
        <React.Fragment key={link.name}>
          <span className="mx-2 text-neutral-500 font-bold">/</span>
          <Link
            className="text-sky-300 hover:text-sky-600 hover:underline"
            to={link.url}
          >
            {link.name}
          </Link>
        </React.Fragment>
      ))}
    </nav>
    <h2 className="text-4xl font-medium leading-tight">{title}</h2>
  </header>
);

export default PageHeader;
