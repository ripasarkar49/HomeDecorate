import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Produsts from "../pages/Produsts";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import WhishList from "../pages/WhishList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading...............</p>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("./furnitureData.json"),
      },
      {
        path: "/products",
        element: <Produsts></Produsts>,
      },
      {
        path: "/whishlist",
        element: <WhishList></WhishList>,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
