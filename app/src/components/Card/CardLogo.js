import React from "react";

const CardLogo = ({ clientLogo, clientName }) => (
  <img src={clientLogo} alt={clientName} className="h-auto w-14 rounded" />
);

export default CardLogo;
