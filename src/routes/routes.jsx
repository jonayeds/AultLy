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
import MyRecommendations from "../pages/MyRecommendations";
import RecommendationsForMe from "../pages/RecommendationsForMe";
import UpdateQuery from "../pages/UpdateQuery";
import ErrorPage from "../pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/myRecommendations",
        element: (
          <PrivateRoutes>
            <MyRecommendations></MyRecommendations>
          </PrivateRoutes>
        ),
      },
      {
        path: "/recommendationsForMe",
        element: (
          <PrivateRoutes>
            <RecommendationsForMe></RecommendationsForMe>
          </PrivateRoutes>
        ),
      },
      {
        path: "/queries",
        element: <Queries></Queries>,
        loader: ()=> fetch(`https://aultly-server.vercel.app/queries`)
      },
      {
        path: "/queryDetails/:id",
        element: <QueryDetails></QueryDetails>,
        loader: ({params})=> fetch(`https://aultly-server.vercel.app/queryDetails/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <UpdateQuery></UpdateQuery>,
        loader: ({params})=> fetch(`https://aultly-server.vercel.app/queryDetails/${params.id}`)
      },
    ],
  },
]);
export default router;
