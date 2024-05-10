import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes/Routers.jsx";
import AuthProvaider from "./Components/Contex/AuthProvaider.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
      <AuthProvaider>
      <RouterProvider router={router}></RouterProvider>
      </AuthProvaider>
   
  </React.StrictMode>
);

// bg-[#febb00] yellow
