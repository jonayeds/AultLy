import {
    createBrowserRouter,
  } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../Layout"
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
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
            path: '/signup',
            element:<SignUp></SignUp>
        }
      ]
    },
  ]);
  export default router