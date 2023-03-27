import { Outlet } from "react-router-dom";

import AppHeader from "./Header";

function App() {
  return (
    <main>
      <AppHeader />
      <hr/>
      <Outlet />
    </main>
  );
}

export default App;
