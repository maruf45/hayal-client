import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CarModal from "./CarModal";
import CarsCart from "./CarsCart";

const Cars = () => {
  const cars = useLoaderData();
  const [carsInfo, setCarsInfo] = useState(null);

  return (
    <>
      <CarsCart cars={cars} setCarsInfo={setCarsInfo} />;
      {carsInfo && <CarModal car={cars} carsInfo={carsInfo} setCarsInfo={setCarsInfo} />}
    </>
  );
};

export default Cars;
