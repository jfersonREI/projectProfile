import React from "react";

const CardLogo = ({ clientLogo, clientName }) => (
  <img src={clientLogo} alt={clientName} className="w-14 h-auto rounded" />
);

export default CardLogo;
