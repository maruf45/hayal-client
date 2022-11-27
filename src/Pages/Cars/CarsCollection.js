import React, { useEffect, useState } from "react";
import CarCategoriesCart from "./CarCategoriesCart";
import CarsBrands from "./CarsBrands";
import axios from "axios";

const CarsCollection = () => {
  const [carsBrands, setCarBrands] = useState([]);
  useEffect(() => {
    const fetchCars = async () => {
      const res = await axios.get("http://localhost:5000/carCategories");
      setCarBrands(res.data);
    };
    fetchCars();
  }, []);
  return (
    <>
      <CarCategoriesCart carsBrands={carsBrands} />
    </>
  );
};

export default CarsCollection;
