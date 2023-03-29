import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import LazyPageWrapper from "../../lib/components/LazyPageWrapper";
import App from "../App";

const LoginPage = React.lazy(
  () => import("../../modules/auth/components/LoginPage")
);
const CategoryPage = React.lazy(
  () => import("../../modules/products/components/CategoryPage")
);
const ProductPage = React.lazy(
  () => import("../../modules/products/components/ProductPage")
);
const LandingPage = React.lazy(
  () => import("../../modules/products/components/LandingPage")
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LazyPageWrapper page={LandingPage} />} />
      <Route path="/login" element={<LazyPageWrapper page={LoginPage} />} />
      <Route
        path="/category/:slug"
        element={<LazyPageWrapper page={CategoryPage} />}
      />
      <Route
        path="/product/:id/:slug"
        element={<LazyPageWrapper page={ProductPage} />}
      />
    </Route>
  )
);

export default router;
