import React from "react";
import { ReactComponent as Icon } from "./../../assets/icons/icon-measure-size.svg";

const CardMeasure = ({ size }) => (
  <div className="flex items-center text-current">
    <span className="mr-1">
      <Icon className="w-6 fill-current" />
    </span>
    <span className="uppercase">{size}</span>
  </div>
);

export default CardMeasure;
