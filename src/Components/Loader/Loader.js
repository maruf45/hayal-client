import React from "react";

const Loader = () => {
  return (
    <div className="h-screen bg-white">
      <div className="flex justify-center  items-center h-full">
        <img
          className="h-16 w-16 mr-5"
          src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
          alt=""
        />
        <p className="text-xl">Loading....</p>
      </div>
    </div>
  );
};

export default Loader;
