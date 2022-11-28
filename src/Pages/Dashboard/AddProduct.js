import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader/Loader";
import { toast } from "react-toastify";
import { AuthProvider } from "../../AuthContext/AuthContext";


const AddProduct = () => {
  const {user} = useContext(AuthProvider)
    const {
        data: carCategories = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["carCategories"],
        queryFn: () =>
          fetch('http://localhost:5000/carCategories')
            .then((res) => res.json())
            .then((data) => {
              return data;
            }),
      });
      refetch();
      if(isLoading){
        return <Loader/>
      }
  const productFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const carName = form.carName.value;
    const carBrand = form.carBrand.value;
    const carInfo = form.carInfo.value;
    const carImage = form.image.files[0];
    const uploadDate = form.date.value;
    const oldPrice = form.oldPrice.value;
    const currentPrice = form.currentPrice.value;
    const useTime = form.useTime.value;
    const location = form.location.value;
    const selerName = form.seller.value;
    console.log(carImage)
    const url = `https://api.imgbb.com/1/upload?key=8b6bad17ccb6b5cdfff9af4bad6b37b6`;
    const formData = new FormData();
    formData.append("image", carImage);
    fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            const carImg = data.data.url;
            const carObj = {
                carName,
                selerName,
                carBrand,
                carInfo,
                oldPrice,
                currentPrice,
                useTime,
                location,
                carImg,
                uploadDate,
                email: user.email
              };
            fetch("http://localhost:5000/userdCars", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(carObj),
            })
              .then((res) => res.json())
              .then((data) => {
                toast.success("Successfully add car");
              });
          }
        });
    
    
  };

  
  return (
    <>
      <form onSubmit={productFormSubmit}>
        <h1 className="text-2xl mb-2 text-center">Add a new Car</h1>
        <div className="grid gap-6 mb-6 md:grid-cols-2 container">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Car Name
            </label>
            <input
              type="text"
              id="first_name"
              name="carName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Car Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="carBrand"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Car Brand
            </label>

            <select name='carBrand' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option disabled selected>
                Choose car brand
              </option>
              {carCategories?.map((carCategory, i) => {
                return (
                  <option value={carCategory.BrandName} key={i}>
                    {carCategory.BrandName}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              car Info
            </label>
            <input
              type="text"
              id="company"
              name="carInfo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Car info"
              required
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Location
            </label>
            <input
              type="tel"
              id="location"
              name="location"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Dhaka 3310"
              required
            />
          </div>
          <div>
            <label
              htmlFor="website"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Old Price
            </label>
            <input
              type="number"
              name="oldPrice"
              id="website"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Old Price"
              required
            />
          </div>
          <div>
            <label
              htmlFor="currentPrice"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Current Price
            </label>
            <input
              type="number"
              id="currentPrice"
              name="currentPrice"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Current Price"
              required
            />
          </div>
          <div>
            <label
              htmlFor="website"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Upload Time
            </label>
            <input
              type="date"
              name="date"
              id="website"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Old Price"
              required
            />
          </div>
          <div>
            <label
              htmlFor="years"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Years Of Use
            </label>
            <input
              type="number"
              id="years"
              name="useTime"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Years Of use"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="seller"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Seller Name
          </label>
          <input
            type="text"
            id="seller"
            name="seller"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Seller Name"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="seller"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Seller Email
          </label>
          <input
            type="text"
            id="seller"
            name="seller"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={user.email}
            disabled
            required
          />
        </div>
        <div className="flex items-center justify-center w-full mb-4">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" name="image" type="file" className="" />
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddProduct;
