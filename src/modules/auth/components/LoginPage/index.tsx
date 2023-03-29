import React from "react";

import Page from "../../../../lib/components/Page";
import LoginForm from "../LoginForm";

const LoginPage: React.FC = () => {
  return (
    <Page.Container>
      <h2>Login to your account</h2>
      <LoginForm />
    </Page.Container>
  );
};

export default LoginPage;
