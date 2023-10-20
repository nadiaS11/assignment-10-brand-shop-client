import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Home/MainLayout";
import Home from "./components/Home/Home";
import AddProduct from "./components/Pages/AddProduct";

import LogIn from "./components/Pages/Login";
import Register from "./components/Pages/REgister";
import BrandProducts from "./components/Pages/BrandProducts";
import Details from "./components/Private/Details";
import Update from "./components/Private/Update";
import PrivateRoute from "./components/Private/PrivateRoute";
import MyCart from "./components/Private/MyCart";
import ErrorPage from "./components/Pages/ErrorPage";

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
