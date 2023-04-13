import React from "react";
import { Link } from "react-router-dom";

import { PageRoutes } from "~/lib/constants/pageRoutes";
import { useAppDispatch, useAppSelector } from "~/lib/hooks/state";

import "./styles.css";

import { logout } from "../../store";
import { selectLoggedInUsername } from "../../store/selectors";

const LoginButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const loggedInUser = useAppSelector(selectLoggedInUsername);

  const handleOnClickLogout = () => {
    dispatch(logout());
  };

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
