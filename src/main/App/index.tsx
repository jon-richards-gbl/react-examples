// import { useEffect } from "react";
import { Outlet } from "react-router-dom";

// import { useAppDispatch } from "~/lib/hooks";
// import { fetchCategoryNames } from "~/products/store/actions";
import AppHeader from "./Header";

function App() {
  // const dispatch = useAppDispatch();
  //
  // useEffect(() => {
  //   dispatch(fetchCategoryNames());
  // }, []);

  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
