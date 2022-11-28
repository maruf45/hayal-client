import React, { useContext } from "react";
import { AuthProvider } from "../../AuthContext/AuthContext";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader/Loader";
import { toast } from "react-toastify";

const MyProduct = () => {
  const { user } = useContext(AuthProvider);
  const {
    data: myProduct = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myProduct"],
    queryFn: () =>
      fetch(`http://localhost:5000/myProduct?email=${user.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          return data;
        }),
  });
  const handelDelete = (email) => {
    fetch(`http://localhost:5000/allUser?userType=buyer&email=${email}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("successfully delete Product");
        }
        refetch();
      });
  };
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
              <th>Delete</th>
              <th>Sold</th>
            </tr>
          </thead>
          <tbody>
            {myProduct?.map((myProduct, index) => {
              return (
                <React.Fragment key={myProduct?._id}>
                  <tr>
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar rounded">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={myProduct?.carImg} alt="Car Img" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{myProduct?.carName}</td>
                    <td>৳{myProduct?.currentPrice}</td>
                    <th>
                      <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => {
                          handelDelete(user.email);
                        }}
                      >
                        Delete
                      </button>
                    </th>
                    <th>
                      <button className="btn btn-ghost btn-xs">
                        Adevertise
                      </button>
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

export default MyProduct;
