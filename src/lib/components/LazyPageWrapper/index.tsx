import React, { Suspense } from "react";

import ErrorBoundary from "../ErrorBoundary";

interface LazyPageWrapperProps {
  page: React.ReactNode;
}

const LazyPageWrapper: React.FC<LazyPageWrapperProps> = ({ page }) => (
  <ErrorBoundary>
    <Suspense>{page}</Suspense>
  </ErrorBoundary>
);

export default LazyPageWrapper;
