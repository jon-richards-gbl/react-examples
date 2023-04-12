import React from "react";

import LoadingSpinner from "~/lib/components/LoadingSpinner";

import Page from "../Page";

const LoadingPage: React.FC = () => (
  <Page.Container>
    <LoadingSpinner />
    <p>Loading...</p>
  </Page.Container>
);

export default LoadingPage;
