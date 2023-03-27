import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useAppDispatch } from "../../lib/hooks";
import { fetchCategories } from "../../modules/products/store/actions";
import AppHeader from "./Header";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <main>
      <AppHeader />
      <hr />
      <Outlet />
    </main>
  );
}

export default App;
