import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthProvider } from "../../AuthContext/AuthContext";
import useAdmin from "../../Hooks/useAdmin";
import useSeller from "../../Hooks/useSeller";

const Drawer = () => {
  const { user } = useContext(AuthProvider);
  const [isSeller] = useSeller(user?.email);
  const [isAdmin] = useAdmin(user?.email);
  console.log("drawer", isAdmin);
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
            {isSeller ? (
              <>
                <li>
                  <Link to={"/dashboard/addProduct"}>AddProduct</Link>
                </li>
                <li>
                  <Link to={"/dashboard/myProduct"}>My Product</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to={"/dashboard/myOrders"}>My Orders</Link>
              </li>
            )}
            {isAdmin ? (
              <>
                <li>
                  <Link to={"/dashboard/allBuyer"}>All Buyer</Link>
                </li>
                <li>
                  <Link to={"/dashboard/allSeller"}>All Seller</Link>
                </li>

                <li>
                  <Link to={"/dashboard/reported"}>Reported</Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>{" "}
    </>
  );
};

export default Drawer;
