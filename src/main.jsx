import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes/Routers.jsx";
import AuthProvaider from "./Components/Contex/AuthProvaider.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvaider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvaider>
    </HelmetProvider>
  </React.StrictMode>
);

// bg-[#febb00] yellow
