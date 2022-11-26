import React from "react";
import { Link } from "react-router-dom";
import CarsCollection from "../Cars/CarsCollection";
import DeliveryDevider from "../DeliveryDevider/DeliveryDevider";
import './Home.css'
const Home = () => {
  return (
    <>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-white">
                Find Your Next Match
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-400 sm:text-center text-neutral-100">
                Find the right price, dealer and advice.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <Link
                    to="/"
                    className="inline-block rounded-lg bg-gray-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-gray-600 hover:bg-gray-700 hover:ring-gray-600"
                  >
                    New Cars
                    <span className="text-indigo-200" aria-hidden="true">
                    </span>
                  </Link>
                  <Link
                    to="/"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 ring-1 text-white ring-neutral-100 hover:bg-neutral-500 hover:ring-neutral-500"
                  >
                    Used Cars
                    <span className="text-gray-400" aria-hidden="true">
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>           
      <CarsCollection/>
      {/* Deliver divider  */}
      <DeliveryDevider/>

    </>
  );
};

export default Home;
