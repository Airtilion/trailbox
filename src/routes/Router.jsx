import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Sandwich = lazy(() => import("../pages/Sandwich"));
const Containers = lazy(() => import("../pages/Containers"));
const Cnc = lazy(() => import("../pages/Cnc"));
const Portfolio = lazy(() => import("../pages/Portfolio"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "plyty-sandwich", element: <Sandwich /> },
      { path: "zestawy", element: <Containers /> },
      { path: "cnc", element: <Cnc /> },
      { path: "realizacje", element: <Portfolio /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
};

export default AppRouter;