import React, { useCallback } from "react";

import { useAppDispatch } from "../../../../lib/hooks";
import { postLogin } from "../../store/actions";
import { LoginRequest } from "../../types/store";

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleSubmit: React.FormEventHandler = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const loginRequest = Object.fromEntries(
      formData.entries()
    ) as unknown as LoginRequest;

    dispatch(postLogin(loginRequest));
  }, []);

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label htmlFor="username">User</label>
      <input type="text" name="username" />

      <label htmlFor="password">Pass</label>
      <input type="password" name="password" />

      <button type="submit">Login!</button>
    </form>
  );
};

export default LoginForm;
