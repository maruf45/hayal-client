import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import './CarBrands.modules.css'

const CarsBrands = () => {
  const [carsBrands, setCarBrands] = useState([]);
  useEffect(() => {
    const fetchCars = async () => {
      const res = await axios.get("http://localhost:5000/carCategories");
      setCarBrands(res.data);
    };
    fetchCars();
  }, []);
  return <>
  <h1 className="text-5xl text-neutral-500 mt-[120px] mb-[50px] font-bold text-center ">Our Cars Categories</h1>
  <div className="carsBrands-container flex justify-center mx-auto w-fit rounded-full">
    <ul className="flex justify-center rounded-full">
        {carsBrands.map(cars => {
            return <React.Fragment key={cars._id}>
            <li className="rounded-full">
                <NavLink to={`/cars/${cars._id}`}>
                    {cars.BrandName}
                </NavLink>
            </li>
            </React.Fragment>
        })}
    </ul>
  </div>
   
  </>;
};

export default CarsBrands;
