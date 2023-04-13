import React, { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "~/lib/hooks/state";

import { submitLogin } from "../store/actions";
import { LoginRequest } from "../types/login";

export const useSubmitLogin = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth.user);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const loginRequest: LoginRequest = {
        username: formData.get("username") as string,
        password: formData.get("password") as string,
      };

      dispatch(submitLogin(loginRequest));
    },
    []
  );

  return { handleSubmit, isLoading, error };
};
