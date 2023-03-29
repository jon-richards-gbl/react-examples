import React from "react";
import { Link } from "react-router-dom";

import { PageRoutes } from "../../../../lib/constants/pageRoutes";
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks";
import { logout } from "../../store/reducer";
import { selectLoggedInUser } from "../../store/selectors";

const LoginButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const loggedInUser = useAppSelector(selectLoggedInUser);

  const handleOnClickLogout = () => dispatch(logout());

  if (!loggedInUser)
    return (
      <Link
        className="p-2 block bg-neutral-200 rounded mx-2"
        to={PageRoutes.LoginPage}
      >
        Log In
      </Link>
    );

  return (
    <>
      <em>Logged in as {loggedInUser}</em>
      <button type="button" onClick={handleOnClickLogout}>
        Log Out
      </button>
    </>
  );
};

export default LoginButton;
