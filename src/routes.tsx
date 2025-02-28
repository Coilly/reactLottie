import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));

const routes = [{ path: "/app", element: <Home /> }];

export default routes;
