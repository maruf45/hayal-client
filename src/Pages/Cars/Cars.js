import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CarModal from "./CarModal";

const Cars = () => {
  const cars = useLoaderData();

  return (
    <div className=" grid container mx-auto lg:grid-cols-2 grid-rows-2 md:grid-cols-1 grid-cols-1 gap-5 content-center justify-center h-max my-20">
      {cars.map((car) => {
        return (
          <>
            <div className="overflow-hidden  justify-between align-center">
              <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                  <div class="md:shrink-0">
                    <img
                      class="h-48 w-full object-cover md:h-full md:w-48"
                      src={car.carImg}
                      alt=""
                    />
                  </div>
                  <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Seller: {car.selerName}
                    </div>
                    <Link
                      to="#"
                      class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                    >
                      {car.carName}
                    </Link>
                    <div className="flex justify-between">
                      <p class="mt-2 text-slate-500">
                        {" "}
                        <span className="font-semibold">Price: </span>
                        {car.currentPrice}
                      </p>
                      <del class="mt-2 text-slate-500">
                        {" "}
                        <span className="font-semibold">Price: </span>
                        {car.oldPrice}
                      </del>
                    </div>
                    <p class="mt-2 text-slate-500"> <span className="font-semibold">Car Info: </span>{car.carInfo}</p>
                    <p class="mt-2 text-slate-500"> <span className="font-semibold">Years of Use: </span>{car.useTime} Years</p>
                    <div className="flex justify-between">
                      <p class="mt-2 text-slate-500">
                        {" "}
                        <span className="font-semibold">Upload Time: </span>
                        {car.uploadTime}
                      </p>
                      <p class="mt-2 text-slate-500">
                        {" "}
                        <span className="font-semibold">Location: </span>
                        {car.location}
                      </p>
                    </div>
                    <label htmlFor="carInfoModal" className="mt-2 inline-block rounded-lg bg-gray-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-gray-600 hover:bg-gray-700 hover:ring-gray-600">Book Now</label>
                  </div> 
                </div>
              </div>
            </div>
          </>
        );
      })}
      <CarModal/>
    </div>
  );
};

export default Cars;
