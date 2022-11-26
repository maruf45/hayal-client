import React, { useEffect, useState } from "react";
import axios from "axios";

const CarsBrands = () => {
  const [carsBrands, setCarBrands] = useState([]);
  useEffect(() => {
    const fetchCars = async () => {
      const res = await axios.get("http://localhost:5000/carCategories");
      setCarBrands(res.data);
    };
    fetchCars();
  }, []);
  console.log(carsBrands);
  return <>{carsBrands.length}</>;
};

export default CarsBrands;
