import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Components/404Page/NotFound";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Cars from "../Pages/Cars/Cars";
import AddProduct from "../Pages/Dashboard/AddProduct";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders";
import MyProduct from "../Pages/Dashboard/MyProduct";
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
      { path: "/register", element: <Register /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/reset-password", element: <ResetPassword /> },
      {
        path: "/cars/:brandName",
        element: (
          <PrivateRoute>
            <Cars />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/usedCars/${params.brandName}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard/myOrders", element: <MyOrders /> },
      {
        path: "/dashboard/myProduct",
        element: <MyProduct />
      },
      { path: "/dashboard/addProduct", element: <AddProduct /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
