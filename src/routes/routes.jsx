import {
    createBrowserRouter,
  } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../Layout"
import Login from "../pages/Login";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/',
            element:<Home></Home>
        }
      ]
    },
  ]);
  export default router