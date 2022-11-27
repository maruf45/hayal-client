import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CarModal from "./CarModal";
import CarsCart from "./CarsCart";

const Cars = () => {
  const cars = useLoaderData();
  const [carsInfo, setCarsInfo] = useState({});

  return (
    <>
      <CarsCart cars={cars} setCarsInfo={setCarsInfo} />;
      <CarModal car={cars} carsInfo={carsInfo} />
    </>
  );
};

export default Cars;
