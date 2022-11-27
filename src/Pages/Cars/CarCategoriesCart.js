import React from "react";
import { Link } from "react-router-dom";

const CarCategoriesCart = ({ carsBrands }) => {
  return (
    <>
      <h1 className="text-5xl text-neutral-500 mt-[120px] mb-[50px] font-bold text-center ">
        Our Cars Categories
      </h1>
      <div className="flex justify-center mt-[40px] flex-wrap  gap-5">
        {carsBrands.map((cars) => {
          return (
            <>
              <div className="card h-[300px] bg-base-100 shadow-xl image-full">
                <figure>
                  <img src={cars.BrandImg} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Cars Brand {cars.BrandName}</h2>
                  <p>There is a popular car Category please CheckOut</p>
                  <div className="card-actions justify-end">
                    <Link
                      className="inline-block rounded-lg bg-gray-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-gray-600 hover:bg-gray-700 hover:ring-gray-600"
                      to={`cars/${cars.BrandName}`}
                    >
                      See Categories
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CarCategoriesCart;
