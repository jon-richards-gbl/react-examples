import React from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../../lib/hooks";
import { logout } from "../../store/reducer";
import { selectLoggedInUser } from "../../store/selectors";

const LoginButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const loggedInUser = useAppSelector(selectLoggedInUser);

  const handleOnClickLogout = () => dispatch(logout());

  if (!loggedInUser) return <Link to="/login">Log In</Link>;

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
