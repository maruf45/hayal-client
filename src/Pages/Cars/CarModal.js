import React, { useContext } from "react";
import { AuthProvider } from "../../AuthContext/AuthContext";
import { toast } from "react-toastify";
const CarModal = ({ carsInfo, setCarsInfo }) => {
  const { user } = useContext(AuthProvider);

  const carFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const carName = form.carName.value;
    const carImg = carsInfo.carImg;
    const carPrice = form.carPrice.value;
    const mettingLocation = form.location.value;
    const phoneNumber = form.phoneNumber.value;
    const bookObj = {
      name,
      email,
      carName,
      carImg,
      carPrice,
      mettingLocation,
      phoneNumber,
    };
    fetch("http://localhost:5000/userOrders", {
      method: "POST",

      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        toast.success(`${carName} is Booked`);
      }
    })
    .catch(error =>{
      toast.error(error?.message);
    })
    setCarsInfo(null);
  };

  return (
    <>
      <input type="checkbox" id="carInfoModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="carInfoModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-2">Please fill this field</h3>
          <form onSubmit={carFormSubmit}>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                disabled
                defaultValue={user?.displayName}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                disabled
                defaultValue={user?.email}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="Carname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Car Name
              </label>
              <input
                type="text"
                name="carName"
                id="Carname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                disabled
                defaultValue={carsInfo?.carName}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="carPrice"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Car Price
              </label>
              <input
                type="text"
                name="carPrice"
                id="carPrice"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                disabled
                defaultValue={carsInfo?.currentPrice}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Metting Loaction
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Metting Location"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Your Number"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CarModal;
