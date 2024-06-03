import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Explore from "./pages/Explore";
import Product, { loader as productLoader } from "./pages/Product";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/explore/:id",
        element: <Product />,
        loader: productLoader,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
