import React from "react";
import ClientImage from "./../../assets/images/client-fema.png";

const Card = (props) => (
  <div className="flex flex-col border border-rei-gray-5 py-8 px-6 bg-white shadow-sm rounded ease-in-out duration-300 hover:shadow-lg">
    <div className="flex flex-col mb-6">
      <img
        src={ClientImage}
        alt={props.clientName}
        className="w-14 h-auto rounded"
      />
    </div>
    <div className="flex flex-col mb-6">
      <h1 className="font-sans text-md font-bold text-rei-gray-90 mb-1">
        {props.title}
      </h1>
      <h2 className="font-sans text-rei-blue-30 text-sm mb-4 uppercase tracking-wide">
        {props.businessUnit}
      </h2>
      <p className="font-sans text-rei-gray-70 text-sm leading-relaxed line-clamp-2">
        {props.shortDesc}
      </p>
    </div>
    <div className="border-t border-rei-gray-5 pt-6 flex justify-between">
      <span className="text-rei-gray-30 text-sm uppercase">
        {props.popDate}
      </span>
      <span className="text-rei-gray-30 text-sm">{props.size}</span>
    </div>
  </div>
);

export default Card;
