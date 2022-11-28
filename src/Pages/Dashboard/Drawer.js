import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthProvider } from "../../AuthContext/AuthContext";
import useSeller from "../../Hooks/useSeller";

const Drawer = () => {
  const { user } = useContext(AuthProvider);
  const [isSeller] = useSeller(user.email);
  return (
    <>
      <div className="drawer drawer-mobile ">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to={"/dashboard/myOrders"}>My Orders</Link>
            </li>
            {isSeller && (
              <>
                <li>
                  <Link to={"/dashboard/addProduct"}>AddProduct</Link>
                </li>
                <li>
                  <Link to={"/dashboard/myProduct"}>My Product</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>{" "}
    </>
  );
};

export default Drawer;
