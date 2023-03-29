import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
}
const PageContainer: React.FC<PageContainerProps> = ({ children }) => (
  <section>{children}</section>
);

export default PageContainer;
