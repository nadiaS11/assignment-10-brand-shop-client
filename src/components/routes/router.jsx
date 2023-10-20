import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Home/MainLayout";
import Home from "../Home/Home";
import AddProduct from "../Pages/AddProduct";

import LogIn from "../Pages/Login";
import Register from "../Pages/REgister";
import BrandProducts from "../Pages/BrandProducts";
import Details from "../Private/Details";
import Update from "../Private/Update";
import PrivateRoute from "../Private/PrivateRoute";
import MyCart from "../Private/MyCart";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://brand-shop-server-ten.vercel.app/brands"),
      },
      {
        path: "/brands/:name",
        element: <BrandProducts></BrandProducts>,
        loader: () =>
          fetch("https://brand-shop-server-ten.vercel.app/products"),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-ten.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-ten.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch(`https://brand-shop-server-ten.vercel.app/cart`),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
