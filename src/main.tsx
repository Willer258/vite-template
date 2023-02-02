import React from "react";
import ReactDOM from "react-dom/client";
import "virtual:windi.css";
import "virtual:windi-devtools";
import { RouterProvider } from "react-router-dom";
import { routes } from "./utils/routes";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
