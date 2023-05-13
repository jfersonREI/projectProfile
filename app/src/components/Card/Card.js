import React from "react";
import ClientImage from "./../../assets/images/client-fema.png";
import CardMeasure from "./CardMeasure";

const Card = (props) => (
  <div className="flex flex-col border border-white py-8 px-6 bg-white shadow-sm rounded ease-in-out duration-300 hover:border-rei-blue-5 hover:shadow-lg">
    <div className="flex flex-col mb-6">
      <img
        src={ClientImage}
        alt={props.clientName}
        className="w-14 h-auto rounded"
      />
    </div>
    <div className="flex flex-col mb-6">
      <h1 className="font-sans text-md font-semibold text-rei-gray-90 mb-1">
        {props.title}
      </h1>
      <p className="font-sans text-rei-gray-70 text-sm mb-4 uppercase tracking-wide">
        {props.popDate}
      </p>
      <p className="font-sans text-rei-gray-70 text-sm leading-relaxed line-clamp-2">
        {props.shortDesc}
      </p>
    </div>
    <div className="flex flex-col md:flex-row md:justify-between md:items-center border-t border-rei-gray-5 pt-6 text-rei-gray-30 text-sm">
      <span className="uppercase">{props.businessUnit}</span>
      <CardMeasure size={props.size} />
    </div>
  </div>
);

export default Card;
