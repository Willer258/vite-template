import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import HomePage from "../pages/Apps/HomePage";
import LoginPage from "../pages/Auth/LoginPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "accueil/*",
    element: <AppLayout />,
  },
]);
