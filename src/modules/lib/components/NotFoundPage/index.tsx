import React from "react";

import Page from "../Page";

const NotFoundPage: React.FC = () => (
  <Page.Container>
    <Page.Header title="Not Found" centred />
    <p>404: not found</p>
  </Page.Container>
);

export default NotFoundPage;
