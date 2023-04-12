import React from "react";
import { Link } from "react-router-dom";

interface PageLink {
  name: string;
  url: string;
}

interface PageHeaderProps {
  title: string;
  breadCrumbs?: PageLink[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadCrumbs }) => (
  <header className="page-header">
    <nav className="page-header__breadcrumbs">
      <Link to="/">Home</Link>

      {breadCrumbs?.map((link) => (
        <React.Fragment key={link.name}>
          <span>/</span>
          <Link to={link.url}>{link.name}</Link>
        </React.Fragment>
      ))}
    </nav>
    <h1 className="heading-1">{title}</h1>
  </header>
);

export default PageHeader;
