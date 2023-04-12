import React from "react";

import Page from "~/lib/components/Page";

import LoginForm from "../LoginForm";

const LoginPage: React.FC = () => {
  return (
    <Page.Container>
      <Page.Header title="Login to your account" />
      <LoginForm />
    </Page.Container>
  );
};

export default LoginPage;
