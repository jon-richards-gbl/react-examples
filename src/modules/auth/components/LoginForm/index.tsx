import React from "react";

import { useSubmitLogin } from "~/auth/hooks/useSubmitLogin";
import Card from "~/lib/components/Card";
import LoadingSpinner from "~/lib/components/LoadingSpinner";
import TextInput from "~/lib/components/TextInput";

import "./styles.css";

const LoginForm: React.FC = () => {
  const { handleSubmit, isLoading } = useSubmitLogin();

  return (
    <Card.Container isCentered className="login-form">
      <Card.Header>
        <h4>Login to shop</h4>
      </Card.Header>
      <Card.Content>
        <form method="post" onSubmit={handleSubmit}>
          <TextInput name="username" label="Username" type="text" isRequired />
          <TextInput
            name="password"
            label="Password"
            type="password"
            isRequired
          />

          <button type="submit" className="button-base login-form__submit">
            SIGN IN
            {isLoading && <LoadingSpinner />}
          </button>
        </form>
      </Card.Content>
    </Card.Container>
  );
};

export default LoginForm;
