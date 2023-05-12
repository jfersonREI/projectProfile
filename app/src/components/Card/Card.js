import React from "react";

const Card = () => (
  <div className="m-6">
    <div className="group flex flex-col border border-rei-gray-5 p-6 bg-white shadow-lg hover:bg-rei-primary-red-30">
      <div className="flex flex-col mb-6">image</div>
      <div className="flex flex-col mb-6">
        <h1 className="font-sans text-md font-bold text-rei-gray-90 group-hover:text-white mb-2">
          title
        </h1>
        <p className="font-sans text-rei-gray-70 text-sm mb-6">12/12/12/1/2</p>
        <p className="font-sans text-rei-gray-70 text-sm line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adip isicing elit. Optio
          ratione consectetur excep turi lorem ipsum dolor sit amet, consectetur
          adip isicing elit. Optio ratione consectetur excep turilorem ipsum
          dolor sit amet, consectetur adip isicing elit. Optio ratione
          consectetur excep turivvv
        </p>
      </div>
      <div className="border-t border-rei-gray-5 pt-6 flex justify-between">
        <span className="text-rei-gray-70 text-sm uppercase">
          Health Systems BU - HRSA
        </span>
        <span className="text-rei-gray-70 text-sm">Medium</span>
      </div>
    </div>
  </div>
);

export default Card;
