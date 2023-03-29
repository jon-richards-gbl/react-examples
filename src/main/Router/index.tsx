import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import LazyPageWrapper from "../../lib/components/LazyPageWrapper";
import { PageRoutes } from "../../lib/constants/pageRoutes";
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
    <Route path={PageRoutes.LandingPage} element={<App />}>
      <Route index element={<LazyPageWrapper page={<LandingPage />} />} />
      <Route
        path={PageRoutes.LoginPage}
        element={<LazyPageWrapper page={<LoginPage />} />}
      />
      <Route
        path={PageRoutes.CategoryPage}
        element={<LazyPageWrapper page={<CategoryPage />} />}
      />
      <Route
        path={PageRoutes.ProductPage}
        element={<LazyPageWrapper page={<ProductPage />} />}
      />
    </Route>
  )
);

export default router;
