import { useState } from "react";
import SearchResults from "../components/SearchResults";
import PropertyPanel from "../components/PropertyPanel";
import FavouritePanel from "../components/FavouritePanel";
import MobileListSelector from "../components/MobileListSelector";
import propertiesData from "../../public/properties.json";


import "../components/SearchResults.css";
import "../components/PropertyPanel.css";
import "../components/FavouritePanel.css";
import "../pages/PropertyPage.css";

function PropertyPage() {
  const [activeTab, setActiveTab] = useState("properties");
  const allProperties = propertiesData.properties;

  return (
    <>
      <SearchResults />

      {/* Mobile selector */}
      <MobileListSelector
        active={activeTab}
        onChange={setActiveTab}
      />

      {/* Desktop layout */}
      <div className="panels-container desktop-layout">
        <div className="property-container">
          {allProperties.map((item) => (
            <PropertyPanel key={item.id} property={item} />
          ))}
        </div>

        <FavouritePanel />
      </div>

      {/* Mobile layout */}
      <div className="mobile-layout">
        {activeTab === "properties" && (
          <div className="property-container">
            {allProperties.map((item) => (
              <PropertyPanel key={item.id} property={item} />
            ))}
          </div>
        )}

        {activeTab === "favourites" && <FavouritePanel />}
      </div>
    </>
  );
}

export default PropertyPage;
