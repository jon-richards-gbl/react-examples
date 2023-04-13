import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useAppDispatch } from "~/lib/hooks/state";
import { fetchCategoryNames } from "~/products/store/actions";

import AppHeader from "./Header";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategoryNames());
  }, []);

  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
