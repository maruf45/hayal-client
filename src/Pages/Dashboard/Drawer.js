import React from "react";
import { Link, Outlet } from "react-router-dom";

const Drawer = () => {
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
              <Link to={"myOrders"}>My Orders</Link>
            </li>
            <li>
              <Link to={"/addProduct"}>AddProduct</Link>
            </li>
            <li>
              <Link to={"/myProduct"}>My Product</Link>
            </li>
          </ul>
        </div>
      </div>{" "}
    </>
  );
};

export default Drawer;
