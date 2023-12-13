import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Layout from "../Portfolio/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Layout></Layout>,
      },
    ],
  },
]);
