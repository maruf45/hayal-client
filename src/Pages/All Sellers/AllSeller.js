import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader/Loader";
import { toast } from "react-toastify";

const AllSeller = () => {
  const {
    data: allSeller = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allSeller"],
    queryFn: () =>
      fetch(`http://localhost:5000/allUser?userType=seller`, {
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
          toast.success("successfully delete user");
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
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allSeller?.map((allSeller, index) => {
              return (
                <React.Fragment key={allSeller?._id}>
                  <tr>
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <td>{allSeller?.name}</td>
                    <td>{allSeller?.email}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">Verify</button>
                    </th>
                    <th>
                      <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => handelDelete(allSeller?.email)}
                      >
                        Delete
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

export default AllSeller;
