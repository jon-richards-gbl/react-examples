import React, { Suspense } from "react";

import ErrorBoundary from "../ErrorBoundary";

interface LazyPageWrapperProps {
  page: React.LazyExoticComponent<React.FC>;
}

const LazyPageWrapper: React.FC<LazyPageWrapperProps> = ({ page: Page }) => (
  <ErrorBoundary>
    <Suspense>
      <Page />
    </Suspense>
  </ErrorBoundary>
);

export default LazyPageWrapper;
