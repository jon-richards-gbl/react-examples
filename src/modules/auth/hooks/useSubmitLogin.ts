import React, { useCallback } from "react";

import { usePostLoginMutation } from "~/auth/services/loginService";
import { login } from "~/auth/store";
import { LoginRequest } from "~/auth/types/login";
import { useAppDispatch } from "~/lib/hooks";

export const useSubmitLogin = () => {
  const dispatch = useAppDispatch();
  const [postLogin, { isLoading, data }] = usePostLoginMutation();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const loginRequest: LoginRequest = {
        username: formData.get("username") as string,
        password: formData.get("password") as string,
      };

      const res = await postLogin(loginRequest).unwrap();
      dispatch(login({ token: res.token, username: loginRequest.username }));
    },
    [postLogin]
  );

  return { handleSubmit, isLoading, loginResponse: data };
};
