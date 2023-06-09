// create a simple react page with a list of regular a href links

import * as React from "react";
import Navigation from "./components/Navigation";
import ProductCarousel from "./components/ProductCarousel";
import Card from "./../../components/Card/Card";
import CardGrid from "../../components/CardGrid/CardGrid";
import ClientLogo from "../../assets/images/client-fema.png";
import ClientLogoNasa from "../../assets/images/client-nasa.png";

export default function Ecommerce() {
  return (
    <>
      <Navigation />
      <div className="bg-rei-lt-gray px-4 py-12 sm:px-6 lg:px-8">
        <CardGrid>
          <Card
            title="FEMA EC & EMMIE Sustainment"
            clientName="FEMA"
            clientLogo={ClientLogo}
            popDate="12/12/2023 - 12/12/2029"
            shortDesc="Emergency Management Mission Integrated Environment (EMMIE) and Emergency Coordination (EC) provides application development, sustainment and integration"
            businessUnit="OGST BU"
            account="FEMA"
            size="L"
          />
          <Card
            title="NASA SBIR"
            clientName="NASA"
            clientLogo={ClientLogoNasa}
            popDate="12/12/2023 - 12/12/2029"
            shortDesc="SBIR/STTR program support"
            businessUnit="OGST BU"
            account="NASA"
            size="S"
          />
          <Card
            title="FEMADex Pilot"
            clientName="FEMA"
            clientLogo={ClientLogo}
            popDate="12/12/2023 - 12/12/2029"
            shortDesc="The FEMA Data Exchange (FEMADex) is a modern, cloud-based, data analytics solution to replace the agency’s legacy Enterprise Data Warehouse (EDW)."
            businessUnit="OGST BU"
            account="FEMA"
            size="M"
          />
          <Card
            title="Project Title"
            clientName="FEMA"
            clientLogo={ClientLogo}
            popDate="12/12/2023 - 12/12/2029"
            shortDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            businessUnit="Health Systems BU"
            account="HRSA"
            size="M"
          />
          <Card
            title="Project Title"
            clientName="FEMA"
            clientLogo={ClientLogo}
            popDate="12/12/2023 - 12/12/2029"
            shortDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            businessUnit="Health Systems BU"
            account="HRSA"
            size="M"
          />
          <Card
            title="Project Title"
            clientName="FEMA"
            clientLogo={ClientLogo}
            popDate="12/12/2023 - 12/12/2029"
            shortDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            businessUnit="Health Systems BU"
            account="HRSA"
            size="M"
          />
        </CardGrid>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <ProductCarousel
          title="Latest in TVs"
          filters={[{ field: "parent_category", values: ["TVs"] }]}
        />
        <ProductCarousel
          title="Popular Monitors"
          filters={[{ field: "parent_category", values: ["Monitors"] }]}
        />
      </div>
    </>
  );
}
