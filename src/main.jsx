import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import ErrorBoundary from "./ErrorBoundary.jsx";
import store from "./lib/redux/store.js";
import "./style/index.css";
import CmsRoute from "./routes/CmsRoute.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ErrorBoundary> */}
    <Provider store={store}>
      <CmsRoute />
    </Provider>
    {/* </ErrorBoundary> */}
  </React.StrictMode>
);
