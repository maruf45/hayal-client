import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CarsBrands from './CarsBrands';

const Cars = () => {
    const cars = useLoaderData();
    return (
        <>
          {/* <CarsBrands/>   */}
            {cars.length}
        </>
    );
};

export default Cars;