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
  <header>
    <nav>
      <Link to="/">Home</Link>
      {breadCrumbs?.map((link) => (
        <>
          <span>/</span>
          <Link key={link.name} to={link.url}>
            {link.name}
          </Link>
        </>
      ))}
    </nav>
    <h2>{title}</h2>
  </header>
);

export default PageHeader;
