import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}
const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = "",
}) => <section className={`page-container ${className}`}>{children}</section>;

export default PageContainer;
