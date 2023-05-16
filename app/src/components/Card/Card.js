import React from "react";
import CardLogo from "./CardLogo";
import CardMeasure from "./CardMeasure";

const Card = (props) => (
  <div className="flex flex-col rounded border border-rei-blue-5 bg-white px-6 py-8 shadow-sm duration-300 ease-in-out hover:border-rei-blue-10 hover:shadow-lg">
    <div className="mb-6 flex flex-col">
      <CardLogo clientName={props.clientName} clientLogo={props.clientLogo} />
    </div>
    <div className="mb-6 flex flex-col">
      <h1 className="text-md mb-2 font-sans text-sm font-bold text-rei-blue-90">
        {props.title}
      </h1>
      <p className="mb-4 font-sans text-xxs font-medium uppercase tracking-wide text-rei-blue-50">
        {props.businessUnit}
      </p>
      <p className="line-clamp-2 font-sans text-xs leading-relaxed text-rei-gray-50">
        {props.shortDesc}
      </p>
    </div>
    <div className="flex flex-col border-t border-rei-gray-5 pt-6 text-xs text-rei-gray-50 md:flex-row md:items-center md:justify-between">
      {props.popDate}
      <CardMeasure size={props.size} />
    </div>
  </div>
);

export default Card;
