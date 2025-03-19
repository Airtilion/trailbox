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

const SuperPlus = lazy(() => import("../pages/sandwich/SuperPlus"));
const HighGloss = lazy(() => import("../pages/sandwich/HighGloss"));
const HighStrengthExtreme = lazy(() => import("../pages/sandwich/HighStrengthExtreme"));
const WaterRain = lazy(() => import("../pages/sandwich/WaterRain"));
const HighImpact = lazy(() => import("../pages/sandwich/HighImpact"));
const Gewebe = lazy(() => import("../pages/sandwich/Gewebe"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/plyty-sandwich", element: <Sandwich />, children: [
        {path: "panel-super-plus", element: <SuperPlus />},
        {path: "panel-high-gloss", element: <HighGloss />},
        {path: "panel-high-strength-extreme", element: <HighStrengthExtreme />},
        {path: "panel-water-rain", element: <WaterRain />},
        {path: "panel-high-impact", element: <HighImpact />},
        {path: "panel-gewebe", element: <Gewebe />}
      ]},
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