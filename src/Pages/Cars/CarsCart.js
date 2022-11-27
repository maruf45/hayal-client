import React from "react";
import { Link } from "react-router-dom";

const CarsCart = ({ cars,setCarsInfo }) => {
  return (
    <>
      <div className=" grid container mx-auto lg:grid-cols-2 grid-rows-2 md:grid-cols-1 grid-cols-1 gap-5 content-center justify-center h-max my-20">
        {cars.map((car) => {
          return (
            <React.Fragment key={car._id}>
              <div className="overflow-hidden  justify-between align-center">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                  <div className="md:flex">
                    <div className="md:shrink-0">
                      <img
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        src={car.carImg}
                        alt=""
                      />
                    </div>
                    <div className="p-8">
                      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        Seller: {car.selerName}
                      </div>
                      <Link
                        to="#"
                        className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                      >
                        {car.carName}
                      </Link>
                      <div className="flex justify-between">
                        <p className="mt-2 text-slate-500">
                          {" "}
                          <span className="font-semibold">Price: </span>
                          {car.currentPrice}
                        </p>
                        <del className="mt-2 text-slate-500">
                          {" "}
                          <span className="font-semibold">Price: </span>
                          {car.oldPrice}
                        </del>
                      </div>
                      <p className="mt-2 text-slate-500">
                        {" "}
                        <span className="font-semibold">Car Info: </span>
                        {car.carInfo}
                      </p>
                      <p className="mt-2 text-slate-500">
                        {" "}
                        <span className="font-semibold">Years of Use: </span>
                        {car.useTime} Years
                      </p>
                      <div className="flex justify-between">
                        <p className="mt-2 text-slate-500">
                          {" "}
                          <span className="font-semibold">Upload Time: </span>
                          {car.uploadTime}
                        </p>
                        <p className="mt-2 text-slate-500">
                          {" "}
                          <span className="font-semibold">Location: </span>
                          {car.location}
                        </p>
                      </div>
                      <label
                        htmlFor="carInfoModal"
                        onClick={() => {setCarsInfo(car)}}
                        className="mt-2 inline-block rounded-lg bg-gray-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-gray-600 hover:bg-gray-700 hover:ring-gray-600"
                      >
                        Book Now
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default CarsCart;
