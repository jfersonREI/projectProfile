import React from "react";

const CardLogoBar = ({ clientLogo, clientName, businessUnit }) => (
  <div className="flex items-center justify-between bg-[#00578e] pr-4">
    <img src={clientLogo} alt={clientName} className="h-auto w-14 rounded" />
    <div className="text-xxs font-medium uppercase text-white">
      {businessUnit}
    </div>
  </div>
);

export default CardLogoBar;
