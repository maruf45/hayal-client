import { createBrowserRouter } from "react-router-dom";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Register from "../Pages/Register/Register";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      {path:'/register', element: <Register/>},
      {path: '/forgot-password', element: <ForgotPassword/>},
      {path: '/reset-password', element: <ResetPassword/>}
    ],
  },
]);
