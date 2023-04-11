import React from "react";
import { Link } from "react-router-dom";

import { logout } from "~/auth/store/reducer";
import { PageRoutes } from "~/lib/constants/pageRoutes";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";

import { selectLoggedInUser } from "../../store/selectors";

// import { useSelector } from "react-redux";
// import { usePostLoginMutation } from "~/auth/services/loginService";

const LoginButton: React.FC = () => {
  // const [,result] = usePostLoginMutation({fixedCacheKey: 'user-login'})
  // const {} = useAppSelector(state => state.login.)
  const dispatch = useAppDispatch();
  const loggedInUser = useAppSelector(selectLoggedInUser);

  const handleOnClickLogout = () => dispatch(logout());

  if (!loggedInUser)
    return (
      <Link
        className="p-2 block bg-neutral-200 rounded mx-2 text-neutral-800"
        to={PageRoutes.LoginPage}
      >
        Log In
      </Link>
    );

  return (
    <div className="flex items-center">
      <em>Logged in as {loggedInUser}</em>
      <button
        type="button"
        onClick={handleOnClickLogout}
        className="p-2 block bg-neutral-200 rounded mx-2 text-neutral-800"
      >
        Log Out
      </button>
    </div>
  );
};

export default LoginButton;
