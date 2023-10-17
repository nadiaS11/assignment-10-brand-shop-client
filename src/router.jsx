import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Home/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [{}],
  },
]);

export default router;