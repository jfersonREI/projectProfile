import React from "react";
import CardLogo from "./CardLogo";
import CardMeasure from "./CardMeasure";

const Card = (props) => (
  <div className="flex animate-fadeIn flex-col rounded border border-white bg-white p-6 shadow-sm duration-300 ease-in-out hover:border-rei-blue-5 hover:shadow-lg">
    <div className="mb-6 flex flex-col pt-2">
      <CardLogo clientName={props.clientName} clientLogo={props.clientLogo} />
    </div>
    <div className="mb-6 flex flex-1 flex-col">
      <h1 className="mb-1 font-sans text-base font-bold tracking-tight text-rei-blue-90">
        {props.title}
      </h1>
      <p className="mb-4 font-sans text-xs font-medium uppercase text-rei-blue-50">
        {props.businessUnit}
      </p>
      <p className="line-clamp-2 font-sans text-xs font-light leading-relaxed text-rei-blue-60">
        {props.shortDesc}
      </p>
    </div>
    <div className="flex flex-col border-t border-rei-blue-5 pt-6 text-xs text-rei-gray-50 md:flex-row md:items-center md:justify-between">
      {props.popDate}
      <CardMeasure size={props.size} />
    </div>
  </div>
);

export default Card;
