import React, { useCallback } from "react";

import TextInput from "~/lib/components/TextInput";
import { useAppDispatch } from "~/lib/hooks";

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
    <div className="mx-auto max-w-md rounded-lg bg-white shadow-md p-6">
      <form method="post" onSubmit={handleSubmit}>
        <TextInput name="username" label="Username" type="text" />
        <TextInput name="password" label="Password" type="password" />

        <button
          type="submit"
          className="inline-block w-full rounded bg-sky-800 px-6 py-2 text-xs font-medium uppercase text-white shadow mt-4"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
