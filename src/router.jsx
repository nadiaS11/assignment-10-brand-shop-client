import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Home/MainLayout";
import Home from "./components/Home/Home";
import AddProduct from "./components/Pages/AddProduct";
import MyCart from "./components/Pages/MyCart";
import LogIn from "./components/Pages/Login";
import Register from "./components/Pages/REgister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/cart",
        element: <MyCart></MyCart>,
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
