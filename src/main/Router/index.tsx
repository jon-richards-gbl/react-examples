import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import LazyPageWrapper from "../../lib/components/LazyPageWrapper";
import App from "../App";

const LoginPage = React.lazy(() => import("../../modules/auth/components/LoginPage"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<LazyPageWrapper page={LoginPage} />} />
    </Route>
  )
);

export default router;
