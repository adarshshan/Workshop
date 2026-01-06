import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import ItemPage from "./pages/ItemPage";

const Home = lazy(() => import("./pages/Home"));
const TestPage = lazy(() => import("./pages/TestPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "item",
        element: <ItemPage />,
      },
      {
        path: "test",
        element: <TestPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
