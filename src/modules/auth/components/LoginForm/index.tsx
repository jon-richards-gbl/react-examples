import React from /*, { useCallback }*/
"react";

// import { useAppDispatch } from "~/lib/hooks";
//
// // import { postLogin } from "../../store/actions";
// import { LoginRequest } from "../../types/store";
// import { usePostLoginMutation } from "~/auth/services/loginService";
// import { login } from "~/auth/store/reducer";
import { useSubmitLogin } from "~/auth/hooks/useSubmitLogin";
import LoadingSpinner from "~/lib/components/LoadingSpinner";
import TextInput from "~/lib/components/TextInput";

const LoginForm: React.FC = () => {
  const { handleSubmit, isLoading } = useSubmitLogin();

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white shadow-md p-6">
      <form method="post" onSubmit={handleSubmit}>
        <TextInput name="username" label="Username" type="text" />
        <TextInput name="password" label="Password" type="password" />

        <button
          type="submit"
          className="inline-flex w-full rounded bg-sky-800 px-6 py-2 text-xs font-medium uppercase text-white shadow mt-4 justify-between items-center"
        >
          Sign in
          {isLoading && <LoadingSpinner />}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
