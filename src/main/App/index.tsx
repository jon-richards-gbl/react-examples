import { Outlet } from "react-router-dom";

import AppHeader from "./Header";

function App() {
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
