import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import StartLearning from "../pages/startLearning/StartLearning";
import Tutorials from "../pages/tutorials/Tutorials";
import AboutUs from "../pages/aboutUs/AboutUs";
import Profile from "../pages/profile/Profile";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "../privateRoute/PrivateRoute";
import LessonDetails from "../pages/lessonDetails/LessonDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/startLearning",
        element: <StartLearning></StartLearning>,
        loader: () => fetch("../lesson.json"),
      },
      { path: "/tutorials", element: <Tutorials></Tutorials> },
      { path: "/aboutUs", element: <AboutUs></AboutUs> },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      { path: "/signin", element: <SignIn></SignIn> },
      { path: "/signup", element: <SignUp></SignUp> },
      {
        path: "/lessonDetails/:id",
        element: <LessonDetails></LessonDetails>,
        loader: () => fetch("../products.json"),
      },
    ],
  },
]);

export default router;
