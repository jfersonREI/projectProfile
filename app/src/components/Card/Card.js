import React from "react";
import CardLogo from "./CardLogo";
import CardMeasure from "./CardMeasure";

const Card = (props) => (
  <div className="flex animate-fadeIn flex-col rounded border border-white bg-white p-6 shadow-sm duration-300 ease-in-out hover:border-rei-blue-5 hover:shadow-lg">
    <div className="mb-6 flex flex-col pt-2">
      <CardLogo clientName={props.clientName} clientLogo={props.clientLogo} />
    </div>
    <div className="mb-6 flex flex-1 flex-col">
      <p className="mb-1 font-sans text-base font-semibold tracking-tight text-black">
        {props.title}
      </p>
      <p className="mb-1 font-sans text-xs font-medium uppercase text-rei-gray-90">
        {props.businessUnit}
      </p>
      <hr
        aria-hidden="true"
        class="mb-6 mt-2 h-0.5 w-14 border-0 bg-rei-blue-5"
      />
      <p className="line-clamp-2 font-sans text-xs leading-relaxed text-rei-gray-70">
        {props.shortDesc}
      </p>{" "}
      <div class="mt-6 flex -space-x-2 overflow-hidden">
        <img
          class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
    </div>
    <div className="flex flex-col border-t border-rei-blue-5 pt-6 text-xs text-rei-gray-70 md:flex-row md:items-center md:justify-between">
      {props.popDate}
      <CardMeasure size={props.size} />
    </div>
  </div>
);

export default Card;
