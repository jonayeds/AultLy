import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../Layout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import MyQueries from "../pages/MyQueries";
import AddQueries from "../pages/AddQueries";
import Queries from "../pages/Queries";
import QueryDetails from "../pages/QueryDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/myQueries",
        element: (
          <PrivateRoutes>
            <MyQueries></MyQueries>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addQueries",
        element: (
          <PrivateRoutes>
            <AddQueries></AddQueries>
          </PrivateRoutes>
        ),
      },
      {
        path: "/queries",
        element: <Queries></Queries>,
        loader: ()=> fetch('http://localhost:5000/queries')
      },
      {
        path: "/queryDetails/:id",
        element: <QueryDetails></QueryDetails>,
        loader: ()=> fetch('http://localhost:5000/queries')
      },
    ],
  },
]);
export default router;
