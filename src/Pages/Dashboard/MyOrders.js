import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader/Loader";
import { AuthProvider } from "../../AuthContext/AuthContext";
const MyOrders = () => {
  const {user} = useContext(AuthProvider);
  const {
    data: myOrdersData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myOrdersData"],
    queryFn: () =>
      fetch(`http://localhost:5000/userOrders?email=${user?.email}`,{
        headers:{
          authorization: `bearer ${localStorage.getItem('token')}`
        }
      })
        .then((res) => res.json())
        .then((data) => {
          return data;
        }),
  });
  refetch();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Image</th>
              <th>Car Name</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {myOrdersData?.map((orderData, index) => {
              return (
                <React.Fragment key={orderData?._id}>
                  <tr>
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar rounded">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={orderData?.carImg}
                              alt="Car Img"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {orderData?.carName}
                    </td>
                    <td>৳{orderData?.carPrice}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">Pay</button>
                    </th>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyOrders;
