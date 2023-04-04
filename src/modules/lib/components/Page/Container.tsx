import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
}
const PageContainer: React.FC<PageContainerProps> = ({ children }) => (
  <section className="container p-4 mx-auto">{children}</section>
);

export default PageContainer;
