import { useRoutes } from "react-router-dom";
import { HomePage } from "../pages/home";
import { AddStorePage } from "../pages/add-store";

export const AppRoutes = () => {
  const element = useRoutes(ROUTES);

  if (!element) return null;

  return element;
};

const ROUTES = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/add-store",
    element: <AddStorePage />,
  },
];
