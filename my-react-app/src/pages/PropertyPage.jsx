import { useState } from "react";
import { useLocation } from "react-router-dom";

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

  const location = useLocation();
  const criteria = location.state || {};

  const allProperties = propertiesData.properties;

  /*Filtering Logic (TODO: n/a) */
  const filteredProperties = allProperties.filter((item) => {
    // 1. AREA/POSTCODE
    const searchArea = (criteria.area || "").toLowerCase();
    const matchesArea = item.location.toLowerCase().includes(searchArea);

    // 2. PROPERTY TYPE
    const matchesType = criteria.propertyType === "Any" || item.type === criteria.propertyType;

    // 3. PRICE RANGE
    const min = parseInt(criteria.minPrice) || 0;
    const max = parseInt(criteria.maxPrice) || Infinity;
    const matchesPrice = item.price >= min && item.price <= max;

    // 4. BEDROOMS
    let matchesBedrooms = true;
    if (criteria.bedrooms && criteria.bedrooms !== "Any") {
      if (criteria.bedrooms === "Studio") {
        matchesBedrooms = item.bedrooms === 0;
      } else if (criteria.bedrooms === "5+") {
        matchesBedrooms = item.bedrooms >= 5;
      } else {
        matchesBedrooms = item.bedrooms === parseInt(criteria.bedrooms);
      }
    } // Ensure this brace is closed!

    // 5. DATE ADDED FILTER
    let matchesDate = true;
    if (criteria.addedToSite && criteria.addedToSite !== "Anytime") {
      // Construct date: e.g., "May 2, 2022"
      const dateString = `${item.added.month} ${item.added.day}, ${item.added.year}`;
      const propertyDate = new Date(dateString);
      const currentDate = new Date();
      
      const diffInTime = currentDate.getTime() - propertyDate.getTime();
      const diffInDays = diffInTime / (1000 * 3600 * 24);

      if (criteria.addedToSite === "Last 24 hours") {
        matchesDate = diffInDays <= 1;
      } else if (criteria.addedToSite === "Last 3 days") {
        matchesDate = diffInDays <= 3;
      } else if (criteria.addedToSite === "Last 7 days") {
        matchesDate = diffInDays <= 7;
      } else if (criteria.addedToSite === "Last 28 days") {
        matchesDate = diffInDays <= 28;
      }
    }

    // Now all variables (matchesArea, matchesType, matchesPrice, matchesBedrooms, matchesDate) are accessible here
    return matchesArea && matchesType && matchesPrice && matchesBedrooms && matchesDate;
    
  });

  // get the amount of properties
  const totalResults = filteredProperties.length;

  // Helper function to render the list (shared for mobile/desktop)
  const renderPropertyList = () => (
    <>
      {filteredProperties.length > 0 ? (
        filteredProperties.map((item) => (
          <PropertyPanel key={item.id} property={item} />
        ))
      ) : (
        <div className="no-results">
          <h3>No properties found</h3>
          <p>Try adjusting your filters to find more results.</p>
        </div>
      )}
    </>
  );



  return (
    <>
      <SearchResults amount={filteredProperties.length} />


      {/* Mobile selector */}
      <MobileListSelector
        active={activeTab}
        onChange={setActiveTab}
      />

 

      {/* Desktop layout */}
        <div className="panels-container desktop-layout">
          <div className="property-container">
            {renderPropertyList()}
          </div>

          <FavouritePanel />
        </div>

      
     
      {/* Mobile layout */}
      <div className="mobile-layout">
        {activeTab === "properties" && (
          <div className="property-container">
           {renderPropertyList()}
          </div>
        )}

        {activeTab === "favourites" && <FavouritePanel />}
      </div>
    </>
  );
}

export default PropertyPage;
