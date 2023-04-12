import React from "react";
import { Link } from "react-router-dom";

import { logout } from "~/auth/store";
import { PageRoutes } from "~/lib/constants/pageRoutes";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";

import "./styles.css";

import { selectLoggedInUser } from "../../store/selectors";

const LoginButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const loggedInUser = useAppSelector(selectLoggedInUser);

  const handleOnClickLogout = () => dispatch(logout());

  if (!loggedInUser)
    return (
      <Link className="button-base login-button" to={PageRoutes.LoginPage}>
        Log In
      </Link>
    );

  return (
    <>
      <em>Logged in as {loggedInUser}</em>
      <button
        type="button"
        onClick={handleOnClickLogout}
        className="button-base login-button"
      >
        Log Out
      </button>
    </>
  );
};

export default LoginButton;
