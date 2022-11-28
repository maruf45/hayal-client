import React from 'react';
import { useQuery } from "@tanstack/react-query";
import Loader from '../../Components/Loader/Loader';

const AllBuyers = () => {
    const {
        data: allBuyer = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["allBuyer"],
        queryFn: () =>
          fetch(`http://localhost:5000/allUser?userType=buyer`,{
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
      if(isLoading){
        return <Loader/>
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
            {allBuyer?.map((allBuyer, index) => {
              return (
                <React.Fragment key={allBuyer?._id}>
                  <tr>
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <td>
                      {allBuyer?.name}
                    </td>
                    <td>{allBuyer?.email}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">Verify</button>
                    </th>
                    <th>
                      <button className="btn btn-ghost btn-xs">Delete</button>
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

export default AllBuyers;