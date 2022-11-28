import React, { useEffect, useState } from "react";
import CarCategoriesCart from "./CarCategoriesCart";
import axios from "axios";

const CarsCollection = () => {
  const [carsBrands, setCarBrands] = useState([]);
  useEffect(() => {
    const fetchCars = async () => {
      const res = await axios.get("https://backend-alpha-six.vercel.app/carCategories");
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
