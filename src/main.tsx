import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Upload from "./components/Upload.tsx";
import Result from "./components/Result.tsx";
import "./index.css";
import TryNow from "./components/TryNow.tsx";
import Ocr from "./components/Ocr.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    id: "home",
    element: <App />,
    children: [
      { path: "/", id: "try_now", element: <TryNow /> },
      { path: "upload", id: "upload", element: <Upload /> },
      { path: "result", id: "result", element: <Result /> },
      { path: "ocr", id: "ocr", element: <Ocr /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
