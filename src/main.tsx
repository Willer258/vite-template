import React from "react";
import ReactDOM from "react-dom/client";
import "virtual:windi.css";
import "virtual:windi-devtools";
import {RouterProvider } from "react-router-dom";
import { routes } from "./utils/routes";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
