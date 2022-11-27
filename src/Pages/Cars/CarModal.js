import React from "react";

const CarModal = () => {
  return (
    <>
      <input type="checkbox" id="carInfoModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="carInfoModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Please fill this field
          </h3>
          <form>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default CarModal;
