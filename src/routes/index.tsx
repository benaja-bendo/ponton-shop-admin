import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Index from "../pages/Index";
import Products from "../pages/products/index";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
