import React from "react";
import { ReactComponent as Icon } from "./../../assets/icons/icon-measure-size.svg";

const CardMeasure = ({ size }) => (
  <div className="text-current flex items-center pt-1 md:pt-0">
    <span className="mr-1">
      <Icon className="fill-current w-6" />
    </span>
    <span className="uppercase">{size}</span>
  </div>
);

export default CardMeasure;
