import React from "react";

import { NavLink } from "react-router-dom";
import './CarBrands.modules.css'

const CarsBrands = ({carsBrands}) => {
  
  return <>
  <div className="carsBrands-container flex justify-center mx-auto w-fit rounded-full">
    <ul className="flex justify-center rounded-full">
        {carsBrands.map(cars => {
            return <React.Fragment key={cars._id}>
            <li className="rounded-full">
                <NavLink to={`/cars/${cars.BrandName}`}>
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
